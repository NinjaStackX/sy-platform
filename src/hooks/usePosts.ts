"use client";

import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import {
  fetchPosts,
  fetchPostCategories,
  Post,
  PostCategory,
  FetchPostsParams,
  fetchPostStatus,
  PostStatus,
} from "@/services/postsService";
import { FormStatus } from "react-dom";

export function usePosts(params: FetchPostsParams = {}) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ar";
  const isRtl = currentLang === "ar";

  // لاستخراج الفئة المحددة بشكل صريح
  const selectedCategory = params.category ?? "all";

  // 1. جلب المنشورات المفلترة بناءً على الفئة واللغة
  const postsQuery = useQuery({
    queryKey: [
      "Posts",
      "posts",
      { category: selectedCategory, lang: currentLang },
    ],
    queryFn: ({ signal }) =>
      fetchPosts({ ...params, category: selectedCategory }, signal),
    staleTime: 1000 * 60 * 5,
  });

  // 2. جلب التصنيفات
  const categoriesQuery = useQuery({
    queryKey: ["Posts", "categories", { lang: currentLang }],
    queryFn: () => fetchPostCategories(),
    staleTime: 1000 * 60 * 15,
  });
  const statusQuery = useQuery({
    queryKey: ["Posts", "status", { lang: currentLang }],
    queryFn: () => fetchPostStatus(),
    staleTime: 1000 * 60 * 15,
  });
  // 3. معالجة وتنسيق المنشورات
  const posts =
    postsQuery.data?.map((post: Post) => ({
      id: post.id,
      title: isRtl ? post.titleAr : post.titleEn,
      excerpt: isRtl ? post.excerptAr : post.excerptEn,
      content: isRtl ? post.contentAr : post.contentEn,
      coverImage: post.coverImage,
      date: post.date,
      // احتفظ بالـ ID والاسم المترجم
      categoryId: post.categoryId || post.categoryId,
      category: isRtl ? post.categoryAr : post.categoryEn,
      status: post.statusId,
      commentsCount: post.commentsCount,
      author: {
        name: isRtl ? post.author.nameAr : post.author.nameEn,
        avatar: post.author.avatar,
        role: isRtl ? post.author.roleAr : post.author.roleEn,
      },
    })) ?? [];

  // 4. معالجة وتنسيق التصنيفات
  const categories =
    categoriesQuery.data?.map((cat: PostCategory) => ({
      id: cat.id,
      name: isRtl ? cat.nameAr : cat.nameEn,
      count: cat.count,
      rawAr: cat.nameAr,
      rawEn: cat.nameEn,
    })) ?? [];
  const status =
    statusQuery.data?.map((st: PostStatus) => ({
      id: st.id,
      name: isRtl ? st.nameAr : st.nameEn,
    })) ?? [];
  return {
    posts,
    categories,
    status,
    isLoading: postsQuery.isLoading || categoriesQuery.isLoading,
    isError: postsQuery.isError || categoriesQuery.isError,
    isRtl,
    lang: currentLang,
  };
}
