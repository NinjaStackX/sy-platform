"use client";

import React from "react";
import { X } from "lucide-react";

export const CertificateRequirementsView = () => {
  const requirements = [
    { title: "امتحان الوحدة الاولى", completed: false },
    { title: "كورس تعلم اللغة الانجليزية منذ بداية", completed: false },
    { title: "امتحان الوحدة الثانية", completed: false },
    { title: "كورس تعلم اللغة الانجليزية منذ بداية", completed: false },
    { title: "امتحان الوحدة الاولى", completed: false },
    { title: "كورس تعلم اللغة الانجليزية منذ بداية", completed: false },
    { title: "امتحان الوحدة الاولى", completed: false },
  ];

  return (
    <div className="flex-1 min-w-0 space-y-6 dir-rtl font-sans">
      <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-base font-black text-slate-800">شهادة التدريب</h1>
          <p className="text-xs text-slate-400">
            لاغدار الشهادة يجب عليك اتمام جميع المراحل والاختبارات التالية :
          </p>
        </div>

        <div className="space-y-3 max-w-md mx-auto">
          {requirements.map((req, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-xs font-bold text-slate-700 bg-slate-50/60 p-3 rounded-xl border border-slate-100"
            >
              <span>{req.title}</span>
              <span className="w-5 h-5 rounded-md bg-rose-500 text-white flex items-center justify-center">
                <X className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
