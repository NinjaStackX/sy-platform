"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Calendar, Users, Share2, Search, HeartHandshake } from "lucide-react";

export default function VolunteerProjectsPage() {
  const projects = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: "مشروع تصميم Ui UX للتطبيقات و المواقع الالكترونية.",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى...",
    date: "2025 / 05 / 02",
    status: "متاح للاتحاق",
    volunteersCount: 22,
  }));

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between dir-rtl font-sans">
      <div>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-sky-100 via-sky-50 to-white border-b border-sky-100/50 py-10 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-slate-800">
                المشاريع التطوعية
              </h1>
              <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                <span>الرئيسية</span>
                <span>/</span>
                <span className="text-sky-500 font-bold">
                  المشاريع التطوعية
                </span>
              </div>
            </div>
            <Link
              href="/projects/join"
              className="bg-[#60ceeb] hover:bg-sky-400 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-sm flex items-center gap-2"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>طلب انضمام متطوع</span>
            </Link>
          </div>
        </div>

        {/* Main Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Grid Area */}
            <main className="flex-1 min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between p-4 space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="relative h-44 w-full rounded-xl overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80"
                          alt="Project Thumbnail"
                          fill
                          className="object-cover"
                        />
                        <span className="absolute top-3 right-3 bg-amber-400 text-slate-900 font-bold text-[10px] px-3 py-1 rounded-lg">
                          {item.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.date}</span>
                        </div>
                        <button className="hover:text-sky-500">
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h3 className="text-xs font-extrabold text-slate-800 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                      <div className="flex items-center gap-1.5">
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
                        <span className="text-[11px] font-bold text-slate-600">
                          {item.volunteersCount} متطوع
                        </span>
                      </div>

                      <Link
                        href={`/projects/${item.id}`}
                        className="text-xs font-bold text-sky-600 hover:text-sky-700 bg-sky-50 px-3 py-1.5 rounded-lg"
                      >
                        عرض المشروع &lt;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </main>

            {/* Sidebar Filters */}
            <aside className="w-full lg:w-72 space-y-6 shrink-0">
              {/* Category Filter */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
                <h4 className="text-xs font-extrabold text-slate-800 border-b border-slate-100 pb-2">
                  التصنيفات
                </h4>
                <div className="space-y-2.5 text-xs text-slate-600">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded text-sky-500 accent-sky-500"
                    />
                    <span>جميع البرامج</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded text-sky-500 accent-sky-500"
                    />
                    <span>تصميم وحرافية</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded text-sky-500 accent-sky-500"
                    />
                    <span>تطوير وإدارية</span>
                  </label>
                </div>
              </div>

              {/* Latest Projects Widget */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
                <h4 className="text-xs font-extrabold text-slate-800 border-b border-slate-100 pb-2">
                  أحدث المشاريع
                </h4>
                <div className="space-y-3">
                  {[1, 2, 3].map((id) => (
                    <Link
                      key={id}
                      href={`/projects/${id}`}
                      className="flex gap-3 group"
                    >
                      <div className="relative w-14 h-12 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&q=80"
                          alt="Mini cover"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="text-[11px] font-bold text-slate-700 group-hover:text-sky-500 line-clamp-2 transition">
                          مشروع تصميم Ui UX للتطبيقات والمواقع
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
