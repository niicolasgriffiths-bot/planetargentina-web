"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { useLanguage } from "@/components/language-provider";
import { archiveCategories, localizeText, storyProfiles } from "@/data/site";

export default function StoriesPage() {
  const { language } = useLanguage();
  const storiesCategory = archiveCategories[0];

  return (
    <main className="pb-24 pt-32 md:pb-32 md:pt-40">
      <PageIntro
        eyebrow={localizeText(storiesCategory.name, language)}
        title={
          language === "es"
            ? "Historias argentinas"
            : "Meeting Argentinians"
        }
        body={localizeText(storiesCategory.description, language)}
        breadcrumbs={[
          { label: language === "es" ? "Home" : "Home", href: "/" },
          { label: language === "es" ? "Explorar" : "Explore", href: "/explore" },
          { label: language === "es" ? "Historias" : "Stories" }
        ]}
      />

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-10">
        <FadeIn className="grid gap-8 border-t border-black/8 pt-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-[11px] uppercase tracking-editorial text-stone">
              {language === "es" ? "Historias de vida" : "Life stories"}
            </p>
            <p className="mt-5 max-w-xl font-serif text-3xl leading-tight md:text-5xl">
              {language === "es"
                ? "Retratos, oficios y voces que permiten mirar el país desde quienes lo habitan."
                : "Portraits, trades and voices that allow the country to be known through those who inhabit it."}
            </p>
          </div>
          <div className="max-w-2xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
            <p>
              {language === "es"
                ? "Historias argentinas reúne una primera selección de retratos y encuentros que aparecen en el libro y en el archivo de Planeta Argentina. No busca explicar el territorio desde afuera, sino acercarse a quienes lo habitan, lo trabajan y lo sostienen en el tiempo."
                : "Meeting Argentinians gathers an initial selection of portraits and encounters that appear in the book and in the Planeta Argentina archive. It does not explain the territory from the outside, but moves closer to the people who inhabit, work and sustain it over time."}
            </p>
            <div className="mt-8 text-[11px] uppercase tracking-editorial">
              <Link
                href="https://www.instagram.com/conociendo.argentinos?igsh=bGdic2w2bm8xcDRz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-black/45 transition-opacity duration-500 hover:opacity-60"
              >
                Instagram · Conociendo Argentinos
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          {storyProfiles.map((story, index) => {
            const storyPlace = localizeText(story.place, language);

            return (
              <FadeIn
                key={story.image}
                delay={index * 0.08}
                className="overflow-hidden rounded-[2rem] border border-black/8 bg-white/70"
              >
                <Link href={`/stories/${story.slug}`} className="group block">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={story.image}
                      alt={localizeText(story.name, language)}
                      fill
                      className="soft-photo object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
                <div className="p-6 md:p-8">
                  {storyPlace ? (
                    <p className="text-[11px] uppercase tracking-editorial text-stone">
                      {storyPlace}
                    </p>
                  ) : null}
                  <h2 className={`${storyPlace ? "mt-3" : ""} font-serif text-3xl md:text-4xl`}>
                    {localizeText(story.name, language)}
                  </h2>
                  <div className="mt-5">
                    <Link
                      href={`/stories/${story.slug}`}
                      className="text-[11px] uppercase tracking-editorial text-black/45 transition-opacity duration-500 hover:opacity-60"
                    >
                      {language === "es" ? "Leer historia" : "Read story"}
                    </Link>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-10">
        <FadeIn className="flex flex-wrap items-center justify-between gap-6 border-t border-black/8 pt-8">
          <div>
            <p className="text-[11px] uppercase tracking-editorial text-stone">
              {language === "es" ? "Más adelante" : "Further on"}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
              {language === "es"
                ? "Estas historias conviven con los territorios y con las futuras experiencias: una misma mirada contada desde personas, geografía y recorridos."
                : "These stories coexist with territories and future experiences: the same gaze told through people, geography and journeys."}
            </p>
          </div>
          <div className="flex gap-6 text-[11px] uppercase tracking-editorial text-black/45">
            <Link href="/territories" className="transition-opacity duration-500 hover:opacity-60">
              {language === "es" ? "Entrar por territorios" : "See territories"}
            </Link>
            <Link href="/experiences" className="transition-opacity duration-500 hover:opacity-60">
              {language === "es" ? "Entrar por experiencias" : "See experiences"}
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
