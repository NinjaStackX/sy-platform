"use client";

import React from "react";

export const QuizView = () => {
  return (
    <div className="flex-1 min-w-0 space-y-6 dir-rtl font-sans">
      {/* Quiz Header */}
      <div className="space-y-1 border-b border-slate-200/60 pb-4">
        <h1 className="text-lg font-black text-slate-800">الاختبار الاول :</h1>
        <div className="flex items-center gap-6 text-xs text-slate-400 pt-1">
          <span>عدد الأسئلة: 6</span>
          <span>نسبة النجاح بالاختبار 50% بالمئة</span>
        </div>
      </div>

      {/* Question 1: Multiple Choice */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4 shadow-sm">
        <h3 className="text-xs font-extrabold text-slate-800">
          1 : ما هو الفعل باللغة الانجليزية الذي يشير معناه ل اللعب ؟
        </h3>
        <p className="text-[11px] text-slate-400">اختر الاجابة الصحيحة ؟</p>

        <div className="space-y-2 max-w-xs text-xs font-bold text-slate-600">
          {["playing", "go to ckhole", "football", "gamingss"].map(
            (opt, idx) => (
              <label
                key={idx}
                className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-100 rounded-xl cursor-pointer hover:bg-slate-100 transition"
              >
                <span>{opt}</span>
                <input
                  type="radio"
                  name="q1"
                  className="accent-sky-500"
                  defaultChecked={idx === 2}
                />
              </label>
            ),
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-[11px] text-slate-400">2 علامة على السؤال</span>
          <button className="bg-[#60ceeb] hover:bg-sky-400 text-white px-5 py-1.5 rounded-lg text-xs font-bold transition">
            تسليم
          </button>
        </div>
      </div>

      {/* Question 2: Short Answer */}
      <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4 shadow-sm">
        <h3 className="text-xs font-extrabold text-slate-800">
          2 : عرف ما هو الفعل باللغة الانجليزية ؟
        </h3>
        <p className="text-[11px] text-slate-400">املأ الحقل بالجواب المناسب</p>

        <div className="space-y-1.5">
          <label className="text-[11px] text-slate-400 block">الحل :</label>
          <textarea
            rows={3}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-sky-400 resize-none"
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-[11px] text-slate-400">2 علامة على السؤال</span>
          <button className="bg-[#60ceeb] hover:bg-sky-400 text-white px-5 py-1.5 rounded-lg text-xs font-bold transition">
            تسليم
          </button>
        </div>
      </div>

      {/* Submit Entire Quiz Button */}
      <button className="w-full bg-[#60ceeb] hover:bg-sky-400 text-white py-3 rounded-2xl text-xs font-bold shadow-sm transition">
        تسليم الاختبار
      </button>

      {/* Nav Buttons */}
      <div className="flex items-center gap-4 pt-4">
        <button className="flex-1 bg-[#60ceeb] hover:bg-sky-400 text-white py-3 rounded-2xl text-xs font-bold transition">
          التالي
        </button>
        <button className="px-8 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl text-xs font-bold hover:bg-slate-50 transition">
          السابق
        </button>
      </div>
    </div>
  );
};
