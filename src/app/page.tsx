/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  PlayCircle,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import FeaturedCoursesSection from "@/components/features/home/FeaturedCoursesSection";

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isRtl = i18n.language === "ar";

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-sky-200 overflow-hidden">
      <ToastContainer rtl={isRtl} />

      {/* 1. Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 flex flex-col items-center text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-bold mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-800 tracking-tight leading-[1.2] mb-6 max-w-4xl"
          >
            {t("hero.title_part1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-sky-400 to-[#60ceeb]">
              {t("hero.title_highlight")}
            </span>{" "}
            {t("hero.title_part2")}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-2xl mb-10 leading-relaxed font-medium"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/courses"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#60ceeb] hover:bg-sky-400 text-white px-8 py-3.5 rounded-2xl text-sm font-bold transition shadow-lg shadow-sky-200/50 hover:shadow-sky-300/50 hover:-translate-y-0.5"
            >
              <span>{t("hero.explore")}</span>
              {isRtl ? (
                <ArrowLeft className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-2xl text-sm font-bold transition shadow-sm hover:-translate-y-0.5"
            >
              <PlayCircle className="w-4 h-4 text-sky-500" />
              <span>{t("hero.how_it_works")}</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Stats Section */}
      <section className="bg-white border-y border-slate-200/60 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x ltr:md:divide-x-reverse rtl:md:divide-x-reverse divide-slate-100"
          >
            {[
              {
                icon: BookOpen,
                count: t("stats.courses_count"),
                text: t("stats.courses_text"),
                color: "text-indigo-500",
                bg: "bg-indigo-50",
              },
              {
                icon: Users,
                count: t("stats.students_count"),
                text: t("stats.students_text"),
                color: "text-emerald-500",
                bg: "bg-emerald-50",
              },
              {
                icon: Trophy,
                count: t("stats.certificates_count"),
                text: t("stats.certificates_text"),
                color: "text-amber-500",
                bg: "bg-amber-50",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex flex-col items-center text-center pt-8 md:pt-0"
              >
                <div
                  className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-5 shadow-sm`}
                >
                  <stat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black text-slate-800 mb-2">
                  {stat.count}
                </h3>
                <p className="text-sm text-slate-500 font-bold">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Featured Courses Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl font-black text-slate-800 mb-2">
              {t("featured.title")}
            </h2>
            <p className="text-slate-500 text-sm font-medium">
              {t("featured.subtitle")}
            </p>
          </div>
          <Link
            href="/courses"
            className="hidden sm:flex items-center gap-1 text-sky-500 font-bold hover:text-sky-600 transition"
          >
            <span>{t("featured.view_all")}</span>
            {isRtl ? (
              <ChevronLeft className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </Link>
        </motion.div>

        {/* استدعاء مكون الكورسات المحدث ليعمل بواسطة useCourses */}
        <FeaturedCoursesSection
          fadeUp={fadeUp}
          staggerContainer={staggerContainer}
        />
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 leading-tight">
              {t("why_us.title_part1")}{" "}
              <span className="text-sky-500">
                {t("why_us.title_highlight")}
              </span>{" "}
              {t("why_us.title_part2")}
            </h2>
            <div className="space-y-6">
              {[
                t("why_us.feature_1"),
                t("why_us.feature_2"),
                t("why_us.feature_3"),
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-sky-500" />
                  </div>
                  <p className="text-slate-600 font-bold text-sm">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-sky-50 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <div className="relative h-[400px] w-full rounded-[3rem] overflow-hidden shadow-xl border border-white/50">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Students learning"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-slate-800 rounded-[3rem] p-12 sm:p-16 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-sky-500/20 to-transparent pointer-events-none"></div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 relative z-10">
              {t("cta.title")}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-10 max-w-xl mx-auto relative z-10">
              {t("cta.description")}
            </p>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 bg-[#60ceeb] hover:bg-sky-400 text-white px-10 py-4 rounded-2xl text-sm font-bold transition shadow-lg shadow-sky-500/30 hover:-translate-y-1 relative z-10"
            >
              {t("cta.button")}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
