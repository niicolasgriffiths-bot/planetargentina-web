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
          <p className="mt-10 max-w-[20rem] text-[0.98rem] leading-7 text-black/66 md:mt-12 md:max-w-[28rem] md:text-[1.05rem] md:leading-8">
            {text(
              language,
              "Argentina suele verse desde una imagen limitada. Pero el país es mucho más amplio, diverso y profundo.",
              "Argentina is often seen through a limited image. But the country is far broader, more diverse and deeper than that.",
              "A Argentina costuma ser vista através de uma imagem limitada. Mas o país é muito mais amplo, diverso e profundo."
            )}
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
      <FadeIn>
        <Link href="/nosotros" className="group mx-auto block max-w-4xl text-center">
          <p className="mx-auto max-w-[15ch] font-serif text-4xl leading-[1.04] text-black/90 transition-opacity duration-500 group-hover:opacity-74 md:text-[4.7rem] md:leading-[1.01]">
            {text(
              language,
              "Pero muchas veces seguimos mirándola desde las mismas imágenes.",
              "And yet we often keep looking at it through the same images.",
              "Mas muitas vezes continuamos a olhá-la a partir das mesmas imagens."
            )}
          </p>
          <div className="mx-auto mt-14 max-w-2xl space-y-8 text-[0.98rem] leading-8 text-black/62 transition-opacity duration-500 group-hover:opacity-74 md:text-[1.06rem] md:leading-9">
            <p>
              {text(
                language,
                "Planeta Argentina recorre territorios extremos, culturas y formas de vida que rara vez forman parte de la representación del país.",
                "Planeta Argentina moves through extreme territories, cultures and ways of life that rarely take part in the country’s representation.",
                "Planeta Argentina percorre territórios extremos, culturas e formas de vida que raramente fazem parte da representação do país."
              )}
            </p>
            <p>
              {text(
                language,
                "La primera expedición recorrió más de 8.500 km por la Puna Argentina, atravesando territorios por encima de los 4.000 metros.",
                "The first expedition covered more than 8,500 km across the Argentine Puna, moving through territories above 4,000 meters.",
                "A primeira expedição percorreu mais de 8.500 km pela Puna Argentina, atravessando territórios acima dos 4.000 metros."
              )}
            </p>
          </div>
        </Link>
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
        <FadeIn>
          <Link href="/territories" className="group block max-w-3xl">
            <p className="text-[12px] uppercase tracking-editorial text-stone transition-opacity duration-500 group-hover:opacity-72">
              {text(language, "Territorios", "Territories", "Territórios")}
            </p>
            <h2 className="mt-4 max-w-[10ch] font-serif text-4xl leading-[1.02] text-black/90 transition-opacity duration-500 group-hover:opacity-74 md:text-[4.65rem] md:leading-[0.98]">
              {text(language, "Cinco expediciones.", "Five expeditions.", "Cinco expedições.")}
            </h2>
            <div className="mt-10 max-w-2xl space-y-8 text-[0.98rem] leading-8 text-black/62 transition-opacity duration-500 group-hover:opacity-74 md:text-[1.06rem] md:leading-9">
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
          </Link>
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
        <FadeIn>
          <div className="max-w-xl">
            <Link href="/coleccion" className="group block">
              <p className="text-[12px] uppercase tracking-editorial text-stone transition-opacity duration-500 group-hover:opacity-72">
                {text(language, "Primera edición", "First edition", "Primeira edição")}
              </p>
              <h2 className="mt-4 font-serif text-5xl leading-none text-black/92 transition-opacity duration-500 group-hover:opacity-74 md:text-[5.3rem]">
                {localizeText(firstBook.name, language)}
              </h2>
              <div className="mt-8 max-w-md space-y-7 text-[0.98rem] leading-8 text-black/62 transition-opacity duration-500 group-hover:opacity-74 md:mt-10 md:text-[1.06rem] md:leading-9">
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
                    "La primera edición ya está terminada. Disponible próximamente.",
                    "The first edition is already complete. Available soon.",
                    "A primeira edição já está concluída. Disponível em breve."
                  )}
                </p>
              </div>
            </Link>
            <div className="mt-12 text-[12px] uppercase tracking-editorial md:mt-16">
              <Link
                href="/contacto"
                className="inline-flex text-black/52 transition-opacity duration-500 hover:opacity-72"
              >
                {text(language, "Consultar la primera edición", "Inquire about the first edition", "Consultar a primeira edição")}
              </Link>
            </div>
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
        <FadeIn>
          <Link href="/experiences" className="group block max-w-xl">
            <p className="text-[12px] uppercase tracking-editorial text-stone transition-opacity duration-500 group-hover:opacity-72">
              {text(language, "Experiencias", "Experiences", "Experiências")}
            </p>
            <h2 className="mt-4 max-w-[9ch] font-serif text-4xl leading-[1.02] text-black/90 transition-opacity duration-500 group-hover:opacity-74 md:text-[4.65rem] md:leading-[0.98]">
              {text(language, "Dejar de mirar y empezar a vivir", "Stop looking and begin to live", "Deixar de olhar e começar a viver")}
            </h2>
            <div className="mt-8 max-w-lg space-y-7 text-[0.98rem] leading-8 text-black/62 transition-opacity duration-500 group-hover:opacity-74 md:mt-10 md:text-[1.06rem] md:leading-9">
              <p>{text(language, "Algunos lugares no se entienden desde afuera.", "Some places cannot be understood from outside.", "Alguns lugares não se compreendem a partir de fora.")}</p>
              <p>
                {text(
                  language,
                  "Las experiencias abren esa posibilidad: entrar en contacto con algunos de los territorios recorridos por el proyecto.",
                  "The experiences open that possibility: entering into contact with some of the territories crossed by the project.",
                  "As experiências abrem essa possibilidade: entrar em contacto com alguns dos territórios percorridos pelo projeto."
                )}
              </p>
            </div>
            <p className="mt-12 text-[12px] uppercase tracking-editorial text-black/42 transition-opacity duration-500 group-hover:opacity-72 md:mt-16">
              {text(language, "Primeras aperturas en desarrollo", "First openings in development", "Primeiras aberturas em desenvolvimento")}
            </p>
          </Link>
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
        <FadeIn>
          <Link href="/acompanar" className="group block max-w-3xl">
            <p className="text-[12px] uppercase tracking-editorial text-stone transition-opacity duration-500 group-hover:opacity-72">
              {text(language, "Acompañan", "Support", "Acompanham")}
            </p>
            <h2 className="mt-4 max-w-[10ch] font-serif text-4xl leading-[1.04] text-black/90 transition-opacity duration-500 group-hover:opacity-74 md:text-[4.2rem] md:leading-[1.01]">
              {text(language, "Una forma de sostener el proyecto.", "A way to sustain the project.", "Uma forma de sustentar o projeto.")}
            </h2>
            <div className="mt-10 max-w-2xl space-y-8 text-[0.98rem] leading-8 text-black/64 transition-opacity duration-500 group-hover:opacity-74 md:text-[1.06rem] md:leading-9">
              <p>
                {text(
                  language,
                  "Algunas marcas argentinas se integran al proyecto acompañando el trabajo en campo, la logística y el desarrollo de cada etapa.",
                  "Some Argentine brands become part of the project by accompanying the field work, logistics and development of each stage.",
                  "Algumas marcas argentinas integram-se no projeto acompanhando o trabalho em campo, a logística e o desenvolvimento de cada etapa."
                )}
              </p>
              <p>
                {text(
                  language,
                  "No como presencia externa, sino como parte concreta de una manera de recorrer, registrar y mirar el país.",
                  "Not as an external presence, but as a concrete part of a way of moving through, recording and looking at the country.",
                  "Não como presença externa, mas como parte concreta de uma forma de percorrer, registar e olhar para o país."
                )}
              </p>
            </div>
          </Link>
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
