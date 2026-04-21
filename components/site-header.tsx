"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { useLanguage } from "@/components/language-provider";
import { navigation } from "@/data/site";
import { localizeText } from "@/data/site";

function LanguageFlag({
  code,
  inverse
}: {
  code: "es" | "en";
  inverse: boolean;
}) {
  const frameClass = inverse
    ? "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]"
    : "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]";

  if (code === "es") {
    return (
      <span
        aria-hidden="true"
        className={`relative block h-3.5 w-5 overflow-hidden rounded-[3px] ${frameClass}`}
      >
        <span className="absolute inset-x-0 top-0 h-[33.4%] bg-[#7fc7ea]" />
        <span className="absolute inset-x-0 top-[33.4%] h-[33.2%] bg-white" />
        <span className="absolute inset-x-0 bottom-0 h-[33.4%] bg-[#7fc7ea]" />
        <span className="absolute left-1/2 top-1/2 h-[18%] w-[12%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e0b447]" />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`relative block h-3.5 w-5 overflow-hidden rounded-[3px] bg-white ${frameClass}`}
    >
      <span className="absolute left-[39%] top-0 h-full w-[22%] bg-[#c83c3c]" />
      <span className="absolute left-0 top-[39%] h-[22%] w-full bg-[#c83c3c]" />
    </span>
  );
}

export function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const { loading, user } = useAuth();
  const pathname = usePathname();
  const isClubPage = pathname?.startsWith("/club");
  const primaryNavigation = navigation.filter((item) => item.tier === "primary");
  const secondaryNavigation = navigation.filter((item) => item.tier === "secondary");
  const authHref = user ? "/mi-recorrido" : "/entrar";
  const authActive = pathname === "/entrar" || pathname?.startsWith("/mi-recorrido");
  const authLabel = loading
    ? ""
    : user
      ? language === "es"
        ? "Mi recorrido"
        : "My journey"
      : language === "es"
        ? "Entrar"
        : "Enter";

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    if (href === "/explore") return pathname === "/explore" || pathname.startsWith("/territories") || pathname.startsWith("/stories");
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md ${
        isClubPage
          ? "border-b border-white/12 bg-[#0f0f0f]/92"
          : "border-b border-black/8 bg-[#f4efe8]/88"
      }`}
    >
      <div
        className={`mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-x-6 px-6 py-5 text-[11px] uppercase tracking-editorial md:gap-x-10 md:px-10 ${
          isClubPage ? "text-white" : "text-black"
        }`}
      >
        <Link
          href="/"
          className={`shrink-0 font-serif text-xl normal-case tracking-[0.08em] transition-opacity duration-500 hover:opacity-70 md:text-2xl ${
            isClubPage ? "text-white" : "text-black"
          }`}
        >
          Planeta Argentina
        </Link>
        <nav className="hidden min-w-0 items-center justify-center md:flex">
          <div className="flex items-center gap-1">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative rounded-full px-3 py-2 transition-all duration-500 hover:opacity-60 ${
                  isActive(item.href)
                    ? isClubPage
                      ? "bg-white/10 text-white"
                      : "bg-black/6 text-black"
                    : isClubPage
                      ? "text-white"
                      : "text-black"
                }`}
              >
                <span className="relative z-10">{localizeText(item.label, language)}</span>
                {isActive(item.href) ? (
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 bottom-[5px] h-[2px] rounded-full ${
                      isClubPage ? "bg-white" : "bg-black"
                    }`}
                  />
                ) : null}
              </Link>
            ))}
          </div>

          <div
            className={`ml-5 flex items-center gap-1 pl-5 ${
              isClubPage ? "border-l border-white/14" : "border-l border-black/10"
            }`}
          >
            {secondaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative rounded-full px-3 py-2 transition-all duration-500 hover:opacity-60 ${
                  isActive(item.href)
                    ? isClubPage
                      ? "bg-white/10 text-white"
                      : "bg-black/6 text-black"
                    : isClubPage
                      ? "text-white/74"
                      : "text-black/74"
                }`}
              >
                <span className="relative z-10">{localizeText(item.label, language)}</span>
                {isActive(item.href) ? (
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 bottom-[5px] h-[2px] rounded-full ${
                      isClubPage ? "bg-white" : "bg-black"
                    }`}
                  />
                ) : null}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex items-center justify-end gap-3 md:gap-4">
          {!loading ? (
            <Link
              href={authHref}
              aria-current={authActive ? "page" : undefined}
              className={`relative inline-flex shrink-0 px-1 py-2 text-[11px] uppercase tracking-editorial transition-all duration-500 hover:opacity-60 ${
                authActive
                  ? isClubPage
                    ? "text-white"
                    : "text-black"
                  : isClubPage
                    ? "text-white/72"
                    : "text-black/62"
              }`}
            >
              {authLabel}
              {authActive ? (
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-1 bottom-[5px] h-[2px] rounded-full ${
                    isClubPage ? "bg-white" : "bg-black"
                  }`}
                />
              ) : null}
            </Link>
          ) : null}

          <span
            aria-hidden="true"
            className={`hidden h-4 w-px md:block ${isClubPage ? "bg-white/14" : "bg-black/10"}`}
          />

          <div className="flex items-center gap-2 text-[10px] tracking-editorial">
            <button
              type="button"
              onClick={() => setLanguage("es")}
              aria-label="Cambiar a español"
              aria-pressed={language === "es"}
              className={`inline-flex rounded-[0.55rem] p-[3px] transition-all duration-300 ${
                language === "es"
                  ? isClubPage
                    ? "bg-white/12 opacity-100"
                    : "bg-black/6 opacity-100"
                  : "opacity-45 hover:opacity-75"
              }`}
            >
              <LanguageFlag code="es" inverse={isClubPage} />
              <span className="sr-only">Español</span>
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              aria-pressed={language === "en"}
              className={`inline-flex rounded-[0.55rem] p-[3px] transition-all duration-300 ${
                language === "en"
                  ? isClubPage
                    ? "bg-white/12 opacity-100"
                    : "bg-black/6 opacity-100"
                  : "opacity-45 hover:opacity-75"
              }`}
            >
              <LanguageFlag code="en" inverse={isClubPage} />
              <span className="sr-only">English</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
