"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { useLanguage } from "@/components/language-provider";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const { language } = useLanguage();
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus("sending");
    setSubmitMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwvaabko", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.errors?.[0]?.message ??
            (language === "es" ? "Error al enviar." : "Error sending message.")
        );
      }

      form.reset();
      setSubmitStatus("success");
      setSubmitMessage(
        language === "es" ? "Mensaje enviado." : "Message sent."
      );
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : language === "es"
            ? "Error al enviar."
            : "Error sending message."
      );
    }
  }

  return (
    <main className="pb-24 pt-32 md:pb-32 md:pt-40">
      <PageIntro
        eyebrow={language === "es" ? "Contacto" : "Contact"}
        title={language === "es" ? "Una forma directa de escribir." : "A direct way to write."}
        body={
          language === "es"
            ? "Para consultas, propuestas o conversaciones vinculadas al proyecto."
            : "For questions, proposals or conversations related to the project."
        }
        breadcrumbs={[
          { label: language === "es" ? "Home" : "Home", href: "/" },
          { label: language === "es" ? "Contacto" : "Contact" }
        ]}
      />

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-10">
        <div className="grid gap-14 border-t border-black/8 pt-10 md:grid-cols-[0.82fr_1.18fr] md:gap-20">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-editorial text-stone">
              {language === "es" ? "Escribir" : "Write"}
            </p>
            <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight md:text-6xl">
              {language === "es"
                ? "El mensaje llega al equipo."
                : "The message reaches the team."}
            </h2>
            <p className="mt-8 max-w-md text-sm leading-8 text-black/64 md:text-base md:leading-9">
              {language === "es"
                ? "También podés escribir directamente a hola@planetargentina.com."
                : "You can also write directly to hola@planetargentina.com."}
            </p>

            <div className="mt-12 border-t border-black/8 pt-8">
              <p className="text-[11px] uppercase tracking-editorial text-stone">
                Instagram
              </p>
              <Link
                href="https://www.instagram.com/argentinaplaneta?igsh=MTdveHM5bzg5dzRxOQ=="
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex text-[11px] uppercase tracking-editorial text-black/45 transition-opacity duration-500 hover:opacity-60"
              >
                Planeta Argentina
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <form onSubmit={handleSubmit} className="grid gap-6">
              <input
                type="hidden"
                name="_subject"
                value="Nuevo mensaje desde Planeta Argentina"
              />
              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-3">
                  <span className="text-[11px] uppercase tracking-editorial text-stone">
                    {language === "es" ? "Nombre" : "Name"}
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="rounded-[1.4rem] border border-black/10 bg-transparent px-5 py-4 text-sm outline-none transition-colors duration-300 placeholder:text-black/24 focus:border-black/20 md:text-base"
                  />
                </label>

                <label className="grid gap-3">
                  <span className="text-[11px] uppercase tracking-editorial text-stone">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={language === "es" ? "tu@email.com" : "your@email.com"}
                    className="rounded-[1.4rem] border border-black/10 bg-transparent px-5 py-4 text-sm outline-none transition-colors duration-300 placeholder:text-black/24 focus:border-black/20 md:text-base"
                  />
                </label>
              </div>

              <label className="grid gap-3">
                <span className="text-[11px] uppercase tracking-editorial text-stone">
                  {language === "es" ? "Asunto" : "Subject"}
                </span>
                <input
                  name="subject"
                  type="text"
                  required
                  className="rounded-[1.4rem] border border-black/10 bg-transparent px-5 py-4 text-sm outline-none transition-colors duration-300 placeholder:text-black/24 focus:border-black/20 md:text-base"
                />
              </label>

              <label className="grid gap-3">
                <span className="text-[11px] uppercase tracking-editorial text-stone">
                  {language === "es" ? "Mensaje" : "Message"}
                </span>
                <textarea
                  name="message"
                  required
                  rows={7}
                  className="min-h-44 rounded-[1.4rem] border border-black/10 bg-transparent px-5 py-4 text-sm outline-none transition-colors duration-300 placeholder:text-black/24 focus:border-black/20 md:text-base"
                />
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitStatus === "sending"}
                  className="inline-flex text-[11px] uppercase tracking-editorial text-black/82 transition-opacity duration-500 hover:opacity-72 disabled:cursor-wait disabled:opacity-40"
                >
                  {submitStatus === "sending"
                    ? language === "es"
                      ? "Enviando..."
                      : "Sending..."
                    : language === "es"
                      ? "Enviar mensaje"
                      : "Send message"}
                </button>
              </div>

              {submitStatus === "success" || submitStatus === "error" ? (
                <p className="text-sm leading-8 text-black/56 md:text-base md:leading-9">
                  {submitMessage}
                </p>
              ) : null}
            </form>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
