"use client";

import React, { createContext, useContext, useState } from "react";
import { CourseData, Step, Module } from "@/types/course";

interface CourseBuilderContextType {
  currentStep: Step;
  setStep: (step: Step) => void;
  nextStep: () => void;
  prevStep: () => void;
  courseData: CourseData;
  updateCourseData: (data: Partial<CourseData>) => void;
  addModule: () => void;
  updateModule: (id: string, updatedModule: Partial<Module>) => void;
}

const initialCourseData: CourseData = {
  title: "",
  description: "",
  coverImage: null,
  category: "UI / UX Designer",
  modules: [],
  certificateFile: null,
};

const CourseBuilderContext = createContext<
  CourseBuilderContextType | undefined
>(undefined);

export function CourseBuilderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [courseData, setCourseData] = useState<CourseData>(initialCourseData);

  const setStep = (step: Step) => setCurrentStep(step);

  const nextStep = () => {
    if (currentStep === 1) setCurrentStep(2);
    else if (currentStep === 2) setCurrentStep(3);
    else if (currentStep === 3) setCurrentStep("pending");
  };

  const prevStep = () => {
    if (currentStep === 2) setCurrentStep(1);
    else if (currentStep === 3) setCurrentStep(2);
  };

  const updateCourseData = (data: Partial<CourseData>) => {
    setCourseData((prev) => ({ ...prev, ...data }));
  };

  const addModule = () => {
    const newModule: Module = {
      id: Date.now().toString(),
      title: "",
      description: "",
      lessons: [],
      quizzes: [],
    };
    setCourseData((prev) => ({
      ...prev,
      modules: [...prev.modules, newModule],
    }));
  };

  const updateModule = (id: string, updatedModule: Partial<Module>) => {
    setCourseData((prev) => ({
      ...prev,
      modules: prev.modules.map((m) =>
        m.id === id ? { ...m, ...updatedModule } : m,
      ),
    }));
  };

  return (
    <CourseBuilderContext.Provider
      value={{
        currentStep,
        setStep,
        nextStep,
        prevStep,
        courseData,
        updateCourseData,
        addModule,
        updateModule,
      }}
    >
      {children}
    </CourseBuilderContext.Provider>
  );
}

export const useCourseBuilder = () => {
  const context = useContext(CourseBuilderContext);
  if (!context)
    throw new Error(
      "useCourseBuilder must be used within a CourseBuilderProvider",
    );
  return context;
};
