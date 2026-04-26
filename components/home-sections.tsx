"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { useLanguage, type Language } from "@/components/language-provider";
import { localizeText, territories } from "@/data/site";

function text(language: Language, es: string, en: string) {
  return language === "es" ? es : en;
}

export function HomeHero() {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/home/hero.jpg"
        alt={text(language, "Paisaje de Planeta Argentina", "Planeta Argentina landscape")}
        fill
        priority
        quality={92}
        className="soft-photo object-cover"
        style={{ objectPosition: "center center" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_72%,rgba(246,240,231,0.44),transparent_38%),linear-gradient(180deg,rgba(244,239,232,0.16)_0%,transparent_34%,rgba(244,239,232,0.08)_100%)]" />
      <div className="absolute inset-0 flex items-start px-7 pb-16 pt-20 text-black md:px-14 md:pt-24 lg:px-16">
        <FadeIn className="max-w-5xl">
          <h1 className="w-fit whitespace-pre-line font-serif text-[4rem] leading-[0.93] text-black/96 md:text-[6.75rem] lg:text-[7.3rem]">
            {text(language, "Una Forma\nde mirar\nel país", "A way\nof looking\nat the country")}
          </h1>
          <p className="mt-10 w-fit whitespace-pre-line font-serif text-[2.15rem] leading-[1] text-black/86 md:mt-12 md:text-[3.15rem] lg:text-[3.45rem]">
            {text(language, "Más amplia.\nMás profunda", "Wider.\nDeeper")}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function HomeStatement() {
  const { language } = useLanguage();

  return (
    <section className="px-6 py-36 md:px-10 md:py-52">
      <FadeIn className="mx-auto max-w-4xl text-center">
        <p className="mx-auto max-w-[12ch] font-serif text-4xl leading-[1.04] text-black/90 md:text-[4.7rem] md:leading-[1.01]">
          {text(
            language,
            "El país cambia por completo de un lugar a otro.",
            "The country changes completely from one place to another."
          )}
        </p>
        <div className="mx-auto mt-14 max-w-2xl space-y-8 text-sm leading-8 text-black/62 md:text-[1rem] md:leading-9">
          <p>
            {text(
              language,
              "Cada territorio plantea una forma distinta de habitar, moverse y entender el entorno.",
              "Each territory raises a different way of inhabiting, moving through and understanding the environment."
            )}
          </p>
          <p>
            {text(
              language,
              "Planeta Argentina recorre esos espacios para acercarse a su escala real, no solo desde el paisaje, sino también desde las historias que lo sostienen.",
              "Planeta Argentina moves through those spaces to approach their real scale, not only through landscape, but also through the stories that sustain it."
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
      status: text(language, "La Puna — Primera etapa", "The Puna — First stage"),
      body: text(
        language,
        "La altura transforma el cuerpo y cambia la medida de todo.",
        "Altitude transforms the body and changes the measure of everything."
      )
    },
    {
      status: text(language, "Selvas y Humedales — Próxima etapa", "Jungles and Wetlands — Next stage"),
      body: text(
        language,
        "La vida aparece densa, cambiante, atravesada por agua y monte.",
        "Life appears dense, changing, crossed by water and forest."
      )
    },
    {
      status: text(language, "Cuyo — En desarrollo", "Cuyo — In development"),
      body: text(
        language,
        "Montaña y desierto ordenan la distancia, el esfuerzo y la escala.",
        "Mountain and desert shape distance, effort and scale."
      )
    },
    {
      status: text(language, "Patagonia Cordillerana — En desarrollo", "Andean Patagonia — In development"),
      body: text(
        language,
        "Frío, roca y silencio abren otra relación con la intemperie.",
        "Cold, rock and silence open another relationship with exposure."
      )
    },
    {
      status: text(language, "Patagonia Atlántica — En desarrollo", "Atlantic Patagonia — In development"),
      body: text(
        language,
        "La costa revela un país definido por viento, fauna y océano.",
        "The coast reveals a country shaped by wind, wildlife and ocean."
      )
    }
  ];

  return (
    <section className="border-t border-black/8 px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-editorial text-stone">
            {text(language, "Territorios", "Territories")}
          </p>
          <h2 className="mt-4 max-w-[10ch] font-serif text-4xl leading-[1.02] text-black/90 md:text-[4.65rem] md:leading-[0.98]">
            {text(language, "Cinco expediciones.", "Five expeditions.")}
          </h2>
          <div className="mt-10 max-w-2xl space-y-8 text-sm leading-8 text-black/62 md:text-[1rem] md:leading-9">
            <p>
              {text(
                language,
                "El proyecto se desarrolla a través de cinco expediciones, cada una en un entorno distinto.",
                "The project unfolds through five expeditions, each in a different environment."
              )}
            </p>
            <p>
              {text(
                language,
                "No como una suma de lugares, sino como distintas formas de recorrer y entender el país.",
                "Not as a sum of places, but as different ways of moving through and understanding the country."
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
                  <p className="text-[11px] uppercase tracking-editorial text-black/38">
                    {territoryDescriptions[index].status}
                  </p>
                  <h3 className="mt-3 font-serif text-[2.75rem] leading-[0.98] text-black/92 md:text-[3.45rem]">
                    {localizeText(territory.name, language)}
                  </h3>
                  <p className="mt-5 max-w-[18rem] text-sm leading-8 text-black/58 md:text-[0.98rem] md:leading-9">
                    {territoryDescriptions[index].body}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-24 max-w-xl border-t border-black/8 pt-10 md:mt-32">
          <p className="whitespace-pre-line text-sm leading-8 text-black/62 md:text-[1rem] md:leading-9">
            {text(
              language,
              "La primera etapa ya fue realizada.\nLas próximas forman parte del desarrollo del proyecto.",
              "The first stage has already been completed.\nThe next ones are part of the project’s development."
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
          <p className="text-[11px] uppercase tracking-editorial text-stone">
            {text(language, "Obra", "Work")}
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-none text-black/92 md:text-[5.3rem]">
            {localizeText(firstBook.name, language)}
          </h2>
          <div className="mt-9 max-w-md space-y-7 text-sm leading-8 text-black/62 md:text-[1rem] md:leading-9">
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
          <div className="mt-14 text-[11px] uppercase tracking-editorial">
            <Link
              href="/coleccion"
              className="inline-flex text-black/52 transition-opacity duration-500 hover:opacity-72"
            >
              {text(language, "Ser parte de la primera edición", "Be part of the first edition")}
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-14 md:mt-16">
          <Link href={`/territories/${firstBook.slug}`} className="group block">
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/8]">
              <Image
                src="/editorial/fn23-volcanic-plain-dusk.jpg"
                alt={text(language, "Planicie volcánica en la Puna al atardecer", "Volcanic plain in the Puna at dusk")}
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
          <p className="text-[11px] uppercase tracking-editorial text-stone">
            {text(language, "Experiencias", "Experiences")}
          </p>
          <h2 className="mt-4 max-w-[9ch] font-serif text-4xl leading-[1.02] text-black/90 md:text-[4.65rem] md:leading-[0.98]">
            {text(language, "Dejar de mirar y empezar a vivir", "Stop looking and begin to live")}
          </h2>
          <div className="mt-10 max-w-lg space-y-7 text-sm leading-8 text-black/62 md:text-[1rem] md:leading-9">
            <p>{text(language, "Algunos lugares no se entienden desde afuera.", "Some places cannot be understood from outside.")}</p>
            <p>
              {text(
                language,
                "Las experiencias buscan abrir esa posibilidad: estar ahí, aunque sea por un momento.",
                "The experiences seek to open that possibility: to be there, even if only for a moment."
              )}
            </p>
          </div>
          <p className="mt-14 text-[11px] uppercase tracking-editorial text-black/42">
            {text(language, "Primeras experiencias en desarrollo", "First experiences in development")}
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-14 md:mt-16">
          <Link href="/experiences" className="group block">
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/8]">
              <Image
                src="/editorial/fn108-rose-mountains.jpg"
                alt={text(language, "Cordón de montaña al atardecer", "Mountain range at dusk")}
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
    <section className="border-t border-black/8 px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-editorial text-stone">
            {text(language, "Acompañan", "Support")}
          </p>
          <h2 className="mt-4 max-w-[10ch] font-serif text-4xl leading-[1.04] text-black/90 md:text-[4.2rem] md:leading-[1.01]">
            {text(language, "Una forma de sostener el proyecto.", "A way to sustain the project.")}
          </h2>
          <div className="mt-10 max-w-2xl space-y-8 text-sm leading-8 text-black/64 md:text-[1rem] md:leading-9">
            <p>
              {text(
                language,
                "Buscamos marcas argentinas que entiendan que el país es mucho más amplio de lo que se muestra.",
                "We seek Argentine brands that understand the country is much broader than what is usually shown."
              )}
            </p>
            <p>
              {text(
                language,
                "Que quieran acompañar un proyecto que se construye desde los territorios, trabajando en entornos reales y documentando historias que forman parte de lo que somos.",
                "Brands willing to accompany a project built from the territories, working in real environments and documenting stories that form part of who we are."
              )}
            </p>
          </div>
        </FadeIn>

        <FadeIn className="mt-16 max-w-4xl border-t border-black/8 pt-10 md:mt-20">
          <p className="max-w-[14ch] whitespace-pre-line font-serif text-3xl leading-[1.14] text-black/86 md:text-[3.85rem] md:leading-[1.06]">
            {text(
              language,
              "La idea no es mostrar una Argentina más.\nEs ayudar a mirarla de una manera más compleja.",
              "The idea is not to show one more Argentina.\nIt is to help look at it in a more complex way."
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
    <section className="border-t border-black/8 px-6 py-36 md:px-10 md:py-52">
      <FadeIn className="mx-auto max-w-5xl text-center">
        <p className="whitespace-pre-line font-serif text-[2.35rem] leading-[1.08] text-black/88 md:text-[4rem] md:leading-[1.03]">
          {text(
            language,
            "Cinco territorios.\nCinco libros.\nUn documental.",
            "Five territories.\nFive books.\nOne documentary."
          )}
        </p>

        <h2 className="mx-auto mt-16 max-w-[13ch] font-serif text-[2.5rem] leading-[1.1] text-black/92 md:mt-24 md:text-[4.35rem] md:leading-[1.04]">
          {text(
            language,
            "Una forma de construir una mirada completa del país.",
            "A way to build a fuller view of the country."
          )}
        </h2>

        <p className="mt-24 font-serif text-[2.1rem] leading-[1.12] text-black/88 md:mt-32 md:text-[3.35rem] md:leading-[1.06]">
          {text(language, "Esto es solo el comienzo.", "This is only the beginning.")}
        </p>
      </FadeIn>
    </section>
  );
}
