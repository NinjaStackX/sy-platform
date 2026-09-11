"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 dir-rtl font-sans overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information (Right Side) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-black text-slate-800">تواصل معنا</h1>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              نحن هنا لمساعدتك! سواء كان لديك استفسار عن دورة تدريبية، أو تواجه
              مشكلة تقنية، أو ترغب في مشاركة اقتراحك، لا تتردد في مراسلتنا.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-sky-500 shrink-0 shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">
                  البريد الإلكتروني
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  support@platform.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-sky-500 shrink-0 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">
                  رقم الهاتف
                </h4>
                <p className="text-xs text-slate-500 font-medium" dir="ltr">
                  +963 999 000 000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-sky-500 shrink-0 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">
                  العنوان
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  سوريا، حلب، الجميلية
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form (Left Side) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  placeholder="أدخل اسمك"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-400 focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-left focus:outline-none focus:border-sky-400 focus:bg-white transition"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  الرسالة
                </label>
                <textarea
                  rows={4}
                  placeholder="كيف يمكننا مساعدتك؟"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-sky-400 focus:bg-white transition"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#60ceeb] hover:bg-sky-400 text-white font-bold py-3.5 rounded-xl transition shadow-md shadow-sky-100"
            >
              <span>إرسال الرسالة</span>
              <Send className="w-4 h-4 mr-1" />
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
