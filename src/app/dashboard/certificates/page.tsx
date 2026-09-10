"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Download, Eye } from "lucide-react";

export default function DashboardCertificatesPage() {
  const certificates = [
    {
      id: 1,
      title: "شهادة اتمام كورس تصميم Ui UX للتطبيقات و المواقع",
      date: "الاحد 22 ايار / 2025",
    },
    {
      id: 2,
      title: "شهادة اتمام كورس تصميم Ui UX للتطبيقات و المواقع",
      date: "الاحد 22 ايار / 2025",
    },
    {
      id: 3,
      title: "شهادة اتمام كورس تصميم Ui UX للتطبيقات و المواقع",
      date: "الاحد 22 ايار / 2025",
    },
    {
      id: 4,
      title: "شهادة اتمام كورس تصميم Ui UX للتطبيقات و المواقع",
      date: "الاحد 22 ايار / 2025",
    },
  ];

  return (
    <div className="space-y-6 dir-rtl">
      {/* Header & Filter */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-extrabold text-gray-800">الشهادات</h2>
        <div className="flex bg-gray-100 p-1 rounded-xl gap-1">
          <button className="px-4 py-1.5 bg-[#60ceeb] text-white rounded-lg text-xs font-bold shadow-sm">
            من الأحدث
          </button>
          <button className="px-4 py-1.5 text-gray-500 rounded-lg text-xs font-bold hover:text-gray-800">
            الأقدم
          </button>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4 shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=200&q=80"
                  alt="Certificate icon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xs font-extrabold text-gray-800 leading-snug">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button className="flex items-center justify-center gap-2 py-2 bg-[#edf9fc] text-sky-600 rounded-xl text-xs font-bold hover:bg-sky-400 hover:text-white transition">
                <Download className="w-3.5 h-3.5" />
                <span>التنزيل كـ PDF</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-2 bg-gray-50 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-100 transition">
                <Eye className="w-3.5 h-3.5" />
                <span>عرض الشهادة</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
