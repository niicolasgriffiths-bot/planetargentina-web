"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { useLanguage, type Language } from "@/components/language-provider";
import { archiveCategories, localizeText, territories } from "@/data/site";
import { homeCopy, t } from "@/data/site-content";

function text(language: Language, es: string, en: string) {
  return language === "es" ? es : en;
}

export function HomeHero() {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="/home/hero.jpg"
        alt={text(language, "Paisaje de Planeta Argentina", "Planeta Argentina landscape")}
        fill
        priority
        className="soft-photo object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4efe8]/24 via-transparent to-[#f4efe8]/24" />
      <div className="absolute inset-x-0 bottom-0 top-0 flex items-end px-6 pb-16 pt-32 text-black md:px-10 md:pb-24">
        <FadeIn className="max-w-4xl">
          <h1 className="max-w-5xl font-serif text-6xl leading-[0.94] text-black md:text-[8.7rem]">
            {t(homeCopy.heroTitle, language)}
          </h1>
          <p className="mt-10 max-w-3xl font-serif text-4xl leading-[0.98] text-black/68 md:mt-14 md:text-[5.2rem]">
            {t(homeCopy.heroSubtitle, language)}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function HomeStatement() {
  const { language } = useLanguage();

  return (
    <section className="px-6 py-32 md:px-10 md:py-44">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="font-serif text-3xl leading-[1.18] text-black/88 md:text-5xl">
          {text(
            language,
            "Planeta Argentina construye una mirada sobre el país a través de sus territorios y sus historias.",
            "Planeta Argentina builds a gaze on the country through its territories and stories."
          )}
        </p>
        <p className="mx-auto mt-10 max-w-xl text-sm leading-8 text-black/58 md:text-base md:leading-9">
          {text(
            language,
            "Un recorrido que se convierte en cinco libros y un documental.",
            "A journey that becomes five books and a documentary."
          )}
        </p>
      </FadeIn>
    </section>
  );
}

export function HomeEntryPoints() {
  const { language } = useLanguage();
  const entryPoints = [
    {
      href: "/territories",
      title: text(language, "Territorios", "Territories"),
      body: text(language, "Paisajes que parecen irreales", "Landscapes that seem unreal"),
      image: archiveCategories[1].image,
      imagePosition: archiveCategories[1].imagePosition,
      alt: localizeText(archiveCategories[1].name, language)
    },
    {
      href: "/stories",
      title: text(language, "Historias", "Stories"),
      body: text(language, "Formas de vivir en cada lugar", "Ways of living in each place"),
      image: archiveCategories[0].image,
      imagePosition: archiveCategories[0].imagePosition,
      alt: localizeText(archiveCategories[0].name, language)
    },
    {
      href: "/experiences",
      title: text(language, "Experiencias", "Experiences"),
      body: text(language, "Cuando dejás de mirar desde afuera", "When you stop looking from outside"),
      image: "/stages/cuyo/gallery-mountain-layers.jpg",
      imagePosition: "center center",
      alt: text(language, "Paisaje de montaña y altura", "Mountain and high-altitude landscape")
    }
  ];

  return (
    <section className="border-t border-black/8 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-3xl">
          <h2 className="font-serif text-4xl leading-none md:text-6xl">
            {text(language, "Tres formas de conocer el país", "Three ways to know the country")}
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {entryPoints.map((item, index) => (
            <FadeIn key={item.href} delay={index * 0.08}>
              <Link href={item.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/4]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                    className="soft-photo object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="font-serif text-4xl leading-none md:text-5xl">{item.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-8 text-black/58 md:text-base md:leading-9">
                    {item.body}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeWork() {
  const { language } = useLanguage();
  const firstBook = territories[0];

  return (
    <section className="border-t border-black/8 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.58fr_1.42fr] md:items-center md:gap-20">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-editorial text-stone">
            {text(language, "Obra", "Work")}
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-none md:text-7xl">
            {localizeText(firstBook.name, language)}
          </h2>
          <div className="mt-8 max-w-md space-y-6 text-sm leading-8 text-black/62 md:text-base md:leading-9">
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
                "La primera obra ya está terminada.",
                "The first work is already completed."
              )}
            </p>
          </div>
          <div className="mt-12 text-[11px] uppercase tracking-editorial">
            <Link
              href="/coleccion"
              className="inline-flex text-black/52 transition-opacity duration-500 hover:opacity-72"
            >
              {text(language, "Ser parte de la primera edición", "Be part of the first edition")}
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Link href={`/territories/${firstBook.slug}`} className="group block">
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/8]">
              <Image
                src={firstBook.image}
                alt={localizeText(firstBook.name, language)}
                fill
                style={firstBook.heroPosition ? { objectPosition: firstBook.heroPosition } : undefined}
                className="soft-photo object-cover transition-transform duration-[1400ms] group-hover:scale-[1.02]"
              />
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export function HomeClosing() {
  const { language } = useLanguage();

  return (
    <section className="border-t border-black/8 px-6 py-32 md:px-10 md:py-44">
      <FadeIn className="mx-auto max-w-4xl text-center">
        <h2 className="whitespace-pre-line font-serif text-4xl leading-tight md:text-6xl">
          {text(
            language,
            "No se trata de ver más.\nSe trata de aprender a mirar.",
            "It is not about seeing more.\nIt is about learning how to look."
          )}
        </h2>
      </FadeIn>
    </section>
  );
}
