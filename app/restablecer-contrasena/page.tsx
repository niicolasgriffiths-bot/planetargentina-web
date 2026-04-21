"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { FadeIn } from "@/components/fade-in";
import { useLanguage } from "@/components/language-provider";
import { createClient } from "@/lib/supabase/client";

type ResetStatus = "idle" | "saving" | "success" | "error";

export default function ResetPasswordPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<ResetStatus>("idle");
  const [message, setMessage] = useState("");
  const [ready, setReady] = useState(false);
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getSession().then(({ data }: { data: { session: Session | null } }) => {
      setHasSession(Boolean(data.session));
      setReady(true);
    });

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
      setHasSession(Boolean(session));
      setReady(true);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setStatus("error");
      setMessage(
        language === "es"
          ? "La contraseña y la confirmación tienen que coincidir."
          : "Password and confirmation need to match."
      );
      return;
    }

    setStatus("saving");
    setMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setStatus("error");
      setMessage(error.message);
      return;
    }

    setStatus("success");
    setTimeout(() => {
      router.push("/mi-recorrido");
      router.refresh();
    }, 900);
  }

  return (
    <main className="pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <p className="mb-5 text-[11px] uppercase tracking-editorial text-stone">
          {language === "es" ? "Restablecer contraseña" : "Reset password"}
        </p>
        <h1 className="max-w-4xl font-serif text-4xl leading-[0.94] md:text-6xl">
          {language === "es"
            ? "Una nueva contraseña te devuelve al recorrido."
            : "A new password brings you back to the journey."}
        </h1>
      </div>

      <section className="mx-auto mt-24 max-w-4xl px-6 md:mt-28 md:px-10">
        <FadeIn className="border-t border-black/8 pt-12">
          {!ready ? (
            <p className="max-w-xl text-sm leading-8 text-black/56 md:text-base md:leading-9">
              {language === "es"
                ? "Estamos preparando esta entrada."
                : "We are preparing this entry."}
            </p>
          ) : !hasSession ? (
            <>
              <p className="max-w-2xl font-serif text-3xl leading-tight text-black/92 md:text-5xl">
                {language === "es"
                  ? "Ese enlace ya no está activo."
                  : "That link is no longer active."}
              </p>
              <p className="mt-8 max-w-xl text-sm leading-8 text-black/62 md:text-base md:leading-9">
                {language === "es"
                  ? "Vuelve a entrar y pide un nuevo enlace para restablecer tu contraseña."
                  : "Go back to enter and request a new link to reset your password."}
              </p>
              <div className="mt-14 text-[11px] uppercase tracking-editorial">
                <Link
                  href="/entrar"
                  className="inline-flex text-black/48 transition-opacity duration-500 hover:opacity-72"
                >
                  {language === "es" ? "Volver a entrar" : "Back to enter"}
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="max-w-2xl text-sm leading-8 text-black/62 md:text-base md:leading-9">
                {language === "es"
                  ? "Elige una nueva contraseña para seguir dentro del proyecto sin volver a empezar."
                  : "Choose a new password to remain inside the project without starting over."}
              </p>

              <form className="mt-12 grid gap-6 md:max-w-xl" onSubmit={handleSubmit}>
                <label className="grid gap-3">
                  <span className="text-[11px] uppercase tracking-editorial text-stone">
                    {language === "es" ? "Nueva contraseña" : "New password"}
                  </span>
                  <input
                    type="password"
                    required
                    autoComplete="new-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="rounded-[1.4rem] border border-black/10 bg-transparent px-5 py-4 text-sm outline-none transition-colors duration-300 placeholder:text-black/24 focus:border-black/20 md:text-base"
                  />
                </label>

                <label className="grid gap-3">
                  <span className="text-[11px] uppercase tracking-editorial text-stone">
                    {language === "es" ? "Confirmación de contraseña" : "Confirm password"}
                  </span>
                  <input
                    type="password"
                    required
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="rounded-[1.4rem] border border-black/10 bg-transparent px-5 py-4 text-sm outline-none transition-colors duration-300 placeholder:text-black/24 focus:border-black/20 md:text-base"
                  />
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "saving"}
                    className="inline-flex text-[11px] uppercase tracking-editorial text-black/82 transition-opacity duration-500 hover:opacity-72 disabled:cursor-wait disabled:opacity-40"
                  >
                    {status === "saving"
                      ? language === "es"
                        ? "Guardando..."
                        : "Saving..."
                      : language === "es"
                        ? "Guardar contraseña"
                        : "Save password"}
                  </button>
                </div>
              </form>

              <div className="mt-10 max-w-xl text-sm leading-8 text-black/56 md:text-base md:leading-9">
                {status === "error" ? (
                  <p>{message}</p>
                ) : status === "success" ? (
                  <p>
                    {language === "es"
                      ? "La contraseña ya quedó actualizada. Tu recorrido vuelve a abrirse."
                      : "Your password has been updated. Your journey is opening again."}
                  </p>
                ) : null}
              </div>
            </>
          )}
        </FadeIn>
      </section>
    </main>
  );
}
