"use client";

import * as React from "react";

import { dictionaries, type Lang, type TranslationKey } from "@/lib/i18n";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
};

const LangContext = React.createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: (k) => dictionaries.en[k],
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en");

  React.useEffect(() => {
    const stored = window.localStorage.getItem("lang") as Lang | null;
    const initial: Lang = stored === "id" ? "id" : "en";
    setLangState(initial);
  }, []);

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("lang", next);
  }, []);

  const t = React.useCallback(
    (key: TranslationKey) => dictionaries[lang][key],
    [lang]
  );

  const value = React.useMemo(
    () => ({ lang, setLang, t }),
    [lang, setLang, t]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return React.useContext(LangContext);
}
