"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 1. استيراد ملفات JSON للترجمة
import arCommon from "../../public/locales/ar/common.json";
import enCommon from "../../public/locales/en/common.json";

// 2. تجميع المصادر
const resources = {
  ar: {
    common: arCommon,
  },
  en: {
    common: enCommon,
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "ar",
      lng: "ar",
      defaultNS: "common", // اسم ملف الترجمة الافتراضي
      ns: ["common"],
      detection: {
        order: ["localStorage", "cookie", "navigator"],
        caches: ["localStorage"],
      },
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
