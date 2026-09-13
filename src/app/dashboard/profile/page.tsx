"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Calendar,
  Phone,
  FileText,
  Clock,
  Globe,
  Plus,
  Loader2,
} from "lucide-react";

export default function DashboardProfilePage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // تنفيذ عملية التحديث هنا (API call / Server Action)
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-8 shadow-sm dir-rtl font-sans"
    >
      {/* 1. معلومات الحساب الأساسية */}
      <div className="space-y-5">
        <div>
          <h3 className="text-base font-extrabold text-gray-800">
            معلومات الحساب الأساسية
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            تتضمن هذه الإعدادات معلومات أساسية عن حسابك الشخصي.
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
              name="fullName"
              placeholder="محمد أحمد الشيخ"
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:border-sky-400"
            />
          </div>

          {/* البريد الإلكتروني */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-gray-400" />
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:border-sky-400"
              dir="ltr"
            />
          </div>

          {/* تاريخ الميلاد */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              تاريخ الميلاد
            </label>
            <input
              type="date"
              name="birthDate"
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:border-sky-400"
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
                type="tel"
                name="phone"
                placeholder="9637260312"
                className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:border-sky-400 text-right"
              />
            </div>
          </div>
        </div>

        {/* وصف الطالب */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-gray-400" />
            نبذة عن الطالب
          </label>
          <textarea
            rows={3}
            name="bio"
            placeholder="اكتب نبذة مختصرة عن مؤهلاتك واهتماماتك..."
            className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl p-4 text-xs text-gray-700 focus:outline-none focus:border-sky-400 resize-none"
          />
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 2. معلومات التطوع */}
      <div className="space-y-5">
        <div>
          <h3 className="text-base font-extrabold text-gray-800">
            معلومات التطوع
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            حدد أوقات تفضيلك للمشاركة في الأنشطة والمشاريع التطوعية.
          </p>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            الأيام والساعات المتاحة
          </label>
          <textarea
            rows={3}
            name="availability"
            placeholder="مثال: الأحد والأربعاء من الساعة 4 مساءً حتى 8 مساءً"
            className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl p-4 text-xs text-gray-700 focus:outline-none focus:border-sky-400 resize-none"
          />
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 3. معلومات إضافية */}
      <div className="space-y-5">
        <h3 className="text-base font-extrabold text-gray-800">
          معلومات إضافية
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* الجنس */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700">الجنس</label>
            <select
              name="gender"
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:border-sky-400"
            >
              <option value="male">ذكر</option>
              <option value="female">أنثى</option>
            </select>
          </div>

          {/* بلد الإقامة */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-gray-400" />
              بلد الإقامة
            </label>
            <select
              name="country"
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:border-sky-400"
            >
              <option value="SY">سوريا 🇸🇾</option>
              <option value="SA">السعودية 🇸🇦</option>
              <option value="AE">الإمارات 🇦🇪</option>
              <option value="EG">مصر 🇪🇬</option>
            </select>
          </div>
        </div>

        {/* المرحلة الدراسية */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700">
            المرحلة الدراسية
          </label>
          <select
            name="educationLevel"
            className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-gray-700 focus:outline-none focus:border-sky-400"
          >
            <option value="university">طالب جامعي / خريج</option>
            <option value="highschool">طالب ثانوي</option>
            <option value="other">أخرى</option>
          </select>
        </div>

        {/* السيرة الذاتية (CV) */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700">
            السيرة الذاتية (CV)
          </label>
          <p className="text-[11px] text-gray-400 mb-2">
            يرجى رفع ملف بصيغة PDF يوضح خبراتك ومؤهلاتك.
          </p>
          <label className="border border-dashed border-gray-300 rounded-xl bg-[#f8fafc] p-8 text-center hover:bg-slate-50 cursor-pointer transition flex flex-col items-center justify-center gap-2 block">
            <input type="file" accept=".pdf" className="hidden" />
            <div className="w-9 h-9 rounded-full bg-[#60ceeb] text-white flex items-center justify-center shadow-sm">
              <Plus className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-slate-600">
              اضغط هنا لرفع الملف
            </span>
          </label>
        </div>
      </div>

      {/* زر حفظ التعديلات */}
      <div className="pt-2 flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#60ceeb] hover:bg-sky-400 text-white font-bold px-8 py-3 rounded-xl transition text-xs shadow-md shadow-sky-100 flex items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          <span>حفظ التغييرات</span>
        </button>
      </div>

      <hr className="border-gray-100" />

      {/* 4. منطقة الخطر (حذف الحساب) */}
      <div className="space-y-4 pt-2">
        <div>
          <h3 className="text-base font-extrabold text-rose-600">حذف الحساب</h3>
          <p className="text-xs text-gray-400 mt-0.5">
            إجراء نهائي ولا يمكن التراجع عنه.
          </p>
        </div>

        <div className="space-y-3 text-xs text-gray-600 leading-relaxed bg-rose-50/50 p-4 rounded-xl border border-rose-100">
          <p>
            يرجى الملاحظة: حذف حسابك وبياناتك الشخصية دائم ولا يمكن التراجع عنه.
            لن تتمكن المنصة من استعادة الحساب أو البيانات بعد إتمام الحذف.
          </p>
        </div>

        <button
          type="button"
          onClick={() => confirm("هل أنت تأكد من رغبتك في حذف الحساب؟")}
          className="bg-rose-100 hover:bg-rose-200 text-rose-600 px-6 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer"
        >
          حذف الحساب نهائياً
        </button>
      </div>
    </form>
  );
}
