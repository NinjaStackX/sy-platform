"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import "@/lib/i18n"; // استيراد إعدادات i18n
import { useTranslation } from "react-i18next";
import {
  UserProfile,
  Course,
  initialProfileData,
  initialCoursesData,
} from "./dummyData";

interface DataContextType {
  user: UserProfile;
  courses: Course[];
  updateUser: (updatedUser: Partial<UserProfile>) => void;
  language: string;
  changeLanguage: (lang: string) => void;
  dir: "rtl" | "ltr";
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [user, setUser] = useState<UserProfile>(initialProfileData);
  const [courses, setCourses] = useState<Course[]>(initialCoursesData);
  const [language, setLanguage] = useState<string>(i18n.language || "ar");
  const [dir, setDir] = useState<"rtl" | "ltr">("rtl");

  // تحديث اتجاه الصفحة عند تغيير اللغة
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    const newDir = lang === "ar" ? "rtl" : "ltr";
    setDir(newDir);
    document.documentElement.dir = newDir;
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  const updateUser = (updatedUser: Partial<UserProfile>) => {
    setUser((prev) => ({ ...prev, ...updatedUser }));
  };

  return (
    <DataContext.Provider
      value={{
        user,
        courses,
        updateUser,
        language,
        changeLanguage,
        dir,
      }}
    >
      <div dir={dir}>{children}</div>
    </DataContext.Provider>
  );
}

// Custom Hook لسهولة الوصول للـ Context
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
