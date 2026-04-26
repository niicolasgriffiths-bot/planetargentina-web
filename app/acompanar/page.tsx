"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { useLanguage } from "@/components/language-provider";
import { FadeIn } from "@/components/fade-in";
import Image from "next/image";

const supportCopy = {
  identity: {
    es: [
      "La forma en que Argentina se percibe,\nhacia afuera y hacia adentro,\nsuele quedar reducida.",
      "Esa mirada no alcanza a dimensionar su escala, ni la diversidad de territorios y formas de vida que la componen.",
      "Ampliar esa percepción no es solo una tarea de este proyecto.",
      "Es una construcción más amplia, que implica volver a mirar el país con mayor profundidad."
    ],
    en: [
      "The way Argentina is perceived—outward and inward—is often reduced.",
      "That gaze fails to account for its scale, or for the diversity of territories and ways of life that compose it.",
      "Expanding that perception is not only the task of this project.",
      "It is part of a broader construction that implies looking at the country again with greater depth."
    ]
  },
  bridge: {
    es: "Este trabajo en el territorio requiere condiciones concretas.",
    en: "This work in the territory requires concrete conditions."
  },
  integration: {
    es: [
      {
        title: "Movilidad",
        paragraphs: [
          "El recorrido exige desplazamientos constantes en condiciones variables.",
          "Los vehículos forman parte del desarrollo de cada etapa en terreno."
        ]
      },
      {
        title: "Equipamiento",
        paragraphs: [
          "Las condiciones de cada región requieren indumentaria y equipo técnico específico.",
          "Cada elemento se utiliza en contexto real, durante todo el proceso de trabajo."
        ]
      },
      {
        title: "Energía",
        paragraphs: [
          "El proyecto se sostiene a lo largo de miles de kilómetros.",
          "El abastecimiento y la autonomía son parte central de cada expedición."
        ]
      },
      {
        title: "Tecnología",
        paragraphs: [
          "El registro del proyecto depende de herramientas que operan en condiciones exigentes.",
          "Cámaras, sistemas de captura y soporte técnico forman parte del proceso."
        ]
      }
    ],
    en: [
      {
        title: "Mobility",
        paragraphs: [
          "The route demands constant movement under changing conditions.",
          "Vehicles are part of the development of each stage in the field."
        ]
      },
      {
        title: "Equipment",
        paragraphs: [
          "The conditions of each region require specific clothing and technical gear.",
          "Every element is used in real context, throughout the entire working process."
        ]
      },
      {
        title: "Energy",
        paragraphs: [
          "The project extends across thousands of kilometers.",
          "Supply and autonomy are a central part of each expedition."
        ]
      },
      {
        title: "Technology",
        paragraphs: [
          "The project’s record depends on tools that operate under demanding conditions.",
          "Cameras, capture systems and technical support are part of the process."
        ]
      }
    ]
  },
  visibility: {
    es: [
      "Cada colaboración forma parte del desarrollo del proyecto.",
      "No como presencia externa, sino integrada al trabajo en campo y a los contenidos que surgen de cada etapa.",
      "La visibilidad es\nconsecuencia\nde ese proceso."
    ],
    en: [
      "Each collaboration becomes part of the project’s development.",
      "Not as an external presence, but integrated into the field work and the content that emerges from each stage.",
      "Visibility is a consequence of that process."
    ]
  }
} as const;

export default function SupportPage() {
  const { language } = useLanguage();
  const identity = supportCopy.identity[language];
  const integration = supportCopy.integration[language];
  const visibility = supportCopy.visibility[language];

  return (
    <main className="pb-24 pt-32 md:pb-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="border-t border-black/8 pt-10">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: language === "es" ? "Home" : "Home", href: "/" },
                { label: language === "es" ? "Acompañan" : "Support" }
              ]}
            />
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-6 md:mt-16 md:px-10">
        <FadeIn className="mx-auto max-w-[42rem] text-center">
          <p className="mx-auto max-w-[18ch] whitespace-pre-line font-serif text-[2.25rem] leading-[1.12] text-black/92 md:max-w-[17ch] md:text-[3.05rem] md:leading-[1.06]">
            {identity[0]}
          </p>
          <div className="mx-auto mt-14 max-w-[27rem] space-y-8 text-sm leading-8 text-black/60 md:text-[0.98rem] md:leading-[1.75]">
            {identity.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 md:mt-28 md:px-10">
        <FadeIn delay={0.08}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] md:aspect-[16/6]">
            <Image
              src="/collection/intro-lagoon.jpg"
              alt={
                language === "es"
                  ? "Laguna de altura en un paisaje andino"
                  : "High-altitude lagoon in an Andean landscape"
              }
              fill
              sizes="(min-width: 1024px) 88vw, 100vw"
              className="soft-photo object-cover object-[center_52%]"
              quality={92}
            />
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 md:mt-28 md:px-10">
        <FadeIn className="mx-auto max-w-[30rem] text-center">
          <p className="text-sm leading-8 text-black/44 md:text-[1rem] md:leading-9">
            {supportCopy.bridge[language]}
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-20 md:px-10">
        <div className="grid gap-x-16 gap-y-20 md:grid-cols-2 md:gap-y-28">
          {integration.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={index * 0.06}
              className={`border-t border-black/8 pt-8 ${
                index % 2 === 1 ? "md:mt-14 md:ml-auto" : ""
              } ${index < 2 ? "md:max-w-[26rem]" : "md:max-w-[29rem]"}`}
            >
              <h2 className="text-center font-serif text-[1.85rem] leading-[1.08] text-black/88 md:text-[2.35rem] md:leading-[1.04]">
                {item.title}
              </h2>
              <div className="mx-auto mt-7 max-w-[24rem] space-y-7 text-sm leading-8 text-black/68 md:max-w-[25rem] md:text-[1rem] md:leading-[1.75]">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl px-6 md:mt-44 md:px-10">
        <FadeIn className="border-t border-black/8 pt-14 md:pt-20">
          <div className="mx-auto max-w-[32rem] space-y-7 text-sm leading-8 text-black/62 md:text-[0.98rem] md:leading-[1.75]">
            <p>{visibility[0]}</p>
            <p>{visibility[1]}</p>
          </div>
          <p className="mx-auto mt-16 max-w-[12ch] whitespace-pre-line text-center font-serif text-[2.35rem] leading-[1.12] text-black/90 md:mt-20 md:max-w-[11ch] md:text-[3.5rem] md:leading-[1.06]">
            {visibility[2]}
          </p>
        </FadeIn>
      </section>
    </main>
  );
}
