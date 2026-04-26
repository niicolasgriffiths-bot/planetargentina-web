"use client";

import Image from "next/image";
import Link from "next/link";
import { BookCoverPreview } from "@/components/book-cover-preview";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FadeIn } from "@/components/fade-in";
import { useLanguage, type Language } from "@/components/language-provider";
import { localizeText, territories } from "@/data/site";

function text(language: Language, es: string, en: string) {
  return language === "es" ? es : en;
}

export default function CollectionPage() {
  const { language } = useLanguage();
  const firstBook = territories[0];

  return (
    <main className="pb-24 pt-32 md:pb-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn className="border-t border-black/8 pt-10">
          <Breadcrumbs
            items={[
              { label: language === "es" ? "Home" : "Home", href: "/" },
              { label: language === "es" ? "Colección" : "Collection" }
            ]}
          />
          <p className="text-[11px] uppercase tracking-editorial text-stone">
            {text(language, "Colección", "Collection")}
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] md:text-[5.2rem]">
            {text(
              language,
              "La obra de Planeta Argentina toma forma.",
              "The work of Planeta Argentina takes shape."
            )}
          </h1>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-16 md:mt-20">
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/7]">
            <Image
              src={firstBook.collectionImage ?? firstBook.image}
              alt={localizeText(firstBook.name, language)}
              fill
              priority
              style={
                firstBook.collectionImagePosition
                  ? { objectPosition: firstBook.collectionImagePosition }
                  : firstBook.heroPosition
                    ? { objectPosition: firstBook.heroPosition }
                    : undefined
              }
              className="soft-photo object-cover"
            />
          </div>
        </FadeIn>
      </section>

      <section className="px-6 py-28 md:px-10 md:py-40">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="whitespace-pre-line font-serif text-3xl leading-[1.2] text-black/88 md:text-5xl">
            {text(
              language,
              "Cada territorio se transforma en una obra.\nUna mirada del país a través de cinco libros y un documental",
              "Each territory becomes a work.\nA gaze on the country through five books and a documentary"
            )}
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-14 border-t border-black/8 pt-14 md:grid-cols-[0.62fr_1.38fr] md:items-center md:gap-20">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-editorial text-stone">
              {text(language, "Primera instancia", "First instance")}
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-none md:text-7xl">
              {localizeText(firstBook.name, language)}
            </h2>
            <div className="mt-10 max-w-xl space-y-7 text-sm leading-8 text-black/66 md:text-base md:leading-9">
              <p>
                {text(
                  language,
                  "Altura, salares y vida en uno de los entornos más extremos del país.",
                  "Altitude, salt flats and life in one of the country’s most extreme environments."
                )}
              </p>
              <p>
                {text(
                  language,
                  "La primera etapa del proyecto ya está terminada.",
                  "The first stage of the project is already completed."
                )}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid gap-5">
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/8]">
                <Image
                  src="/editorial/sana3-rose-valley.jpg"
                  alt={text(language, "Relieve puneño al atardecer", "Puna relief at dusk")}
                  fill
                  className="soft-photo object-cover"
                  style={{ objectPosition: "center 58%" }}
                />
              </div>
              <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/editorial/sana5-green-ranges.jpg"
                    alt={text(language, "Laderas abiertas en altura", "Open slopes at altitude")}
                    fill
                    className="soft-photo object-cover"
                    style={{ objectPosition: "center 54%" }}
                  />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/club/mountain-layers.jpg"
                    alt={text(language, "Relieve montañoso en capas", "Layered mountain relief")}
                    fill
                    className="soft-photo object-cover"
                    style={{ objectPosition: "center 54%" }}
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-7xl px-6 md:mt-40 md:px-10">
        <div className="grid gap-14 border-t border-black/8 pt-14 md:grid-cols-[1fr_0.52fr] md:items-end md:gap-20">
          <FadeIn>
            <p className="max-w-3xl font-serif text-4xl leading-[1.08] md:text-6xl">
              {text(
                language,
                "De este territorio nace la primera obra.",
                "From this territory, the first work is born."
              )}
            </p>
            <div className="mt-14 text-[11px] uppercase tracking-editorial">
              <Link
                href="/contacto"
                className="inline-flex text-black/52 transition-opacity duration-500 hover:opacity-72"
              >
                {text(language, "Ser parte de la primera edición", "Be part of the first edition")}
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="w-full max-w-xl justify-self-end opacity-85">
            <BookCoverPreview
              image="/club/road-dusk.jpg"
              imagePosition="center 56%"
              author="Nicolás Griffiths"
              collectionTitle="Planeta"
              territory={localizeText(firstBook.name, language)}
            />
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-5xl px-6 md:mt-40 md:px-10">
        <FadeIn className="border-t border-black/8 pt-16 text-center md:pt-24">
          <p className="whitespace-pre-line font-serif text-4xl leading-[1.08] md:text-6xl">
            {text(
              language,
              "Cinco territorios.\nCinco libros.\nUn documental.\n\nUna forma de construir una mirada completa del país.",
              "Five territories.\nFive books.\nA documentary.\n\nA way of building a complete gaze on the country."
            )}
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto mt-28 max-w-5xl px-6 md:mt-40 md:px-10">
        <FadeIn className="border-t border-black/8 pt-16 text-center md:pt-24">
          <p className="font-serif text-4xl leading-tight md:text-6xl">
            {text(language, "Esto es solo el comienzo.", "This is only the beginning.")}
          </p>
        </FadeIn>
      </section>
    </main>
  );
}
