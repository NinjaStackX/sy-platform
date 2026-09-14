"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Bell, Globe, Menu, X, CheckCircle, BookOpen, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

// 1. استيراد ملف i18n المباشر كغطاء أمان لضمان وجود الدالة دائماً
import i18nConfig from "@/lib/i18n";

// بيانات الإشعارات التجريبية
const mockNotifications = [
  {
    id: 1,
    title: "تمت إضافة درس جديد",
    description: "تم نشر درس جديد في دورة React & Next.js المتقدمة.",
    time: "منذ 10 دقائق",
    unread: true,
    icon: BookOpen,
    iconColor: "text-sky-500 bg-sky-50",
  },
  {
    id: 2,
    title: "رد جديد على منشورك",
    description: "قام أحمد بالرد على تساؤلك في قسم المنتدى.",
    time: "منذ ساعة",
    unread: true,
    icon: MessageSquare,
    iconColor: "text-amber-500 bg-amber-50",
  },
  {
    id: 3,
    title: "تم إصدار الشهادة",
    description: "تهانينا! شهادة إتمام دورة Tailwind CSS جاهزة للتحميل.",
    time: "منذ يومين",
    unread: false,
    icon: CheckCircle,
    iconColor: "text-emerald-500 bg-emerald-50",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  const popoverRef = useRef<HTMLDivElement>(null);

  // استخدام useTranslation للجزء التفاعلي
  const { i18n, t } = useTranslation("common");

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.courses"), href: "/courses" },
    { name: t("nav.forum"), href: "/forum" },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  // التأكد من عمل المكون في المتصفح لتفادي مشاكل الـ Hydration
  useEffect(() => {
    setMounted(true);

    // إغلاق نافذة التنبيهات عند النقر خارجها
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // دالة التبديل الآمنة
  const toggleLanguage = () => {
    const activeI18n = i18n?.changeLanguage ? i18n : i18nConfig;
    const currentLang = activeI18n.language || "ar";
    const newLang = currentLang === "ar" ? "en" : "ar";

    activeI18n.changeLanguage(newLang);

    // تحديث اتجاه ولغة المستند في الـ DOM
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, unread: false })));
  };

  const hasUnread = notifications.some((item) => item.unread);
  const currentLanguage = mounted ? i18n?.language || i18nConfig.language || "ar" : "ar";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Right Section: Logo & Main Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image src="/logo.jpg" alt="Logo" width={100} height={40} />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-bold transition-colors ${
                    isActive
                      ? "text-[#0d2137]"
                      : "text-gray-500 hover:text-sky-500"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Middle Section: Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xs mx-2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="البحث"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f4f6f8] text-gray-700 placeholder-gray-400 text-xs py-2.5 pl-10 pr-4 rounded-full border border-transparent focus:border-sky-300 focus:bg-white focus:outline-none transition-all"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Left Section: User Controls & Profile */}
        <div className="flex items-center gap-3">
          {/* 🔔 Notification Trigger & Dropdown Dialog */}
          <div className="relative" ref={popoverRef}>
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              aria-label="Notifications"
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition relative ${
                notificationsOpen
                  ? "bg-sky-50 text-sky-600"
                  : "bg-[#f4f6f8] text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Bell className="w-4 h-4" />
              {hasUnread && (
                <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
              )}
            </button>

            {/* Notification Dialog Panel */}
            {notificationsOpen && (
              <div className="absolute ltr:right-0 rtl:left-0 mt-3 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-gray-800">التنبيهات</h3>
                    {hasUnread && (
                      <span className="text-[10px] font-semibold bg-rose-50 text-rose-500 px-2 py-0.5 rounded-full">
                        جديد
                      </span>
                    )}
                  </div>
                  {hasUnread && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs font-semibold text-sky-500 hover:text-sky-600 transition"
                    >
                      تحديد الكل كمقروء
                    </button>
                  )}
                </div>

                <div className="max-h-80 overflow-y-auto divide-y divide-gray-50">
                  {notifications.length > 0 ? (
                    notifications.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={item.id}
                          className={`p-3.5 flex items-start gap-3 hover:bg-gray-50/80 transition cursor-pointer ${
                            item.unread ? "bg-sky-50/30" : ""
                          }`}
                        >
                          <div className={`p-2 rounded-xl shrink-0 ${item.iconColor}`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-0.5">
                              <p className="text-xs font-bold text-gray-800 truncate">
                                {item.title}
                              </p>
                              {item.unread && (
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                              )}
                            </div>
                            <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                            <span className="text-[10px] text-gray-400 mt-1 block">
                              {item.time}
                            </span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-8 text-center text-gray-400 text-xs">
                      لا توجد تنبيهات حالياً
                    </div>
                  )}
                </div>

                <div className="p-3 bg-gray-50/50 border-t border-gray-100 text-center">
                  <Link
                    href="/notifications"
                    onClick={() => setNotificationsOpen(false)}
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 transition"
                  >
                    عرض جميع التنبيهات
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* زر تغيير اللغة */}
          <button
            onClick={toggleLanguage}
            aria-label="Change Language"
            className="h-10 px-3 rounded-xl bg-[#f4f6f8] flex items-center justify-center gap-1.5 text-xs font-bold text-gray-600 hover:bg-gray-200 transition"
          >
            <Globe className="w-4 h-4" />
            <span suppressHydrationWarning>
              {currentLanguage === "ar" ? "EN" : "عربي"}
            </span>
          </button>

          <Link
            href={"/dashboard"}
            className="hidden sm:flex items-center gap-2 pr-3 border-r border-gray-200"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-sky-100 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
                alt="المهندس. بشار معاز"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-bold text-gray-800">
              المهندس. بشار معاز
            </span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-[#f4f6f8] flex items-center justify-center text-gray-600"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="البحث"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f4f6f8] text-gray-700 text-xs py-2.5 pl-10 pr-4 rounded-full border border-transparent focus:bg-white focus:outline-none"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-bold text-gray-700 hover:text-sky-500 border-b border-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 pt-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-sky-100">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
                alt="المهندس. بشار معاز"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800">
                المهندس. بشار معاز
              </p>
              <p className="text-[10px] text-gray-400">حساب موثق</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
