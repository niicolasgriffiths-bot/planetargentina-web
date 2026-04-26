"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { homeStory, territories } from "@/data/site";

type GalleryMoment = {
  image: string;
  alt: string;
  title: string;
  href?: string;
  variant?: "drift" | "hold" | "wide";
  silenceAfter?: "soft" | "deep";
  concealment?: "mist" | "shadow" | "veil";
  temper?: "calm" | "uneven" | "cut";
  accessHint?: "held" | "restricted" | "deeper";
  interruption?: "blackout" | "flash";
  energy?: "low" | "rising" | "high" | "release";
  dissonance?: "linger" | "early" | "unresolved";
  rawness?: "muted" | "harsh" | "exposed";
};

function CinematicFrame({
  moment,
  index,
  total
}: {
  moment: GalleryMoment;
  index: number;
  total: number;
}) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"]
  });

  const imageRange: [string, string] =
    moment.variant === "hold"
      ? ["-2%", "3%"]
      : moment.variant === "wide"
        ? ["-7%", "9%"]
        : ["-5%", "7%"];

  const frameHeight =
    moment.energy === "high"
      ? "min-h-[108vh]"
      : moment.energy === "release"
        ? "min-h-[148vh]"
      : moment.variant === "hold"
      ? "min-h-[138vh]"
      : moment.variant === "wide"
        ? "min-h-[126vh]"
        : "min-h-[118vh]";

  const imageScale = moment.variant === "hold" ? "scale-[1.03]" : "scale-[1.08]";
  const motionClass =
    moment.temper === "cut"
      ? "motion-shift-cut"
      : moment.temper === "uneven"
        ? "motion-shift-uneven"
        : "motion-shift-calm";
  const imageY = useTransform(scrollYProgress, [0, 1], imageRange);
  const imageBlur = useTransform(
    scrollYProgress,
    [0, 0.22, 0.5, 0.82, 1],
    moment.rawness === "harsh"
      ? ["14px", "9px", "3px", "8px", "12px"]
      : moment.rawness === "exposed"
        ? ["6px", "3px", "0px", "2px", "5px"]
      : moment.concealment === "mist"
      ? ["10px", "6px", "1px", "5px", "9px"]
      : moment.concealment === "veil"
        ? ["7px", "4px", "0px", "4px", "7px"]
        : ["4px", "2px", "0px", "3px", "5px"]
  );
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.24, 0.55, 0.86, 1],
    moment.interruption === "flash"
      ? [0.04, 0.12, 0.96, 0.66, 0.22]
      : moment.rawness === "exposed"
        ? [0.72, 0.86, 0.96, 0.84, 0.72]
      : moment.rawness === "harsh"
        ? [0.24, 0.34, 0.68, 0.46, 0.28]
      : moment.dissonance === "unresolved"
        ? [0.32, 0.48, 0.8, 0.58, 0.48]
      : moment.dissonance === "early"
        ? [0.12, 0.7, 0.84, 0.54, 0.28]
      : moment.concealment === "shadow"
      ? [0.38, 0.54, 0.78, 0.52, 0.34]
      : moment.concealment === "veil"
        ? [0.48, 0.66, 0.88, 0.62, 0.42]
        : [0.58, 0.72, 0.92, 0.68, 0.5]
  );
  const imageRotate = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    moment.energy === "high"
      ? ["-1deg", "0.35deg", "-0.4deg", "0.6deg"]
      : moment.temper === "uneven"
      ? ["-0.7deg", "0.2deg", "-0.15deg", "0.45deg"]
      : moment.temper === "cut"
        ? ["0deg", "0.12deg", "-0.42deg", "0.18deg"]
        : ["-0.18deg", "0deg", "0.06deg", "0deg"]
  );
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    moment.interruption === "blackout"
      ? [1, 0.92, 1]
      : moment.interruption === "flash"
        ? [1, 0.26, 0.96]
      : moment.dissonance === "linger"
        ? [0.96, 0.62, 0.9]
      : moment.dissonance === "unresolved"
        ? [0.9, 0.72, 0.94]
      : moment.concealment === "shadow"
      ? [0.96, 0.7, 0.96]
      : moment.variant === "hold"
        ? [0.9, 0.56, 0.92]
        : [0.82, 0.42, 0.88]
  );
  const overlayY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    moment.energy === "high"
      ? ["0%", "4%", "-3%"]
      : moment.temper === "cut"
        ? ["0%", "3%", "-2%"]
        : ["0%", "1%", "0%"]
  );
  const fogOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.45, 0.72, 1],
    moment.rawness === "exposed"
      ? [0.12, 0.08, 0.02, 0.08, 0.12]
      : moment.concealment === "mist"
      ? [0.78, 0.64, 0.28, 0.52, 0.82]
      : moment.dissonance === "linger"
        ? [0.3, 0.24, 0.22, 0.4, 0.56]
      : moment.concealment === "veil"
        ? [0.56, 0.42, 0.14, 0.38, 0.6]
        : [0.22, 0.16, 0.04, 0.14, 0.24]
  );
  const shadowOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.55, 0.86, 1],
    moment.interruption === "blackout"
      ? [1, 0.96, 0.88, 0.96, 1]
      : moment.rawness === "harsh"
        ? [0.92, 0.88, 0.72, 0.82, 0.94]
      : moment.rawness === "exposed"
        ? [0.18, 0.12, 0.08, 0.14, 0.18]
      : moment.concealment === "shadow"
      ? [0.88, 0.78, 0.46, 0.74, 0.92]
      : moment.concealment === "veil"
        ? [0.62, 0.52, 0.24, 0.48, 0.68]
        : [0.34, 0.26, 0.12, 0.22, 0.36]
  );
  const grainOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55, 0.85, 1],
    moment.rawness === "harsh"
      ? [0.22, 0.3, 0.4, 0.34, 0.26]
      : moment.rawness === "exposed"
        ? [0.06, 0.08, 0.12, 0.1, 0.08]
        : [0.1, 0.14, 0.18, 0.14, 0.1]
  );
  const interruptionOpacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.42, 0.68, 1],
    moment.interruption === "blackout"
      ? [0.96, 0.98, 0.74, 0.92, 1]
      : moment.interruption === "flash"
        ? [0.92, 0.18, 0.02, 0.26, 0.74]
        : [0, 0, 0, 0, 0]
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    moment.energy === "release"
      ? ["8%", "-2%"]
      : moment.dissonance === "early"
        ? ["2%", "-9%"]
      : moment.dissonance === "linger"
        ? ["14%", "0%"]
      : moment.energy === "high"
        ? ["22%", "-8%"]
      : moment.temper === "cut"
      ? ["18%", "-3%"]
      : moment.variant === "hold"
        ? ["10%", "-4%"]
        : ["14%", "-8%"]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45, 0.8, 1],
    moment.interruption === "blackout"
      ? [0, 0.12, 0.26, 0.08, 0]
      : moment.interruption === "flash"
        ? [0, 0.14, 1, 0.18, 0]
      : moment.dissonance === "unresolved"
        ? [0, 0.24, 0.64, 0.42, 0.18]
      : moment.dissonance === "early"
        ? [0.08, 0.72, 0.78, 0.24, 0]
      : moment.concealment === "shadow"
      ? [0, 0.54, 0.84, 0.46, 0]
      : moment.temper === "cut"
        ? [0, 0.34, 0.92, 0.28, 0]
      : moment.variant === "hold"
        ? [0, 0.82, 1, 0.88, 0]
        : [0, 0.92, 1, 0.72, 0]
  );
  const textSkew = useTransform(
    scrollYProgress,
    [0, 0.4, 0.75, 1],
    moment.energy === "high"
      ? ["-1.2deg", "0.4deg", "0.8deg", "-0.55deg"]
      : moment.temper === "uneven"
      ? ["-1deg", "0deg", "0.55deg", "-0.35deg"]
      : moment.temper === "cut"
        ? ["0deg", "0.3deg", "-1deg", "0deg"]
        : ["0deg", "0deg", "0deg", "0deg"]
  );
  const hintOpacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.38, 0.68, 0.9, 1],
    moment.dissonance === "linger"
      ? [0, 0.28, 0.58, 0.62, 0.34, 0.08]
      : [0, 0.34, 0.62, 0.54, 0.24, 0]
  );
  const hintY = useTransform(
    scrollYProgress,
    [0, 1],
    moment.dissonance === "early" ? ["-1%", "-7%"] : ["6%", "-3%"]
  );

  const label =
    index >= 1 && index <= homeStory.length
      ? `0${index}`
      : index > homeStory.length && index < total - 1
        ? "Territory"
        : undefined;

  const title = (
    <motion.div className="max-w-lg" style={{ y: textY, opacity: textOpacity, skewY: textSkew }}>
      {label ? (
        <p className="text-[10px] uppercase tracking-editorial text-paper/30">{label}</p>
      ) : null}
      <h2 className="mt-3 font-serif text-4xl leading-[0.92] text-paper md:text-7xl">
        {moment.title}
      </h2>
    </motion.div>
  );

  const accessCopy =
    moment.accessHint === "deeper"
      ? "Deeper access"
      : moment.accessHint === "restricted"
        ? "Restricted"
        : moment.accessHint === "held"
          ? "Held"
          : null;

  const isFinalFrame = index === total - 1;

  return (
    <div
      ref={frameRef}
      className={`home-frame ${moment.variant === "hold" ? "home-frame-hold" : ""} ${
        moment.temper === "cut" ? "home-frame-cut" : ""
      } ${moment.energy === "release" ? "home-frame-release" : ""} ${
        moment.energy === "high" ? "home-frame-high" : ""
      } ${moment.dissonance === "linger" ? "home-frame-linger" : ""} ${
        moment.dissonance === "early" ? "home-frame-early" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${frameHeight}`}>
        <motion.div
          className={`absolute inset-0 ${imageScale} ${motionClass}`}
          style={{ y: imageY, filter: imageBlur, opacity: imageOpacity, rotate: imageRotate }}
        >
          <Image
            src={moment.image}
            alt={moment.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </motion.div>
        <motion.div className="image-veil" style={{ opacity: overlayOpacity, y: overlayY }} />
        <motion.div className="mist-layer" style={{ opacity: fogOpacity }} />
        <motion.div className="conceal-layer" style={{ opacity: shadowOpacity }} />
        <motion.div className="raw-grain-layer" style={{ opacity: grainOpacity }} />
        {moment.interruption ? (
          <motion.div className="interruption-layer" style={{ opacity: interruptionOpacity }} />
        ) : null}
        {accessCopy ? (
          <motion.div className="access-whisper" style={{ opacity: hintOpacity, y: hintY }}>
            <span className="access-mark" />
            <span>{accessCopy}</span>
          </motion.div>
        ) : null}
        {index > 0 ? <div className="section-fade-top" /> : null}
        <div className="section-fade" />
        <div
          className={`absolute inset-x-0 bottom-0 px-6 pb-20 md:px-10 md:pb-28 ${
            isFinalFrame ? "top-0 flex items-end justify-between gap-6" : ""
          }`}
        >
          {moment.href ? (
            isFinalFrame ? (
              <>
                <div className="max-w-xl">
                  {title}
                  <motion.div
                    className="mt-10"
                    style={{ opacity: textOpacity, y: textY }}
                  >
                    <Link
                      href={moment.href}
                      className="threshold-link"
                      aria-label="Continue into the deeper layer"
                    >
                      <span className="threshold-frame" />
                      <span className="threshold-copy" aria-hidden="true">
                        <span className="threshold-whisper" />
                        <span className="threshold-whisper threshold-whisper-short" />
                      </span>
                      <span className="threshold-trace" />
                    </Link>
                  </motion.div>
                </div>
              </>
            ) : (
              <Link href={moment.href} className="block">
                {title}
              </Link>
            )
          ) : (
            title
          )}
        </div>
      </div>
      {moment.silenceAfter ? (
        <div
          className={`silence-gap ${
            moment.silenceAfter === "deep" ? "silence-gap-deep" : "silence-gap-soft"
          }`}
        />
      ) : null}
    </div>
  );
}

export function CinematicHome() {
  const galleryMoments: GalleryMoment[] = [
    {
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1800&q=80",
      alt: "Argentine highlands",
      title: "Enter slowly.",
      variant: "hold",
      silenceAfter: "soft",
      concealment: "mist",
      temper: "calm",
      accessHint: "held",
      energy: "low",
      dissonance: "linger",
      rawness: "muted"
    },
    {
      image: homeStory[0].image,
      alt: homeStory[0].title,
      title: homeStory[0].title,
      variant: "wide",
      concealment: "veil",
      temper: "uneven",
      accessHint: "restricted",
      interruption: "flash",
      energy: "rising",
      dissonance: "early",
      rawness: "exposed"
    },
    {
      image: homeStory[1].image,
      alt: homeStory[1].title,
      title: homeStory[1].title,
      silenceAfter: "deep",
      concealment: "shadow",
      temper: "cut",
      interruption: "blackout",
      energy: "high",
      dissonance: "unresolved",
      rawness: "harsh"
    },
    {
      image: homeStory[2].image,
      alt: homeStory[2].title,
      title: homeStory[2].title,
      variant: "hold",
      concealment: "mist",
      temper: "calm",
      accessHint: "held",
      energy: "low",
      rawness: "muted"
    },
    {
      image: territories[0].image,
      alt: territories[0].name.es,
      title: territories[0].name.es,
      href: `/territories/${territories[0].slug}`,
      silenceAfter: "soft",
      concealment: "veil",
      temper: "uneven",
      accessHint: "restricted",
      interruption: "flash",
      energy: "rising",
      dissonance: "early",
      rawness: "exposed"
    },
    {
      image: territories[1].image,
      alt: territories[1].name.es,
      title: territories[1].name.es,
      href: `/territories/${territories[1].slug}`,
      variant: "wide",
      concealment: "mist",
      temper: "calm",
      accessHint: "held",
      energy: "release",
      dissonance: "linger",
      rawness: "muted"
    },
    {
      image: territories[2].image,
      alt: territories[2].name.es,
      title: territories[2].name.es,
      href: `/territories/${territories[2].slug}`,
      variant: "hold",
      silenceAfter: "deep",
      concealment: "shadow",
      temper: "cut",
      accessHint: "deeper",
      interruption: "blackout",
      energy: "high",
      dissonance: "unresolved",
      rawness: "harsh"
    },
    {
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=80",
      alt: "Patagonian landscape",
      title: "The country keeps opening outward.",
      href: `/territories/${territories[3].slug}`,
      variant: "hold",
      concealment: "veil",
      temper: "calm",
      accessHint: "deeper",
      energy: "low",
      dissonance: "linger",
      rawness: "exposed"
    }
  ];

  return (
    <main className="home-scroll bg-[#080808] text-paper">
      <div className="relative overflow-hidden">
        {galleryMoments.map((moment, index) => (
          <CinematicFrame
            key={`${moment.alt}-${index}`}
            moment={moment}
            index={index}
            total={galleryMoments.length}
          />
        ))}
      </div>
    </main>
  );
}
