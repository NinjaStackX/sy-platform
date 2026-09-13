"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  Award,
  HeartHandshake,
  BookOpen,
  Settings,
  LogOut,
} from "lucide-react";

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const mainNavItems: SidebarItem[] = [
  { name: "لوحة التحكم", href: "/dashboard", icon: LayoutDashboard },
  { name: "الملف الشخصي", href: "/dashboard/profile", icon: User },
  { name: "الشهادات", href: "/dashboard/certificates", icon: Award },
  {
    name: "المشاريع التطوعية",
    href: "/dashboard/volunteer",
    icon: HeartHandshake,
  },
  { name: "الكورسات", href: "/dashboard/courses", icon: BookOpen },
];

const secondaryNavItems: SidebarItem[] = [
  { name: "الإعدادات", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between dir-rtl font-sans selection:bg-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* المنطقة الرئيسية للمحتوى */}
          <main className="flex-1 w-full min-w-0">{children}</main>

          {/* القائمة الجانبية */}
          <aside className="w-full lg:w-64 bg-white rounded-2xl border border-slate-100 p-5 shadow-sm shrink-0">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-400 px-3 block mb-2">
                معلوماتي
              </span>

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
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            <hr className="my-5 border-slate-100" />

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-400 px-3 block mb-2">
                أخرى
              </span>

              {secondaryNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition ${
                      isActive
                        ? "bg-[#60ceeb] text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              <Link
                href="/"
                onClick={() => alert("تم تسجيل الخروج اضغط تم للمتابعة")}
                className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-rose-500 hover:bg-rose-50 transition mt-2 cursor-pointer"
              >
                <LogOut className="w-4 h-4 shrink-0" />
                <span>تسجيل الخروج</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
