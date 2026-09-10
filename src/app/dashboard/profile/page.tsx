"use client";

import React from "react";
import {
  User,
  Mail,
  Calendar,
  Phone,
  FileText,
  Clock,
  Globe,
  Plus,
  AlertTriangle,
} from "lucide-react";

export default function DashboardProfilePage() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-8 shadow-sm dir-rtl font-sans">
      {/* 1. معلومات الحساب الأساسية */}
      <div className="space-y-5">
        <div>
          <h3 className="text-base font-extrabold text-gray-800">
            معلومات الحساب الاساسية
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            تتضمن هذه الإعدادات معلومات أساسية عن حسابك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* الاسم الكامل */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-gray-400" />
              الاسم الكامل
            </label>
            <input
              type="text"
              defaultValue="Moahhedmajf 13hd@Gmail.com"
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:border-sky-400"
            />
          </div>

          {/* البريد الالكتروني */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-gray-400" />
              البريد الالكتروني
            </label>
            <input
              type="email"
              defaultValue="Moahhedmajf 13hd@Gmail.com"
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:border-sky-400"
            />
          </div>

          {/* تاريخ الميلاد */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              تاريخ الميلاد
            </label>
            <input
              type="text"
              defaultValue="2025 / 05 / 02"
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:border-sky-400 text-right"
            />
          </div>

          {/* رقم الهاتف */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gray-400" />
              رقم الهاتف
            </label>
            <div className="flex gap-2 dir-ltr">
              <div className="bg-[#f8fafc] border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-bold text-gray-600 flex items-center gap-1.5 shrink-0">
                <span>🇸🇾</span>
                <span>+963</span>
              </div>
              <input
                type="text"
                defaultValue="9637260312"
                className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:border-sky-400 text-right"
              />
            </div>
          </div>
        </div>

        {/* وصف الطالب */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-gray-400" />
            وصف الطالب
          </label>
          <textarea
            rows={3}
            defaultValue="2025 / 05 / 02"
            className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl p-4 text-xs text-gray-700 focus:outline-none focus:border-sky-400 resize-none"
          />
        </div>
      </div>

      {/* 2. معلومات التطوع */}
      <div className="space-y-5 pt-2">
        <div>
          <h3 className="text-base font-extrabold text-gray-800">
            معلومات التطوع
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            تتضمن هذه الإعدادات معلومات التطوع الأساسية والمهمة
          </p>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            اكتب لنا الايام المتاح بها والساعات المتاحة
          </label>
          <textarea
            rows={3}
            defaultValue="2025 / 05 / 02"
            className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl p-4 text-xs text-gray-700 focus:outline-none focus:border-sky-400 resize-none"
          />
        </div>
      </div>

      {/* 3. معلومات اضافية */}
      <div className="space-y-5 pt-2">
        <h3 className="text-base font-extrabold text-gray-800">
          معلومات اضافية
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* الجنس */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700">الجنس</label>
            <select className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:border-sky-400 appearance-none">
              <option>ذكر</option>
              <option>أنثى</option>
            </select>
          </div>

          {/* بلد الاقامة */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-gray-400" />
              بلد الاقامة
            </label>
            <div className="relative">
              <select className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:border-sky-400 appearance-none">
                <option>سوريا 🇸🇾</option>
              </select>
            </div>
          </div>
        </div>

        {/* المرحلة الدراسية */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700">
            المرحلة الدراسية
          </label>
          <select className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:border-sky-400 appearance-none">
            <option>خريج / طالب جامعي / بكالوريا</option>
            <option>طالب ثانوي</option>
            <option>أخرى</option>
          </select>
        </div>

        {/* السيرة الذاتية (CV) */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700">
            السيرة الذاتية (CV)
          </label>
          <p className="text-[11px] text-gray-400 mb-2">
            من فضلك يجب أن يكون الملف معبر واحترافي
          </p>
          <div className="border border-gray-200 rounded-xl bg-[#f8fafc] p-8 text-center hover:bg-gray-50 cursor-pointer transition flex items-center justify-center">
            <div className="w-9 h-9 rounded-full bg-[#60ceeb] text-white flex items-center justify-center shadow-sm">
              <Plus className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. حذف الحساب */}
      <div className="pt-4 space-y-4">
        <div>
          <h3 className="text-base font-extrabold text-gray-800">حذف الحساب</h3>
          <p className="text-xs text-gray-400 mt-0.5">يؤسفنا أن نراك تغادر!</p>
        </div>

        <div className="space-y-3 text-xs text-gray-500 leading-relaxed bg-rose-50/30 p-4 rounded-xl border border-rose-100/50">
          <p>
            يرجى الملاحظة: حذف حسابك وبياناتك الشخصية دائم ولا يمكن التراجع عنه.
            لن تتمكن منصة إدراك من استعادة حسابك أو البيانات التي تم حذفها.
          </p>
          <p>
            قد تفقد أيضًا الوصول إلى الشهادات الموثقة وبيانات اعتماد البرنامج
            الأخرى مثل شهادات التخصصات. إذا كنت ترغب بعمل نسخة من السجلات الخاصة
            بك قبل متابعة الحذف، قم بأتباع الإرشادات الخاصة بـ{" "}
            <a href="#" className="text-sky-500 underline font-bold">
              طباعة أو تنزيل شهادة
            </a>
            .
          </p>
        </div>

        <button className="bg-rose-100 hover:bg-rose-200 text-rose-600 px-6 py-2.5 rounded-xl text-xs font-bold transition">
          حذف الحساب
        </button>
      </div>
    </div>
  );
}
