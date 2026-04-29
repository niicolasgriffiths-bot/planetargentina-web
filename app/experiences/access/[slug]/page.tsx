"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { FadeIn } from "@/components/fade-in";
import { useLanguage } from "@/components/language-provider";
import { PageIntro } from "@/components/page-intro";
import { pageCopy, t } from "@/data/site-content";

export default function ExperienceAccessDetailPage() {
  const { language } = useLanguage();
  const params = useParams<{ slug: string }>();
  const normalizedSlug = params.slug === "libro" ? "inmersion" : params.slug;
  const access = pageCopy.experiences.accessDetails.find((item) => item.id === normalizedSlug);

  if (!access) {
    notFound();
  }

  const isExternalAction = access.actionHref.startsWith("mailto:");

  return (
    <main className="pb-24 pt-32 md:pb-32 md:pt-40">
      <PageIntro
        eyebrow={t(access.eyebrow, language)}
        title={t(access.title, language)}
        body={t(access.body, language)}
        breadcrumbs={[
          { label: language === "es" ? "Home" : "Home", href: "/" },
          { label: language === "es" ? "Experiencias" : "Experiences", href: "/experiences" },
          { label: t(access.title, language) }
        ]}
      />

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <FadeIn className="rounded-[2rem] border border-black/10 bg-white/72 p-8 shadow-haze md:p-10">
            <p className="text-[12px] uppercase tracking-editorial text-stone">
              {language === "es" ? "Clave" : "Key note"}
            </p>
            <p className="mt-5 max-w-lg font-serif text-3xl leading-tight text-black/88 md:text-5xl">
              {t(access.note, language)}
            </p>
          </FadeIn>

          <div className="grid gap-6">
            <FadeIn
              delay={0.08}
              className="rounded-[2rem] border border-black/10 bg-white/72 p-8 shadow-haze md:p-10"
            >
              <p className="text-[12px] uppercase tracking-editorial text-stone">
                {language === "es" ? "Lo que abre" : "What it opens"}
              </p>
              <div className="mt-6 grid gap-5">
                {access.points.map((point) => (
                  <p key={point.es} className="text-sm leading-8 text-black/68 md:text-base md:leading-9">
                    {t(point, language)}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn
              delay={0.14}
              className="rounded-[2rem] border border-black/10 bg-white/72 p-8 shadow-haze md:p-10"
            >
              <p className="text-[12px] uppercase tracking-editorial text-stone">
                {language === "es" ? "Desde aquí" : "From here"}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-black/68 md:text-base md:leading-9">
                {language === "es"
                  ? "Desde aquí podés volver a la vista general o seguir hacia la parte del proyecto que desarrolla mejor esta forma de entrar."
                  : "Each of these layers brings the project closer in a different way. From here you can return to the general view or continue toward the part that develops this possibility more clearly."}
              </p>

              <div className="mt-8 flex flex-wrap gap-6 text-[12px] uppercase tracking-editorial text-black/45">
                {isExternalAction ? (
                  <a
                    href={access.actionHref}
                    className="transition-opacity duration-500 hover:opacity-60"
                  >
                    {t(access.actionLabel, language)}
                  </a>
                ) : (
                  <Link
                    href={access.actionHref}
                    className="transition-opacity duration-500 hover:opacity-60"
                  >
                    {t(access.actionLabel, language)}
                  </Link>
                )}

                <Link
                  href="/experiences"
                  className="transition-opacity duration-500 hover:opacity-60"
                >
                  {language === "es" ? "Volver a experiencias" : "Back to experiences"}
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
