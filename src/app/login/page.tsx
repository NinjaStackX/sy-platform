"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // 1. استيراد useRouter
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter(); // 2. تعريف الموجه

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  // دالة التعامل مع تسجيل الدخول
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // يمكنك هنا وضع منطق التحقق أو الاتصال بالـ API (مثل NextAuth)

    // الانتقال المباشر إلى صفحة البروفايل
    router.push("/profile");
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-8 dir-rtl font-sans selection:bg-sky-200">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="w-full max-w-5xl bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row overflow-hidden"
      >
        {/* القسم الأيمن - نموذج تسجيل الدخول */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <motion.div
            variants={stagger}
            className="w-full max-w-sm mx-auto space-y-8"
          >
            <motion.div
              variants={fadeUp}
              className="space-y-2 text-center md:text-right"
            >
              <Link
                href="/"
                className="inline-block text-sky-500 mb-6 bg-sky-50 p-2 rounded-xl hover:bg-sky-100 transition"
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
              <h1 className="text-3xl font-black text-slate-800">
                مرحباً بعودتك!
              </h1>
              <p className="text-slate-500 text-sm font-medium">
                قم بتسجيل الدخول لمتابعة رحلة تعلمك.
              </p>
            </motion.div>

            {/* 3. ربط الدالة بـ onSubmit */}
            <motion.form
              variants={stagger}
              className="space-y-5"
              onSubmit={handleSubmit}
            >
              <motion.div variants={fadeUp} className="space-y-2">
                <label className="text-xs font-bold text-slate-700">
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-slate-400 absolute right-4 top-3.5" />
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm text-left focus:outline-none focus:border-sky-400 focus:bg-white transition"
                    dir="ltr"
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">
                    كلمة المرور
                  </label>
                  <Link
                    href="#"
                    className="text-xs font-bold text-sky-500 hover:text-sky-600 transition"
                  >
                    نسيت كلمة المرور؟
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="w-5 h-5 text-slate-400 absolute right-4 top-3.5" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm text-left focus:outline-none focus:border-sky-400 focus:bg-white transition"
                    dir="ltr"
                    required
                  />
                </div>
              </motion.div>

              <motion.button
                variants={fadeUp}
                type="submit"
                className="w-full bg-[#60ceeb] hover:bg-sky-400 text-white font-bold py-3.5 rounded-xl transition shadow-md shadow-sky-200/50 hover:-translate-y-0.5 mt-2 cursor-pointer"
              >
                تسجيل الدخول
              </motion.button>
            </motion.form>

            <motion.div
              variants={fadeUp}
              className="text-center text-sm font-bold text-slate-500"
            >
              ليس لديك حساب؟{" "}
              <Link
                href="/register"
                className="text-sky-500 hover:text-sky-600 transition"
              >
                أنشئ حساباً جديداً
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* القسم الأيسر - الصورة والديكور */}
        <div className="w-full md:w-1/2 bg-slate-50 relative hidden md:block overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 to-sky-100/50 mix-blend-multiply z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
            alt="Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 right-10 left-10 z-20 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg">
            <h3 className="text-lg font-black text-slate-800 mb-2">
              استثمر في مستقبلك
            </h3>
            <p className="text-xs text-slate-600 font-bold leading-relaxed">
              انضم إلى آلاف الطلاب الذين يطورون مهاراتهم يومياً عبر منصتنا.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
