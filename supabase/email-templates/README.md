# Supabase email template

## Subject

Supabase configures the subject separately from the HTML body.

Recommended subject for Supabase Dashboard:

- `Planeta Argentina — confirma tu registro`

## Template file

Use [confirmation.html](/Users/nicolasgriffiths/Documents/New%20project%202/supabase/email-templates/confirmation.html) as the content for the **Confirm sign up** template in Supabase.

## Where to paste it

In Supabase Dashboard:

1. `Authentication`
2. `Email Templates`
3. `Confirm signup`
4. Subject: `Planeta Argentina — confirma tu registro`
5. Content: paste the full HTML from `confirmation.html`

## Notes

- This template uses `{{ .ConfirmationURL }}` so the user can confirm their account and then continue to `Mi recorrido`.
- The current signup flow stores the active website language in `user_metadata.language`.
- The HTML reads `{{ .Data.language }}` for both body content and preheader, and falls back to Spanish if that value is missing or empty.
- The current signup flow in the app already sends user metadata through Supabase from [app/entrar/page.tsx](/Users/nicolasgriffiths/Documents/New%20project%202/app/entrar/page.tsx).
- The HTML must still be copied manually into Supabase Dashboard after each change.
