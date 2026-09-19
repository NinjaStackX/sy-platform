"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Search,
  Bell,
  Globe,
  Menu,
  X,
  CheckCircle,
  BookOpen,
  MessageSquare,
  User,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

// 1. استيراد ملف i18n المباشر

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

// بيانات البحث التجريبية
const searchableItems = [
  {
    id: 1,
    title: "دورة أساسيات React & Next.js",
    type: "courses",
    href: "/courses/react",
  },
  {
    id: 2,
    title: "دورة تصميم واجهات المستخدم UI/UX",
    type: "courses",
    href: "/courses/ui-ux",
  },
  {
    id: 3,
    title: "مشروع بناء منصة تعليمية تطوعية",
    type: "projects",
    href: "/projects/edu-platform",
  },
  {
    id: 4,
    title: "مشروع تشجير المدينة الذكية",
    type: "projects",
    href: "/projects/green-city",
  },
  {
    id: 5,
    title: "مناقشة أحدث ميزات TypeScript 5",
    type: "Post",
    href: "/posts/ts-5",
  },
  {
    id: 6,
    title: "استفسارات حول الربط مع Prisma ORM",
    type: "Post",
    href: "/posts/prisma-help",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [mounted, setMounted] = useState(false);

  const notificationsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const { i18n, t } = useTranslation("common");

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.courses"), href: "/courses" },
    { name: t("nav.Post"), href: "/posts" },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setNotificationsOpen(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLanguage = () => {
    const activeI18n = i18n?.changeLanguage ? i18n : i18nConfig;
    const currentLang = activeI18n.language || "ar";
    const newLang = currentLang === "ar" ? "en" : "ar";

    activeI18n.changeLanguage(newLang);

    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({ ...item, unread: false })),
    );
  };

  const hasUnread = notifications.some((item) => item.unread);
  const currentLanguage = mounted
    ? i18n?.language || i18nConfig.language || "ar"
    : "ar";

  // تصفية نتائج البحث
  const filteredSearchItems = searchQuery.trim()
    ? searchableItems.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];

  // تمييز النص المطابق للبحث
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span
          key={index}
          className="bg-sky-100 text-sky-700 font-bold px-0.5 rounded"
        >
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  const userName =
    currentLanguage === "en" ? "Bashar Maaz Eng" : "المهندس. بشار معاز";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 font-sans transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Right Section: Logo & Main Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 transition-transform hover:scale-105 active:scale-95"
          >
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={100}
              height={40}
              priority
            />
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
                  className={`relative text-sm font-bold transition-colors py-1 ${
                    isActive
                      ? "text-[#0d2137]"
                      : "text-gray-500 hover:text-sky-500"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* 🔍 Middle Section: Search Bar & Live Dropdown */}
        <div
          className="hidden md:flex flex-1 max-w-xs mx-2 relative"
          ref={searchRef}
        >
          <div className="relative w-full">
            <input
              type="text"
              placeholder={currentLanguage === "en" ? "Search..." : "البحث"}
              value={searchQuery}
              onFocus={() => setSearchFocused(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearchFocused(true);
              }}
              className="w-full bg-[#f4f6f8] text-gray-700 placeholder-gray-400 text-xs py-2.5 pl-10 pr-4 rounded-full border border-transparent focus:border-sky-300 focus:bg-white focus:outline-none transition-all duration-300 focus:shadow-sm"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Search Results Dropdown */}
          <AnimatePresence>
            {searchFocused && searchQuery.trim().length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden max-h-80 overflow-y-auto"
              >
                {filteredSearchItems.length > 0 ? (
                  <div className="p-2 space-y-1">
                    {/* الكورسات */}
                    {filteredSearchItems.some((i) => i.type === "courses") && (
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 px-3 py-1 block">
                          {currentLanguage === "en" ? "Courses" : "الكورسات"}
                        </span>
                        {filteredSearchItems
                          .filter((i) => i.type === "courses")
                          .map((item) => (
                            <Link
                              key={item.id}
                              href={item.href}
                              onClick={() => setSearchFocused(false)}
                              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition"
                            >
                              <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                              <span>
                                {highlightText(item.title, searchQuery)}
                              </span>
                            </Link>
                          ))}
                      </div>
                    )}

                    {/* المشاريع التطوعية */}
                    {filteredSearchItems.some((i) => i.type === "projects") && (
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 px-3 py-1 block border-t border-gray-50 mt-1">
                          {currentLanguage === "en"
                            ? "Volunteer Projects"
                            : "المشاريع التطوعية"}
                        </span>
                        {filteredSearchItems
                          .filter((i) => i.type === "projects")
                          .map((item) => (
                            <Link
                              key={item.id}
                              href={item.href}
                              onClick={() => setSearchFocused(false)}
                              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
                            >
                              <HeartHandshake className="w-3.5 h-3.5 text-emerald-500" />
                              <span>
                                {highlightText(item.title, searchQuery)}
                              </span>
                            </Link>
                          ))}
                      </div>
                    )}

                    {/* المنتديات */}
                    {filteredSearchItems.some((i) => i.type === "Post") && (
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 px-3 py-1 block border-t border-gray-50 mt-1">
                          {currentLanguage === "en" ? "Post" : "المنتدى"}
                        </span>
                        {filteredSearchItems
                          .filter((i) => i.type === "Post")
                          .map((item) => (
                            <Link
                              key={item.id}
                              href={item.href}
                              onClick={() => setSearchFocused(false)}
                              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition"
                            >
                              <MessageSquare className="w-3.5 h-3.5 text-amber-500" />
                              <span>
                                {highlightText(item.title, searchQuery)}
                              </span>
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-4 text-center text-xs text-gray-400">
                    {currentLanguage === "en"
                      ? "No results found"
                      : "لا توجد نتائج طابقت بحثك"}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Left Section: User Controls & Profile */}
        <div className="flex items-center gap-3">
          {/* 🔔 Notifications Button & Dialog */}
          <div className="relative" ref={notificationsRef}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setNotificationsOpen(!notificationsOpen);
                setProfileOpen(false);
              }}
              aria-label="Notifications"
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors relative ${
                notificationsOpen
                  ? "bg-sky-50 text-sky-600"
                  : "bg-[#f4f6f8] text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Bell className="w-4 h-4" />
              {hasUnread && (
                <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white animate-pulse" />
              )}
            </motion.button>

            <AnimatePresence>
              {notificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute ltr:right-0 rtl:left-0 mt-3 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden"
                >
                  <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-gray-800">
                        {currentLanguage === "en"
                          ? "Notifications"
                          : "التنبيهات"}
                      </h3>
                      {hasUnread && (
                        <span className="text-[10px] font-semibold bg-rose-50 text-rose-500 px-2 py-0.5 rounded-full">
                          {currentLanguage === "en" ? "New" : "جديد"}
                        </span>
                      )}
                    </div>
                    {hasUnread && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs font-semibold text-sky-500 hover:text-sky-600 transition"
                      >
                        {currentLanguage === "en"
                          ? "Mark all read"
                          : "تحديد الكل كمقروء"}
                      </button>
                    )}
                  </div>

                  <div className="max-h-80 overflow-y-auto divide-y divide-gray-50">
                    {notifications.length > 0 ? (
                      notifications.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <motion.div
                            key={item.id}
                            whileHover={{
                              backgroundColor: "rgba(249, 250, 251, 1)",
                            }}
                            className={`p-3.5 flex items-start gap-3 transition cursor-pointer ${
                              item.unread ? "bg-sky-50/30" : ""
                            }`}
                          >
                            <div
                              className={`p-2 rounded-xl shrink-0 ${item.iconColor}`}
                            >
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
                          </motion.div>
                        );
                      })
                    ) : (
                      <div className="p-8 text-center text-gray-400 text-xs">
                        {currentLanguage === "en"
                          ? "No notifications"
                          : "لا توجد تنبيهات حالياً"}
                      </div>
                    )}
                  </div>

                  <div className="p-3 bg-gray-50/50 border-t border-gray-100 text-center">
                    <Link
                      href="/"
                      onClick={() => setNotificationsOpen(false)}
                      className="text-xs font-bold text-sky-600 hover:text-sky-700 transition"
                    >
                      {currentLanguage === "en"
                        ? "View all notifications"
                        : "عرض جميع التنبيهات"}
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Language Switcher */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={toggleLanguage}
            aria-label="Change Language"
            className="h-10 px-3 rounded-xl bg-[#f4f6f8] flex items-center justify-center gap-1.5 text-xs font-bold text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span suppressHydrationWarning>
              {currentLanguage === "ar" ? "EN" : "عربي"}
            </span>
          </motion.button>

          {/* 👤 Profile Tab with Animated Dropdown */}
          <div className="relative hidden sm:block" ref={profileRef}>
            <button
              onClick={() => {
                setProfileOpen(!profileOpen);
                setNotificationsOpen(false);
              }}
              className="flex items-center gap-2 pr-3 border-r border-gray-200 transition-opacity hover:opacity-80 focus:outline-none"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-sky-100 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
                  alt={userName}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-bold text-gray-800">
                {userName}
              </span>
            </button>

            {/* Profile Dropdown Menu */}
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute ltr:right-0 rtl:left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden"
                >
                  <div className="p-4 bg-sky-50/50 border-b border-gray-100 flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
                        alt={userName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-800">
                        {userName}
                      </h4>
                      <p className="text-[10px] text-gray-500 mt-0.5">
                        bashar@example.com
                      </p>
                      <span className="inline-block mt-1 text-[9px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full font-semibold">
                        {currentLanguage === "en"
                          ? "Verified Account"
                          : "حساب موثق"}
                      </span>
                    </div>
                  </div>

                  <div className="p-2 space-y-0.5">
                    <Link
                      href="/dashboard/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-gray-700 hover:bg-gray-50 transition"
                    >
                      <User className="w-4 h-4 text-gray-400" />
                      <span>
                        {currentLanguage === "en"
                          ? "My Profile"
                          : "الملف الشخصي"}
                      </span>
                    </Link>
                    <Link
                      href="/dashboard/settings"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-gray-700 hover:bg-gray-50 transition"
                    >
                      <Settings className="w-4 h-4 text-gray-400" />
                      <span>
                        {currentLanguage === "en" ? "Settings" : "الإعدادات"}
                      </span>
                    </Link>
                  </div>

                  {/* زر عرض المزيد -> Link to /dashboard */}
                  <div className="p-2 border-t border-gray-100">
                    <Link
                      href="/dashboard"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold transition shadow-sm"
                    >
                      <span>
                        {currentLanguage === "en" ? "Show More" : "عرض المزيد"}
                      </span>
                      {currentLanguage === "en" ? (
                        <ChevronRight className="w-4 h-4" />
                      ) : (
                        <ChevronLeft className="w-4 h-4" />
                      )}
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-[#f4f6f8] flex items-center justify-center text-gray-600"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* 📱 Animated Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder={currentLanguage === "en" ? "Search..." : "البحث"}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#f4f6f8] text-gray-700 text-xs py-2.5 pl-10 pr-4 rounded-full border border-transparent focus:bg-white focus:outline-none transition-all"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>

              <nav className="flex flex-col space-y-2">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm font-bold text-gray-700 hover:text-sky-500 border-b border-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-sky-100">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
                      alt={userName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">
                      {userName}
                    </p>
                    <p className="text-[10px] text-gray-400">
                      {currentLanguage === "en"
                        ? "Verified Account"
                        : "حساب موثق"}
                    </p>
                  </div>
                </div>

                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 bg-sky-500 text-white rounded-xl text-xs font-bold"
                >
                  {currentLanguage === "en" ? "Dashboard" : "لوحة التحكم"}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
