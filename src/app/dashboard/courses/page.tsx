"use client";

import React from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";

export default function DashboardCoursesPage() {
  return (
    <div className="space-y-8 dir-rtl">
      {/* Ongoing Courses Section */}
      <div className="space-y-4">
        <h3 className="text-base font-extrabold text-gray-800">
          دورات جارية :
        </h3>
        <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4 shadow-sm relative max-w-xl">
          <button className="absolute top-4 left-4 text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=200&q=80"
                alt="Course"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xs font-bold text-gray-800 leading-snug">
              كورس تصميم Ui UX للتطبيقات و المواقع الالكترونية.
            </h4>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-bold text-gray-500">
              <span>نسبة التقدم الحالية:</span>
              <span>78%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#60ceeb] rounded-full w-[78%]" />
            </div>
            <div className="flex justify-between text-[10px] text-gray-400 pt-1">
              <span>25 / 18 درس</span>
              <span>25 ساعة</span>
            </div>
          </div>

          <button className="w-full py-2 bg-[#edf9fc] text-sky-600 rounded-xl text-xs font-bold hover:bg-sky-400 hover:text-white transition">
            متابعة الدورة &lt;
          </button>
        </div>
      </div>

      {/* Completed Courses Section */}
      <div className="space-y-4">
        <h3 className="text-base font-extrabold text-gray-800">
          جميع الدورات :
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4 shadow-sm relative"
            >
              <button className="absolute top-4 left-4 text-gray-400 hover:text-gray-600">
                <MoreVertical className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=80"
                    alt="Course"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xs font-bold text-gray-800 leading-snug">
                  كورس تصميم Ui UX للتطبيقات و المواقع الالكترونية.
                </h4>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-bold text-gray-500">
                  <span>نسبة التقدم الحالية:</span>
                  <span className="text-emerald-500">100%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-full" />
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 pt-1">
                  <span>25 / 25 درس</span>
                  <span>25 ساعة</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl text-xs font-bold">
                  منهية
                </span>
                <button className="flex-1 py-2 bg-[#edf9fc] text-sky-600 rounded-xl text-xs font-bold hover:bg-sky-400 hover:text-white transition">
                  عرض الدورة &lt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
