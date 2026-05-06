"use client";

import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FadeIn } from "@/components/fade-in";
import { useLanguage } from "@/components/language-provider";

export default function ExperiencesPage() {
  const { language } = useLanguage();
  const eyebrow = language === "es" ? "Experiencias" : language === "pt" ? "Experiências" : "Experiences";
  const title =
    language === "es"
      ? "Dejar de mirar y empezar a vivir"
      : language === "pt"
        ? "Deixar de olhar e começar a viver"
        : "Stop looking and begin to live";
  const statement =
    language === "es"
      ? "Experiencias que ayudan a volver a conectar con lo importante."
      : language === "pt"
        ? "Experiências que ajudam a voltar a ligar-se ao que é importante."
        : "Experiences that help reconnect with what matters.";
  const status =
    language === "es"
      ? "Algunas aperturas todavía están en desarrollo."
      : language === "pt"
        ? "Algumas aberturas ainda estão em desenvolvimento."
        : "Some openings are still in development.";

  return (
    <main className="pb-28 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Breadcrumbs
          items={[
            { label: language === "es" ? "Home" : "Home", href: "/" },
            { label: eyebrow }
          ]}
        />
        <p className="mb-4 text-[12px] uppercase tracking-editorial text-stone">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.02] md:text-6xl">
          {title}
        </h1>
      </div>

      <section className="mx-auto mt-24 max-w-7xl px-6 md:mt-32 md:px-10">
        <FadeIn className="border-t border-black/8 pt-12 md:pt-16">
          <div className="grid gap-12 md:grid-cols-[0.82fr_1.18fr] md:items-center md:gap-20">
            <div className="max-w-lg">
              <p className="max-w-[14ch] font-serif text-4xl leading-[1.08] text-black/92 md:max-w-[13ch] md:text-6xl">
                {statement}
              </p>
              <p className="mt-14 text-[12px] uppercase tracking-editorial text-black/42 md:mt-20">
                {status}
              </p>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/9]">
              <Image
                src="/experiences/night-domes.jpg"
                alt={
                  language === "es"
                    ? "Domos en la noche dentro del paisaje andino"
                    : "Domes at night within the Andean landscape"
                }
                fill
                className="soft-photo object-cover"
                style={{ objectPosition: "center center" }}
              />
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
