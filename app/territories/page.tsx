"use client";

import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useLanguage } from "@/components/language-provider";
import { FadeIn } from "@/components/fade-in";
import { localizeText, territories } from "@/data/site";
import { pageCopy, t } from "@/data/site-content";

export default function TerritoriesPage() {
  const { language } = useLanguage();

  return (
    <main className="pb-24 pt-40 md:pb-32 md:pt-48">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-8 border-t border-black/8 pt-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: language === "es" ? "Home" : "Home", href: "/" },
                { label: language === "es" ? "Explorar" : "Explore", href: "/explore" },
                { label: language === "es" ? "Territorios" : "Territories" }
              ]}
            />
            <p className="text-[11px] uppercase tracking-editorial text-stone">
              {t(pageCopy.territories.eyebrow, language)}
            </p>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-none md:text-6xl">
              {t(pageCopy.territories.title, language)}
            </h1>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="max-w-3xl text-sm leading-8 text-black/68 md:text-base md:leading-9">
              {t(pageCopy.territories.body, language)}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-10">
        <div className="grid gap-10 md:gap-12">
          {territories.map((territory, index) => (
            <FadeIn
              key={territory.slug}
              delay={index * 0.08}
              className="border border-black/10 bg-white/70 p-5 shadow-haze md:p-7"
            >
              <Link href={`/territories/${territory.slug}`} className="group block">
                <div
                  className={`grid gap-6 md:min-h-[28rem] md:grid-cols-[1.35fr_0.9fr] md:items-stretch md:gap-8 ${
                    index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="image-mask">
                    <div className="relative aspect-[16/11] md:h-full md:min-h-[28rem] md:aspect-auto">
                      <Image
                        src={territory.listingImage ?? territory.image}
                        alt={localizeText(territory.name, language)}
                        fill
                        style={
                          territory.listingImagePosition
                            ? { objectPosition: territory.listingImagePosition }
                            : territory.heroPosition
                              ? { objectPosition: territory.heroPosition }
                              : undefined
                        }
                        className="soft-photo object-cover transition-transform duration-[1600ms] group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  <div className="flex h-full flex-col justify-between bg-black/[0.02] p-5 md:p-8">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-editorial text-stone">
                        <span>{localizeText(territory.stage, language)}</span>
                        <span className="h-1 w-1 rounded-full bg-black/20" />
                        <span>{localizeText(territory.status, language)}</span>
                      </div>
                      <div className="mt-4 flex items-end justify-between gap-4">
                        <h2 className="font-serif text-3xl md:text-5xl">
                          {localizeText(territory.name, language)}
                        </h2>
                        <span className="text-[11px] uppercase tracking-editorial text-stone">
                          {t(pageCopy.territories.enter, language)}
                        </span>
                      </div>
                      <p className="mt-5 max-w-xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
                        {localizeText(territory.intro, language)}
                      </p>
                    </div>
                    <p className="mt-8 text-[11px] uppercase tracking-editorial text-black/40">
                      {localizeText(territory.route, language)}
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
