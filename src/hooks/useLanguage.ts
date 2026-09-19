"use client";

import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language || "ar";
  const isRtl = currentLanguage === "ar";
  const dir = isRtl ? "rtl" : "ltr";

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return {
    language: currentLanguage,
    dir,
    isRtl,
    changeLanguage,
  };
}
