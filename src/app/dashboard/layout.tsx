"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useData } from "@/context/DataContext";
import {
  LayoutDashboard,
  User,
  Award,
  HeartHandshake,
  BookOpen,
  Settings,
  LogOut,
  Globe,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { t } = useTranslation();
  const { language, changeLanguage } = useData();

  const mainNavItems = [
    { name: t("dashboard"), href: "/dashboard", icon: LayoutDashboard },
    { name: t("profile"), href: "/dashboard/profile", icon: User },
    { name: t("certificates"), href: "/dashboard/certificates", icon: Award },
    {
      name: t("volunteer"),
      href: "/dashboard/volunteer",
      icon: HeartHandshake,
    },
    { name: t("courses"), href: "/dashboard/courses", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* محتوى الصفحة */}
          <main className="flex-1 w-full min-w-0">{children}</main>

          {/* القائمة الجانبية */}
          <aside className="w-full lg:w-64 bg-white rounded-2xl border border-slate-100 p-5 shadow-sm shrink-0">
            {/* زر تغيير اللغة */}
            <div className="mb-4 pb-4 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-sky-500" /> اللغة
              </span>
              <button
                onClick={() => changeLanguage(language === "ar" ? "en" : "ar")}
                className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1 rounded-lg font-bold transition"
              >
                {language === "ar" ? "English" : "العربية"}
              </button>
            </div>

            <div className="space-y-1">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition ${
                      isActive
                        ? "bg-[#60ceeb] text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
