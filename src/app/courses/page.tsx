"use client";

import React, { useState } from "react";
import {
  Search,
  BookOpen,
  Clock,
  Star,
  Filter,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useCourses } from "@/hooks/useCourses";

export default function CoursesPage() {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // استخراج categories من الـ Hook مباشرة
  const {
    data: courses = [],
    categories = [],
    isLoading,
    isError,
    refetch,
  } = useCourses({
    category: selectedCategory,
    searchQuery,
  });

  return (
    <div
      className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8 font-sans"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-800">
              {isRtl ? "الدورات التدريبية" : "Training Courses"}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              {isRtl
                ? "استكشف أحدث الكورسات وطوّر مهاراتك مع أفضل المدربين"
                : "Explore the latest courses and develop your skills with top instructors"}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder={
                isRtl
                  ? "ابحث عن دورة أو مدرب..."
                  : "Search course or instructor..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl py-2.5 rtl:pr-10 rtl:pl-4 ltr:pl-10 ltr:pr-4 text-xs font-bold text-slate-700 focus:outline-none focus:border-sky-400 transition shadow-sm"
            />
            <Search className="w-4 h-4 text-slate-400 absolute rtl:right-3.5 ltr:left-3.5 top-3" />
          </div>
        </div>

        {/* Dynamic Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 mx-1" />
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat.key
                  ? "bg-[#60ceeb] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {isRtl ? cat.ar : cat.en}
            </button>
          ))}
        </div>

        {/* Loading Skeleton */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm animate-pulse"
              >
                <div className="aspect-video w-full bg-slate-200" />
                <div className="p-5 space-y-3">
                  <div className="h-4 w-1/3 bg-slate-200 rounded" />
                  <div className="h-5 w-3/4 bg-slate-200 rounded" />
                  <div className="h-4 w-1/2 bg-slate-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && !isLoading && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 space-y-3">
            <AlertCircle className="w-10 h-10 text-rose-500 mx-auto" />
            <p className="text-xs font-bold text-slate-700">
              {isRtl
                ? "تعذر تحميل الكورسات حالياً"
                : "Unable to load courses right now"}
            </p>
            <button
              onClick={() => refetch()}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition"
            >
              {isRtl ? "إعادة المحاولة" : "Try Again"}
            </button>
          </div>
        )}

        {/* Courses Grid */}
        {!isLoading && !isError && courses.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col group"
              >
                {/* Course Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <Image
                    src={course.image}
                    alt={isRtl ? course.titleAr : course.titleEn}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-3 rtl:right-3 ltr:left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-extrabold text-slate-700 shadow-sm">
                    {isRtl ? course.levelAr : course.levelEn}
                  </span>
                </div>

                {/* Course Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>
                        {isRtl ? course.categoryAr : course.categoryEn}
                      </span>
                      <div className="flex items-center gap-1 text-amber-400 font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{course.rating}</span>
                        <span className="text-slate-300">
                          ({course.reviewsCount})
                        </span>
                      </div>
                    </div>

                    <h3 className="text-sm font-black text-slate-800 group-hover:text-sky-500 transition line-clamp-2">
                      {isRtl ? course.titleAr : course.titleEn}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {isRtl ? "المدرب:" : "Instructor:"}{" "}
                      {isRtl ? course.instructorAr : course.instructorEn}
                    </p>
                  </div>

                  {/* Footer Info & Action */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-slate-400 text-[11px]">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>
                          {course.lessonsCount} {isRtl ? "درس" : "lessons"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>
                          {isRtl ? course.durationAr : course.durationEn}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/courses/${course.id}`}
                      className="flex items-center gap-1 text-sky-500 font-bold hover:text-sky-600 transition"
                    >
                      <span>{isRtl ? "عرض الدورة" : "View Course"}</span>
                      {isRtl ? (
                        <ChevronLeft className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !isError && courses.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-100 space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-700">
              {isRtl
                ? "لا توجد دورات مطابقة لبحثك"
                : "No courses matched your search"}
            </h3>
            <p className="text-xs text-slate-400">
              {isRtl
                ? "جرب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً"
                : "Try searching with other words or select a different category"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
