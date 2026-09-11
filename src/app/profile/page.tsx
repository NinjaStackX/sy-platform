"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  BookOpen,
  Trophy,
  Settings,
  LogOut,
  Shield,
  Bell,
  CheckCircle,
  ChevronLeft,
  Edit3,
} from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"courses" | "settings">("courses");

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 dir-rtl font-sans selection:bg-sky-200">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Profile Header Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="bg-white rounded-[2.5rem] border border-slate-100 p-6 sm:p-10 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-l from-sky-400/20 to-[#60ceeb]/30 -z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-right">
            <div className="relative">
              <div className="w-28 h-28 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 left-0 bg-sky-500 text-white p-2 rounded-full shadow hover:bg-sky-600 transition">
                <Edit3 className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-800">
                  سارة أحمد
                </h1>
                <span className="bg-sky-50 text-sky-600 border border-sky-100 text-[10px] font-bold px-2.5 py-1 rounded-full">
                  طالب مميز
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium">
                sara.ahmad@example.com
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-3 w-full md:w-auto justify-center">
            <Link
              href="/"
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-xs font-bold transition"
            >
              <LogOut className="w-4 h-4" />
              <span>تسجيل الخروج</span>
            </Link>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            {
              label: "الدورات الحالية",
              value: "4",
              icon: BookOpen,
              color: "text-sky-500",
              bg: "bg-sky-50",
            },
            {
              label: "الدورات المكتملة",
              value: "12",
              icon: CheckCircle,
              color: "text-emerald-500",
              bg: "bg-emerald-50",
            },
            {
              label: "الشهادات المكتسبة",
              value: "8",
              icon: Trophy,
              color: "text-amber-500",
              bg: "bg-amber-50",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4"
            >
              <div
                className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center shrink-0`}
              >
                <stat.icon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-800">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 font-bold">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs & Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b border-slate-200/60 pb-4">
            <button
              onClick={() => setActiveTab("courses")}
              className={`text-sm font-bold pb-2 transition relative ${
                activeTab === "courses"
                  ? "text-sky-500"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              دوراتي التدريبية
              {activeTab === "courses" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-[-17px] right-0 left-0 h-1 bg-sky-500 rounded-full"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`text-sm font-bold pb-2 transition relative ${
                activeTab === "settings"
                  ? "text-sky-500"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              إعدادات الحساب
              {activeTab === "settings" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-[-17px] right-0 left-0 h-1 bg-sky-500 rounded-full"
                />
              )}
            </button>
          </div>

          {activeTab === "courses" ? (
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  title: "تطوير تطبيقات الويب باستخدام Next.js",
                  progress: 75,
                  category: "برمجة",
                },
                {
                  title: "احترف تصميم واجهات المستخدم UI/UX",
                  progress: 40,
                  category: "تصميم",
                },
              ].map((course, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="bg-sky-50 text-sky-600 text-xs font-bold px-3 py-1 rounded-lg">
                      {course.category}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {course.progress}% مكتمل
                    </span>
                  </div>
                  <h3 className="text-base font-black text-slate-800">
                    {course.title}
                  </h3>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#60ceeb] h-full rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6"
            >
              <h3 className="text-lg font-black text-slate-800">
                تعديل المعلومات الشخصية
              </h3>
              <form
                className="space-y-4 max-w-xl"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    defaultValue="سارة أحمد"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    defaultValue="sara.ahmad@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-left focus:outline-none focus:border-sky-400"
                    dir="ltr"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#60ceeb] hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl transition text-sm shadow-md shadow-sky-200"
                >
                  حفظ التعديلات
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
