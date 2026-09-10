"use client";

import React from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useCourseBuilder } from "@/context/course-builder-context";

export function PendingScreen() {
  const { setStep } = useCourseBuilder();

  // Simulated auto-transition for demo purposes
  React.useEffect(() => {
    const timer = setTimeout(() => setStep("success"), 2500);
    return () => clearTimeout(timer);
  }, [setStep]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 dir-rtl">
      <div className="w-20 h-20 mb-6 text-sky-300 animate-spin flex items-center justify-center">
        <Loader2 className="w-full h-full stroke-[1.5]" />
      </div>
      <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
        بانتظار موافقة المشرفين
      </h2>
      <p className="text-gray-400 text-sm">
        عندما يتم الموافقة على انشاء هذه الدورة سيتم اضافتها مباشرة تلقائيا !!
      </p>
    </div>
  );
}

export function SuccessScreen() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 dir-rtl space-y-6">
      <div className="w-24 h-24 rounded-full bg-emerald-100/70 flex items-center justify-center text-emerald-500">
        <CheckCircle2 className="w-16 h-16 stroke-[2]" />
      </div>

      <div>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
          تمت اضافة الدورة بنجاح !
        </h2>
        <p className="text-gray-400 text-sm">
          قد اجتزت جميع الدروس بنجاح، يمكنك الآن استلام شهادتك
        </p>
      </div>

      <div className="flex items-center gap-4 pt-2">
        <button className="px-6 py-3 bg-sky-100/70 text-sky-600 rounded-xl font-medium text-sm hover:bg-sky-200/70 transition">
          معاينة الدورة
        </button>
        <button className="px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium text-sm hover:bg-gray-200 transition">
          العودة للرئيسية
        </button>
      </div>

      <div className="pt-12 border-t border-gray-100 w-full max-w-md flex items-center justify-between text-xs text-gray-400">
        <span>هل واجهت صعوبة في عملية الاضافة</span>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-sky-400 text-white rounded-md">
            نعم
          </button>
          <button className="px-3 py-1 bg-gray-100 text-gray-500 rounded-md">
            لا
          </button>
        </div>
        <span>شكرا لك على مجهودك</span>
      </div>
    </div>
  );
}
