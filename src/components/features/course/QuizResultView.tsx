"use client";

import React from "react";
import { Check, X } from "lucide-react";

interface QuizResultProps {
  status?: "passed" | "failed";
}

export const QuizResultView: React.FC<QuizResultProps> = ({
  status = "passed",
}) => {
  const isPassed = status === "passed";

  return (
    <div className="flex-1 min-w-0 space-y-6 dir-rtl font-sans">
      {/* Result Header Badge */}
      <div className="text-center space-y-3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h1 className="text-base font-black text-slate-800">
          نتيجة الاختبار الاول :
        </h1>

        {/* Circle Graphic */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          <div
            className={`w-full h-full rounded-full border-8 ${
              isPassed
                ? "border-emerald-500 border-t-slate-100"
                : "border-rose-500 border-t-slate-100"
            } transform -rotate-45`}
          />
        </div>

        <div className="flex items-center justify-center gap-2 text-sm font-black">
          <span className={isPassed ? "text-emerald-500" : "text-rose-500"}>
            {isPassed ? "75% (ناجح)" : "20% (راسب)"}
          </span>
          <span className="text-slate-400 text-xs font-normal">
            نتيجة الاختبار {isPassed ? "3 / 5" : "1 / 5"}
          </span>
        </div>

        {!isPassed && (
          <button className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-2 rounded-xl text-xs font-bold transition shadow-sm">
            إعادة الاختبار
          </button>
        )}
      </div>

      {/* Answered Questions Breakdown */}
      <div className="space-y-4">
        {/* Wrong Answer Box */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-3 shadow-sm">
          <h3 className="text-xs font-extrabold text-slate-800">
            1 : ما هو الفعل باللغة الانجليزية الذي يشير معناه ل اللعب ؟
          </h3>

          <div className="space-y-2 max-w-xs text-xs font-bold text-slate-600">
            <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl flex justify-between items-center">
              <span>playing</span>
            </div>
            <div className="p-2.5 bg-rose-500 text-white rounded-xl flex justify-between items-center">
              <span>football</span>
              <X className="w-4 h-4" />
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 p-2.5 rounded-xl border border-emerald-100 max-w-xs">
            <span>اجابتك خطا الاجابة الصحيحة هي :</span>
            <span className="bg-emerald-500 text-white px-2 py-0.5 rounded text-[10px]">
              gamingss
            </span>
          </div>
        </div>

        {/* Correct Answer Box */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-3 shadow-sm">
          <h3 className="text-xs font-extrabold text-slate-800">
            2 : عرف ما هو الفعل باللغة الانجليزية ؟
          </h3>
          <div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl text-xs text-slate-700">
            الحل :
          </div>
          <div className="flex items-center justify-between text-xs text-emerald-600 font-bold">
            <span>اجابتك صحيحة :</span>
            <span>لقد كسبت 2 علامة</span>
          </div>
        </div>
      </div>
    </div>
  );
};
