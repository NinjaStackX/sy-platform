"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {
  fetchCourses,
  fetchCategories,
  Course,
  CategoryOption,
  CATEGORIES_MODE, // يفضل استيرادها من الملف المصدري إذا كانت موجودة هناك
} from "@/services/coursesService";

// في حال عدم وجودها في coursesService يمكنك إبقاؤها هنا بهذه الصيغة:
/*
export const CATEGORIES_MODE: CategoryOption[] = [
  { key: "all", ar: "الكل", en: "All" },
  { key: "languages", ar: "لغات", en: "Languages" },
  { key: "media", ar: "تصوير وفيديو", en: "Photography & Video" },
  { key: "design", ar: "تصميم", en: "Design" },
  { key: "programming", ar: "برمجة", en: "Programming" },
];
*/

export interface UseCoursesOptions {
  category?: string;
  searchQuery?: string;
  featuredOnly?: boolean;
  timeoutMs?: number;
  enabled?: boolean;
  /**
   * خيارات إضافية مخصصة لـ React Query للدورات التدريبية
   */
  queryOptions?: Omit<
    UseQueryOptions<Course[], Error>,
    "queryKey" | "queryFn" | "enabled"
  >;
  /**
   * خيارات إضافية مخصصة لـ React Query للتصنيفات
   */
  categoriesQueryOptions?: Omit<
    UseQueryOptions<CategoryOption[], Error>,
    "queryKey" | "queryFn" | "enabled"
  >;
}

export function useCourses({
  category,
  searchQuery = "",
  featuredOnly = false,
  timeoutMs = 5000,
  enabled = true,
  queryOptions,
  categoriesQueryOptions,
}: UseCoursesOptions = {}) {
  // تنظيف البحث من الفراغات الزائدة
  const cleanSearchQuery = searchQuery.trim();

  // 1. استعلام جلب التصنيفات
  const categoriesQuery = useQuery<CategoryOption[], Error>({
    queryKey: ["course-categories"],
    // التعديل هنا: تمرير الكائن بالشكل الصحيح متوافقاً مع interface FetchCategoriesOptions
    queryFn: ({ signal }) => fetchCategories({ signal, timeoutMs }),
    enabled,
    staleTime: 1000 * 60 * 60, // ساعة واحدة
    gcTime: 1000 * 60 * 120, // ساعتان
    refetchOnWindowFocus: false,
    initialData: CATEGORIES_MODE as CategoryOption[],
    ...categoriesQueryOptions,
  });

  // 2. استعلام جلب الدورات
  const coursesQuery = useQuery<Course[], Error>({
    queryKey: [
      "courses",
      {
        ...(category &&
          category !== "all" &&
          category !== "الكل" && { category }),
        ...(cleanSearchQuery && { searchQuery: cleanSearchQuery }),
        ...(featuredOnly && { featuredOnly }),
      },
    ],
    queryFn: ({ signal }) =>
      fetchCourses(
        {
          category,
          searchQuery: cleanSearchQuery,
          featuredOnly,
          timeoutMs,
        },
        signal,
      ),
    enabled,
    staleTime: 1000 * 60 * 5, // 5 دقائق
    gcTime: 1000 * 60 * 10, // 10 دقائق
    refetchOnWindowFocus: false,
    ...queryOptions,
  });

  return {
    ...coursesQuery,
    categories: categoriesQuery.data ?? CATEGORIES_MODE,
    isCategoriesLoading: categoriesQuery.isLoading,
    isCategoriesError: categoriesQuery.isError,
    categoriesError: categoriesQuery.error,
    refetchCategories: categoriesQuery.refetch,
  };
}
