"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Star,
  Award,
  Circle,
} from "lucide-react";

interface CourseSidebarProps {
  onShowGrades?: () => void;
  onOpenRatingModal?: () => void;
}

export const CourseSidebar: React.FC<CourseSidebarProps> = ({
  onShowGrades,
  onOpenRatingModal,
}) => {
  const [openStage, setOpenStage] = useState<number | null>(1);

  return (
    <div className="w-full lg:w-80 bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-6 dir-rtl font-sans shrink-0">
      {/* Course Title & Progress Header */}
      <div className="space-y-3">
        <h3 className="text-sm font-extrabold text-slate-800 leading-snug">
          كورس تعلم اللغة الانجليزية من الصفر .
        </h3>

        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px] font-bold text-slate-500">
            <span>نسبة التقدم الحالية:</span>
            <span className="text-sky-500">%78</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden dir-ltr">
            <div
              className="bg-[#60ceeb] h-full rounded-full"
              style={{ width: "78%" }}
            />
          </div>
          <p className="text-[10px] text-slate-400 text-left">
            تم الانتهاء من 20 / 24 درس
          </p>
        </div>

        {/* Action Buttons */}
        <button
          onClick={onShowGrades}
          className="w-full bg-sky-50 hover:bg-sky-100 text-sky-600 py-2.5 rounded-xl text-xs font-bold transition text-center block"
        >
          اظهار العلامات
        </button>

        <div className="flex items-center justify-between pt-1">
          <span className="text-xs font-bold text-slate-600">
            قيم هذه الدورة
          </span>
          <div
            onClick={onOpenRatingModal}
            className="flex items-center gap-1 cursor-pointer text-slate-300 hover:text-amber-400 transition"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* Accordion Stages */}
      <div className="space-y-3 text-xs">
        {/* Stage 1 */}
        <div className="border border-slate-100 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenStage(openStage === 1 ? null : 1)}
            className="w-full bg-slate-50 p-3.5 flex items-center justify-between font-extrabold text-slate-700 hover:bg-slate-100 transition"
          >
            <span>المرحلة الاولى: ما هي اللغة الانجليزية ؟</span>
            {openStage === 1 ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {openStage === 1 && (
            <div className="p-3 space-y-2 bg-white">
              {/* Lesson 1 - Completed */}
              <div className="flex items-center justify-between p-2.5 bg-emerald-50/60 rounded-xl text-emerald-800 font-bold border border-emerald-100/50 cursor-pointer">
                <span className="text-[11px]">نبذة عن اللغة الانجليزية</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-100" />
              </div>

              {/* Lesson 2 - Current */}
              <div className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-xl text-slate-700 hover:border-sky-300 cursor-pointer transition">
                <span className="text-[11px]">نبذة عن اللغة الانجليزية</span>
                <Circle className="w-4 h-4 text-slate-300" />
              </div>

              {/* Quiz Item */}
              <div className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-xl text-slate-700 hover:border-sky-300 cursor-pointer transition">
                <span className="text-[11px]">اختبار في المرحلة الاولى</span>
                <Circle className="w-4 h-4 text-slate-300" />
              </div>
            </div>
          )}
        </div>

        {/* Stage 2 */}
        <div className="border border-slate-100 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenStage(openStage === 2 ? null : 2)}
            className="w-full bg-slate-50 p-3.5 flex items-center justify-between font-extrabold text-slate-700 hover:bg-slate-100 transition"
          >
            <span>المرحلة الثانية: اساسيات اللغة الانجليزية</span>
            {openStage === 2 ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Stage 3 */}
        <div className="border border-slate-100 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenStage(openStage === 3 ? null : 3)}
            className="w-full bg-slate-50 p-3.5 flex items-center justify-between font-extrabold text-slate-700 hover:bg-slate-100 transition"
          >
            <span>المرحلة الثالثة: ما هي اللغة الانجليزية ؟</span>
            {openStage === 3 ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
