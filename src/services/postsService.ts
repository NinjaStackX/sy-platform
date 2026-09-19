export interface Author {
  nameAr: string;
  nameEn: string;
  avatar: string;
  roleAr: string;
  roleEn: string;
}

export interface Post {
  id: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  contentAr: string;
  contentEn: string;
  coverImage: string;
  date: string;
  author: Author;
  categoryAr: string;
  categoryEn: string;
  categoryId: string;
  statusId: string;
  commentsCount: number;
}

export interface PostCategory {
  id: string;
  nameAr: string;
  nameEn: string;
  count: number;
}

export interface PostStatus {
  id: string;
  nameAr: string;
  nameEn: string;
}

export interface FetchPostsParams {
  category?: string;
  searchQuery?: string;
  limit?: number;
  timeoutMs?: number;
  status?: string;
}

export const MOCK_Post_POSTS: Post[] = [
  {
    id: "1",
    titleAr: "منشور تصميم UI UX للتطبيقات والمواقع الإلكترونية",
    titleEn: "UI/UX Design Post for Mobile Apps & Websites",
    excerptAr: "دليل شامل لأفضل الممارسات في تصميم الواجهات والمستخدم...",
    excerptEn: "A comprehensive guide to best practices in UI/UX design...",
    contentAr: "محتوى المنشور باللغة العربية...",
    contentEn: "Post content in English...",
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    date: "2026-10-22",
    author: {
      nameAr: "محمد عبد الرحيم",
      nameEn: "Mohammed Abdelrahim",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      roleAr: "مدرب",
      roleEn: "Instructor",
    },
    categoryAr: "تصميم UI/UX",
    categoryEn: "UI/UX Design",
    categoryId: "1",
    statusId: "1",
    commentsCount: 120,
  },
  {
    id: "2",
    titleAr: "أساسيات تطوير تطبيقات Next.js الحديثة",
    titleEn: "Modern Next.js Web Development Fundamentals",
    excerptAr: "تعلم كيفية بناء تطبيقات سريعة ومتجاوبة مع محركات البحث...",
    excerptEn: "Learn how to build fast and SEO-friendly web applications...",
    contentAr: "محتوى مقال Next.js بالعربية...",
    contentEn: "Next.js article content in English...",
    coverImage:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    date: "2026-10-20",
    author: {
      nameAr: "خليل إبراهيم",
      nameEn: "Khalil Ibrahim",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      roleAr: "مطور تطبيقات",
      roleEn: "Developer",
    },
    categoryAr: "برمجة",
    categoryEn: "Programming",
    categoryId: "2",
    statusId: "1",
    commentsCount: 85,
  },
  {
    id: "3",
    titleAr: "أفضل الممارسات لإنشاء واجهات متجاوبة",
    titleEn: "Best Practices for Responsive Interfaces",
    excerptAr: "نصائح وإرشادات لمصممي الواجهات لضمان تجربة مستخدم سلسة...",
    excerptEn: "Tips and guidelines for UI designers to ensure smooth UX...",
    contentAr: "محتوى مقال التصميم المتجاوب...",
    contentEn: "Responsive design article content...",
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    date: "2026-10-18",
    author: {
      nameAr: "محمد عبد الرحيم",
      nameEn: "Mohammed Abdelrahim",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      roleAr: "مدرب",
      roleEn: "Instructor",
    },
    categoryAr: "تصميم UI/UX",
    categoryEn: "UI/UX Design",
    categoryId: "1",
    statusId: "2",
    commentsCount: 45,
  },
];

/**
 * دالة جلب المنشورات الموحدة المحاكية مع دعم Timeout و AbortSignal
 */
export async function fetchPosts(
  {
    category,
    status,
    searchQuery,
    limit,
    timeoutMs = 5000,
  }: FetchPostsParams = {},
  signal?: AbortSignal,
): Promise<Post[]> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  const activeSignal = signal || controller.signal;

  try {
    await new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, 600);
      activeSignal.addEventListener("abort", () => {
        clearTimeout(timer);
        reject(new Error("Request cancelled or timed out"));
      });
    });

    let filtered = [...MOCK_Post_POSTS];

    if (category && category !== "all" && category !== "الكل") {
      filtered = filtered.filter(
        (p) =>
          p.categoryId === category ||
          p.categoryAr === category ||
          p.categoryEn === category,
      );
    }

    if (status && status !== "all" && status !== "الكل") {
      filtered = filtered.filter((p) => p.statusId === status);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.titleAr.toLowerCase().includes(q) ||
          p.titleEn.toLowerCase().includes(q) ||
          p.author.nameAr.toLowerCase().includes(q) ||
          p.author.nameEn.toLowerCase().includes(q),
      );
    }

    if (limit) {
      filtered = filtered.slice(0, limit);
    }

    return filtered;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function fetchPostCategories(): Promise<PostCategory[]> {
  return [
    {
      id: "all",
      nameAr: "الكل",
      nameEn: "All",
      count: MOCK_Post_POSTS.length,
    },
    {
      id: "1",
      nameAr: "تصميم UI/UX",
      nameEn: "UI/UX Design",
      count: MOCK_Post_POSTS.filter((p) => p.categoryId === "1").length,
    },
    {
      id: "2",
      nameAr: "برمجة",
      nameEn: "Programming",
      count: MOCK_Post_POSTS.filter((p) => p.categoryId === "2").length,
    },
    { id: "3", nameAr: "اخبار", nameEn: "News", count: 0 },
    { id: "4", nameAr: "مقالات", nameEn: "Articles", count: 0 },
  ];
}

export async function fetchPostStatus(): Promise<PostStatus[]> {
  return [
    { id: "all", nameAr: "الكل", nameEn: "All" },
    { id: "1", nameAr: "مميزة", nameEn: "Featured" },
    { id: "2", nameAr: "الأكثر زيارة", nameEn: "Most visited" },
  ];
}
