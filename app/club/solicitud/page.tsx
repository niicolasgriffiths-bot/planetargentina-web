"use client";

import { FormEvent } from "react";
import { FadeIn } from "@/components/fade-in";
import { useLanguage } from "@/components/language-provider";
import { PageIntro } from "@/components/page-intro";
import { pageCopy, t } from "@/data/site-content";

function buildMailto(language: "es" | "en", form: FormData) {
  const fields = pageCopy.clubRequest.fields;
  const entries = [
    [t(fields.name, language), String(form.get("name") ?? "").trim()],
    [t(fields.email, language), String(form.get("email") ?? "").trim()],
    [t(fields.location, language), String(form.get("location") ?? "").trim()],
    [t(fields.discovery, language), String(form.get("discovery") ?? "").trim()],
    [t(fields.connection, language), String(form.get("connection") ?? "").trim()],
    [t(fields.reason, language), String(form.get("reason") ?? "").trim()]
  ];

  const subject =
    language === "es"
      ? "Solicitud Club - Planeta Argentina"
      : "Club Request - Planeta Argentina";

  const body = entries.map(([label, value]) => `${label}\n${value}`).join("\n\n");

  return `mailto:hola@planetargentina.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ClubRequestPage() {
  const { language } = useLanguage();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    window.location.href = buildMailto(language, form);
  }

  const fields = pageCopy.clubRequest.fields;

  return (
    <main className="grain min-h-screen bg-shadow pb-24 pt-32 text-paper md:pb-32 md:pt-40">
      <PageIntro
        eyebrow={t(pageCopy.clubRequest.eyebrow, language)}
        title={t(pageCopy.clubRequest.title, language)}
        body={t(pageCopy.clubRequest.body, language)}
        inverse
        breadcrumbs={[
          { label: language === "es" ? "Home" : "Home", href: "/" },
          { label: language === "es" ? "Club" : "Club", href: "/club" },
          { label: t(pageCopy.clubRequest.title, language) }
        ]}
      />

      <section className="mx-auto mt-16 max-w-5xl px-6 md:mt-20 md:px-10">
        <FadeIn className="border-t border-white/10 pt-10 md:pt-12">
          <p className="max-w-2xl text-sm leading-8 text-paper/74 md:text-base">
            {t(pageCopy.clubRequest.secondary, language)}
          </p>
        </FadeIn>

        <FadeIn
          delay={0.06}
          className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10"
        >
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="grid gap-3">
                <span className="text-[11px] uppercase tracking-editorial text-paper/58">
                  {t(fields.name, language)}
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-paper outline-none transition-colors duration-300 placeholder:text-paper/28 focus:border-white/22 md:text-base"
                />
              </label>

              <label className="grid gap-3">
                <span className="text-[11px] uppercase tracking-editorial text-paper/58">
                  {t(fields.email, language)}
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-paper outline-none transition-colors duration-300 placeholder:text-paper/28 focus:border-white/22 md:text-base"
                />
              </label>
            </div>

            <label className="grid gap-3">
              <span className="text-[11px] uppercase tracking-editorial text-paper/58">
                {t(fields.location, language)}
              </span>
              <input
                name="location"
                type="text"
                required
                autoComplete="address-level2"
                className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-paper outline-none transition-colors duration-300 placeholder:text-paper/28 focus:border-white/22 md:text-base"
              />
            </label>

            <label className="grid gap-3">
              <span className="text-[11px] uppercase tracking-editorial text-paper/58">
                {t(fields.discovery, language)}
              </span>
              <textarea
                name="discovery"
                required
                rows={4}
                className="resize-y rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-8 text-paper outline-none transition-colors duration-300 placeholder:text-paper/28 focus:border-white/22 md:text-base"
              />
            </label>

            <label className="grid gap-3">
              <span className="text-[11px] uppercase tracking-editorial text-paper/58">
                {t(fields.connection, language)}
              </span>
              <textarea
                name="connection"
                required
                rows={4}
                className="resize-y rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-8 text-paper outline-none transition-colors duration-300 placeholder:text-paper/28 focus:border-white/22 md:text-base"
              />
            </label>

            <label className="grid gap-3">
              <span className="text-[11px] uppercase tracking-editorial text-paper/58">
                {t(fields.reason, language)}
              </span>
              <textarea
                name="reason"
                required
                rows={5}
                className="resize-y rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-8 text-paper outline-none transition-colors duration-300 placeholder:text-paper/28 focus:border-white/22 md:text-base"
              />
            </label>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex rounded-full border border-paper/20 bg-paper px-5 py-3 text-[11px] uppercase tracking-editorial text-shadow transition-opacity duration-500 hover:opacity-82"
              >
                {t(pageCopy.clubRequest.submit, language)}
              </button>
            </div>
          </form>
        </FadeIn>
      </section>

      <section className="mx-auto mt-14 max-w-5xl px-6 md:mt-16 md:px-10">
        <FadeIn className="border-t border-white/10 pt-8">
          <p className="max-w-xl text-sm leading-8 text-paper/58 md:text-base">
            {t(pageCopy.clubRequest.closing, language)}
          </p>
        </FadeIn>
      </section>
    </main>
  );
}
