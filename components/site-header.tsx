"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import {
  languageOptions,
  type Language,
  useLanguage
} from "@/components/language-provider";
import { localizeText, navigation, type LocalizedText } from "@/data/site";

function LanguageFlag({
  code,
  inverse
}: {
  code: Language;
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

  if (code === "pt") {
    return (
      <span
        aria-hidden="true"
        className={`relative block h-3.5 w-5 overflow-hidden rounded-[3px] ${frameClass}`}
      >
        <span className="absolute inset-y-0 left-0 w-[38%] bg-[#1e6a45]" />
        <span className="absolute inset-y-0 right-0 w-[62%] bg-[#c83c3c]" />
        <span className="absolute left-[38%] top-1/2 h-[34%] w-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e0b447]" />
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

type MobileNavigationItem = {
  href: string;
  label: LocalizedText;
};

function languageText(code: Language) {
  return languageOptions.find((option) => option.code === code)?.label ?? "Español";
}

function LanguageSelector({
  language,
  setLanguage,
  inverse,
  open,
  onToggle,
  onClose,
  align = "right"
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  inverse: boolean;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  align?: "right" | "center";
}) {
  const panelTone = inverse
    ? "border-white/10 bg-[#111111] text-[#f4efe8]"
    : "border-black/10 bg-[#f4efe8] text-black";
  const buttonTone = inverse ? "text-[#f4efe8]" : "text-black";
  const panelAlign =
    align === "center"
      ? "left-1/2 -translate-x-1/2"
      : "right-0";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-label={language === "es" ? "Elegir idioma" : language === "pt" ? "Escolher idioma" : "Choose language"}
        aria-expanded={open}
        className={`inline-flex items-center gap-2 rounded-full px-2 py-1.5 text-[11px] uppercase tracking-editorial transition-opacity duration-300 hover:opacity-72 ${buttonTone}`}
      >
        <LanguageFlag code={language} inverse={inverse} />
        <span className="sr-only">{languageText(language)}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 10 6"
          className={`h-[7px] w-[11px] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
        >
          <path
            d="M1 1.25 5 4.75l4-3.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`absolute top-[calc(100%+0.8rem)] z-[120] min-w-[12rem] rounded-[1.15rem] border p-2 shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300 ${panelTone} ${panelAlign} ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        {languageOptions.map((option) => {
          const active = option.code === language;

          return (
            <button
              key={option.code}
              type="button"
              onClick={() => {
                setLanguage(option.code);
                onClose();
              }}
              className={`flex w-full items-center justify-between gap-3 rounded-[0.9rem] px-3 py-2.5 text-left transition-colors duration-300 ${
                active
                  ? inverse
                    ? "bg-white/8 text-[#f4efe8]"
                    : "bg-black/5 text-black"
                  : inverse
                    ? "text-[#f4efe8]/84 hover:bg-white/6"
                    : "text-black/76 hover:bg-black/4"
              }`}
            >
              <span className="inline-flex items-center gap-3">
                <LanguageFlag code={option.code} inverse={inverse} />
                <span className="text-[0.92rem] tracking-[0.01em]">{option.label}</span>
              </span>
              {active ? (
                <span className="text-[11px] uppercase tracking-editorial">
                  {language === "es" ? "Activo" : language === "pt" ? "Ativo" : "Active"}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const { loading, user } = useAuth();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const desktopLanguageMenuRef = useRef<HTMLDivElement | null>(null);
  const mobileLanguageMenuRef = useRef<HTMLDivElement | null>(null);

  const isClubPage = pathname?.startsWith("/club");
  const primaryNavigation = navigation.filter((item) => item.tier === "primary");
  const secondaryNavigation = navigation.filter((item) => item.tier === "secondary");
  const mobileNavigation: MobileNavigationItem[] = [...primaryNavigation, ...secondaryNavigation];
  const authHref = user ? "/mi-recorrido" : "/entrar";
  const authActive = pathname === "/entrar" || pathname?.startsWith("/mi-recorrido");
  const authLabel = loading
    ? ""
    : user
      ? language === "es"
        ? "Mi recorrido"
        : language === "pt"
          ? "O meu percurso"
        : "My journey"
      : language === "es"
        ? "Entrar"
        : language === "pt"
          ? "Entrar"
        : "Enter";

  useEffect(() => {
    setMobileMenuOpen(false);
    setLanguageMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) return;
    setLanguageMenuOpen(false);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!languageMenuOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      const insideDesktop = desktopLanguageMenuRef.current?.contains(target);
      const insideMobile = mobileLanguageMenuRef.current?.contains(target);

      if (!insideDesktop && !insideMobile) {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [languageMenuOpen]);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    if (href === "/explore") {
      return (
        pathname === "/explore" ||
        pathname.startsWith("/territories") ||
        pathname.startsWith("/stories")
      );
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const headerTone = isClubPage
    ? "border-b border-white/12 bg-[#0f0f0f]/92 text-white"
    : "border-b border-black/8 bg-[#f4efe8]/88 text-black";
  const mobileOpenTone = mobileMenuOpen
    ? "border-b border-transparent bg-transparent text-[#f4efe8] backdrop-blur-none"
    : `${headerTone} backdrop-blur-md`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${mobileOpenTone}`}>
      <div
        className={`mx-auto hidden max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-x-6 px-6 py-5 text-[11px] uppercase tracking-editorial md:grid md:gap-x-10 md:px-10 ${
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

        <nav className="min-w-0 items-center justify-center md:flex">
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

          <div ref={desktopLanguageMenuRef}>
            <LanguageSelector
              language={language}
              setLanguage={setLanguage}
              inverse={isClubPage}
              open={languageMenuOpen}
              onToggle={() => setLanguageMenuOpen((value) => !value)}
              onClose={() => setLanguageMenuOpen(false)}
            />
          </div>
        </div>
      </div>

      <div
        className={`mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-5 md:hidden ${
          isClubPage ? "text-white" : "text-black"
        }`}
      >
        <div aria-hidden="true" className="h-8" />
        <Link
          href="/"
          className={`justify-self-center font-serif text-xl normal-case tracking-[0.08em] transition-opacity duration-500 hover:opacity-70 ${
            isClubPage ? "text-white" : "text-black"
          }`}
        >
          Planeta Argentina
        </Link>
        <button
          type="button"
          aria-label={
            mobileMenuOpen
              ? language === "es"
                ? "Cerrar menú"
                : language === "pt"
                  ? "Fechar menu"
                  : "Close menu"
              : language === "es"
                ? "Abrir menú"
                : language === "pt"
                  ? "Abrir menu"
                  : "Open menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-overlay"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className={`relative justify-self-end rounded-full p-2 transition-opacity duration-300 hover:opacity-70 ${
            isClubPage ? "text-white" : "text-black"
          }`}
        >
          <span className="sr-only">
            {language === "es" ? "Menú" : language === "pt" ? "Menu" : "Menu"}
          </span>
          <span className="relative block h-4 w-5">
            <span
              aria-hidden="true"
              className={`absolute left-0 top-0 block h-px w-5 origin-center transition-all duration-300 ${
                isClubPage ? "bg-white" : "bg-black"
              } ${mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              aria-hidden="true"
              className={`absolute left-0 top-[7px] block h-px w-5 transition-all duration-300 ${
                isClubPage ? "bg-white" : "bg-black"
              } ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              aria-hidden="true"
              className={`absolute left-0 top-[14px] block h-px w-5 origin-center transition-all duration-300 ${
                isClubPage ? "bg-white" : "bg-black"
              } ${mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation-overlay"
        className={`fixed inset-0 z-[80] bg-[#0a0a09] text-[#f4efe8] md:hidden transition-opacity duration-500 ${
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="absolute inset-0 bg-[#0a0a09]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,rgba(255,255,255,0.012)_18%,rgba(0,0,0,0.12)_100%)]" />
        <button
          type="button"
          aria-label={language === "es" ? "Cerrar menú" : language === "pt" ? "Fechar menu" : "Close menu"}
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0"
        />

        <div
          className={`relative flex min-h-screen flex-col px-8 pb-14 pt-6 text-[#f4efe8] transition-all duration-500 ${
            mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <div className="grid grid-cols-[1fr_auto_1fr] items-center">
            <div aria-hidden="true" className="h-8" />
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="justify-self-center font-serif text-xl normal-case tracking-[0.08em] text-[#f4efe8] transition-opacity duration-300 hover:opacity-70"
            >
              Planeta Argentina
            </Link>
            <button
              type="button"
              aria-label={language === "es" ? "Cerrar menú" : language === "pt" ? "Fechar menu" : "Close menu"}
              onClick={() => setMobileMenuOpen(false)}
              className="relative justify-self-end rounded-full p-2 text-[#f4efe8] transition-opacity duration-300 hover:opacity-70"
            >
              <span className="sr-only">
                {language === "es" ? "Cerrar" : language === "pt" ? "Fechar" : "Close"}
              </span>
              <span className="relative block h-4 w-5">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[7px] block h-px w-5 rotate-45 bg-[#f4efe8]"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[7px] block h-px w-5 -rotate-45 bg-[#f4efe8]"
                />
              </span>
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-10 py-20 text-center">
            {mobileNavigation.map((item, index) => {
              const active = isActive(item.href);
              const emphasized = active || index === 0;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${90 + index * 55}ms` : "0ms"
                  }}
                  className={`font-serif text-[2.08rem] leading-[1.02] tracking-[-0.015em] transition-all duration-500 hover:opacity-65 ${
                    mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  } ${emphasized ? "font-medium tracking-[-0.02em] text-[#f4efe8]" : "font-normal text-[#f4efe8]/88"}`}
                >
                  {localizeText(item.label, language)}
                </Link>
              );
            })}
          </nav>

          <div
            className={`border-t border-white/10 pt-8 transition-all duration-500 ${
              mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? `${90 + mobileNavigation.length * 55}ms` : "0ms" }}
          >
            <div className="flex flex-col items-center gap-8">
              {!loading ? (
                <Link
                  href={authHref}
                  aria-current={authActive ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[12px] uppercase tracking-editorial text-[#f4efe8]/72 transition-opacity duration-300 hover:opacity-65"
                >
                  {authLabel}
                </Link>
              ) : null}

              <div ref={mobileLanguageMenuRef}>
                <LanguageSelector
                  language={language}
                  setLanguage={setLanguage}
                  inverse
                  open={languageMenuOpen}
                  onToggle={() => setLanguageMenuOpen((value) => !value)}
                  onClose={() => setLanguageMenuOpen(false)}
                  align="center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
