import { NextRequest, NextResponse } from "next/server";
import { sendWelcomeEmail } from "@/lib/email/send-welcome-email";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

type WelcomeLanguage = "es" | "en" | "pt";

type WelcomeEmailRow = {
  id: string;
  user_id: string;
  email: string;
  language: string;
  template_key: string;
  status: string;
  send_after: string;
  sent_at: string | null;
  attempts: number;
  last_error: string | null;
  provider_message_id: string | null;
  created_at: string;
  updated_at: string;
};

function getExpectedCronToken() {
  return process.env.CRON_SECRET;
}

function normalizeLanguage(value: unknown): WelcomeLanguage {
  return value === "en" || value === "pt" ? value : "es";
}

function getSiteUrl() {
  const siteUrl = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    throw new Error("Missing SITE_URL or NEXT_PUBLIC_SITE_URL");
  }

  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
}

export async function GET(request: NextRequest) {
  const expectedToken = getExpectedCronToken();
  const authorization = request.headers.get("authorization");

  if (!expectedToken || authorization !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  const nowIso = new Date().toISOString();

  const { data: pendingRows, error: fetchError } = await supabase
    .from("welcome_email_queue")
    .select("*")
    .eq("status", "pending")
    .lte("send_after", nowIso)
    .order("send_after", { ascending: true })
    .limit(20);

  if (fetchError) {
    console.error("WELCOME CRON FETCH ERROR:", fetchError);
    return NextResponse.json({ error: "Failed to fetch pending welcome emails" }, { status: 500 });
  }

  const rows = (pendingRows ?? []) as WelcomeEmailRow[];
  console.log("WELCOME CRON FOUND:", rows.length);

  const results: Array<{ id: string; status: string; email: string }> = [];

  for (const row of rows) {
    const claimTimestamp = new Date().toISOString();
    const { data: claimedRow, error: claimError } = await supabase
      .from("welcome_email_queue")
      .update({
        status: "processing",
        attempts: row.attempts + 1,
        updated_at: claimTimestamp
      })
      .eq("id", row.id)
      .eq("status", "pending")
      .select("*")
      .maybeSingle();

    if (claimError) {
      console.error("WELCOME CRON CLAIM ERROR:", row.id, claimError);
      results.push({ id: row.id, status: "claim_error", email: row.email });
      continue;
    }

    if (!claimedRow) {
      console.log("WELCOME CRON SKIPPED CLAIM:", row.id);
      results.push({ id: row.id, status: "skipped", email: row.email });
      continue;
    }

    try {
      const { data: authUserData, error: authUserError } = await supabase.auth.admin.getUserById(
        row.user_id
      );

      if (authUserError) {
        throw authUserError;
      }

      const name =
        typeof authUserData.user?.user_metadata?.name === "string"
          ? authUserData.user.user_metadata.name
          : null;

      const result = await sendWelcomeEmail({
        to: row.email,
        language: normalizeLanguage(row.language),
        name,
        siteUrl: getSiteUrl()
      });

      const sentAt = new Date().toISOString();

      const { error: updateSentError } = await supabase
        .from("welcome_email_queue")
        .update({
          status: "sent",
          sent_at: sentAt,
          provider_message_id: result.id,
          last_error: null,
          updated_at: sentAt
        })
        .eq("id", row.id);

      if (updateSentError) {
        throw updateSentError;
      }

      console.log("WELCOME CRON SENT:", row.email, result.id);
      results.push({ id: row.id, status: "sent", email: row.email });
    } catch (error) {
      const failureTimestamp = new Date().toISOString();
      const nextAttemptAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();
      const message = error instanceof Error ? error.message : "Unknown welcome email error";

      await supabase
        .from("welcome_email_queue")
        .update({
          status: "pending",
          send_after: nextAttemptAt,
          last_error: message,
          updated_at: failureTimestamp
        })
        .eq("id", row.id);

      console.error("WELCOME CRON SEND ERROR:", row.email, message);
      results.push({ id: row.id, status: "error", email: row.email });
    }
  }

  return NextResponse.json({
    ok: true,
    processed: results.length,
    results
  });
}
