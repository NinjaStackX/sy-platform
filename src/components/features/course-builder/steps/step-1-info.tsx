"use client";

import React from "react";
import { useCourseBuilder } from "@/context/course-builder-context";
import { Plus, ChevronDown } from "lucide-react";

export function Step1CourseInfo() {
  const { courseData, updateCourseData } = useCourseBuilder();

  return (
    <div className="bg-white rounded-2xl border border-sky-200 p-6 sm:p-8 shadow-sm space-y-6 dir-rtl">
      {/* Course Name */}
      <div className="space-y-1.5">
        <label className="block text-sm font-bold text-gray-800">
          اسم الدورة
        </label>
        <p className="text-xs text-gray-400">
          من فضلك يجب أن يكون الاسم معبراً ولا يتجاوز 30 حرف .
        </p>
        <input
          type="text"
          value={courseData.title}
          onChange={(e) => updateCourseData({ title: e.target.value })}
          placeholder="دورة لغة انجليزية"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-sky-400 text-sm text-gray-700 bg-white"
        />
      </div>

      {/* Course Description */}
      <div className="space-y-1.5">
        <label className="block text-sm font-bold text-gray-800">
          وصف الدورة
        </label>
        <textarea
          rows={4}
          value={courseData.description}
          onChange={(e) => updateCourseData({ description: e.target.value })}
          placeholder="وصف الدورة كامل ومعبر"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-sky-400 text-sm text-gray-700 bg-white resize-none"
        />
      </div>

      {/* Cover Image Upload */}
      <div className="space-y-1.5">
        <label className="block text-sm font-bold text-gray-800">
          صورة غلاف الدورة
        </label>
        <p className="text-xs text-gray-400">
          من فضلك يجب أن تكون الصورة معبرة ومناسبة مع الاسم .
        </p>
        <div className="w-full h-36 bg-sky-50/40 rounded-xl border-2 border-dashed border-sky-100 flex items-center justify-center cursor-pointer hover:bg-sky-50 transition">
          <div className="w-10 h-10 rounded-full bg-sky-200/60 flex items-center justify-center text-sky-600">
            <Plus className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* Course Category */}
      <div className="space-y-1.5">
        <label className="block text-sm font-bold text-gray-800">
          تصنيف الكورس
        </label>
        <div className="relative">
          <select
            value={courseData.category}
            onChange={(e) => updateCourseData({ category: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-sky-400 text-sm text-gray-700 appearance-none bg-white cursor-pointer"
          >
            <option value="UI / UX Designer">UI / UX Designer</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Apps">Mobile Apps</option>
          </select>
          <ChevronDown className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
