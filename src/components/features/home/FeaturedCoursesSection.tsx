/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";
import { toast } from "react-toastify";
import { useCourses } from "@/hooks/useCourses";

interface FeaturedCoursesSectionProps {
  fadeUp: any;
  staggerContainer: any;
}

export default function FeaturedCoursesSection({
  fadeUp,
  staggerContainer,
}: FeaturedCoursesSectionProps) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  // استبدال useFeaturedCourses بـ useCourses وتمرير معيار الدورات المميزة فقط

  const {
    data: courses,
    isLoading,
    isError,
  } = useCourses({ featuredOnly: true });
  useEffect(() => {
    if (isError) {
      toast.error(
        isRtl ? "حدث خطأ أثناء تحميل الكورسات!" : "Failed to load courses!",
        { position: isRtl ? "bottom-right" : "bottom-left" },
      );
    }
  }, [isError, isRtl]);

  // حالة التحميل (Skeleton Loader)
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm animate-pulse"
          >
            <div className="aspect-video w-full bg-slate-200" />
            <div className="p-5 space-y-3">
              <div className="h-4 w-12 bg-slate-200 rounded" />
              <div className="h-5 w-3/4 bg-slate-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // حالة الخطأ
  if (isError) {
    return (
      <div className="text-center py-12 text-rose-500 font-bold">
        {isRtl
          ? "تعذر تحميل الكورسات حالياً"
          : "Unable to load courses right now"}
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {courses?.map((course: any) => (
        <motion.div
          key={course.id}
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
        >
          <Link href={`/courses/${course.id}`}>
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
              <Image
                src={course.image}
                alt={isRtl ? course.titleAr : course.titleEn}
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-3 ltr:left-3 rtl:right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-slate-700 shadow-sm">
                {isRtl ? course.categoryAr : course.categoryEn}
              </div>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-1 text-amber-400 font-bold text-xs">
                <Star className="w-4 h-4 fill-current" />
                <span>{course.rating}</span>
              </div>
              <h3 className="text-base font-black text-slate-800 group-hover:text-sky-500 transition line-clamp-2">
                {isRtl ? course.titleAr : course.titleEn}
              </h3>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
