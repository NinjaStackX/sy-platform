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
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between dir-rtl font-sans">
      <div>
        {/* Global Navbar Header */}
        {/* <Navbar /> */}

        {/* Dashboard Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Main Page Area */}
            <main className="flex-1 w-full min-w-0">{children}</main>

            {/* Persistent Right Sidebar Navigation */}
            <aside className="w-full lg:w-64 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm shrink-0">
              {/* Primary Section */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-gray-400 px-3 block mb-2">
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
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              <hr className="my-5 border-gray-100" />

              {/* Secondary Section */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-gray-400 px-3 block mb-2">
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
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}

                {/* Logout Button */}
                <button
                  onClick={() => alert("تسجيل الخروج")}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-rose-500 hover:bg-rose-50 transition mt-2"
                >
                  <LogOut className="w-4 h-4 shrink-0" />
                  <span>تسجيل الخروج</span>
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Global Dark Footer */}
    </div>
  );
}
