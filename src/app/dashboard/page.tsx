import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Clock,
  Edit3,
  MoreVertical,
} from "lucide-react";

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-8 dir-rtl">
      {/* Profile Header Banner */}
      <div className="bg-gradient-to-l from-[#a2e2f3] to-[#71d3ec] rounded-2xl p-6 text-white flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
              alt="محمد احمد الشيخ"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800">
              محمد احمد الشيخ
            </h2>
            <p className="text-xs text-slate-700 font-medium mt-0.5">(طالب)</p>
          </div>
        </div>

        <Link
          href="/dashboard/profile"
          className="bg-white/90 hover:bg-white text-slate-700 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>تعديل الملف</span>
        </Link>
      </div>

      {/* Stats Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center justify-between shadow-sm">
          <div>
            <span className="text-2xl font-black text-slate-800 block">14</span>
            <span className="text-xs text-slate-400">الدورات المنجزة</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
            <GraduationCap className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center justify-between shadow-sm">
          <div>
            <span className="text-2xl font-black text-slate-800 block">3</span>
            <span className="text-xs text-slate-400">دورات جارية</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center justify-between shadow-sm">
          <div>
            <span className="text-2xl font-black text-slate-800 block">
              387
            </span>
            <span className="text-xs text-slate-400">ساعات مكتملة</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Active Courses Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-slate-800">
            الدورات الحالية
          </h3>
          <Link
            href="/dashboard/courses"
            className="text-xs font-bold text-slate-400 hover:text-sky-500"
          >
            عرض الكل &larr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((id) => (
            <div
              key={id}
              className="bg-white rounded-2xl border border-slate-100 p-5 space-y-4 shadow-sm relative"
            >
              <button className="absolute top-4 left-4 text-slate-400 hover:text-slate-600">
                <MoreVertical className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=200&q=80"
                    alt="Course cover"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xs font-bold text-slate-800 leading-snug">
                  كورس تصميم UI/UX للتطبيقات والمواقع الإلكترونية.
                </h4>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-bold text-slate-500">
                  <span>نسبة التقدم الحالية:</span>
                  <span>78%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#60ceeb] rounded-full w-[78%]" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 pt-1">
                  <span>18 / 25 درس</span>
                  <span>25 ساعة</span>
                </div>
              </div>

              <button className="w-full py-2 bg-[#edf9fc] text-sky-600 rounded-xl text-xs font-bold hover:bg-sky-400 hover:text-white transition cursor-pointer">
                متابعة الدورة &larr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
