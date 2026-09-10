"use client";

import React, { useState } from "react";
import { Check, Star, X } from "lucide-react";

interface CompletionProps {
  onOpenCertificateModal: () => void;
}

export const CourseCompletionView: React.FC<CompletionProps> = ({
  onOpenCertificateModal,
}) => {
  return (
    <div className="flex-1 min-w-0 bg-white rounded-2xl border border-slate-100 p-8 text-center space-y-6 shadow-sm dir-rtl font-sans">
      {/* Success Icon */}
      <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
        <Check className="w-10 h-10 stroke-[3]" />
      </div>

      <div className="space-y-2">
        <h1 className="text-xl font-black text-slate-800">
          لقد أنهيت الدورة بنجاح !
        </h1>
        <p className="text-xs text-slate-400">
          قد اجتزت جميع الدروس بنجاح، يمكنك الان استلام شهادتك
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto pt-2">
        <button
          onClick={onOpenCertificateModal}
          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-xl text-xs font-bold transition"
        >
          عرض الشهادة
        </button>
        <button className="w-full bg-[#60ceeb] hover:bg-sky-400 text-white py-3 rounded-xl text-xs font-bold shadow-sm transition">
          تنزيل الشهادة
        </button>
      </div>
    </div>
  );
};

/* Certificate Preview Modal (منازل 84.jpg) */
export const CertificateModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 dir-rtl">
      <div className="bg-white rounded-2xl p-6 sm:p-10 max-w-2xl w-full relative shadow-2xl space-y-6 text-center border-4 border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-slate-400 hover:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Mockup Frame */}
        <div className="border-2 border-sky-300 p-8 rounded-xl space-y-6 bg-gradient-to-b from-sky-50/20 to-white">
          <div className="space-y-1">
            <h2 className="text-lg font-black text-sky-800">المنصّة السورية</h2>
            <span className="text-[10px] text-slate-400 font-mono">
              Syrian Platform
            </span>
          </div>

          <h1 className="text-2xl font-black text-slate-800 border-b-2 border-slate-800 inline-block pb-1">
            شهادة حضور
          </h1>

          <p className="text-xs font-bold text-slate-600">
            تشهد المنصّة السورية بأن السيد/ة
          </p>

          <div className="py-2 border-b border-slate-200 max-w-xs mx-auto">
            {/* Student Name Placeholder */}
          </div>

          <p className="text-xs font-bold text-slate-700">
            حضرت دورة تدريبية في <br />
            <span className="text-sm font-black text-slate-900 block mt-1">
              التصوير الفوتوغرافي وتصوير الدرون
            </span>
          </p>

          <p className="text-[11px] text-slate-500">
            استمرت من 10 إلى 23 أيلول 2024، بمعدل 24 ساعة تدريبية
          </p>

          {/* Signatures */}
          <div className="grid grid-cols-2 gap-4 pt-6 text-xs text-slate-700 font-bold border-t border-slate-100">
            <div>
              <span className="block text-[10px] text-slate-400">المدرب</span>
              <span>زين منديل - عبد نجار</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400">
                المدير التنفيذي
              </span>
              <span>بلال جبيرو</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Rating Modal (منازل 85.jpg / منازل 124.jpg) */
export const RatingModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [stars, setStars] = useState(5);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 dir-rtl font-sans">
      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-5 text-center">
        <h3 className="text-sm font-extrabold text-slate-800">
          قيم هذه الدورة
        </h3>

        <div className="flex items-center justify-center gap-1 text-amber-400">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              onClick={() => setStars(s)}
              className={`w-6 h-6 cursor-pointer ${s <= stars ? "fill-current" : "text-slate-200"}`}
            />
          ))}
        </div>

        <p className="text-xs font-bold text-slate-600">
          أخبرنا ماذا اعجبك بهذه الدورة ؟
        </p>

        <textarea
          rows={3}
          placeholder="ملاحظاتك حول الدورة"
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 focus:outline-none focus:border-sky-400 resize-none"
        />

        <div className="flex gap-3 pt-2">
          <button
            onClick={onClose}
            className="flex-1 bg-[#60ceeb] hover:bg-sky-400 text-white py-2.5 rounded-xl text-xs font-bold transition"
          >
            ارسال التقييم
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-200 transition"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};
