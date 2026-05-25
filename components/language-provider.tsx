"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

export type Language = "es" | "en" | "pt";

export const languageOptions = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "pt", label: "Português" }
] as const;

type LanguageContextValue = {
  language: Language;
  isHydrated: boolean;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("planeta-language");
    if (saved === "es" || saved === "en" || saved === "pt") {
      setLanguage(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = "es";
    }

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    window.localStorage.setItem("planeta-language", language);
    document.documentElement.lang = language;
  }, [isHydrated, language]);

  const value = useMemo(() => ({ language, isHydrated, setLanguage }), [isHydrated, language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
