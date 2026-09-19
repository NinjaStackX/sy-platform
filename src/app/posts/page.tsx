"use client";

import React, { useState } from "react";
import { PostHero } from "@/components/features/posts/posts-hero";
import { PostCard } from "@/components/features/posts/post-card";
import { PostSidebar } from "@/components/features/posts/posts-sidebar";
import { usePosts } from "@/hooks/usePosts";

export default function PostPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  // جلب المنشورات المفلترة بناءً على الفئة النشطة
  const { posts, isLoading, isError, isRtl } = usePosts({
    category: selectedCategory,
  });
  const filterPosts =
    selectedStatus != "all"
      ? posts.filter((p) => p.status == selectedStatus)
      : posts;
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between">
      <div>
        {/* Hero Section */}
        <PostHero
          activeCategory={selectedCategory}
          onCategoryChange={(cat) => setSelectedCategory(cat)}
        />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8">
          <main className="flex-1">
            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((n) => (
                  <div
                    key={n}
                    className="h-64 bg-slate-200 rounded-2xl animate-pulse"
                  />
                ))}
              </div>
            )}

            {!isLoading && !isError && posts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filterPosts.map((post, idx) => (
                  <PostCard key={idx} post={post} />
                ))}
              </div>
            )}

            {!isLoading && !isError && posts.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
                <p className="text-sm font-bold text-slate-500">
                  {isRtl
                    ? "لا توجد منشورات في هذه الفئة"
                    : "No posts found in this category"}
                </p>
              </div>
            )}
          </main>

          {/* Sidebar - تم ربط الفئة النشطة ودالة التغيير به */}
          <PostSidebar
            activeStatus={selectedStatus}
            onStatusChange={(st) => setSelectedStatus(st)}
            recentPosts={posts.slice(0, 5)}
          />
        </div>
      </div>
    </div>
  );
}
