"use client";

import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useLanguage } from "@/components/language-provider";
import { FadeIn } from "@/components/fade-in";

const aboutCopy = {
  motivation: {
    es: [
      "La forma en la que Argentina se muestra,\ntanto hacia afuera como hacia adentro,\nsuele quedar reducida a un relato limitado.",
      "Gran parte del país —su escala, su diversidad y las formas de vida que lo sostienen— no aparece en ese discurso.",
      "Planeta Argentina surge para trabajar sobre esa distancia.",
      "No para construir una nueva versión, sino para ampliar la mirada: recorrer el territorio en profundidad y dar lugar a aquello que queda fuera de los relatos más visibles."
    ],
    en: [
      "The way Argentina is shown,\nboth outward and inward,\nis often reduced to a limited narrative.",
      "Large parts of the country—its scale, diversity and the ways of life that sustain it—do not appear in that discourse.",
      "Planeta Argentina emerges to work on that distance.",
      "Not to construct a new version, but to widen the gaze: to move through the territory in depth and make room for what remains outside the most visible narratives."
    ]
  },
  work: {
    es: [
      "El trabajo se organiza\nen expediciones.",
      "Cada etapa implica recorrer una región específica del país en condiciones reales, con tiempos prolongados en cada lugar.",
      "No se trata solo del paisaje. También de las personas que viven y sostienen esos entornos, y de la relación que construyen con el territorio."
    ],
    en: [
      "The work is organized\nthrough expeditions.",
      "Each stage involves moving through a specific region of the country under real conditions, with extended time in each place.",
      "It is not only about landscape. It is also about the people who live in and sustain those environments, and the relationship they build with the territory."
    ]
  },
  output: {
    es: [
      "De cada expedición surgen\nlibros y piezas documentales.",
      "Cada etapa construye un registro propio, que combina imagen, territorio y relato, y que forma parte de un archivo en desarrollo."
    ],
    en: [
      "From each expedition come\nbooks and documentary pieces.",
      "Each stage builds its own record, combining image, territory and narrative, and becoming part of an archive in development."
    ]
  },
  history: {
    es: [
      "El proyecto fue iniciado\npor Nicolás Griffiths.",
      "Nací en La Pampa y crecí en la Patagonia. Durante años recorrí el país viajando con mi familia, atravesando regiones muy distintas entre sí.",
      "Con el tiempo, esa experiencia empezó a tomar otra forma: dejar de pasar por los lugares para empezar a detenerme en ellos.",
      "El proyecto aparece a partir de ese cambio."
    ],
    en: [
      "The project was initiated\nby Nicolás Griffiths.",
      "I was born in La Pampa and grew up in Patagonia. For years I traveled across the country with my family, moving through very different regions.",
      "Over time, that experience began to take another form: to stop passing through places and start lingering in them.",
      "The project appears from that change."
    ]
  },
  closing: {
    es: "No se trata de recorrer el país.\n\nSe trata de entenderlo desde adentro.",
    en: "It is not about traveling across the country.\n\nIt is about understanding it from within."
  }
} as const;

export default function AboutPage() {
  const { language } = useLanguage();

  const motivation = aboutCopy.motivation[language];
  const work = aboutCopy.work[language];
  const output = aboutCopy.output[language];
  const history = aboutCopy.history[language];
  const closing = aboutCopy.closing[language];

  return (
    <main className="pb-28 pt-32 md:pb-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="border-t border-black/8 pt-12 md:pt-16">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: language === "es" ? "Home" : "Home", href: "/" },
                { label: language === "es" ? "Nosotros" : "About" }
              ]}
            />
            <div className="mx-auto mt-12 max-w-6xl text-center md:mt-14">
              <p className="mx-auto max-w-[22ch] whitespace-pre-line font-serif text-[2.15rem] leading-[1.12] text-black/92 md:max-w-[21ch] md:text-[3rem] md:leading-[1.06]">
                {motivation[0]}
              </p>
              <div className="mx-auto mt-12 max-w-2xl space-y-8 text-sm leading-8 text-black/68 md:text-[1rem] md:leading-9">
                {motivation.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-6 md:mt-32 md:px-10">
        <FadeIn className="overflow-hidden">
          <div className="relative aspect-[16/9] md:aspect-[16/7]">
            <Image
              src="/editorial/fn1-salt-clouds.jpg"
              alt={
                language === "es"
                  ? "Salar abierto con nubes sobre la cordillera"
                  : "Open salt flat with clouds over the range"
              }
              fill
              className="soft-photo object-cover"
              style={{ objectPosition: "center 52%" }}
              priority
            />
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-6 md:mt-32 md:px-10">
        <FadeIn className="mx-auto max-w-4xl border-t border-black/8 pt-12 text-center md:pt-16">
          <p className="mx-auto max-w-[15ch] whitespace-pre-line font-serif text-[2.2rem] leading-[1.12] text-black/88 md:max-w-[14ch] md:text-[2.85rem] md:leading-[1.08]">
            {work[0]}
          </p>
          <div className="mx-auto mt-10 max-w-2xl space-y-8 text-sm leading-8 text-black/68 md:text-[1rem] md:leading-9">
            {work.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-6 md:mt-32 md:px-10">
        <FadeIn className="border-t border-black/8 pt-12 md:pt-16">
          <div className="mx-auto max-w-xl text-center">
            <p className="mx-auto max-w-[16ch] whitespace-pre-line font-serif text-[2.2rem] leading-[1.12] text-black/88 md:max-w-[15ch] md:text-[2.85rem] md:leading-[1.08]">
              {output[0]}
            </p>
            <p className="mx-auto mt-10 max-w-lg text-sm leading-8 text-black/68 md:text-[1rem] md:leading-9">
              {output[1]}
            </p>
          </div>

          <div className="mt-14 overflow-hidden bg-black md:mt-16">
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
        </FadeIn>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-6 md:mt-32 md:px-10">
        <div className="border-t border-black/8 pt-12 md:pt-16">
          <FadeIn>
            <div className="mx-auto max-w-3xl space-y-8 text-sm leading-8 text-black/68 md:text-[1rem] md:leading-9">
              {history.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "mx-auto max-w-[21ch] whitespace-pre-line text-center font-serif text-[2.2rem] leading-[1.12] text-black/88 md:max-w-[20ch] md:text-[2.85rem] md:leading-[1.08]"
                      : ""
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="mt-14 max-w-sm md:mt-16 md:ml-auto">
            <div className="relative aspect-[4/5] overflow-hidden">
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

      <section className="mx-auto mt-24 max-w-7xl px-6 md:mt-32 md:px-10">
        <FadeIn className="mx-auto max-w-4xl border-t border-black/8 pt-12 text-center md:pt-16">
          <p className="whitespace-pre-line font-serif text-[1.9rem] leading-[1.3] text-black/92 md:text-[2.95rem] md:leading-[1.18]">
            {closing}
          </p>
        </FadeIn>
      </section>
    </main>
  );
}
