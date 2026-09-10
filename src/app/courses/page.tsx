"use client";

import React, { useState } from "react";
import {
  Search,
  BookOpen,
  Clock,
  Star,
  Filter,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  lessonsCount: number;
  duration: string;
  rating: number;
  reviewsCount: number;
  image: string;
  level: string;
}

const COURSES_DATA: Course[] = [
  {
    id: "1",
    title: "كورس تعلم اللغة الانجليزية من الصفر",
    category: "لغات",
    instructor: "أ. محمد الشيخ",
    lessonsCount: 24,
    duration: "12 ساعة",
    rating: 4.8,
    reviewsCount: 125,
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80",
    level: "مبتدئ",
  },
  {
    id: "2",
    title: "التصوير الفوتوغرافي وتصوير الدرون",
    category: "تصوير وفيديو",
    instructor: "زين منديل - عبد نجار",
    lessonsCount: 18,
    duration: "24 ساعة",
    rating: 4.9,
    reviewsCount: 94,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    level: "متوسط",
  },
  {
    id: "3",
    title: "أساسيات تصميم واجهات المستخدم UI/UX",
    category: "تصميم",
    instructor: "م. أحمد علي",
    lessonsCount: 30,
    duration: "15 ساعة",
    rating: 4.7,
    reviewsCount: 210,
    image:
      "https://images.unsplash.com/photo-1542744094-3a3121699709?w=600&q=80",
    level: "جميع المستويات",
  },
];

const CATEGORIES = ["الكل", "لغات", "تصوير وفيديو", "تصميم", "برمجة"];

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesSearch =
      course.title.includes(searchQuery) ||
      course.instructor.includes(searchQuery);
    const matchesCategory =
      selectedCategory === "الكل" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8 dir-rtl font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-800">
              الدورات التدريبية
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              استكشف أحدث الكورسات وطوّر مهاراتك مع أفضل المدربين
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="ابحث عن دورة أو مدرب..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pr-10 pl-4 text-xs font-bold text-slate-700 focus:outline-none focus:border-sky-400 transition shadow-sm"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat
                  ? "bg-[#60ceeb] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col group"
            >
              {/* Course Thumbnail */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-extrabold text-slate-700 shadow-sm">
                  {course.level}
                </span>
              </div>

              {/* Course Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>{course.category}</span>
                    <div className="flex items-center gap-1 text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{course.rating}</span>
                      <span className="text-slate-300">
                        ({course.reviewsCount})
                      </span>
                    </div>
                  </div>

                  <h3 className="text-sm font-black text-slate-800 group-hover:text-sky-500 transition line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">
                    المدرب: {course.instructor}
                  </p>
                </div>

                {/* Footer Info & Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-slate-400 text-[11px]">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{course.lessonsCount} درس</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <Link
                    href={`/courses/${course.id}`}
                    className="flex items-center gap-1 text-sky-500 font-bold hover:text-sky-600 transition"
                  >
                    <span>عرض الدورة</span>
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-100 space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-700">
              لا توجد دورات مطابقة لمبحثك
            </h3>
            <p className="text-xs text-slate-400">
              جرب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
