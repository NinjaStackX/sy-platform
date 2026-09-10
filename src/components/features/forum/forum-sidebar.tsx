"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/forum";

interface ForumSidebarProps {
  recentPosts: Post[];
}

export function ForumSidebar({ recentPosts }: ForumSidebarProps) {
  return (
    <aside className="w-full lg:w-72 shrink-0 space-y-6 dir-rtl">
      {/* Categories Widget */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4">
        <h4 className="text-sm font-bold text-gray-800 border-b border-gray-50 pb-3">
          التصنيفات
        </h4>
        <div className="space-y-2.5 text-xs text-gray-600">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked
              className="rounded border-gray-300 text-sky-400 focus:ring-sky-400"
            />
            <span>مقالات تصميم (12)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-sky-400 focus:ring-sky-400"
            />
            <span>تطوير الويب (45)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-sky-400 focus:ring-sky-400"
            />
            <span>تطبيقات الجوال (18)</span>
          </label>
        </div>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4">
        <h4 className="text-sm font-bold text-gray-800 border-b border-gray-50 pb-3">
          أحدث المقالات
        </h4>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/forum/${post.id}`}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-200"
                />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold text-gray-700 group-hover:text-sky-500 transition line-clamp-2">
                  {post.title}
                </h5>
                <span className="text-[10px] text-gray-400 block">
                  {post.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
