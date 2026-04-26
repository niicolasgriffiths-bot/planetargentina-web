"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ExperienceCard } from "@/components/experience-card";
import { FadeIn } from "@/components/fade-in";
import { useLanguage } from "@/components/language-provider";
import { experiences, localizeText, territories } from "@/data/site";

export default function TerritoryPage() {
  const params = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const territory = territories.find((item) => item.slug === params.slug);

  if (!territory) {
    notFound();
  }

  const relatedExperiences = experiences.filter((item) =>
    territory.experiences.includes(item.slug)
  );

  return (
    <main className="pb-24">
      <section className="relative min-h-[88vh]">
        <Image
          src={territory.image}
          alt={localizeText(territory.name, language)}
          fill
          priority
          className="soft-photo object-cover"
          style={territory.heroPosition ? { objectPosition: territory.heroPosition } : undefined}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-16 text-paper md:px-10 md:pb-20">
          <FadeIn className="max-w-4xl">
            <Breadcrumbs
              inverse
              items={[
                { label: language === "es" ? "Home" : "Home", href: "/" },
                { label: language === "es" ? "Explorar" : "Explore", href: "/explore" },
                { label: language === "es" ? "Territorios" : "Territories", href: "/territories" },
                { label: localizeText(territory.name, language) }
              ]}
            />
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-editorial text-paper/60">
              <span>{localizeText(territory.stage, language)}</span>
              <span className="h-1 w-1 rounded-full bg-paper/25" />
              <span>{localizeText(territory.status, language)}</span>
            </div>
            <h1 className="mt-4 font-serif text-5xl leading-none md:text-8xl">
              {localizeText(territory.name, language)}
            </h1>
            <p className="mt-5 text-[11px] uppercase tracking-editorial text-paper/58">
              {localizeText(territory.route, language)}
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-paper/80 md:text-base">
              {localizeText(territory.intro, language)}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] md:px-10 md:py-28">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-editorial text-stone">
            {language === "es" ? "Territorio" : "Territory"}
          </p>
          <p className="mt-6 max-w-md text-base leading-8 text-black/72">
            {localizeText(territory.narrative, language)}
          </p>

          <div className="mt-10 border-t border-black/10 pt-8">
            <p className="text-[11px] uppercase tracking-editorial text-stone">
              {language === "es" ? "Claves del recorrido" : "Route notes"}
            </p>
            <div className="mt-6 grid gap-5">
              {territory.highlights.map((item) => (
                <p key={item.es} className="text-sm leading-8 text-black/65 md:text-base">
                  {localizeText(item, language)}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="grid gap-6 md:grid-cols-2">
          {territory.gallery.map((item, index) => (
            <div
              key={item.image}
              className={`image-mask ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <div className={`relative ${index === 0 ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
                <Image
                  src={item.image}
                  alt={`${localizeText(territory.name, language)} ${index + 1}`}
                  fill
                  className="soft-photo object-cover"
                />
              </div>
              <div className="absolute left-4 top-4 z-10 rounded-full bg-black/45 px-3 py-1 text-[10px] uppercase tracking-editorial text-paper">
                {localizeText(item.kind, language)}
              </div>
            </div>
          ))}
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn className="rounded-[2rem] border border-black/10 bg-[#111111] p-6 text-paper shadow-haze md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <p className="text-[11px] uppercase tracking-editorial text-paper/45">
                {language === "es" ? "Recorrido" : "Route"}
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                {language === "es" ? "Mapa de etapa" : "Stage map"}
              </h2>
              <p className="mt-6 max-w-md text-sm leading-8 text-paper/68 md:text-base">
                {language === "es"
                  ? "El mapa sitúa la región, marca el recorrido general y deja ver la forma territorial de cada etapa dentro del proyecto."
                  : "The map places the region, marks its general route and reveals the territorial shape of each stage within the project."}
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-editorial text-paper/45">
                {localizeText(territory.route, language)}
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40">
              <div className="relative aspect-[16/10]">
                <Image
                  src={territory.mapImage}
                  alt={`${localizeText(territory.name, language)} map`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-editorial text-stone">
              {language === "es" ? "Experiencias relacionadas" : "Related experiences"}
            </p>
            <h2 className="mt-3 font-serif text-4xl">
              {language === "es" ? "Lo que se abre desde aqui" : "What opens from here"}
            </h2>
          </div>
        </div>

        {relatedExperiences.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {relatedExperiences.map((experience, index) => (
              <FadeIn key={experience.slug} delay={index * 0.08}>
                <ExperienceCard experience={experience} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn className="rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-haze">
            <p className="max-w-xl text-sm leading-8 text-black/65 md:text-base">
              {language === "es"
                ? "Esta etapa todavía no tiene experiencias publicadas. El recorrido permanece como una próxima apertura dentro del proyecto."
                : "This stage does not yet have published experiences. The route remains as a future opening within the project."}
            </p>
          </FadeIn>
        )}
      </section>
    </main>
  );
}
