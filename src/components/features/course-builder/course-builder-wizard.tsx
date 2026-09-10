"use client";

import React from "react";
import { useCourseBuilder } from "@/context/course-builder-context";
import { StepIndicator } from "./step-indicator";
import { Step1CourseInfo } from "./steps/step-1-info";
import { PendingScreen, SuccessScreen } from "./status/status-screens";

export function CourseBuilderWizard() {
  const { currentStep, nextStep, prevStep } = useCourseBuilder();

  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col justify-between py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto w-full">
        {/* Title */}
        {typeof currentStep === "number" && (
          <h1 className="text-center text-xl font-bold text-gray-800 mb-6 dir-rtl">
            اضافة دورة جديدة :
          </h1>
        )}

        {/* Stepper Header */}
        <StepIndicator />

        {/* Dynamic Step Content */}
        {currentStep === 1 && <Step1CourseInfo />}
        {currentStep === 2 && (
          <div className="bg-white rounded-2xl border border-sky-200 p-8 text-center text-gray-500 dir-rtl">
            [وحدة إضافة الدروس والاختبارات]
          </div>
        )}
        {currentStep === 3 && (
          <div className="bg-white rounded-2xl border border-sky-200 p-8 text-center text-gray-500 dir-rtl">
            [معاينة الشهادة والاختبارات]
          </div>
        )}
        {currentStep === "pending" && <PendingScreen />}
        {currentStep === "success" && <SuccessScreen />}
      </div>

      {/* Bottom Sticky Controls */}
      {typeof currentStep === "number" && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 py-4 px-6 z-20">
          <div className="max-w-md mx-auto flex items-center justify-between gap-4 dir-rtl">
            <button
              onClick={nextStep}
              className="flex-1 py-3 px-6 bg-sky-400 hover:bg-sky-500 text-white rounded-full font-bold text-sm transition shadow-sm"
            >
              {currentStep === 3 ? "اضافة الدورة ونشره" : "التالي"}
            </button>
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex-1 py-3 px-6 bg-white border border-gray-200 text-gray-600 rounded-full font-bold text-sm hover:bg-gray-50 disabled:opacity-40 transition"
            >
              السابق
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
