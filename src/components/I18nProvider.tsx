"use client";

import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n"; // قم بتعديل مسار ملف i18n حسب مشروعه

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // ضبط اتجاه الصفحة تلقائياً حسب اللغة الحالية عند بدء التحميل
    const currentLang = i18n.language || "ar";
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
