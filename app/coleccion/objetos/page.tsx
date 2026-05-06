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
              ? "Este espacio reunirá prints, equipo y objetos utilizados durante las expediciones: piezas ligadas al trabajo de campo, al campamento y a la vida en territorio. No funciona como una tienda tradicional, sino como una extensión material del archivo."
              : "This space will gather prints, equipment and objects used during the expeditions: pieces tied to field work, camp life and time in the territory. It does not function as a traditional shop, but as a material extension of the archive."}
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              es: "Piezas de campo",
              en: "Field pieces",
              bodyEs: "Objetos que nacen de la logística, el abrigo y el trabajo sostenido en condiciones reales.",
              bodyEn: "Objects born from logistics, shelter and sustained work under real conditions."
            },
            {
              es: "Vida en territorio",
              en: "Life in the territory",
              bodyEs: "Elementos que acompañan la observación, la vida diaria y el tiempo de permanencia en cada etapa.",
              bodyEn: "Elements that accompany observation, daily life and the time spent within each stage."
            },
            {
              es: "Ediciones y prints",
              en: "Editions and prints",
              bodyEs: "Piezas futuras vinculadas a las expediciones y a la materialidad visual del proyecto.",
              bodyEn: "Future pieces linked to the expeditions and to the project’s visual materiality."
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
            className="text-[12px] uppercase tracking-editorial text-black/45 transition-opacity duration-500 hover:opacity-60"
          >
            {language === "es" ? "Entrar en la colección" : "Enter the collection"}
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
