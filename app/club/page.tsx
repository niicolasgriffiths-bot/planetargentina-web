"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { pageCopy, t } from "@/data/site-content";

export default function ClubPage() {
  const { language } = useLanguage();

  return (
    <main className="grain min-h-screen bg-shadow pb-24 pt-32 text-paper md:pb-32 md:pt-40">
      <PageIntro
        eyebrow={t(pageCopy.club.eyebrow, language)}
        title={t(pageCopy.club.title, language)}
        body={t(pageCopy.club.body, language)}
        inverse
        breadcrumbs={[
          { label: language === "es" ? "Home" : "Home", href: "/" },
          { label: language === "es" ? "Club" : "Club" }
        ]}
      />

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-20 md:px-10">
        <FadeIn className="overflow-hidden border border-white/8">
          <div className="relative aspect-[16/8] md:aspect-[16/7]">
            <Image
              src="/editorial/fn19-snow-dusk.jpg"
              alt={
                language === "es"
                  ? "Cordillera nevada al atardecer"
                  : "Snowy range at dusk"
              }
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "center 54%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-shadow/70 via-shadow/20 to-shadow/10" />
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-10">
        <FadeIn className="max-w-4xl border-t border-white/10 pt-10">
          <p className="text-[12px] uppercase tracking-editorial text-paper/55">
            {t(pageCopy.club.accessEyebrow, language)}
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">
            {t(pageCopy.club.accessTitle, language)}
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pageCopy.club.accessModes.map((item, index) => (
            <FadeIn
              key={item.title.es}
              delay={index * 0.08}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10"
            >
              <h3 className="max-w-[14ch] font-serif text-3xl leading-tight md:text-4xl">
                {t(item.title, language)}
              </h3>
              <p className="mt-6 max-w-xl text-sm leading-8 text-paper/78 md:text-base">
                {t(item.body, language)}
              </p>
              {"actionLabel" in item && "actionHref" in item ? (
                <div className="mt-8 text-[12px] uppercase tracking-editorial text-paper/52">
                  <Link
                    href={item.actionHref}
                    className="transition-opacity duration-500 hover:opacity-60"
                  >
                    {t(item.actionLabel, language)}
                  </Link>
                </div>
              ) : null}
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-20 md:px-10">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <FadeIn className="overflow-hidden border border-white/8">
            <div className="relative min-h-[300px] md:min-h-full">
              <Image
                src="/editorial/vg1-turquoise-lagoon.jpg"
                alt={
                  language === "es"
                    ? "Laguna turquesa en altura"
                    : "Turquoise high-altitude lagoon"
                }
                fill
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-shadow/40 via-transparent to-transparent" />
            </div>
          </FadeIn>

          <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-[12px] uppercase tracking-editorial text-paper/55">
              {t(pageCopy.club.stateEyebrow, language)}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <p className="font-serif text-4xl leading-none md:text-6xl">
                {t(pageCopy.club.stateCount, language)}
              </p>
              <p className="text-sm uppercase tracking-editorial text-paper/58 md:text-[12px]">
                {t(pageCopy.club.stateStatus, language)}
              </p>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm leading-7 text-paper/76 md:text-base">
                {t(pageCopy.club.stateNote, language)}
              </p>
              <p className="mt-3 text-sm leading-7 text-paper/58 md:text-base">
                {t(pageCopy.club.stateLimit, language)}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-10">
        <FadeIn className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <p className="text-[12px] uppercase tracking-editorial text-paper/55">
            {t(pageCopy.club.changeEyebrow, language)}
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-5xl">
            {t(pageCopy.club.changeTitle, language)}
          </h2>

          <div className="mt-10 grid gap-5 border-t border-white/10 pt-8">
            {pageCopy.club.changeItems.map((item) => (
              <div key={item.es} className="border-b border-white/8 pb-5 last:border-b-0 last:pb-0">
                <p className="max-w-2xl text-sm leading-7 text-paper/76 md:text-base">
                  {t(item, language)}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 md:mt-20 md:px-10">
        <FadeIn className="overflow-hidden border border-white/8">
          <div className="relative aspect-[16/7]">
            <Image
              src="/editorial/vg4-desert-road.jpg"
              alt={
                language === "es"
                  ? "Camino abierto en desierto de altura"
                  : "Open road in the high desert"
              }
              fill
              className="object-cover"
              style={{ objectPosition: "center 56%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-shadow/35 via-transparent to-transparent" />
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-6 md:mt-24 md:px-10">
        <FadeIn className="border-t border-white/10 pt-10 text-left md:pt-12">
          <p className="text-[12px] uppercase tracking-editorial text-paper/55">
            {t(pageCopy.club.closingEyebrow, language)}
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">
            {t(pageCopy.club.closingTitle, language)}
          </h2>
          {t(pageCopy.club.closingBody, language) ? (
            <p className="mt-6 max-w-xl text-sm leading-7 text-paper/76 md:text-base">
              {t(pageCopy.club.closingBody, language)}
            </p>
          ) : null}
          <div className="mt-10 flex flex-wrap items-center gap-4 text-[12px] uppercase tracking-editorial">
            <Link
              href="/territories"
              className="inline-flex rounded-full border border-paper/20 bg-paper px-5 py-3 text-shadow transition-opacity duration-500 hover:opacity-82"
            >
              {t(pageCopy.club.primaryAction, language)}
            </Link>
            <Link
              href="/coleccion"
              className="inline-flex rounded-full border border-paper/20 px-5 py-3 text-paper/88 transition-colors duration-500 hover:bg-paper hover:text-shadow"
            >
              {t(pageCopy.club.secondaryAction, language)}
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
