"use client";

import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useLanguage } from "@/components/language-provider";
import { FadeIn } from "@/components/fade-in";

const aboutCopy = {
  motivation: {
    es: [
      "La forma en que Argentina se muestra,\ntanto hacia afuera como hacia adentro,\nsuele quedar reducida a un relato limitado.",
      "Gran parte del país —su escala, su diversidad y las formas de vida que lo sostienen— no aparece en ese discurso.",
      "Planeta Argentina surge para trabajar sobre esa distancia.",
      "No para construir una nueva versión, sino para ampliar la mirada: recorrer el territorio en profundidad y dar lugar a aquello que queda fuera de los relatos más visibles."
    ],
    en: [
      "The way Argentina is shown,\nboth outward and inward,\nis often reduced to a limited narrative.",
      "Large parts of the country—its scale, diversity and the ways of life that sustain it—do not appear in that discourse.",
      "Planeta Argentina emerges to work on that distance.",
      "Not to construct a new version, but to widen the gaze: to move through the territory in depth and make room for what remains outside the most visible narratives."
    ],
    pt: [
      "A forma como a Argentina se mostra,\ntanto para fora como para dentro,\ncostuma ficar reduzida a um relato limitado.",
      "Grande parte do país — a sua escala, a sua diversidade e as formas de vida que o sustentam — não aparece nesse discurso.",
      "Planeta Argentina surge para trabalhar essa distância.",
      "Não para construir uma nova versão, mas para ampliar o olhar: percorrer o território em profundidade e dar lugar àquilo que fica fora dos relatos mais visíveis."
    ]
  },
  work: {
    es: [
      "El trabajo se organiza\nen expediciones.",
      "Cada etapa implica recorrer una región específica del país en condiciones reales, con tiempos prolongados en cada lugar.",
      "No se trata solo del paisaje. Se trata también de las personas que viven y sostienen esos entornos, y de la relación que construyen con el territorio."
    ],
    en: [
      "The work is organized\nthrough expeditions.",
      "Each stage involves moving through a specific region of the country under real conditions, with extended time in each place.",
      "It is not only about landscape. It is also about the people who live in and sustain those environments, and the relationship they build with the territory."
    ],
    pt: [
      "O trabalho organiza-se\nem expedições.",
      "Cada etapa implica percorrer uma região específica do país em condições reais, com tempos prolongados em cada lugar.",
      "Não se trata apenas da paisagem. Trata-se também das pessoas que vivem e sustentam esses ambientes, e da relação que constroem com o território."
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
    ],
    pt: [
      "De cada expedição surgem\nlivros e peças documentais.",
      "Cada etapa constrói um registo próprio, que combina imagem, território e relato, e que faz parte de um arquivo em desenvolvimento."
    ]
  },
  history: {
    es: [
      "Durante años recorrí Argentina.\nPero sentía que todavía había algo que no estábamos sabiendo mirar.",
      "El proyecto fue iniciado por Nicolás Griffiths. Nació en La Pampa y creció en la Patagonia. Durante años recorrió el país con su familia, atravesando regiones muy distintas entre sí.",
      "Con el tiempo, esa experiencia empezó a tomar otra forma: dejar de pasar por los lugares para empezar a detenerse en ellos.",
      "Planeta Argentina surge de ese cambio, y del trabajo sostenido en campo que vino después."
    ],
    en: [
      "For years I traveled across Argentina.\nBut I felt there was still something we were failing to see.",
      "The project was initiated by Nicolás Griffiths. He was born in La Pampa and grew up in Patagonia. For years he moved through the country with his family, crossing regions that were radically different from one another.",
      "Over time, that experience began to take another form: to stop passing through places and start lingering in them.",
      "Planeta Argentina emerges from that change, and from the sustained fieldwork that followed."
    ],
    pt: [
      "Durante anos percorri a Argentina.\nMas sentia que ainda havia algo que não estávamos a conseguir ver.",
      "O projeto foi iniciado por Nicolás Griffiths. Nasceu em La Pampa e cresceu na Patagónia. Durante anos percorreu o país com a família, atravessando regiões muito diferentes entre si.",
      "Com o tempo, essa experiência começou a tomar outra forma: deixar de passar pelos lugares para começar a demorar-se neles.",
      "Planeta Argentina surge dessa mudança, e do trabalho continuado em campo que veio depois."
    ]
  },
  closing: {
    es: "No se trata de recorrer el país.\n\nSe trata de entenderlo desde adentro.",
    en: "It is not about traveling across the country.\n\nIt is about understanding it from within.",
    pt: "Não se trata de percorrer o país.\n\nTrata-se de entendê-lo por dentro."
  }
} as const;

export default function AboutPage() {
  const { language } = useLanguage();

  const motivation = aboutCopy.motivation[language] ?? aboutCopy.motivation.es;
  const work = aboutCopy.work[language] ?? aboutCopy.work.es;
  const output = aboutCopy.output[language] ?? aboutCopy.output.es;
  const history = aboutCopy.history[language] ?? aboutCopy.history.es;
  const closing = aboutCopy.closing[language] ?? aboutCopy.closing.es;

  return (
    <main className="pb-28 pt-32 md:pb-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="border-t border-black/8 pt-12 md:pt-16">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: language === "pt" ? "Início" : "Home", href: "/" },
                { label: language === "es" ? "Nosotros" : language === "pt" ? "Sobre" : "About" }
              ]}
            />
            <div className="mx-auto mt-12 max-w-6xl text-center md:mt-14">
              <p className="mx-auto max-w-[22ch] whitespace-pre-line font-serif text-[2.15rem] leading-[1.12] text-black/92 md:max-w-[21ch] md:text-[3rem] md:leading-[1.06]">
                {motivation[0]}
              </p>
              <div className="mx-auto mt-12 max-w-2xl space-y-8 text-[0.98rem] leading-8 text-black/68 md:text-[1.06rem] md:leading-9">
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
                  : language === "pt"
                    ? "Salar aberto com nuvens sobre a cordilheira"
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
          <div className="mx-auto mt-10 max-w-2xl space-y-8 text-[0.98rem] leading-8 text-black/68 md:text-[1.06rem] md:leading-9">
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
            <p className="mx-auto mt-10 max-w-lg text-[0.98rem] leading-8 text-black/68 md:text-[1.06rem] md:leading-9">
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
          <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-start md:gap-20">
            <FadeIn className="md:pt-2">
              <p className="max-w-[15ch] whitespace-pre-line font-serif text-[2.25rem] leading-[1.08] text-black/90 md:max-w-[12ch] md:text-[3.4rem] md:leading-[1.03]">
                {history[0]}
              </p>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="relative aspect-[16/11] overflow-hidden md:aspect-[5/6]">
                <Image
                  src="/about/founder-road-dusk-web.jpg"
                  alt={
                    language === "es"
                      ? "Ruta de altura al atardecer durante una expedición"
                      : language === "pt"
                        ? "Estrada de altitude ao entardecer durante uma expedição"
                        : "High-altitude road at dusk during an expedition"
                  }
                  fill
                  className="soft-photo object-cover"
                  style={{ objectPosition: "center 58%" }}
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.12} className="mt-12 md:mt-16">
            <div className="max-w-2xl space-y-8 text-[0.98rem] leading-8 text-black/68 md:text-[1.06rem] md:leading-9">
              {history.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
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
