"use client";

import React from "react";

export const GradesView = () => {
  const grades = [
    {
      name: "الاختبار الاول",
      attempts: "-",
      minGrade: "50%",
      grade: "75%",
      status: "ناجح",
    },
    {
      name: "الاختبار الثاني",
      attempts: "-",
      minGrade: "50%",
      grade: "20%",
      status: "راسب",
    },
    {
      name: "الاختبار الثالث",
      attempts: "-",
      minGrade: "50%",
      grade: "75%",
      status: "ناجح",
    },
  ];

  return (
    <div className="flex-1 min-w-0 space-y-6 dir-rtl font-sans">
      {/* Top Banner */}
      <div className="text-center space-y-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h1 className="text-base font-black text-slate-800">العلامات</h1>
        <p className="text-xs text-slate-400">
          يرجى العلم ان العلامة النهائية تحتسب بناء على نتائج ووزن كل اختبار
        </p>

        {/* Total Score Circle */}
        <div className="relative w-20 h-20 mx-auto my-3 flex items-center justify-center">
          <div className="w-full h-full rounded-full border-8 border-emerald-500 border-t-slate-100 transform -rotate-45" />
        </div>

        <div className="flex items-center justify-center gap-2 text-sm font-black">
          <span className="text-emerald-500">75% (ناجح)</span>
          <span className="text-slate-700 text-xs font-bold">
            العلامة النهائية
          </span>
        </div>
        <span className="text-[11px] text-slate-400 block">
          نسبة النجاح 50%
        </span>
      </div>

      {/* Grades Table List */}
      <div className="space-y-3">
        {grades.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm flex items-center justify-between gap-4 text-xs"
          >
            <div className="flex items-center gap-2 font-bold text-slate-800 w-1/3">
              <span className="p-2 bg-sky-50 text-sky-500 rounded-lg">📘</span>
              <span>{item.name}</span>
            </div>

            <div className="flex items-center justify-around flex-1 text-center text-slate-500 text-[11px]">
              <div>
                <span className="block text-slate-300">عدد المحاولات</span>
                <span className="font-bold">{item.attempts}</span>
              </div>
              <div>
                <span className="block text-slate-300">نسبة النجاح</span>
                <span className="font-bold">{item.minGrade}</span>
              </div>
              <div>
                <span className="block text-slate-300">العلامة</span>
                <span className="font-bold text-slate-800">{item.grade}</span>
              </div>
            </div>

            <span
              className={`px-4 py-1.5 rounded-lg font-bold text-xs ${
                item.status === "ناجح"
                  ? "bg-emerald-500 text-white"
                  : "bg-rose-500 text-white"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
