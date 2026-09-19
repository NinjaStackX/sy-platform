"use client";

import React from "react";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePosts } from "@/hooks/usePosts";

interface PostHeroProps {
  activeCategory: string;
  onCategoryChange: (categoryKey: string) => void;
  onCreateTopic?: () => void;
}

export function PostHero({
  activeCategory,
  onCategoryChange,
  onCreateTopic,
}: PostHeroProps) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const { categories } = usePosts();

  return (
    <div className="w-full bg-gradient-to-b from-[#e3f6fc] to-[#edf9fc] border-b border-sky-100">
      {/* Top Banner Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative flex items-center justify-between">
        <button
          onClick={onCreateTopic}
          className="bg-[#60ceeb] hover:bg-[#4bc3e3] text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm transition"
        >
          <span>{isRtl ? "فتح موضوع" : "New Topic"}</span>
          <Plus className="w-4 h-4 stroke-[3]" />
        </button>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0d2137] absolute left-1/2 -translate-x-1/2">
          {isRtl ? "المنتدى" : "Post"}
        </h1>

        <div className="w-28 hidden sm:block" />
      </div>

      {/* Sub Navigation Bar */}
      <div className="bg-[#edf9fc]/80 border-t border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-6 sm:gap-8 py-3 text-xs sm:text-sm overflow-x-auto">
          {categories.map((tab) => {
            const label = tab.name;
            const isActive = activeCategory === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onCategoryChange(tab.id)}
                className={`font-bold transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-[#0d2137] border-b-2 border-[#60ceeb] pb-0.5"
                    : "text-gray-500 hover:text-sky-600"
                }`}
              >
                {label} ({tab.count})
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
