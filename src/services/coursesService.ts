export interface Course {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryId: string; // <-- إضافة المعرّف
  categoryAr: string;
  categoryEn: string;
  instructorAr: string;
  instructorEn: string;
  lessonsCount: number;
  durationAr: string;
  durationEn: string;
  rating: number;
  reviewsCount: number;
  image: string;
  levelAr: string;
  levelEn: string;
  isFeatured: boolean;
}

export interface CategoryOption {
  key: string;
  ar: string;
  en: string;
}

export const CATEGORIES_MODE: CategoryOption[] = [
  { key: "all", ar: "الكل", en: "All" },
  { key: "languages", ar: "لغات", en: "Languages" },
  { key: "media", ar: "تصوير وفيديو", en: "Photography & Video" },
  { key: "design", ar: "تصميم", en: "Design" },
  { key: "programming", ar: "برمجة", en: "Programming" },
] as const;

export const COURSES_DATA: Course[] = [
  {
    id: "1",
    titleAr: "كورس تعلم اللغة الانجليزية من الصفر",
    titleEn: "Comprehensive English Course for Beginners",
    categoryId: "languages", // المعرف الموحد للتصنيف
    categoryAr: "لغات",
    categoryEn: "Languages",
    instructorAr: "أ. محمد الشيخ",
    instructorEn: "Mr. Mohammed Al-Sheikh",
    lessonsCount: 24,
    durationAr: "12 ساعة",
    durationEn: "12 Hours",
    rating: 4.8,
    reviewsCount: 125,
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80",
    levelAr: "مبتدئ",
    levelEn: "Beginner",
    isFeatured: true,
  },
  {
    id: "2",
    titleAr: "التصوير الفوتوغرافي وتصوير الدرون",
    titleEn: "Photography and Drone Videography",
    categoryId: "photography", // المعرف الموحد للتصنيف
    categoryAr: "تصوير وفيديو",
    categoryEn: "Photography & Video",
    instructorAr: "زين منديل - عبد نجار",
    instructorEn: "Zain Mandil - Abed Najar",
    lessonsCount: 18,
    durationAr: "24 ساعة",
    durationEn: "24 Hours",
    rating: 4.9,
    reviewsCount: 94,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    levelAr: "متوسط",
    levelEn: "Intermediate",
    isFeatured: false,
  },
  {
    id: "3",
    titleAr: "احترف تصميم واجهات المستخدم UI/UX",
    titleEn: "Master UI/UX Interface Design",
    categoryId: "design", // المعرف الموحد للتصنيف
    categoryAr: "تصميم",
    categoryEn: "Design",
    instructorAr: "م. أحمد علي",
    instructorEn: "Eng. Ahmed Ali",
    lessonsCount: 30,
    durationAr: "15 ساعة",
    durationEn: "15 Hours",
    rating: 4.7,
    reviewsCount: 210,
    image:
      "https://images.unsplash.com/photo-1542744094-3a3121699709?w=600&q=80",
    levelAr: "جميع المستويات",
    levelEn: "All Levels",
    isFeatured: true,
  },
  {
    id: "4",
    titleAr: "تطوير تطبيقات الويب المتقدمة باستخدام Next.js",
    titleEn: "Advanced Web Development with Next.js",
    categoryId: "programming", // المعرف الموحد للتصنيف
    categoryAr: "برمجة",
    categoryEn: "Programming",
    instructorAr: "م. خليل إبراهيم",
    instructorEn: "Eng. Khalil Ibrahim",
    lessonsCount: 35,
    durationAr: "30 ساعة",
    durationEn: "30 Hours",
    rating: 4.9,
    reviewsCount: 320,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    levelAr: "متقدم",
    levelEn: "Advanced",
    isFeatured: false,
  },
];

interface FetchCoursesParams {
  category?: string;
  searchQuery?: string;
  featuredOnly?: boolean;
  timeoutMs?: number;
}

/**
 * دالة الجلب الموحدة المحاكية مع دعم Timeout و AbortSignal
 */
export async function fetchCourses(
  {
    category,
    searchQuery,
    featuredOnly = false,
    timeoutMs = 5000,
  }: FetchCoursesParams = {},
  signal?: AbortSignal,
): Promise<Course[]> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const activeSignal = signal || controller.signal;

  try {
    await new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, 800);

      activeSignal.addEventListener("abort", () => {
        clearTimeout(timer);
        reject(new Error("Request timed out or cancelled"));
      });
    });

    let filtered = [...COURSES_DATA];

    if (featuredOnly) {
      filtered = filtered.filter((item) => item.isFeatured);
    }

    if (category && category !== "all" && category !== "الكل") {
      const matchedCategory = CATEGORIES_MODE.find(
        (c) => c.key === category || c.ar === category || c.en === category,
      );

      filtered = filtered.filter((item) =>
        matchedCategory
          ? item.categoryAr === matchedCategory.ar ||
            item.categoryEn === matchedCategory.en
          : item.categoryAr === category || item.categoryEn === category,
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.titleAr.toLowerCase().includes(query) ||
          item.titleEn.toLowerCase().includes(query) ||
          item.instructorAr.toLowerCase().includes(query) ||
          item.instructorEn.toLowerCase().includes(query),
      );
    }

    return filtered;
  } finally {
    clearTimeout(timeoutId);
  }
}
interface FetchCategoriesOptions {
  signal?: AbortSignal;
  timeoutMs?: number;
}

/**
 * جلب تصنيفات الدورات من خادم الـ API
 */
export async function fetchCategories(
  options: FetchCategoriesOptions = {},
): Promise<CategoryOption[]> {
  const { signal, timeoutMs = 5000 } = options;

  // إعداد Timeout للإلغاء التلقائي
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  // دمج الـ signal الممرر من TanStack Query مع الـ timeout controller
  if (signal) {
    signal.addEventListener("abort", () => controller.abort());
  }

  try {
    const response = await fetch("/api/categories", {
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // في حال حدث خطأ أو انتهت مهلة الطلب، يتم إرجاع البيانات الافتراضية
    console.warn("Fallback to CATEGORIES_MODE due to fetch error:", error);
    return CATEGORIES_MODE as unknown as CategoryOption[];
  } finally {
    clearTimeout(timeoutId);
  }
}
