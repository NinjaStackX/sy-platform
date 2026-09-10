"use client";

import React from "react";
import { useCourseBuilder } from "@/context/course-builder-context";
import { Check } from "lucide-react";

const steps = [
  { id: 1, title: "معلومات الكورس", sub: "خطوة 1" },
  { id: 2, title: "المراحل", sub: "خطوة 2" },
  { id: 3, title: "معاينة الاختبارات", sub: "خطوة 3" },
];

export function StepIndicator() {
  const { currentStep } = useCourseBuilder();

  if (typeof currentStep === "string") return null;

  return (
    <div className="w-full max-w-xl mx-auto mb-8 dir-rtl">
      <div className="flex items-center justify-between relative">
        {/* Connecting Lines */}
        <div className="absolute top-5 left-10 right-10 h-[2px] bg-sky-100 -z-10" />

        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center gap-2 bg-white px-2"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200 ${
                  isCompleted
                    ? "bg-sky-400 text-white"
                    : isCurrent
                      ? "border-2 border-sky-400 text-sky-400 bg-white"
                      : "border-2 border-gray-200 text-gray-400 bg-white"
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 stroke-[3]" />
                ) : isCurrent ? (
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                ) : (
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                )}
              </div>
              <div className="text-center">
                <span className="text-xs text-gray-400 block">{step.sub}</span>
                <span
                  className={`text-sm font-medium ${
                    isCurrent || isCompleted ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
