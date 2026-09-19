import React from "react";
import Image from "next/image";
import { GalleryGrid } from "@/components/features/posts/gallery-grid";
import { PostSidebar } from "@/components/features/posts/posts-sidebar";
import { Footer } from "@/components/layout/footer";
import { Post } from "@/types/posts";

const mockDetailPost: Post = {
  id: "1",
  title: "منشور تصميم UI UX للتطبيقات والمواقع الإلكترونية.",
  excerpt: "تفاصيل المنشور...",
  content: `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد.`,
  coverImage:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  galleryImages: [
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80",
  ],
  date: "22 أكتوبر 2026",
  author: {
    name: "محمد عبد الرحيم",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    role: "مدرب",
  },
  category: "تصميم UI/UX",
  commentsCount: 120,
};

export default function PostDetailPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8 dir-rtl">
        {/* Main Article Section */}
        <main className="flex-1 bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-sm">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-extrabold text-gray-800 leading-snug">
              {mockDetailPost.title}
            </h1>
            <span className="text-xs text-gray-400 block">
              {mockDetailPost.date}
            </span>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={mockDetailPost.coverImage}
              alt={mockDetailPost.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Paragraphs */}
          <div className="text-xs sm:text-sm text-gray-600 leading-relaxed space-y-4">
            <p>{mockDetailPost.content}</p>
            <p>{mockDetailPost.content}</p>
          </div>

          {/* Image Gallery */}
          <GalleryGrid images={mockDetailPost.galleryImages || []} />
        </main>

        {/* Sidebar */}
        <PostSidebar recentPosts={[mockDetailPost]} />
      </div>
    </div>
  );
}
