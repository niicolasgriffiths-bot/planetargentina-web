"use client";

import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { useLanguage } from "@/components/language-provider";
import { FadeIn } from "@/components/fade-in";
import { archiveCategories, localizeText } from "@/data/site";
import { pageCopy, t } from "@/data/site-content";

export default function ExplorePage() {
  const { language } = useLanguage();
  const featuredCategories = [archiveCategories[1], archiveCategories[0], archiveCategories[2]];

  return (
    <main className="pb-24 pt-40 md:pb-32 md:pt-48">
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        {t(pageCopy.explore.body, language) ? (
          <div className="grid gap-14 border-t border-black/8 pt-12 md:grid-cols-[0.9fr_1.1fr] md:items-start md:gap-24 md:pt-16">
            <FadeIn>
              <Breadcrumbs
                items={[
                  { label: language === "es" ? "Home" : "Home", href: "/" },
                  { label: language === "es" ? "Explorar" : "Explore" }
                ]}
              />
              <p className="text-[11px] uppercase tracking-editorial text-stone">
                {t(pageCopy.explore.eyebrow, language)}
              </p>
              <h1 className="mt-7 max-w-2xl font-serif text-4xl leading-[1.02] md:text-6xl">
                {t(pageCopy.explore.title, language)}
              </h1>
            </FadeIn>

            <FadeIn delay={0.08}>
              <p className="max-w-3xl whitespace-pre-line text-sm leading-9 text-black/68 md:pt-20 md:text-base md:leading-10">
                {t(pageCopy.explore.body, language)}
              </p>
            </FadeIn>
          </div>
        ) : (
          <div className="border-t border-black/8 pt-8">
            <FadeIn>
              <Breadcrumbs
                items={[
                  { label: language === "es" ? "Home" : "Home", href: "/" },
                  { label: language === "es" ? "Explorar" : "Explore" }
                ]}
              />
              <p className="text-[11px] uppercase tracking-editorial text-stone">
                {t(pageCopy.explore.eyebrow, language)}
              </p>
              <h1 className="mt-7 max-w-2xl font-serif text-4xl leading-[1.02] md:text-6xl">
                {t(pageCopy.explore.title, language)}
              </h1>
            </FadeIn>
          </div>
        )}
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-6 md:mt-28 md:px-10">
        <div className="grid gap-12 md:grid-cols-3 md:items-start md:gap-10">
          {featuredCategories.map((item, index) => (
            <FadeIn
              key={item.href}
              delay={index * 0.08}
            >
              <Link href={item.href} className="group block">
                <div className="overflow-hidden rounded-[2rem] transition-transform duration-500 hover:-translate-y-1">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={item.image}
                      alt={localizeText(item.name, language)}
                      fill
                      style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                      className="soft-photo object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="mt-8 px-1">
                  <h3 className="font-serif text-4xl leading-none md:text-5xl">
                    {t(pageCopy.explore.options[index].title, language)}
                  </h3>
                  <p className="mt-6 max-w-sm text-sm leading-8 text-black/68 md:text-base md:leading-9">
                    {t(pageCopy.explore.options[index].body, language)}
                  </p>
                  <span className="mt-8 inline-flex text-[11px] uppercase tracking-editorial text-black/40 transition-opacity duration-500 group-hover:opacity-70">
                    {t(pageCopy.explore.options[index].cta, language)}
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-5xl px-6 md:mt-40 md:px-10">
        <FadeIn className="border-t border-black/8 pt-16 text-center md:pt-24">
          <p className="whitespace-pre-line font-serif text-4xl leading-[1.08] md:text-6xl">
            {t(pageCopy.explore.closing, language)}
          </p>
        </FadeIn>
      </section>
    </main>
  );
}
