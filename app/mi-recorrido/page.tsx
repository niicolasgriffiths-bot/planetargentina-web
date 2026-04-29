"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FadeIn } from "@/components/fade-in";
import { useAuth } from "@/components/auth-provider";
import { useLanguage } from "@/components/language-provider";
import { localizeText, territories } from "@/data/site";

const registeredBookSlugs: string[] = [];

const expeditionLayers = [
  {
    slug: "puna",
    section: {
      es: "Puna",
      en: "Puna"
    },
    image: territories[0].image,
    imagePosition: territories[0].heroPosition,
    layers: [
      {
        label: { es: "Desde el inicio", en: "From the beginning" },
        body: {
          es: "Una primera apertura ya se deja ver.",
          en: "A first opening already begins to show itself."
        },
        tone: "visible" as const
      },
      {
        label: { es: "Con el libro registrado", en: "With the registered book" },
        body: {
          es: "Con Puna registrado, otra parte empieza a dejarse ver.",
          en: "With Puna registered, another part begins to show itself."
        },
        tone: "current" as const
      },
      {
        label: { es: "Más adelante", en: "Later on" },
        body: {
          es: "Todavía no se deja ver completa.",
          en: "It does not yet fully show itself."
        },
        tone: "later" as const
      }
    ]
  },
  {
    slug: "selvas-humedales",
    section: {
      es: "Selvas y Humedales",
      en: "Wetlands and Forests"
    },
    image: territories[1].image,
    imagePosition: territories[1].heroPosition,
    layers: [
      {
        label: { es: "Desde el inicio", en: "From the beginning" },
        body: {
          es: "Se abre con el libro correspondiente.",
          en: "It opens with the corresponding book."
        },
        tone: "later" as const,
        href: "/coleccion"
      },
      {
        label: { es: "Con el libro registrado", en: "With the registered book" },
        body: {
          es: "Aparece después de sumar la segunda etapa.",
          en: "It appears after adding the second stage."
        },
        tone: "later" as const,
        href: "/coleccion"
      },
      {
        label: { es: "Más adelante", en: "Later on" },
        body: {
          es: "Esta parte permanece más atrás.",
          en: "This part remains further back."
        },
        tone: "later" as const
      }
    ]
  }
];

function ProgressDial({ progress }: { progress: number }) {
  return (
    <div className="grid h-20 w-20 place-items-center rounded-full border border-black/10 text-center">
      <div>
        <p className="font-serif text-2xl leading-none">{progress}%</p>
      </div>
    </div>
  );
}

export default function MyJourneyPage() {
  const { language } = useLanguage();
  const { loading, signOut, user } = useAuth();
  const router = useRouter();
  const [bookCode, setBookCode] = useState("");
  const [codeState, setCodeState] = useState<"idle" | "empty" | "pending">("idle");
  const registeredBooks = territories.filter((territory) =>
    registeredBookSlugs.includes(territory.slug)
  );
  const registeredCount = registeredBooks.length;
  const progress = Math.round((registeredCount / territories.length) * 100);
  const hasRegisteredBooks = registeredCount > 0;

  async function handleSignOut() {
    await signOut();
    router.push("/");
    router.refresh();
  }

  function handleCodeSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!bookCode.trim()) {
      setCodeState("empty");
      return;
    }

    setCodeState("pending");
  }

  if (!loading && !user) {
    return (
      <main className="pb-24 pt-32 md:pb-32 md:pt-40">
        <section className="mx-auto max-w-5xl px-6 md:px-10">
          <FadeIn className="border-t border-black/8 pt-12">
            <p className="text-[12px] uppercase tracking-editorial text-stone">
              {language === "es" ? "Mi recorrido" : "My journey"}
            </p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-none md:text-6xl">
              {language === "es" ? "Esto se abre al entrar." : "This opens once you enter."}
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-8 text-black/64 md:text-base md:leading-9">
              {language === "es"
                ? "Entra con tu correo para ver tus libros registrados, tu avance y lo que ya empieza a dejarse ver."
                : "Enter with your email to see your registered books, your progress and what is already starting to show itself."}
            </p>
            <div className="mt-12 text-[12px] uppercase tracking-editorial">
              <Link
                href="/entrar"
                className="inline-flex rounded-full bg-black px-5 py-3 text-paper transition-opacity duration-500 hover:opacity-82"
              >
                {language === "es" ? "Entrar" : "Enter"}
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>
    );
  }

  return (
    <main className="pb-24 pt-32 md:pb-32 md:pt-40">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-[220px_minmax(0,1fr)] md:gap-20">
          <aside className="md:sticky md:top-32 md:self-start">
            <FadeIn className="border-t border-black/8 pt-8">
              <nav className="grid gap-3 text-[12px] uppercase tracking-editorial">
                <a href="#codigo" className="text-black/48 transition-opacity duration-500 hover:opacity-70">
                  {language === "es" ? "Registrar código" : "Register code"}
                </a>
                <a href="#libros" className="text-black">
                  {language === "es" ? "Libros registrados" : "Registered books"}
                </a>
                <a href="#recorrido" className="text-black/48 transition-opacity duration-500 hover:opacity-70">
                  {language === "es" ? "Mi recorrido" : "My journey"}
                </a>
                <a href="#experiencias" className="text-black/48 transition-opacity duration-500 hover:opacity-70">
                  {language === "es" ? "Experiencias" : "Experiences"}
                </a>
              </nav>

              <button
                type="button"
                onClick={handleSignOut}
                className="mt-12 text-[12px] uppercase tracking-editorial text-black/34 transition-opacity duration-500 hover:opacity-70"
              >
                {language === "es" ? "Salir" : "Sign out"}
              </button>
            </FadeIn>
          </aside>

          <div className="grid gap-16 md:gap-24">
            <FadeIn className="border-t border-black/8 pt-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[12px] uppercase tracking-editorial text-stone">
                    {language === "es" ? "Mi recorrido" : "My journey"}
                  </p>
                  <h1 className="mt-4 font-serif text-4xl leading-none md:text-6xl">
                    {language === "es" ? "Una forma personal de seguir el proyecto." : "A personal way to follow the project."}
                  </h1>
                  <p className="mt-6 max-w-xl text-sm leading-8 text-black/62 md:text-base md:leading-9">
                    {user?.email}
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <div className="text-right">
                    <p className="font-serif text-4xl leading-none md:text-5xl">
                      {registeredCount} / {territories.length}
                    </p>
                    <p className="mt-2 text-[12px] uppercase tracking-editorial text-black/42">
                      {language === "es" ? "Libros registrados" : "Registered books"}
                    </p>
                  </div>
                  <ProgressDial progress={progress} />
                </div>
              </div>
            </FadeIn>

            <section id="codigo" className="border-t border-black/8 pt-10">
              <FadeIn>
                <p className="text-[12px] uppercase tracking-editorial text-stone">
                  {language === "es" ? "Registrar código" : "Register code"}
                </p>
                <h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">
                  {language === "es"
                    ? "Cuando lo tengas, podrás cargarlo aquí."
                    : "Once you have it, you will be able to enter it here."}
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-8 text-black/64 md:text-base md:leading-9">
                  {language === "es"
                    ? "El código impreso en el interior del libro va a vincular ese ejemplar con tu recorrido. Por ahora dejamos esta entrada preparada para ese momento."
                    : "The code printed inside the book will link that copy to your journey. For now, this entry is ready for that moment."}
                </p>

                <form onSubmit={handleCodeSubmit} className="mt-10 max-w-2xl">
                  <label className="block">
                    <span className="text-[12px] uppercase tracking-editorial text-black/42">
                      {language === "es" ? "Código del libro" : "Book code"}
                    </span>
                    <input
                      type="text"
                      value={bookCode}
                      onChange={(event) => {
                        setBookCode(event.target.value.toUpperCase());
                        if (codeState !== "idle") {
                          setCodeState("idle");
                        }
                      }}
                      placeholder="PUNA-0001"
                      className="mt-4 w-full border-b border-black/12 bg-transparent pb-4 font-serif text-2xl leading-none outline-none placeholder:text-black/24 md:text-3xl"
                    />
                  </label>

                  <p className="mt-4 text-sm leading-8 text-black/48 md:text-base md:leading-9">
                    {language === "es"
                      ? "Lo encuentras impreso en el interior del libro."
                      : "You will find it printed inside the book."}
                  </p>

                  <div className="mt-10 text-[12px] uppercase tracking-editorial">
                    <button
                      type="submit"
                      className="inline-flex rounded-full border border-black/12 px-5 py-3 text-black transition-opacity duration-500 hover:opacity-72"
                    >
                      {language === "es" ? "Cargar código" : "Enter code"}
                    </button>
                  </div>

                  {codeState === "empty" ? (
                    <p className="mt-6 text-sm leading-8 text-black/48 md:text-base md:leading-9">
                      {language === "es"
                        ? "Escribe el código cuando ya lo tengas impreso en el libro."
                        : "Type the code once you have it printed inside the book."}
                    </p>
                  ) : null}

                  {codeState === "pending" ? (
                    <p className="mt-6 text-sm leading-8 text-black/48 md:text-base md:leading-9">
                      {language === "es"
                        ? "La validación de códigos se activará con la primera edición impresa. Esta entrada ya queda preparada para ese momento."
                        : "Code validation will be activated with the first printed edition. This entry is already prepared for that moment."}
                    </p>
                  ) : null}
                </form>
              </FadeIn>
            </section>

            <section id="libros" className="border-t border-black/8 pt-10">
              <FadeIn>
                <p className="text-[12px] uppercase tracking-editorial text-stone">
                  {language === "es" ? "Libros registrados" : "Registered books"}
                </p>
                {hasRegisteredBooks ? (
                  <div className="mt-8 grid gap-10 md:grid-cols-[0.66fr_1.34fr] md:items-center">
                    <div>
                      <h2 className="font-serif text-5xl leading-none md:text-7xl">
                        {localizeText(registeredBooks[0].name, language)}
                      </h2>
                      <p className="mt-3 text-[12px] uppercase tracking-editorial text-black/42">
                        {language === "es" ? "Primera etapa" : "First stage"}
                      </p>
                      <div className="mt-10 grid gap-2 text-black/58">
                        <p className="text-base leading-7 md:text-lg md:leading-8">
                          {language === "es" ? "Primera edición terminada" : "First edition completed"}
                        </p>
                        <p className="text-base leading-7 md:text-lg md:leading-8">
                          {language === "es" ? "Próximamente disponible" : "Available soon"}
                        </p>
                      </div>
                      <div className="mt-14 text-[12px] uppercase tracking-editorial">
                        <Link
                          href={`/territories/${registeredBooks[0].slug}`}
                          className="inline-flex text-black/48 transition-opacity duration-500 hover:opacity-72"
                        >
                          {language === "es" ? "Ver Puna" : "See Puna"}
                        </Link>
                      </div>
                    </div>

                    <div className="relative aspect-[16/8] overflow-hidden">
                      <Image
                        src={registeredBooks[0].image}
                        alt={localizeText(registeredBooks[0].name, language)}
                        fill
                        style={
                          registeredBooks[0].heroPosition
                            ? { objectPosition: registeredBooks[0].heroPosition }
                            : undefined
                        }
                        className="soft-photo object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mt-8 max-w-3xl">
                    <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                      {language === "es"
                        ? "Todavía no registraste ningún libro."
                        : "You have not registered any books yet."}
                    </h2>
                    <p className="mt-8 max-w-2xl text-sm leading-8 text-black/62 md:text-base md:leading-9">
                      {language === "es"
                        ? "El recorrido empieza con el primero. Cuando registres un libro, esta parte cambiará y empezará a guardar lo que ya forma parte de tu relación con el proyecto."
                        : "The journey begins with the first one. Once you register a book, this section will change and begin to keep what already forms part of your relationship with the project."}
                    </p>
                    <div className="mt-12 text-[12px] uppercase tracking-editorial">
                      <Link
                        href="/coleccion"
                        className="inline-flex rounded-full bg-black px-5 py-3 text-paper transition-opacity duration-500 hover:opacity-82"
                      >
                        {language === "es" ? "Ver colección" : "View collection"}
                      </Link>
                    </div>
                  </div>
                )}
              </FadeIn>
            </section>

            <section id="recorrido" className="border-t border-black/8 pt-10">
              <FadeIn>
                <p className="text-[12px] uppercase tracking-editorial text-stone">
                  {language === "es" ? "Mi recorrido" : "My journey"}
                </p>
                <h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">
                  {hasRegisteredBooks
                    ? language === "es"
                      ? "La primera etapa ya forma parte de tu recorrido."
                      : "The first stage already forms part of your journey."
                    : language === "es"
                      ? "El recorrido todavía no empezó."
                      : "The journey has not started yet."}
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-8 text-black/64 md:text-base md:leading-9">
                  {hasRegisteredBooks
                    ? language === "es"
                      ? "Lo siguiente aparece a medida que la colección crece. Cada libro cambia lo que se deja ver."
                      : "What follows appears as the collection grows. Each book changes what is allowed to show itself."
                    : language === "es"
                      ? "Aquí se guardará lo que ya forma parte de tu vínculo con el proyecto. El primer libro cambia este estado."
                      : "This is where what already forms part of your relationship with the project will be kept. The first book changes this state."}
                </p>
                <div className="mt-10 text-[12px] uppercase tracking-editorial">
                  <Link
                    href="/coleccion"
                    className="inline-flex rounded-full bg-black px-5 py-3 text-paper transition-opacity duration-500 hover:opacity-82"
                  >
                    {language === "es"
                      ? hasRegisteredBooks
                        ? "Sumar libro"
                        : "Ver colección"
                      : hasRegisteredBooks
                        ? "Add book"
                        : "View collection"}
                  </Link>
                </div>
              </FadeIn>
            </section>

            <section id="experiencias" className="border-t border-black/8 pt-10">
              <FadeIn className="max-w-3xl">
                <p className="text-[12px] uppercase tracking-editorial text-stone">
                  {language === "es" ? "Experiencias" : "Experiences"}
                </p>
                <h2 className="mt-4 font-serif text-4xl md:text-6xl">
                  {language === "es"
                    ? "Las expediciones se dejan ver a medida que avanza tu recorrido."
                    : "Expeditions reveal themselves as your journey moves forward."}
                </h2>
              </FadeIn>

              <div className="mt-10 grid gap-12">
                {expeditionLayers.map((expedition, index) => (
                  <FadeIn
                    key={expedition.slug}
                    delay={index * 0.06}
                    className="grid gap-8 border-t border-black/8 pt-8 md:grid-cols-[0.9fr_1.1fr]"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/4]">
                      <Image
                        src={expedition.image}
                        alt={localizeText(expedition.section, language)}
                        fill
                        style={expedition.imagePosition ? { objectPosition: expedition.imagePosition } : undefined}
                        className="soft-photo object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-serif text-4xl leading-none md:text-5xl">
                        {localizeText(expedition.section, language)}
                      </h3>

                      <div className="mt-8 grid gap-4">
                        {expedition.layers.map((layer) => (
                          <div
                            key={layer.label.es}
                            className={`border-b border-black/8 pb-5 last:border-b-0 last:pb-0 ${
                              layer.tone === "later" ? "text-black/44" : "text-black/82"
                            }`}
                          >
                            <p className="text-[12px] uppercase tracking-editorial">
                              {localizeText(layer.label, language)}
                            </p>
                            <p className="mt-3 max-w-xl text-sm leading-8 md:text-base md:leading-9">
                              {localizeText(layer.body, language)}
                            </p>
                            {"href" in layer && layer.href ? (
                              <div className="mt-5 text-[12px] uppercase tracking-editorial">
                                <Link
                                  href={layer.href}
                                  className="inline-flex text-black/45 transition-opacity duration-500 hover:opacity-70"
                                >
                                  {language === "es" ? "Ver libro" : "See book"}
                                </Link>
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
