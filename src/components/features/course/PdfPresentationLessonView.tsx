import React, { useState } from "react";
import { Download, Eye, ChevronRight, ChevronLeft } from "lucide-react";

export const PdfPresentationLessonView = () => {
  const [feedback, setFeedback] = useState<"yes" | "no" | null>("yes");

  return (
    <div className="flex-1 min-w-0 space-y-6 dir-rtl font-sans">
      {/* Title Header */}
      <div className="text-right">
        <h1 className="text-xl font-black text-slate-800">
          كيف تعرف عن نفسك بالانجليزية
        </h1>
      </div>

      {/* Presentation / Document Preview Box */}
      <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm space-y-4">
        {/* Mock Presentation Slide Canvas */}
        <div className="relative w-full aspect-[16/9] bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1542744094-3a3121699709?w=1200&q=80"
            alt="Presentation Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Document Action Buttons (تنزيل كـ PDF / عرض كامل) */}
        <div className="flex items-center justify-end gap-3 pt-1">
          <button className="flex items-center gap-2 bg-[#60ceeb] hover:bg-sky-400 text-white px-5 py-2 rounded-xl text-xs font-bold transition shadow-sm">
            <span>تنزيل ك PDF</span>
            <Download className="w-4 h-4" />
          </button>

          <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2 rounded-xl text-xs font-bold transition">
            <span>عرض كامل</span>
            <Eye className="w-4 h-4" />
          </button>
        </div>
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
                  ? "bg-[#60ceeb] text-white"
                  : "bg-sky-50 text-sky-600 hover:bg-sky-100"
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
      <div className="flex items-center gap-4 pt-2">
        <button className="flex-1 bg-[#60ceeb] hover:bg-sky-400 text-white py-3 rounded-2xl text-xs font-bold transition shadow-sm">
          التالي
        </button>
        <button className="px-10 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl text-xs font-bold hover:bg-slate-50 transition">
          السابق
        </button>
      </div>
    </div>
  );
};
