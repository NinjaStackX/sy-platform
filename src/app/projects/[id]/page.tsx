"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  Calendar,
  Share2,
  ArrowRight,
  MessageSquare,
  HeartHandshake,
} from "lucide-react";

export default function ProjectDetailsPage() {
  const volunteers = [
    { name: "محمد احمد الشيخ", role: "متطوع" },
    { name: "محمد احمد الشيخ", role: "متطوع" },
    { name: "محمد احمد الشيخ", role: "متطوع" },
    { name: "محمد احمد الشيخ", role: "متطوع" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between dir-rtl font-sans">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content View */}
            <main className="flex-1 min-w-0 space-y-6">
              {/* Header Title & Actions */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-700 font-extrabold text-sm">
                    <Link href="/projects" className="hover:text-sky-500">
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <h2>مشروع تصميم Ui UX للتطبيقات و المواقع الالكترونية</h2>
                  </div>
                  <button className="text-slate-400 hover:text-sky-500">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                <Link
                  href="/projects/apply"
                  className="w-full bg-[#60ceeb] hover:bg-sky-400 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm"
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>طلب الدخول كمتطوع</span>
                </Link>
              </div>

              {/* Cover Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                  alt="Project Banner"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Meta Stats Row */}
              <div className="bg-white rounded-xl p-4 border border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800">الحالة:</span>
                  <span className="text-emerald-500 font-bold bg-emerald-50 px-2.5 py-1 rounded-md">
                    متاح للانضمام
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>تاريخ النشر: 2025 / 05 / 02</span>
                </div>
              </div>

              {/* Description Body */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4 shadow-sm text-xs text-slate-600 leading-relaxed">
                <h3 className="text-sm font-extrabold text-slate-800">
                  وصف المشروع
                </h3>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                  النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                  التي يولدها التطبيق.
                </p>
                <p>
                  إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى
                  زيادة عدد الفقرات كما تريد، النص لن يبدو غير منظم أو غير
                  مفهوم.
                </p>
              </div>

              {/* Accepted Volunteers List */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-slate-800">
                    المتطوعين المعتمدين
                  </h3>
                  <span className="text-xs text-slate-400">8 متطوعين</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {volunteers.map((vol, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex flex-col items-center text-center space-y-2"
                    >
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border">
                        <Image
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
                          alt="Volunteer avatar"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-slate-800">
                          {vol.name}
                        </h4>
                        <span className="text-[10px] text-slate-400">
                          {vol.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 space-y-6 shadow-sm">
                <h3 className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  التعليقات (4)
                </h3>

                {/* Single Comment */}
                <div className="space-y-4 text-xs border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                        alt="User"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">
                        محمد احمد الشيخ
                      </h4>
                      <span className="text-[10px] text-slate-400">
                        منذ ساعتين
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 bg-slate-50 p-3 rounded-xl">
                    شكرا لك استاذ على المجهود الرائع، تم التقديم بانتظار
                    الموافقة.
                  </p>
                </div>

                {/* Add Comment Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="أضف تعليقك هنا..."
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-sky-400"
                  />
                  <button className="bg-[#60ceeb] hover:bg-sky-400 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition">
                    إرسال
                  </button>
                </div>
              </div>
            </main>

            {/* Sidebar Left/Right depending on layout */}
            <aside className="w-full lg:w-72 space-y-4 shrink-0">
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-4">
                <h4 className="text-xs font-extrabold text-slate-800 border-b border-slate-100 pb-2">
                  أحدث المشاريع التطوعية
                </h4>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((id) => (
                    <Link
                      key={id}
                      href={`/projects/${id}`}
                      className="flex gap-3 group"
                    >
                      <div className="relative w-14 h-12 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=150&q=80"
                          alt="Mini preview"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="text-[11px] font-bold text-slate-700 group-hover:text-sky-500 line-clamp-2 transition">
                          مشروع تصميم Ui UX للتطبيقات
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
