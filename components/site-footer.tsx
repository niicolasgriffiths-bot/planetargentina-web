"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { localizeText, navigation } from "@/data/site";

function text(language: "es" | "en" | "pt", es: string, en: string, pt?: string) {
  if (language === "es") return es;
  if (language === "pt") return pt ?? es;
  return en;
}

export function SiteFooter() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();
  const footerLinks = navigation.filter((item) =>
    ["/explore", "/coleccion", "/experiences", "/nosotros", "/acompanar"].includes(item.href)
  );

  return (
    <footer className="bg-[#111110] text-[#f4efe8]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="max-w-3xl">
          <p className="text-[12px] uppercase tracking-editorial text-white/34">
            Planeta Argentina
          </p>
          <p className="mt-6 max-w-[14ch] font-serif text-[2.25rem] leading-[1.08] text-[#f4efe8] md:text-[3.45rem] md:leading-[1.03]">
            {text(
              language,
              "Una forma más amplia y más profunda de mirar Argentina.",
              "A wider and deeper way of looking at Argentina.",
              "Uma forma mais ampla e mais profunda de olhar para a Argentina."
            )}
          </p>
        </div>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 md:mt-20 md:grid-cols-[1.15fr_1fr_1fr] md:gap-16 md:pt-14">
          <div>
            <p className="text-[12px] uppercase tracking-editorial text-white/34">
              {text(language, "Contacto", "Contact", "Contacto")}
            </p>
            <div className="mt-5 space-y-4 text-[0.98rem] leading-8 text-white/72 md:text-[1.04rem] md:leading-8">
              <Link
                href="mailto:hola@planetargentina.com"
                className="block transition-opacity duration-500 hover:opacity-65"
              >
                hola@planetargentina.com
              </Link>
              <Link
                href="https://www.instagram.com/argentinaplaneta?igsh=MTdveHM5bzg5dzRxOQ=="
                target="_blank"
                rel="noreferrer"
                className="block transition-opacity duration-500 hover:opacity-65"
              >
                Instagram · Planeta Argentina
              </Link>
              <Link
                href="https://www.instagram.com/conociendo.argentinos?igsh=bGdic2w2bm8xcDRz"
                target="_blank"
                rel="noreferrer"
                className="block transition-opacity duration-500 hover:opacity-65"
              >
                Instagram · Conociendo Argentinos
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[12px] uppercase tracking-editorial text-white/34">
              {text(language, "Recorrido", "Sections", "Percurso")}
            </p>
            <div className="mt-5 space-y-4 text-[0.98rem] leading-8 text-white/72 md:text-[1.04rem] md:leading-8">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block transition-opacity duration-500 hover:opacity-65"
                >
                  {localizeText(item.label, language)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[12px] uppercase tracking-editorial text-white/34">
              {text(language, "Acompañan", "Support", "Acompanham")}
            </p>
            <div className="mt-5 space-y-4 text-[0.98rem] leading-8 text-white/72 md:text-[1.04rem] md:leading-8">
              <Link
                href="/acompanar"
                className="block transition-opacity duration-500 hover:opacity-65"
              >
                {text(
                  language,
                  "Espacio abierto a futuras colaboraciones.",
                  "An open space for future collaborations.",
                  "Espaço aberto a futuras colaborações."
                )}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-[12px] uppercase tracking-editorial text-white/34 md:mt-16">
          <p>© {year} Planeta Argentina</p>
        </div>
      </div>
    </footer>
  );
}
