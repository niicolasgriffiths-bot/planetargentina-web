"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { FadeIn } from "@/components/fade-in";
import { PageIntro } from "@/components/page-intro";
import { useLanguage } from "@/components/language-provider";
import { localizeText, storyProfiles } from "@/data/site";

export default function StoryDetailPage() {
  const { language } = useLanguage();
  const params = useParams<{ slug: string }>();
  const story = storyProfiles.find((entry) => entry.slug === params.slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="pb-24 pt-32 md:pb-32 md:pt-40">
      <PageIntro
        eyebrow={language === "es" ? "Historias argentinas" : "Meeting Argentinians"}
        title={localizeText(story.name, language)}
        body={localizeText(story.place, language)}
        breadcrumbs={[
          { label: language === "es" ? "Home" : "Home", href: "/" },
          { label: language === "es" ? "Explorar" : "Explore", href: "/explore" },
          { label: language === "es" ? "Historias" : "Stories", href: "/stories" },
          { label: localizeText(story.name, language) }
        ]}
      />

      <section className="mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-10">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <FadeIn className="overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[4/5]">
              <Image
                src={story.image}
                alt={localizeText(story.name, language)}
                fill
                className="soft-photo object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="border-t border-black/8 pt-8">
            <p className="text-[11px] uppercase tracking-editorial text-stone">
              {language === "es" ? "Resumen" : "Summary"}
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-black/72 md:text-[1.02rem] md:leading-9">
              {localizeText(story.summary, language)}
            </p>

            <div className="mt-10 flex gap-6 text-[11px] uppercase tracking-editorial text-black/45">
              <Link href="/stories" className="transition-opacity duration-500 hover:opacity-60">
                {language === "es" ? "Volver a historias" : "Back to stories"}
              </Link>
              <Link href="/territories" className="transition-opacity duration-500 hover:opacity-60">
                {language === "es" ? "Entrar por territorios" : "See territories"}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
