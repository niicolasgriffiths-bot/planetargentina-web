import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") ?? "/mi-recorrido";

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      if (next === "/mi-recorrido") {
        const user = data.user ?? data.session?.user ?? null;

        if (user?.id && user.email) {
          try {
            const admin = createAdminClient();
            const sendAfter = new Date(Date.now() + 5 * 60 * 1000).toISOString();
            const language =
              user.user_metadata?.language === "en" || user.user_metadata?.language === "pt"
                ? user.user_metadata.language
                : "es";

            const { error: queueError } = await admin.from("welcome_email_queue").upsert(
              {
                user_id: user.id,
                email: user.email,
                language,
                template_key: "welcome_after_confirm",
                status: "pending",
                send_after: sendAfter,
                updated_at: new Date().toISOString()
              },
              {
                onConflict: "user_id,template_key",
                ignoreDuplicates: true
              }
            );

            if (queueError) {
              console.error("WELCOME QUEUE UPSERT ERROR:", queueError);
            } else {
              console.log("WELCOME QUEUE ENQUEUED:", user.email, language, sendAfter);
            }
          } catch (queueSetupError) {
            console.error("WELCOME QUEUE SETUP ERROR:", queueSetupError);
          }
        }
      }

      return NextResponse.redirect(new URL(next, requestUrl.origin));
    }
  }

  return NextResponse.redirect(new URL("/entrar", requestUrl.origin));
}
