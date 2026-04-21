"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Experience, localizeText } from "@/data/site";

export function ExperienceCard({ experience }: { experience: Experience }) {
  const { language } = useLanguage();
  const isLocked = experience.visibility === "locked";
  const isPartial = experience.visibility === "partial";
  const visibilityCopy = {
    visible: { es: "Visible", en: "Open" },
    partial: { es: "Vista restringida", en: "Restricted preview" },
    locked: {
      es: "Disponible más adelante",
      en: "Available later"
    }
  } as const;

  return (
    <article
      className={`group rounded-[2rem] border p-6 transition-all duration-700 ${
        isLocked
          ? "border-white/10 bg-white/5 text-paper"
          : "border-black/10 bg-white/70 text-ink shadow-haze"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-editorial opacity-50">
            {visibilityCopy[experience.visibility][language]}
          </p>
          <h3 className="mt-4 font-serif text-3xl">{localizeText(experience.title, language)}</h3>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-editorial ${
            isLocked ? "border border-white/15" : "bg-black/5"
          }`}
        >
          {localizeText(experience.spots, language)}
        </span>
      </div>

      <p className="mt-5 max-w-sm text-sm leading-7 opacity-75">
        {isLocked
          ? language === "es"
            ? "Algunos detalles no se muestran en esta etapa."
            : "Some details are not shown at this stage."
          : localizeText(experience.summary, language)}
      </p>

      <div className="mt-8 flex gap-6 text-[11px] uppercase tracking-editorial opacity-60">
        <span>
          {isPartial
            ? language === "es"
              ? "Duración a pedido"
              : "Duration on request"
            : localizeText(experience.duration, language)}
        </span>
        <span>
          {isLocked
            ? language === "es"
              ? "Dificultad no visible"
              : "Difficulty undisclosed"
            : localizeText(experience.difficulty, language)}
        </span>
      </div>

      <div className="mt-8">
        {isLocked ? (
          <Link
            href="/club"
            className="text-[11px] uppercase tracking-editorial transition-opacity duration-500 hover:opacity-60"
          >
            {language === "es" ? "Ir al Club" : "See the Club"}
          </Link>
        ) : (
          <Link
            href={`/territories/${experience.territory}`}
            className="text-[11px] uppercase tracking-editorial transition-opacity duration-500 hover:opacity-60"
          >
            {language === "es" ? "Ver territorio" : "Enter territory"}
          </Link>
        )}
      </div>
    </article>
  );
}
