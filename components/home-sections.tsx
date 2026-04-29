"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { useLanguage, type Language } from "@/components/language-provider";
import { localizeText, territories } from "@/data/site";

function text(language: Language, es: string, en: string, pt?: string) {
  if (language === "es") return es;
  if (language === "pt") return pt ?? es;
  return en;
}

export function HomeHero() {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/home/hero.jpg"
        alt={text(language, "Paisaje de Planeta Argentina", "Planeta Argentina landscape", "Paisagem do Planeta Argentina")}
        fill
        priority
        quality={92}
        className="soft-photo object-cover md:hidden"
        style={{ objectPosition: "72% center" }}
      />
      <Image
        src="/home/hero.jpg"
        alt={text(language, "Paisaje de Planeta Argentina", "Planeta Argentina landscape", "Paisagem do Planeta Argentina")}
        fill
        priority
        quality={92}
        className="hidden soft-photo object-cover md:block"
        style={{ objectPosition: "center center" }}
      />
      <div className="absolute inset-0 md:hidden bg-[linear-gradient(90deg,rgba(244,239,232,0.24)_0%,rgba(244,239,232,0.14)_30%,rgba(244,239,232,0.02)_60%),linear-gradient(180deg,rgba(244,239,232,0.12)_0%,rgba(244,239,232,0.03)_32%,rgba(244,239,232,0.06)_100%)]" />
      <div className="absolute inset-0 hidden md:block bg-[radial-gradient(circle_at_18%_72%,rgba(246,240,231,0.44),transparent_38%),linear-gradient(180deg,rgba(244,239,232,0.16)_0%,transparent_34%,rgba(244,239,232,0.08)_100%)]" />
      <div className="absolute inset-0 flex items-start px-8 pb-14 pt-24 text-black md:px-14 md:pb-16 md:pt-20 lg:px-16 lg:pt-24">
        <FadeIn className="max-w-5xl">
          <h1 className="w-fit whitespace-pre-line font-serif text-[3.45rem] leading-[0.92] text-black/96 md:text-[6.75rem] lg:text-[7.3rem]">
            {text(language, "Una forma\nde mirar\nel país", "A way\nof looking\nat the country", "Uma forma\nde olhar\no país")}
          </h1>
          <p className="mt-8 w-fit whitespace-pre-line font-serif text-[1.8rem] leading-[1.02] text-black/84 md:mt-12 md:text-[3.15rem] lg:text-[3.45rem]">
            {text(language, "Más amplia.\nMás profunda.", "Wider.\nDeeper", "Mais ampla.\nMais profunda.")}
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
      <FadeIn className="mx-auto max-w-4xl text-center">
        <p className="mx-auto max-w-[12ch] font-serif text-4xl leading-[1.04] text-black/90 md:text-[4.7rem] md:leading-[1.01]">
          {text(
              language,
              "El país cambia por completo de un lugar a otro.",
              "The country changes completely from one place to another.",
              "O país muda por completo de um lugar para outro."
            )}
        </p>
        <div className="mx-auto mt-14 max-w-2xl space-y-8 text-[0.98rem] leading-8 text-black/62 md:text-[1.06rem] md:leading-9">
          <p>
            {text(
              language,
              "Cada territorio plantea una forma distinta de habitar, moverse y entender el entorno.",
              "Each territory raises a different way of inhabiting, moving through and understanding the environment.",
              "Cada território propõe uma forma diferente de habitar, mover-se e compreender o entorno."
            )}
          </p>
          <p>
            {text(
              language,
              "Planeta Argentina recorre esos espacios para acercarse a su escala real, no solo desde el paisaje, sino también desde las historias que lo sostienen.",
              "Planeta Argentina moves through those spaces to approach their real scale, not only through landscape, but also through the stories that sustain it.",
              "O Planeta Argentina percorre esses espaços para se aproximar da sua escala real, não apenas a partir da paisagem, mas também das histórias que a sustentam."
            )}
          </p>
        </div>
      </FadeIn>
    </section>
  );
}

export function HomeTerritories() {
  const { language } = useLanguage();
  const territoryDescriptions = [
    {
      status: text(language, "La Puna — Primera etapa", "The Puna — First stage", "A Puna — Primeira etapa"),
      body: text(
        language,
        "La altura transforma el cuerpo y cambia la medida de todo.",
        "Altitude transforms the body and changes the measure of everything.",
        "A altitude transforma o corpo e muda a medida de tudo."
      )
    },
    {
      status: text(language, "Selvas y Humedales — Próxima etapa", "Jungles and Wetlands — Next stage", "Selvas e Humedais — Próxima etapa"),
      body: text(
        language,
        "La vida aparece densa, cambiante, atravesada por agua y monte.",
        "Life appears dense, changing, crossed by water and forest.",
        "A vida aparece densa, mutável, atravessada pela água e pela mata."
      )
    },
    {
      status: text(language, "Cuyo — En desarrollo", "Cuyo — In development", "Cuyo — Em desenvolvimento"),
      body: text(
        language,
        "Montaña y desierto ordenan la distancia, el esfuerzo y la escala.",
        "Mountain and desert shape distance, effort and scale.",
        "Montanha e deserto organizam a distância, o esforço e a escala."
      )
    },
    {
      status: text(language, "Patagonia Cordillerana — En desarrollo", "Andean Patagonia — In development", "Patagónia Cordilheirana — Em desenvolvimento"),
      body: text(
        language,
        "Frío, roca y silencio abren otra relación con la intemperie.",
        "Cold, rock and silence open another relationship with exposure.",
        "Frio, rocha e silêncio abrem outra relação com a intempérie."
      )
    },
    {
      status: text(language, "Patagonia Atlántica — En desarrollo", "Atlantic Patagonia — In development", "Patagónia Atlântica — Em desenvolvimento"),
      body: text(
        language,
        "La costa revela un país definido por viento, fauna y océano.",
        "The coast reveals a country shaped by wind, wildlife and ocean.",
        "A costa revela um país definido pelo vento, pela fauna e pelo oceano."
      )
    }
  ];

  return (
    <section className="border-t border-black/8 px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-3xl">
          <p className="text-[12px] uppercase tracking-editorial text-stone">
            {text(language, "Territorios", "Territories", "Territórios")}
          </p>
          <h2 className="mt-4 max-w-[10ch] font-serif text-4xl leading-[1.02] text-black/90 md:text-[4.65rem] md:leading-[0.98]">
            {text(language, "Cinco expediciones.", "Five expeditions.", "Cinco expedições.")}
          </h2>
          <div className="mt-10 max-w-2xl space-y-8 text-[0.98rem] leading-8 text-black/62 md:text-[1.06rem] md:leading-9">
            <p>
              {text(
                language,
                "El proyecto se desarrolla a través de cinco expediciones, cada una en un entorno distinto.",
                "The project unfolds through five expeditions, each in a different environment.",
                "O projeto desenvolve-se através de cinco expedições, cada uma num ambiente distinto."
              )}
            </p>
            <p>
              {text(
                language,
                "No como una suma de lugares, sino como distintas formas de recorrer y entender el país.",
                "Not as a sum of places, but as different ways of moving through and understanding the country.",
                "Não como uma soma de lugares, mas como diferentes formas de percorrer e compreender o país."
              )}
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-12">
          {territories.map((territory, index) => (
            <FadeIn key={territory.slug} delay={index * 0.06}>
              <Link href={`/territories/${territory.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/4]">
                  <Image
                    src={territory.homeImage ?? territory.image}
                    alt={localizeText(territory.name, language)}
                    fill
                    style={
                      territory.homeImagePosition
                        ? { objectPosition: territory.homeImagePosition }
                        : territory.heroPosition
                          ? { objectPosition: territory.heroPosition }
                          : undefined
                    }
                    className="soft-photo object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]"
                  />
                </div>

                <div className="mt-5">
                  <p className="text-[12px] uppercase tracking-editorial text-black/38">
                    {territoryDescriptions[index].status}
                  </p>
                  <h3 className="mt-3 font-serif text-[2.75rem] leading-[0.98] text-black/92 md:text-[3.45rem]">
                    {localizeText(territory.name, language)}
                  </h3>
                  <p className="mt-5 max-w-[18rem] text-[0.96rem] leading-8 text-black/58 md:text-[1.03rem] md:leading-9">
                    {territoryDescriptions[index].body}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-24 max-w-xl border-t border-black/8 pt-10 md:mt-32">
          <p className="whitespace-pre-line text-[0.98rem] leading-8 text-black/62 md:text-[1.06rem] md:leading-9">
            {text(
              language,
              "La primera etapa ya fue realizada.\nLas próximas forman parte del desarrollo del proyecto.",
              "The first stage has already been completed.\nThe next ones are part of the project’s development.",
              "A primeira etapa já foi realizada.\nAs próximas fazem parte do desenvolvimento do projeto."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function HomeWork() {
  const { language } = useLanguage();
  const firstBook = territories[0];

  return (
    <section className="border-t border-black/8 px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-xl">
          <p className="text-[12px] uppercase tracking-editorial text-stone">
            {text(language, "Obra", "Work", "Obra")}
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-none text-black/92 md:text-[5.3rem]">
            {localizeText(firstBook.name, language)}
          </h2>
          <div className="mt-8 max-w-md space-y-7 text-[0.98rem] leading-8 text-black/62 md:mt-10 md:text-[1.06rem] md:leading-9">
            <p>
              {text(
                language,
                "Altura, salares y vida en uno de los entornos más extremos del país.",
                "Altitude, salt flats and life in one of the country’s most extreme environments.",
                "Altitude, salares e vida num dos ambientes mais extremos do país."
              )}
            </p>
            <p>
              {text(
                language,
                "La primera obra ya está terminada.",
                "The first work is already completed.",
                "A primeira obra já está concluída."
              )}
            </p>
          </div>
          <div className="mt-12 text-[12px] uppercase tracking-editorial md:mt-16">
            <Link
              href="/coleccion"
              className="inline-flex text-black/52 transition-opacity duration-500 hover:opacity-72"
            >
              {text(language, "Ser parte de la primera edición", "Be part of the first edition", "Fazer parte da primeira edição")}
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-14 md:mt-16">
          <Link href={`/territories/${firstBook.slug}`} className="group block">
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/8]">
              <Image
                src="/editorial/fn23-volcanic-plain-dusk.jpg"
                alt={text(language, "Planicie volcánica en la Puna al atardecer", "Volcanic plain in the Puna at dusk", "Planície vulcânica na Puna ao entardecer")}
                fill
                style={{ objectPosition: "center 58%" }}
                className="soft-photo object-cover transition-transform duration-[1400ms] group-hover:scale-[1.02]"
              />
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export function HomeExperiences() {
  const { language } = useLanguage();

  return (
    <section className="border-t border-black/8 px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-xl">
          <p className="text-[12px] uppercase tracking-editorial text-stone">
            {text(language, "Experiencias", "Experiences", "Experiências")}
          </p>
          <h2 className="mt-4 max-w-[9ch] font-serif text-4xl leading-[1.02] text-black/90 md:text-[4.65rem] md:leading-[0.98]">
            {text(language, "Dejar de mirar y empezar a vivir", "Stop looking and begin to live", "Deixar de olhar e começar a viver")}
          </h2>
          <div className="mt-8 max-w-lg space-y-7 text-[0.98rem] leading-8 text-black/62 md:mt-10 md:text-[1.06rem] md:leading-9">
            <p>{text(language, "Algunos lugares no se entienden desde afuera.", "Some places cannot be understood from outside.", "Alguns lugares não se compreendem a partir de fora.")}</p>
            <p>
              {text(
                language,
                "Las experiencias buscan abrir esa posibilidad: estar ahí, aunque sea por un momento.",
                "The experiences seek to open that possibility: to be there, even if only for a moment.",
                "As experiências procuram abrir essa possibilidade: estar lá, ainda que seja por um momento."
              )}
            </p>
          </div>
          <p className="mt-12 text-[12px] uppercase tracking-editorial text-black/42 md:mt-16">
            {text(language, "Primeras experiencias en desarrollo", "First experiences in development", "Primeiras experiências em desenvolvimento")}
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-14 md:mt-16">
          <Link href="/experiences" className="group block">
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/8]">
              <Image
                src="/editorial/fn108-rose-mountains.jpg"
                alt={text(language, "Cordón de montaña al atardecer", "Mountain range at dusk", "Cordilheira ao entardecer")}
                fill
                className="soft-photo object-cover transition-transform duration-[1400ms] group-hover:scale-[1.02]"
                style={{ objectPosition: "center 52%" }}
              />
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export function HomeSupport() {
  const { language } = useLanguage();

  return (
    <section className="border-t border-black/8 px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-3xl">
          <p className="text-[12px] uppercase tracking-editorial text-stone">
            {text(language, "Acompañan", "Support", "Acompanham")}
          </p>
          <h2 className="mt-4 max-w-[10ch] font-serif text-4xl leading-[1.04] text-black/90 md:text-[4.2rem] md:leading-[1.01]">
            {text(language, "Una forma de sostener el proyecto.", "A way to sustain the project.", "Uma forma de sustentar o projeto.")}
          </h2>
          <div className="mt-10 max-w-2xl space-y-8 text-[0.98rem] leading-8 text-black/64 md:text-[1.06rem] md:leading-9">
            <p>
              {text(
                language,
                "Buscamos marcas argentinas que entiendan que el país es mucho más amplio de lo que se muestra.",
                "We seek Argentine brands that understand the country is much broader than what is usually shown.",
                "Procuramos marcas argentinas que entendam que o país é muito mais amplo do que aquilo que normalmente se mostra."
              )}
            </p>
            <p>
              {text(
                language,
                "Que quieran acompañar un proyecto que se construye desde los territorios, trabajando en entornos reales y documentando historias que forman parte de lo que somos.",
                "Brands willing to accompany a project built from the territories, working in real environments and documenting stories that form part of who we are.",
                "Marcas dispostas a acompanhar um projeto que se constrói a partir dos territórios, trabalhando em ambientes reais e documentando histórias que fazem parte daquilo que somos."
              )}
            </p>
          </div>
        </FadeIn>

        <FadeIn className="mt-20 max-w-4xl border-t border-black/8 pt-12 md:mt-24 md:pt-16">
          <p className="max-w-[14ch] whitespace-pre-line font-serif text-3xl leading-[1.14] text-black/86 md:text-[3.85rem] md:leading-[1.06]">
            {text(
              language,
              "La idea no es mostrar una Argentina más.\nEs ayudar a mirarla de una manera más compleja.",
              "The idea is not to show one more Argentina.\nIt is to help look at it in a more complex way.",
              "A ideia não é mostrar mais uma Argentina.\nÉ ajudar a olhá-la de uma forma mais complexa."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function HomeClosing() {
  const { language } = useLanguage();

  return (
    <section className="border-t border-black/8 px-6 py-32 md:px-10 md:py-44">
      <FadeIn className="mx-auto max-w-5xl text-center">
        <p className="whitespace-pre-line font-serif text-[2.35rem] leading-[1.08] text-black/88 md:text-[4rem] md:leading-[1.03]">
          {text(
              language,
              "Cinco territorios.\nCinco libros.\nUn documental.",
              "Five territories.\nFive books.\nOne documentary.",
              "Cinco territórios.\nCinco livros.\nUm documentário."
            )}
        </p>

        <h2 className="mx-auto mt-16 max-w-[13ch] font-serif text-[2.5rem] leading-[1.1] text-black/92 md:mt-24 md:text-[4.35rem] md:leading-[1.04]">
          {text(
              language,
              "Una forma de construir una mirada completa del país.",
              "A way to build a fuller view of the country.",
              "Uma forma de construir uma visão mais completa do país."
            )}
        </h2>

        <p className="mt-24 font-serif text-[2.1rem] leading-[1.12] text-black/88 md:mt-32 md:text-[3.35rem] md:leading-[1.06]">
            {text(language, "Esto es solo el comienzo.", "This is only the beginning.", "Isto é apenas o começo.")}
        </p>
      </FadeIn>
    </section>
  );
}
