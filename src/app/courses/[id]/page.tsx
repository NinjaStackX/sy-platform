"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";

// استيراد كافة المكونات الثمانية من مجلد features/course
import { CourseSidebar } from "@/components/features/course/CourseSidebar";
import { LessonPlayerView } from "@/components/features/course/LessonPlayerView";
import { PdfPresentationLessonView } from "@/components/features/course/PdfPresentationLessonView";
import { QuizView } from "@/components/features/course/QuizView";
import { QuizResultView } from "@/components/features/course/QuizResultView";
import { GradesView } from "@/components/features/course/GradesView";
import { CertificateRequirementsView } from "@/components/features/course/CertificateRequirementsView";
import {
  CourseCompletionView,
  CertificateModal,
  RatingModal,
} from "@/components/features/course/CourseCompletionAndCertificateModal";

type ActiveView =
  | "pdf-lesson"
  | "video-lesson"
  | "quiz"
  | "quiz-result"
  | "grades"
  | "certificate-requirements"
  | "course-completion";

const CourseDetailPage = () => {
  // جلب معرّف الدورة التدريبية من المسار الديناميكي /courses/[id]
  const params = useParams();
  const courseId = params?.id;

  const [currentView, setCurrentView] = useState<ActiveView>("pdf-lesson");
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8 dir-rtl font-sans space-y-6">
      {/* شريط أزرار علوي للتنقل واستعراض الواجهات */}
      <div className="max-w-7xl mx-auto bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-600">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setCurrentView("pdf-lesson")}
            className={`px-3 py-1.5 rounded-lg transition ${
              currentView === "pdf-lesson"
                ? "bg-sky-500 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            1. درس PDF
          </button>
          <button
            onClick={() => setCurrentView("video-lesson")}
            className={`px-3 py-1.5 rounded-lg transition ${
              currentView === "video-lesson"
                ? "bg-sky-500 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            2. درس فيديو
          </button>
          <button
            onClick={() => setCurrentView("quiz")}
            className={`px-3 py-1.5 rounded-lg transition ${
              currentView === "quiz"
                ? "bg-sky-500 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            3. تقديم اختبار
          </button>
          <button
            onClick={() => setCurrentView("quiz-result")}
            className={`px-3 py-1.5 rounded-lg transition ${
              currentView === "quiz-result"
                ? "bg-sky-500 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            4. نتيجة الاختبار
          </button>
          <button
            onClick={() => setCurrentView("grades")}
            className={`px-3 py-1.5 rounded-lg transition ${
              currentView === "grades"
                ? "bg-sky-500 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            5. كشف العلامات
          </button>
          <button
            onClick={() => setCurrentView("certificate-requirements")}
            className={`px-3 py-1.5 rounded-lg transition ${
              currentView === "certificate-requirements"
                ? "bg-sky-500 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            6. متطلبات الشهادة
          </button>
          <button
            onClick={() => setCurrentView("course-completion")}
            className={`px-3 py-1.5 rounded-lg transition ${
              currentView === "course-completion"
                ? "bg-sky-500 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            7. إتمام الدورة
          </button>
        </div>

        {/* عرض رقم الـ ID في المسار الحقيقي */}
        <div className="bg-sky-50 text-sky-600 px-3 py-1 rounded-lg font-mono text-[11px]">
          Course ID: {courseId}
        </div>
      </div>

      {/* الهيكل الرئيسي للمنصة */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* الشريط الجانبي */}
        <CourseSidebar
          onShowGrades={() => setCurrentView("grades")}
          onOpenRatingModal={() => setIsRatingOpen(true)}
        />

        {/* عرض الواجهة المختارة */}
        {currentView === "pdf-lesson" && <PdfPresentationLessonView />}
        {currentView === "video-lesson" && <LessonPlayerView />}
        {currentView === "quiz" && <QuizView />}
        {currentView === "quiz-result" && <QuizResultView status="passed" />}
        {currentView === "grades" && <GradesView />}
        {currentView === "certificate-requirements" && (
          <CertificateRequirementsView />
        )}
        {currentView === "course-completion" && (
          <CourseCompletionView
            onOpenCertificateModal={() => setIsCertificateOpen(true)}
          />
        )}
      </div>

      {/* النوافذ المنبثقة (Modals) */}
      <RatingModal
        isOpen={isRatingOpen}
        onClose={() => setIsRatingOpen(false)}
      />

      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />
    </div>
  );
};

export default CourseDetailPage;
