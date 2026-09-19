"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/posts";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition duration-200 dir-rtl">
      <div>
        {/* Card Cover Image */}
        <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-5 space-y-3">
          {/* Metadata */}
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>{post.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-gray-800 hover:text-sky-500 transition line-clamp-2">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Footer / Author & CTA */}
      <div className="px-5 py-4 border-t border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-700">
              {post.author.name}
            </p>
            <p className="text-[10px] text-gray-400">
              {post.author.role || "مدرب"}
            </p>
          </div>
        </div>

        <Link
          href={`/posts/${post.id}`}
          className="px-4 py-1.5 bg-sky-50 text-sky-600 rounded-lg text-xs font-semibold hover:bg-sky-400 hover:text-white transition"
        >
          عرض المنشور
        </Link>
      </div>
    </div>
  );
}
