"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Users,
  Trophy,
  Star,
  PlayCircle,
  CheckCircle,
  ChevronLeft,
} from "lucide-react";

// بيانات وهمية لقسم الدورات المميزة
const FEATURED_COURSES = [
  {
    id: "1",
    title: "تطوير تطبيقات الويب المتقدمة باستخدام Next.js",
    category: "برمجة",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  },
  {
    id: "2",
    title: "احترف تصميم واجهات المستخدم UI/UX",
    category: "تصميم",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1542744094-3a3121699709?w=600&q=80",
  },
  {
    id: "3",
    title: "كورس اللغة الإنجليزية الشامل للمبتدئين",
    category: "لغات",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80",
  },
];

export default function HomePage() {
  // إعدادات الحركة (Framer Motion Variants)
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

  return (
    <main className="min-h-screen bg-slate-50 dir-rtl font-sans selection:bg-sky-200 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 flex flex-col items-center text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-bold mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            منصتك الأولى للتعلم عن بُعد
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-800 tracking-tight leading-[1.2] mb-6 max-w-4xl"
          >
            طوّر مهاراتك مع أفضل{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-sky-400 to-[#60ceeb]">
              الخبراء
            </span>{" "}
            في مجالك
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-slate-500 text-sm sm:text-base lg:text-lg max-w-2xl mb-10 leading-relaxed font-medium"
          >
            انضم إلى آلاف المتعلمين واستكشف مكتبة ضخمة من الدورات التدريبية
            المصممة بعناية لتأخذك من الصفر وحتى الاحتراف في مجالات التكنولوجيا،
            التصميم، واللغات.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/courses"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#60ceeb] hover:bg-sky-400 text-white px-8 py-3.5 rounded-2xl text-sm font-bold transition shadow-lg shadow-sky-200/50 hover:shadow-sky-300/50 hover:-translate-y-0.5"
            >
              <span>استكشف الدورات</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-2xl text-sm font-bold transition shadow-sm hover:-translate-y-0.5"
            >
              <PlayCircle className="w-4 h-4 text-sky-500" />
              <span>كيف نعمل؟</span>
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-100"
          >
            {[
              {
                icon: BookOpen,
                count: "+500",
                text: "دورة تدريبية متخصصة",
                color: "text-indigo-500",
                bg: "bg-indigo-50",
              },
              {
                icon: Users,
                count: "+50,000",
                text: "طالب مسجل معنا",
                color: "text-emerald-500",
                bg: "bg-emerald-50",
              },
              {
                icon: Trophy,
                count: "شهادات",
                text: "معتمدة وموثوقة",
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

      {/* 3. Featured Courses */}
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
              الأكثر مبيعاً
            </h2>
            <p className="text-slate-500 text-sm font-medium">
              ابدأ رحلتك مع الكورسات التي يفضلها طلابنا
            </p>
          </div>
          <Link
            href="/courses"
            className="hidden sm:flex items-center gap-1 text-sky-500 font-bold hover:text-sky-600 transition"
          >
            <span>عرض الكل</span>
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURED_COURSES.map((course) => (
            <motion.div
              key={course.id}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <Link href={`/courses/${course.id}`}>
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-slate-700 shadow-sm">
                    {course.category}
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-1 text-amber-400 font-bold text-xs">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                  <h3 className="text-base font-black text-slate-800 group-hover:text-sky-500 transition line-clamp-2">
                    {course.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Why Choose Us / Features */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 leading-tight">
              تعلم بالطريقة التي <span className="text-sky-500">تناسبك</span>{" "}
              وفي أي وقت
            </h2>
            <div className="space-y-6">
              {[
                "وصول مدى الحياة لجميع محتويات الدورة.",
                "تطبيقات عملية ومشاريع حقيقية لضمان الفهم.",
                "دعم فني وتواصل مباشر مع المدربين.",
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
            {/* زخرفة بصرية */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-sky-50 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt="Students learning"
              className="rounded-[3rem] shadow-xl border border-white/50 object-cover w-full h-[400px]"
            />
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
            {/* تأثير ضوئي للخلفية */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-sky-500/20 to-transparent pointer-events-none"></div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 relative z-10">
              هل أنت مستعد لبدء رحلة التعلم؟
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-10 max-w-xl mx-auto relative z-10">
              انضم إلينا اليوم وابدأ في بناء مستقبلك المهني مع أفضل الموارد
              التعليمية المتاحة على الإنترنت.
            </p>
            <Link
              href="login"
              className="inline-flex items-center justify-center gap-2 bg-[#60ceeb] hover:bg-sky-400 text-white px-10 py-4 rounded-2xl text-sm font-bold transition shadow-lg shadow-sky-500/30 hover:-translate-y-1 relative z-10"
            >
              أنشئ حسابك مجاناً
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
