"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FadeIn } from "@/components/fade-in";
import { useAuth } from "@/components/auth-provider";
import { useLanguage } from "@/components/language-provider";
import { createClient } from "@/lib/supabase/client";

type SignInStatus = "idle" | "sending" | "success" | "error";
type SignUpStatus = "idle" | "sending" | "success" | "confirmed" | "error";
type RecoveryStatus = "idle" | "sending" | "success" | "error";

export default function SignInPage() {
  const { language } = useLanguage();
  const { user } = useAuth();
  const router = useRouter();

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signInStatus, setSignInStatus] = useState<SignInStatus>("idle");
  const [signInMessage, setSignInMessage] = useState("");
  const [showRecovery, setShowRecovery] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoveryStatus, setRecoveryStatus] = useState<RecoveryStatus>("idle");
  const [recoveryMessage, setRecoveryMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [discovery, setDiscovery] = useState("");
  const [connection, setConnection] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpStatus, setSignUpStatus] = useState<SignUpStatus>("idle");
  const [signUpMessage, setSignUpMessage] = useState("");

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSignInStatus("sending");
    setSignInMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: signInEmail,
      password: signInPassword
    });

    if (error) {
      setSignInStatus("error");
      setSignInMessage(error.message);
      return;
    }

    setSignInStatus("success");
    router.push("/mi-recorrido");
    router.refresh();
  }

  async function handleSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setSignUpStatus("error");
      setSignUpMessage(
        language === "es"
          ? "La contraseña y la confirmación tienen que coincidir."
          : "Password and confirmation need to match."
      );
      return;
    }

    setSignUpStatus("sending");
    setSignUpMessage("");

    const supabase = createClient();
    const redirectTo =
      typeof window !== "undefined"
        ? `${window.location.origin}/auth/callback?next=/mi-recorrido`
        : undefined;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectTo,
        data: {
          name,
          location,
          discovery,
          connection
        }
      }
    });

    if (error) {
      setSignUpStatus("error");
      setSignUpMessage(error.message);
      return;
    }

    if (data.session) {
      setSignUpStatus("confirmed");
      router.push("/mi-recorrido");
      router.refresh();
      return;
    }

    setSignUpStatus("success");
  }

  async function handleRecovery(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRecoveryStatus("sending");
    setRecoveryMessage("");

    const supabase = createClient();
    const redirectTo =
      typeof window !== "undefined"
        ? `${window.location.origin}/auth/callback?next=/restablecer-contrasena`
        : undefined;

    const { error } = await supabase.auth.resetPasswordForEmail(recoveryEmail, {
      redirectTo
    });

    if (error) {
      setRecoveryStatus("error");
      setRecoveryMessage(error.message);
      return;
    }

    setRecoveryStatus("success");
  }

  return (
    <main className="pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <p className="mb-5 text-[12px] uppercase tracking-editorial text-stone">
          {language === "es" ? "Mi recorrido" : "My journey"}
        </p>
        <h1 className="max-w-4xl font-serif text-4xl leading-[0.94] md:text-6xl">
          {language === "es"
            ? "Formar parte de Planeta Argentina también tiene un sentido."
            : "Being part of Planeta Argentina also carries a purpose."}
        </h1>
        <p className="mt-10 max-w-2xl text-sm leading-8 text-black/62 md:text-base md:leading-9">
          {language === "es"
            ? "No es solo volver. Es quedar vinculado al proyecto, seguir lo que se deja ver a medida que avanza y guardar la relación con tus libros."
            : "It is not only about returning. It is about becoming linked to the project, following what reveals itself as it moves forward, and keeping the relation to your books."}
        </p>
      </div>

      <section className="mx-auto mt-24 max-w-6xl px-6 md:mt-28 md:px-10">
        {user ? (
          <FadeIn className="border-t border-black/8 pt-12">
            <p className="max-w-2xl font-serif text-3xl leading-tight text-black/92 md:text-5xl">
              {language === "es" ? "Ya estás dentro." : "You are already in."}
            </p>
            <p className="mt-8 max-w-xl text-sm leading-8 text-black/62 md:text-base md:leading-9">
              {language === "es"
                ? "Desde aquí puedes volver a tu recorrido y seguir lo que el proyecto ya deja ver."
                : "From here you can return to your journey and continue with what the project already lets you see."}
            </p>
            <div className="mt-14 text-[12px] uppercase tracking-editorial">
              <Link
                href="/mi-recorrido"
                className="inline-flex text-black/48 transition-opacity duration-500 hover:opacity-72"
              >
                {language === "es" ? "Ir a mi recorrido" : "Go to my journey"}
              </Link>
            </div>
          </FadeIn>
        ) : (
          <div className="grid gap-16 border-t border-black/8 pt-12 md:grid-cols-[0.72fr_1.28fr] md:gap-20">
            <FadeIn>
              <div>
                <p className="text-[12px] uppercase tracking-editorial text-stone">
                  {language === "es" ? "Ya tengo mi recorrido" : "I already have my journey"}
                </p>
                <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight text-black/92 md:text-5xl">
                  {language === "es"
                    ? "Vuelves por aquí."
                    : "You return from here."}
                </h2>
                <p className="mt-8 max-w-md text-sm leading-8 text-black/62 md:text-base md:leading-9">
                  {language === "es"
                    ? "Si ya habías quedado dentro, entra con tu correo y tu contraseña."
                    : "If you were already inside, enter with your email and password."}
                </p>
              </div>

              <form className="mt-12 grid gap-6 md:max-w-md" onSubmit={handleSignIn}>
                <label className="grid gap-3">
                  <span className="text-[12px] uppercase tracking-editorial text-stone">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={signInEmail}
                    onChange={(event) => setSignInEmail(event.target.value)}
                    className="rounded-[1.4rem] border border-black/10 bg-transparent px-5 py-4 text-sm outline-none transition-colors duration-300 placeholder:text-black/24 focus:border-black/20 md:text-base"
                    placeholder={language === "es" ? "tu@email.com" : "your@email.com"}
                  />
                </label>

                <label className="grid gap-3">
                  <span className="text-[12px] uppercase tracking-editorial text-stone">
                    {language === "es" ? "Contraseña" : "Password"}
                  </span>
                  <input
                    type="password"
                    required
                    autoComplete="current-password"
                    value={signInPassword}
                    onChange={(event) => setSignInPassword(event.target.value)}
                    className="rounded-[1.4rem] border border-black/10 bg-transparent px-5 py-4 text-sm outline-none transition-colors duration-300 placeholder:text-black/24 focus:border-black/20 md:text-base"
                  />
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={signInStatus === "sending"}
                    className="inline-flex text-[12px] uppercase tracking-editorial text-black/82 transition-opacity duration-500 hover:opacity-72 disabled:cursor-wait disabled:opacity-40"
                  >
                    {signInStatus === "sending"
                      ? language === "es"
                        ? "Entrando..."
                        : "Entering..."
                      : language === "es"
                        ? "Entrar"
                        : "Enter"}
                  </button>
                </div>
              </form>

              <div className="mt-8 text-[12px] uppercase tracking-editorial">
                <button
                  type="button"
                  onClick={() => {
                    setShowRecovery((value) => !value);
                    setRecoveryEmail(signInEmail);
                    setRecoveryStatus("idle");
                    setRecoveryMessage("");
                  }}
                  className="inline-flex text-black/42 transition-opacity duration-500 hover:opacity-72"
                >
                  {language === "es" ? "Olvidé mi contraseña" : "I forgot my password"}
                </button>
              </div>

              {showRecovery ? (
                <form className="mt-8 grid gap-6 md:max-w-md" onSubmit={handleRecovery}>
                  <p className="max-w-md text-sm leading-8 text-black/62 md:text-base md:leading-9">
                    {language === "es"
                      ? "Deja tu correo y te enviamos un enlace para elegir una nueva contraseña."
                      : "Leave your email and we will send you a link to choose a new password."}
                  </p>

                  <label className="grid gap-3">
                    <span className="text-[12px] uppercase tracking-editorial text-stone">
                      Email
                    </span>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={recoveryEmail}
                      onChange={(event) => setRecoveryEmail(event.target.value)}
                      className="rounded-[1.4rem] border border-black/10 bg-transparent px-5 py-4 text-sm outline-none transition-colors duration-300 placeholder:text-black/24 focus:border-black/20 md:text-base"
                      placeholder={language === "es" ? "tu@email.com" : "your@email.com"}
                    />
                  </label>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={recoveryStatus === "sending"}
                      className="inline-flex text-[12px] uppercase tracking-editorial text-black/82 transition-opacity duration-500 hover:opacity-72 disabled:cursor-wait disabled:opacity-40"
                    >
                      {recoveryStatus === "sending"
                        ? language === "es"
                          ? "Enviando..."
                          : "Sending..."
                        : language === "es"
                          ? "Recibir enlace"
                          : "Receive link"}
                    </button>
                  </div>
                </form>
              ) : null}

              <div className="mt-10 max-w-md text-sm leading-8 text-black/56 md:text-base md:leading-9">
                {signInStatus === "error" ? (
                  <p>{signInMessage}</p>
                ) : signInStatus === "success" ? (
                  <p>
                    {language === "es"
                      ? "Tu recorrido vuelve a abrirse."
                      : "Your journey opens again."}
                  </p>
                ) : (
                  <p>
                    {language === "es"
                      ? "Tu recorrido queda guardado para que puedas volver sin empezar de nuevo."
                      : "Your journey is kept so you can return without starting over."}
                  </p>
                )}
              </div>

              {showRecovery ? (
                <div className="mt-8 max-w-md text-sm leading-8 text-black/56 md:text-base md:leading-9">
                  {recoveryStatus === "error" ? (
                    <p>{recoveryMessage}</p>
                  ) : recoveryStatus === "success" ? (
                    <p>
                      {language === "es"
                        ? "Te enviamos un enlace para restablecer la contraseña. Si no lo ves enseguida, revisa también el correo no deseado."
                        : "We sent you a link to reset your password. If you do not see it right away, check your spam folder too."}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </FadeIn>

            <FadeIn delay={0.08}>
              <div>
                <p className="text-[12px] uppercase tracking-editorial text-stone">
                  {language === "es" ? "Quiero registrarme" : "I want to register"}
                </p>
                <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-black/92 md:text-5xl">
                  {language === "es"
                    ? "Tu entrada también puede ser más personal."
                    : "Your way in can also be more personal."}
                </h2>
                <p className="mt-8 max-w-2xl text-sm leading-8 text-black/62 md:text-base md:leading-9">
                  {language === "es"
                    ? "Deja algunos datos para que tu vínculo con el proyecto empiece a tener forma desde el inicio."
                    : "Leave a few details so your relationship with the project begins to take shape from the start."}
                </p>
              </div>

              <form className="mt-12 grid gap-6 md:max-w-2xl" onSubmit={handleSignUp}>
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="grid gap-3">
                    <span className="text-[12px] uppercase tracking-editorial text-stone">
                      {language === "es" ? "Nombre" : "Name"}
                    </span>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="rounded-[1.4rem] border border-black/10 bg-transparent px-5 py-4 text-sm outline-none transition-colors duration-300 placeholder:text-black/24 focus:border-black/20 md:text-base"
                    />
                  </label>

                  <label className="grid gap-3">
                    <span className="text-[12px] uppercase tracking-editorial text-stone">
                      Email
                    </span>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="rounded-[1.4rem] border border-black/10 bg-transparent px-5 py-4 text-sm outline-none transition-colors duration-300 placeholder:text-black/24 focus:border-black/20 md:text-base"
                      placeholder={language === "es" ? "tu@email.com" : "your@email.com"}
                    />
                  </label>
                </div>

                <label className="grid gap-3 md:max-w-md">
                  <span className="text-[12px] uppercase tracking-editorial text-stone">
                    {language === "es" ? "Ciudad / país" : "City / country"}
                  </span>
                  <input
                    type="text"
                    required
                    autoComplete="address-level2"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    className="rounded-[1.4rem] border border-black/10 bg-transparent px-5 py-4 text-sm outline-none transition-colors duration-300 placeholder:text-black/24 focus:border-black/20 md:text-base"
                  />
                </label>

                <label className="grid gap-3">
                  <span className="text-[12px] uppercase tracking-editorial text-stone">
                    {language === "es"
                      ? "Cómo llegaste a Planeta Argentina"
                      : "How did you come across Planeta Argentina"}
                  </span>
                  <textarea
                    rows={3}
                    value={discovery}
                    onChange={(event) => setDiscovery(event.target.value)}
                    className="min-h-28 rounded-[1.4rem] border border-black/10 bg-transparent px-5 py-4 text-sm outline-none transition-colors duration-300 placeholder:text-black/24 focus:border-black/20 md:text-base"
                  />
                </label>

                <label className="grid gap-3">
                  <span className="text-[12px] uppercase tracking-editorial text-stone">
                    {language === "es"
                      ? "Qué vínculo sientes con el proyecto"
                      : "What connection do you feel with the project"}
                  </span>
                  <textarea
                    rows={4}
                    value={connection}
                    onChange={(event) => setConnection(event.target.value)}
                    className="min-h-32 rounded-[1.4rem] border border-black/10 bg-transparent px-5 py-4 text-sm outline-none transition-colors duration-300 placeholder:text-black/24 focus:border-black/20 md:text-base"
                  />
                </label>

                <div className="grid gap-6 md:grid-cols-2">
                  <label className="grid gap-3">
                    <span className="text-[12px] uppercase tracking-editorial text-stone">
                      {language === "es" ? "Contraseña" : "Password"}
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
                    <span className="text-[12px] uppercase tracking-editorial text-stone">
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
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={signUpStatus === "sending"}
                    className="inline-flex text-[12px] uppercase tracking-editorial text-black/82 transition-opacity duration-500 hover:opacity-72 disabled:cursor-wait disabled:opacity-40"
                  >
                    {signUpStatus === "sending"
                      ? language === "es"
                        ? "Creando registro..."
                        : "Creating registration..."
                      : language === "es"
                        ? "Crear registro"
                        : "Create registration"}
                  </button>
                </div>
              </form>

              <div className="mt-10 max-w-2xl text-sm leading-8 text-black/56 md:text-base md:leading-9">
                {signUpStatus === "success" ? (
                  <p>
                    {language === "es"
                      ? "Tu registro ya quedó hecho. Si Supabase tiene la confirmación por email activa, ahora te llegará un correo para confirmar y entrar."
                      : "Your registration is already created. If Supabase email confirmation is active, you will now receive an email to confirm and enter."}
                  </p>
                ) : signUpStatus === "confirmed" ? (
                  <p>
                    {language === "es"
                      ? "Tu registro ya quedó hecho y tu recorrido ya se está abriendo."
                      : "Your registration is already created and your journey is already opening."}
                  </p>
                ) : signUpStatus === "error" ? (
                  <p>{signUpMessage}</p>
                ) : (
                  <p>
                    {language === "es"
                      ? "Este registro deja guardados tus datos básicos para que luego puedas vincular tus libros y seguir tu recorrido."
                      : "This registration keeps your basic details so you can later link your books and continue your journey."}
                  </p>
                )}
              </div>
            </FadeIn>
          </div>
        )}
      </section>
    </main>
  );
}
