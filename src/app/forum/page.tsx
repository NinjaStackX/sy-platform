import React from "react";
import { ForumHero } from "@/components/features/forum/forum-hero";
import { PostCard } from "@/components/features/forum/post-card";
import { ForumSidebar } from "@/components/features/forum/forum-sidebar";
import { Footer } from "@/components/layout/footer";
import { Post } from "@/types/forum";

const mockPosts: Post[] = [
  {
    id: "1",
    title: "منشور تصميم UI UX للتطبيقات والمواقع الإلكترونية.",
    excerpt:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى...",
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    date: "22 أكتوبر 2026",
    author: {
      name: "محمد عبد الرحيم",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      role: "مدرب",
    },
    category: "تصميم UI/UX",
    commentsCount: 120,
    content: "",
  },
  {
    id: "2",
    title: "منشور تصميم UI UX للتطبيقات والمواقع الإلكترونية.",
    excerpt:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى...",
    coverImage:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    date: "20 أكتوبر 2026",
    author: {
      name: "محمد عبد الرحيم",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      role: "مدرب",
    },
    category: "تصميم UI/UX",
    commentsCount: 85,
    content: "",
  },
];

export default function ForumPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between">
      <div>
        {/* Top Header Navigation */}

        {/* Dynamic Forum Hero Banner */}
        <ForumHero />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8 dir-rtl">
          {/* Main Feed Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <ForumSidebar recentPosts={mockPosts} />
        </div>
      </div>

      {/* Global Dark Footer */}
    </div>
  );
}
