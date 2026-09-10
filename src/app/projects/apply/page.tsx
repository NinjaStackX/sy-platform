"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function ApplyVolunteerProjectPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between dir-rtl font-sans">
      <div>
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
          <div className="text-center space-y-1">
            <h1 className="text-xl font-black text-slate-800">
              إضافة معلوماتك للانتساب للمشروع :
            </h1>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-10 shadow-sm space-y-6">
            {/* الاسم الكامل */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                الاسم الكامل
              </label>
              <span className="text-[10px] text-slate-400 block mb-1">
                من فضلك يجب أن يكون الاسم معبر و لا يتجاوز 30 حرف
              </span>
              <input
                type="text"
                defaultValue="دورة لغة إنجليزية"
                className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-700 focus:outline-none focus:border-sky-400"
              />
            </div>

            {/* رقم الهاتف */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                رقم الهاتف
              </label>
              <div className="flex gap-2 dir-ltr">
                <div className="bg-[#f8fafc] border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-600 flex items-center gap-1.5 shrink-0">
                  <span>🇸🇾</span>
                  <span>+963</span>
                </div>
                <input
                  type="text"
                  defaultValue="9637260312"
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-700 focus:outline-none focus:border-sky-400 text-right"
                />
              </div>
            </div>

            {/* الأيام والساعات المتاحة */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                اكتب لنا الايام المتاح بها والساعات المتاحة
              </label>
              <textarea
                rows={3}
                defaultValue="دورة لغة إنجليزية"
                className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl p-4 text-xs text-slate-700 focus:outline-none focus:border-sky-400 resize-none"
              />
            </div>

            {/* ماذا يمكن أن تقدم لهذا المشروع */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">
                ماذا يمكن ان تقدم لهذا المشروع ؟
              </label>
              <textarea
                rows={4}
                defaultValue="دورة لغة إنجليزية"
                className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl p-4 text-xs text-slate-700 focus:outline-none focus:border-sky-400 resize-none"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <button className="flex-1 bg-[#60ceeb] hover:bg-sky-400 text-white py-3 rounded-2xl text-xs font-bold shadow-sm transition">
              طلب الدخول كمتطوع
            </button>
            <Link
              href="/projects"
              className="px-8 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl text-xs font-bold hover:bg-slate-50 transition text-center"
            >
              السابق
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
