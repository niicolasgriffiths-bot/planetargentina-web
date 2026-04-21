"use client";

import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useLanguage } from "@/components/language-provider";
import { FadeIn } from "@/components/fade-in";
import { pageCopy, t } from "@/data/site-content";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <main className="pb-24 pt-32 md:pb-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="border-t border-black/8 pt-10">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: language === "es" ? "Home" : "Home", href: "/" },
                { label: language === "es" ? "Nosotros" : "About" }
              ]}
            />
            <p className="text-[11px] uppercase tracking-editorial text-stone">
              {t(pageCopy.about.eyebrow, language)}
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.95] md:text-[4.9rem] md:leading-[0.94]">
              {t(pageCopy.about.title, language)}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-black/72 md:text-[1.08rem] md:leading-9">
              {t(pageCopy.about.body, language)}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-20 md:px-10">
        <FadeIn className="overflow-hidden rounded-[2.5rem] border border-black/8 shadow-haze">
          <div className="relative aspect-[16/8] md:aspect-[16/7]">
            <Image
              src="/stages/patagonia-cordillerana/gallery-landscape.jpg"
              alt={
                language === "es"
                  ? "Paisaje abierto entre montaña y lago"
                  : "Open landscape between mountain and lake"
              }
              fill
              className="soft-photo object-cover"
              style={{ objectPosition: "center center" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/8 via-transparent to-transparent" />
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-6 md:mt-24 md:px-10">
        <FadeIn className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-editorial text-stone">
            {t(pageCopy.about.gazeEyebrow, language)}
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            {t(pageCopy.about.gazeTitle, language)}
          </h2>
        </FadeIn>

        <div className="mt-10 max-w-3xl border-t border-black/10">
          {pageCopy.about.gazeNotes.map((note, index) => (
            <FadeIn
              key={note.es}
              delay={0.08 + index * 0.08}
              className={`${index === pageCopy.about.gazeNotes.length - 1 ? "" : "border-b border-black/8"}`}
            >
              <p className="py-7 text-sm leading-8 text-black/68 md:text-base md:leading-9">
                {t(note, language)}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl px-6 md:mt-28 md:px-10">
        <FadeIn className="border-t border-black/10 pt-10">
          <p className="font-serif text-3xl leading-relaxed text-black/86 md:text-5xl">
            {t(pageCopy.about.storyQuote, language)}
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 md:mt-28 md:px-10">
        <FadeIn className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-black shadow-haze">
            <video
              className="block aspect-video h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/media/planeta-argentina-teaser-poster.png"
            >
              <source src="/media/planeta-argentina-teaser.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="max-w-md">
            <p className="text-[11px] uppercase tracking-editorial text-stone">
              {t(pageCopy.about.filmEyebrow, language)}
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
              {t(pageCopy.about.filmTitle, language)}
            </h2>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-20 max-w-5xl px-6 md:mt-28 md:px-10">
        <FadeIn className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-editorial text-stone">
            {t(pageCopy.about.formEyebrow, language)}
          </p>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            {t(pageCopy.about.formTitle, language)}
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-8 text-black/68 md:text-base md:leading-9">
            {t(pageCopy.about.formBody, language)}
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto mt-20 max-w-4xl px-6 md:mt-28 md:px-10">
        <FadeIn className="border-t border-black/10 pt-10">
          <p className="font-serif text-2xl leading-relaxed md:text-4xl">
            {t(pageCopy.about.closing, language)}
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 md:mt-24 md:px-10">
        <div className="grid gap-10 border-t border-black/10 pt-10 md:grid-cols-[1.1fr_0.72fr] md:items-start md:gap-12">
          <FadeIn>
            <h2 className="max-w-4xl font-serif text-3xl leading-tight md:text-5xl">
              {t(pageCopy.about.identityTitle, language)}
            </h2>
            <div className="mt-6 max-w-3xl space-y-6 text-sm leading-8 text-black/68 md:text-base md:leading-9">
              {t(pageCopy.about.identityBody, language)
                .split("\n\n")
                .map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
          </FadeIn>

          <FadeIn className="image-mask rounded-[2rem] border border-black/10 bg-white shadow-haze">
            <div className="relative aspect-[4/5]">
              <Image
                src="/about/founder-portrait.jpg"
                alt={
                  language === "es"
                    ? "Retrato del creador de Planeta Argentina"
                    : "Portrait of the creator of Planeta Argentina"
                }
                fill
                className="soft-photo object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl px-6 md:mt-24 md:px-10">
        <FadeIn className="border-t border-black/10 pt-10">
          <h2 className="max-w-4xl font-serif text-3xl leading-tight md:text-5xl">
            {t(pageCopy.about.returnTitle, language)}
          </h2>
          <div className="mt-6 max-w-3xl whitespace-pre-line text-sm leading-8 text-black/68 md:text-base md:leading-9">
            {t(pageCopy.about.returnBody, language)}
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
