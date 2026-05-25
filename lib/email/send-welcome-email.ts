import { buildWelcomeEmail } from "@/lib/email/templates/welcome-email";

type WelcomeLanguage = "es" | "en" | "pt";

type SendWelcomeEmailInput = {
  to: string;
  language: WelcomeLanguage;
  name?: string | null;
  siteUrl: string;
};

function requireEnv(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

export async function sendWelcomeEmail({
  to,
  language,
  name,
  siteUrl
}: SendWelcomeEmailInput) {
  const resendApiKey = requireEnv(process.env.RESEND_API_KEY, "RESEND_API_KEY");
  const email = buildWelcomeEmail({ language, name, siteUrl });

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Planeta Argentina <hola@planetargentina.com>",
      to,
      subject: email.subject,
      html: email.html,
      text: email.text
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend error (${response.status}): ${errorText}`);
  }

  const payload = (await response.json()) as { id?: string };

  return {
    id: payload.id ?? null
  };
}
