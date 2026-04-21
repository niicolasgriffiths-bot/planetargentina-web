"use client";

import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { useLanguage } from "@/components/language-provider";
import { PageIntro } from "@/components/page-intro";
import { pageCopy, t } from "@/data/site-content";

export default function CollectionObjectsPage() {
  const { language } = useLanguage();

  return (
    <main className="pb-24 pt-32 md:pb-32 md:pt-40">
      <PageIntro
        eyebrow={t(pageCopy.collection.objectsEyebrow, language)}
        title={t(pageCopy.collection.objectsTitle, language)}
        body={t(pageCopy.collection.objectsBody, language)}
        breadcrumbs={[
          { label: language === "es" ? "Home" : "Home", href: "/" },
          { label: language === "es" ? "Colección" : "Collection", href: "/coleccion" },
          { label: t(pageCopy.collection.objectsTitle, language) }
        ]}
      />

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-10">
        <FadeIn className="max-w-4xl border-t border-black/8 pt-10">
          <p className="text-sm leading-8 text-black/68 md:text-base md:leading-9">
            {language === "es"
              ? "Este espacio reunirá equipo y objetos utilizados durante las expediciones: piezas ligadas al trabajo de campo, al campamento y a la vida en territorio. No funciona como una tienda tradicional, sino como una extensión material del recorrido."
              : "This space will gather equipment and objects used during the expeditions: pieces tied to field work, camp life and time in the territory. It does not function as a traditional shop, but as a material extension of the journey."}
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              es: "Abrigo y expedición",
              en: "Shelter and expedition",
              bodyEs: "Piezas utilizadas para sostener el trabajo en climas extremos.",
              bodyEn: "Pieces used to sustain field work in extreme climates."
            },
            {
              es: "Objetos de campo",
              en: "Field objects",
              bodyEs: "Elementos que acompañan la observación, la vida diaria y el campamento.",
              bodyEn: "Elements that accompany observation, daily life and camp."
            },
            {
              es: "Ediciones especiales",
              en: "Special editions",
              bodyEs: "Piezas futuras relacionadas con cada etapa del proyecto.",
              bodyEn: "Future pieces related to each stage of the project."
            }
          ].map((item, index) => (
            <FadeIn
              key={item.es}
              delay={index * 0.06}
              className="rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-haze"
            >
              <h2 className="font-serif text-3xl leading-tight">
                {language === "es" ? item.es : item.en}
              </h2>
              <p className="mt-4 text-sm leading-7 text-black/68">
                {language === "es" ? item.bodyEs : item.bodyEn}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12">
          <Link
            href="/coleccion"
            className="text-[11px] uppercase tracking-editorial text-black/45 transition-opacity duration-500 hover:opacity-60"
          >
            {language === "es" ? "Volver a colección" : "Back to collection"}
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
