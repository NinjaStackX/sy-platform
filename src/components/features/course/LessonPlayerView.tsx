"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";

export const LessonPlayerView = () => {
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);

  return (
    <div className="flex-1 min-w-0 space-y-6 dir-rtl font-sans">
      {/* Video Player Box */}
      <div className="relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-md flex items-center justify-center group cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80"
          alt="Video thumbnail"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
            <Play className="w-7 h-7 fill-current ml-1" />
          </div>
          <span className="text-white text-xs font-bold drop-shadow">
            مشاهدة الفيديو
          </span>
        </div>
      </div>

      {/* Lesson Title */}
      <div className="text-center sm:text-right">
        <h1 className="text-lg font-black text-slate-800">
          كيف تعرف عن نفسك بالانجليزية
        </h1>
      </div>

      {/* Helpful Question Box */}
      <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <span className="text-slate-400 text-[11px]">
          60% من المستخدمين قالوا انها مفيدة
        </span>

        <div className="flex items-center gap-3">
          <span className="font-bold text-slate-700">
            هل كانت هذه الصفحة مفيدة؟
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setFeedback("yes")}
              className={`px-5 py-1.5 rounded-lg font-bold transition ${
                feedback === "yes"
                  ? "bg-sky-500 text-white"
                  : "bg-sky-100 text-sky-600 hover:bg-sky-200"
              }`}
            >
              نعم
            </button>
            <button
              onClick={() => setFeedback("no")}
              className={`px-5 py-1.5 rounded-lg font-bold transition ${
                feedback === "no"
                  ? "bg-slate-700 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              لا
            </button>
          </div>
        </div>
      </div>

      {/* Footer Navigation Buttons */}
      <div className="flex items-center gap-4 pt-4">
        <button className="flex-1 bg-[#60ceeb] hover:bg-sky-400 text-white py-3 rounded-2xl text-xs font-bold transition shadow-sm">
          التالي
        </button>
        <button className="px-8 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl text-xs font-bold hover:bg-slate-50 transition">
          السابق
        </button>
      </div>
    </div>
  );
};
