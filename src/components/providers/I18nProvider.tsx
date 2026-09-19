"use client";

import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // ضبط الخصائص مرة واحدة على مستوى الجذر
    const handleLanguageChange = (lang: string) => {
      const dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = lang;
    };

    // الضبط الأولي
    handleLanguageChange(i18n.language || "ar");

    // الاستماع للتغييرات إن حدثت من أي مكان
    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
