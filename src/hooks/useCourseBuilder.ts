"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CourseData, Step, Module } from "@/types/course";

const initialCourseData: CourseData = {
  title: "",
  description: "",
  coverImage: null,
  category: "UI / UX Designer",
  modules: [],
  certificateFile: null,
};

export function useCourseBuilder() {
  const queryClient = useQueryClient();

  // إدارة الخطوة الحالية
  const stepQuery = useQuery<Step>({
    queryKey: ["courseBuilderStep"],
    queryFn: () => 1,
    staleTime: Infinity,
  });

  // إدارة بيانات الكورس
  const courseDataQuery = useQuery<CourseData>({
    queryKey: ["courseBuilderData"],
    queryFn: () => initialCourseData,
    staleTime: Infinity,
  });

  const currentStep = stepQuery.data ?? 1;
  const courseData = courseDataQuery.data ?? initialCourseData;

  const setStep = (step: Step) => {
    queryClient.setQueryData(["courseBuilderStep"], step);
  };

  const nextStep = () => {
    if (currentStep === 1) setStep(2);
    else if (currentStep === 2) setStep(3);
    else if (currentStep === 3) setStep("pending");
  };

  const prevStep = () => {
    if (currentStep === 2) setStep(1);
    else if (currentStep === 3) setStep(2);
  };

  const updateCourseData = (data: Partial<CourseData>) => {
    queryClient.setQueryData<CourseData>(["courseBuilderData"], (prev) => ({
      ...initialCourseData,
      ...prev,
      ...data,
    }));
  };

  const addModule = () => {
    const newModule: Module = {
      id: Date.now().toString(),
      title: "",
      description: "",
      lessons: [],
      quizzes: [],
    };
    queryClient.setQueryData<CourseData>(["courseBuilderData"], (prev) => ({
      ...initialCourseData,
      ...prev,
      modules: [...(prev?.modules || []), newModule],
    }));
  };

  const updateModule = (id: string, updatedModule: Partial<Module>) => {
    queryClient.setQueryData<CourseData>(["courseBuilderData"], (prev) => {
      if (!prev) return initialCourseData;
      return {
        ...prev,
        modules: prev.modules.map((m) =>
          m.id === id ? { ...m, ...updatedModule } : m,
        ),
      };
    });
  };

  return {
    currentStep,
    setStep,
    nextStep,
    prevStep,
    courseData,
    updateCourseData,
    addModule,
    updateModule,
  };
}
