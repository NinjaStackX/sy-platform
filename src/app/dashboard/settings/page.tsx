"use client";

import React, { useState } from "react";
import {
  Bell,
  Lock,
  ShieldCheck,
  Eye,
  EyeOff,
  Globe,
  Save,
  Loader2,
} from "lucide-react";

export default function DashboardSettingsPage() {
  const [loading, setLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // حالة الإشعارات والخصوصية
  const [notifications, setNotifications] = useState({
    emailCourses: true,
    emailVolunteer: false,
    emailPromotions: true,
  });

  const [privacy, setPrivacy] = useState({
    publicProfile: true,
    showCertificates: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // تنفيذ عملية حفظ الإعدادات هنا
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 space-y-8 shadow-sm dir-rtl font-sans"
    >
      {/* 1. إعدادات الأمان وتغيير كلمة المرور */}
      <div className="space-y-5">
        <div>
          <h3 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#60ceeb]" />
            الأمان وكلمة المرور
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            قم بتحديث كلمة المرور الخاصة بك بانتظام للحفاظ على أمان حسابك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* كلمة المرور الحالية */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-xs font-bold text-slate-700">
              كلمة المرور الحالية
            </label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-sky-400"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showCurrentPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* كلمة المرور الجديدة */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              كلمة المرور الجديدة
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-sky-400"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showNewPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* تأكيد كلمة المرور الجديدة */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              تأكيد كلمة المرور الجديدة
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-sky-400"
            />
          </div>
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* 2. إعدادات الإشعارات */}
      <div className="space-y-5">
        <div>
          <h3 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
            <Bell className="w-4 h-4 text-[#60ceeb]" />
            تفضيلات الإشعارات
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            اختر الإشعارات التي ترغب في تلقيها عبر البريد الإلكتروني.
          </p>
        </div>

        <div className="space-y-4">
          <label className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-xl border border-slate-100 cursor-pointer hover:bg-slate-50 transition">
            <span className="text-xs font-bold text-slate-700">
              تحديثات الدورات التدريبية والإعلانات الخاصة بالحلقات
            </span>
            <input
              type="checkbox"
              checked={notifications.emailCourses}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  emailCourses: e.target.checked,
                })
              }
              className="w-4 h-4 accent-[#60ceeb] rounded cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-xl border border-slate-100 cursor-pointer hover:bg-slate-50 transition">
            <span className="text-xs font-bold text-slate-700">
              فرص التطوع الجديدة والتنبيهات ذات الصلة
            </span>
            <input
              type="checkbox"
              checked={notifications.emailVolunteer}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  emailVolunteer: e.target.checked,
                })
              }
              className="w-4 h-4 accent-[#60ceeb] rounded cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-xl border border-slate-100 cursor-pointer hover:bg-slate-50 transition">
            <span className="text-xs font-bold text-slate-700">
              النشرة البريدية وآخر الأخبار والعروض
            </span>
            <input
              type="checkbox"
              checked={notifications.emailPromotions}
              onChange={(e) =>
                setNotifications({
                  ...notifications,
                  emailPromotions: e.target.checked,
                })
              }
              className="w-4 h-4 accent-[#60ceeb] rounded cursor-pointer"
            />
          </label>
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* 3. الخصوصية والعرض */}
      <div className="space-y-5">
        <div>
          <h3 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#60ceeb]" />
            الخصوصية ورؤية الملف
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            التحكم في البيانات الظاهرة للعموم وللمستخدمين الآخرين.
          </p>
        </div>

        <div className="space-y-4">
          <label className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-xl border border-slate-100 cursor-pointer hover:bg-slate-50 transition">
            <div>
              <span className="text-xs font-bold text-slate-700 block">
                إظهار الملف الشخصي للعامة
              </span>
              <span className="text-[11px] text-slate-400">
                السماح للمستخدمين والمنظمات بالاطلاع على ملفك
              </span>
            </div>
            <input
              type="checkbox"
              checked={privacy.publicProfile}
              onChange={(e) =>
                setPrivacy({ ...privacy, publicProfile: e.target.checked })
              }
              className="w-4 h-4 accent-[#60ceeb] rounded cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-3 bg-[#f8fafc] rounded-xl border border-slate-100 cursor-pointer hover:bg-slate-50 transition">
            <div>
              <span className="text-xs font-bold text-slate-700 block">
                عرض الشهادات المكتملة في البروفايل
              </span>
              <span className="text-[11px] text-slate-400">
                إظهار شارات وإنجازات الدورات في صفحتك العامة
              </span>
            </div>
            <input
              type="checkbox"
              checked={privacy.showCertificates}
              onChange={(e) =>
                setPrivacy({ ...privacy, showCertificates: e.target.checked })
              }
              className="w-4 h-4 accent-[#60ceeb] rounded cursor-pointer"
            />
          </label>
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* 4. تفضيلات اللغة والمنطقة */}
      <div className="space-y-5">
        <div>
          <h3 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#60ceeb]" />
            اللغة والمنطقة الزمنية
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              لغة الواجهة
            </label>
            <select className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-sky-400">
              <option value="ar">العربية (Arabic)</option>
              <option value="en">English (الإنجليزية)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              المنطقة الزمنية
            </label>
            <select className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-sky-400">
              <option value="UTC+3">(GMT+03:00) دمشق / الرياض</option>
              <option value="UTC+2">(GMT+02:00) القاهرة</option>
              <option value="UTC+4">(GMT+04:00) دبي</option>
            </select>
          </div>
        </div>
      </div>

      {/* زر حفظ التعديلات */}
      <div className="pt-4 flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#60ceeb] hover:bg-sky-400 text-white font-bold px-8 py-3 rounded-xl transition text-xs shadow-md shadow-sky-100 flex items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          <span>حفظ التغيرات</span>
        </button>
      </div>
    </form>
  );
}
