"use client";

import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FadeIn } from "@/components/fade-in";
import { useLanguage } from "@/components/language-provider";
import { pageCopy, t } from "@/data/site-content";

export default function ExperiencesPage() {
  const { language } = useLanguage();

  return (
    <main className="pb-28 pt-32 md:pb-40 md:pt-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Breadcrumbs
          items={[
            { label: language === "es" ? "Home" : "Home", href: "/" },
            { label: language === "es" ? "Experiencias" : "Experiences" }
          ]}
        />
        <p className="mb-4 text-[11px] uppercase tracking-editorial text-stone">
          {t(pageCopy.experiences.eyebrow, language)}
        </p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.02] md:text-6xl">
          {t(pageCopy.experiences.title, language)}
        </h1>
      </div>

      <section className="mx-auto mt-28 max-w-7xl px-6 md:mt-40 md:px-10">
        <FadeIn className="border-t border-black/8 pt-20 md:pt-28">
          <div className="grid gap-16 md:grid-cols-[0.82fr_1.18fr] md:items-center md:gap-24">
            <div className="max-w-xl">
              <p className="whitespace-pre-line font-serif text-4xl leading-[1.08] text-black/92 md:text-6xl">
                {t(pageCopy.experiences.statement, language)}
              </p>
              <p className="mt-16 max-w-lg whitespace-pre-line text-sm leading-9 text-black/66 md:mt-20 md:text-base md:leading-10">
                {t(pageCopy.experiences.note, language)}
              </p>
              <p className="mt-16 text-[11px] uppercase tracking-editorial text-black/42 md:mt-20">
                {t(pageCopy.experiences.status, language)}
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
