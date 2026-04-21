"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { pageCopy, t } from "@/data/site-content";

export default function SupportPage() {
  const { language } = useLanguage();

  return (
    <main className="pb-24 pt-32 md:pb-32 md:pt-40">
      <PageIntro
        eyebrow={t(pageCopy.support.eyebrow, language)}
        title={t(pageCopy.support.title, language)}
        body={t(pageCopy.support.body, language)}
        breadcrumbs={[
          { label: language === "es" ? "Home" : "Home", href: "/" },
          { label: language === "es" ? "Acompañan" : "Support" }
        ]}
      />

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-10">
        <FadeIn className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-editorial text-stone">
            {t(pageCopy.support.currentEyebrow, language)}
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl">
            {t(pageCopy.support.currentTitle, language)}
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pageCopy.support.currentGroups.map((item, index) => (
            <FadeIn
              key={item.title.es}
              delay={index * 0.08}
              className="border-t border-black/10 pt-6 md:min-h-[15rem] md:pr-8"
            >
              <h3 className="max-w-[10ch] font-serif text-2xl leading-tight md:text-3xl">
                {t(item.title, language)}
              </h3>
              <p className="mt-6 text-sm leading-8 text-black/68 md:text-base">
                {t(item.body, language)}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-10">
        <div className="border-t border-black/8 pt-10">
          <FadeIn className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-[11px] uppercase tracking-editorial text-stone">
                {t(pageCopy.support.futureEyebrow, language)}
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl">
                {t(pageCopy.support.futureTitle, language)}
              </h2>
            </div>

            <div>
              <p className="max-w-2xl whitespace-pre-line text-sm leading-8 text-black/68 md:text-base">
                {t(pageCopy.support.futureBody, language)}
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-[11px] uppercase tracking-editorial text-black/45">
                <Link
                  href="/contacto"
                  className="transition-opacity duration-500 hover:opacity-60"
                >
                  {t(pageCopy.support.action, language)}
                </Link>
                <span>{t(pageCopy.support.contactLabel, language)}: hola@planetargentina.com</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
