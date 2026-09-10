"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Users, ChevronLeft } from "lucide-react";

export default function DashboardVolunteerPage() {
  const projects = [1, 2, 3, 4];

  return (
    <div className="space-y-6 dir-rtl">
      {/* Header & Filter */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-extrabold text-gray-800">
          المشاريع التطوعية
        </h2>
        <div className="flex bg-gray-100 p-1 rounded-xl gap-1">
          <button className="px-4 py-1.5 bg-[#60ceeb] text-white rounded-lg text-xs font-bold shadow-sm">
            من الأحدث
          </button>
          <button className="px-4 py-1.5 text-gray-500 rounded-lg text-xs font-bold hover:text-gray-800">
            الأقدم
          </button>
        </div>
      </div>

      {/* Volunteer Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((id) => (
          <div
            key={id}
            className="bg-white rounded-2xl border border-gray-100 p-5 space-y-5 shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=80"
                  alt="Project cover"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xs font-extrabold text-gray-800 leading-snug">
                مشروع تصميم Ui UX للتطبيقات و المواقع الالكترونية.
              </h3>
            </div>

            {/* Meta Row */}
            <div className="flex items-center justify-between text-xs border-t border-gray-50 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 overflow-hidden rtl:space-x-reverse">
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
                    alt="Avatar"
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                    alt="Avatar"
                  />
                </div>
                <span className="text-xs font-bold text-gray-600">
                  22 متطوع
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-gray-400 text-[11px]">
                <Calendar className="w-3.5 h-3.5" />
                <span>الاحد 22 ايار / 2025</span>
              </div>
            </div>

            <button className="w-full py-2 bg-[#edf9fc] text-sky-600 rounded-xl text-xs font-bold hover:bg-sky-400 hover:text-white transition flex items-center justify-center gap-1">
              <span>عرض المشروع</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
