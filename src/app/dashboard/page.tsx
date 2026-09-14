"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useData } from "@/context/DataContext";
import {
  GraduationCap,
  BookOpen,
  Clock,
  Edit3,
  MoreVertical,
} from "lucide-react";

export default function DashboardOverviewPage() {
  const { t } = useTranslation();
  const { user, courses } = useData();

  return (
    <div className="space-y-8 font-sans">
      {/* Profile Header */}
      <div className="bg-gradient-to-l from-[#a2e2f3] to-[#71d3ec] rounded-2xl p-6 text-white flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <Image
              src={user.avatar}
              alt={user.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800">
              {user.name}
            </h2>
            <p className="text-xs text-slate-700 font-medium mt-0.5">
              ({t("student")})
            </p>
          </div>
        </div>

        <Link
          href="/dashboard/profile"
          className="bg-white/90 hover:bg-white text-slate-700 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>{t("profile")}</span>
        </Link>
      </div>

      {/* Stats Cards dynamic from Global Context */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center justify-between shadow-sm">
          <div>
            <span className="text-2xl font-black text-slate-800 block">
              {user.stats.completedCourses}
            </span>
            <span className="text-xs text-slate-400">
              {t("completed_courses")}
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
            <GraduationCap className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center justify-between shadow-sm">
          <div>
            <span className="text-2xl font-black text-slate-800 block">
              {user.stats.activeCourses}
            </span>
            <span className="text-xs text-slate-400">
              {t("active_courses")}
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 p-5 flex items-center justify-between shadow-sm">
          <div>
            <span className="text-2xl font-black text-slate-800 block">
              {user.stats.completedHours}
            </span>
            <span className="text-xs text-slate-400">
              {t("completed_hours")}
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Dynamic Courses Loop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl border border-slate-100 p-5 space-y-4 shadow-sm relative"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xs font-bold text-slate-800">
                {course.title}
              </h4>
            </div>

            <div className="space-y-1.5">
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#60ceeb] rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
