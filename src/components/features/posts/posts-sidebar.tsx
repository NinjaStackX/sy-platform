/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePosts } from "@/hooks/usePosts";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface PostSidebarProps {
  activeStatus?: string;
  onStatusChange?: (StatusKey: string) => void;
  recentPosts?: any[];
}

export function PostSidebar({
  activeStatus,
  onStatusChange,
  recentPosts = [],
}: PostSidebarProps) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const { status } = usePosts();
  // يفضل استخدام مصفوفة فئات موحدة بمعرفات ثابتة

  return (
    <aside className="w-full lg:w-80 space-y-6">
      {/* قسم الفئات/الفلترة في الشريط الجانبي */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4">
          {isRtl ? "الأقسام" : "Stegories"}
        </h3>
        <div className="space-y-1">
          {status.map((st, idx) => {
            const isActive = activeStatus === st.id;
            return (
              <button
                key={idx}
                onClick={() => {
                  onStatusChange?.(st.id);
                }}
                className={`w-full text-start px-4 py-2.5 rounded-xl font-medium text-sm transition ${
                  isActive
                    ? "bg-[#e3f6fc] text-[#0d2137] font-bold"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {st.name}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
