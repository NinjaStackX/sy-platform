"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const subTabs = [
  { id: "home", label: "الرئيسية" },
  { id: "news", label: "اخبار" },
  { id: "articles", label: "مقالات" },
  { id: "success-stories", label: "قصص نجاح" },
  { id: "blog-posts", label: "مقالات" },
];

export function ForumHero() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="w-full bg-gradient-to-b from-[#e3f6fc] to-[#edf9fc] border-b border-sky-100 dir-rtl">
      {/* Top Banner Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative flex items-center justify-between">
        {/* Create Topic Button */}
        <button className="bg-[#60ceeb] hover:bg-[#4bc3e3] text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm transition">
          <span>فتح موضوع</span>
          <Plus className="w-4 h-4 stroke-[3]" />
        </button>

        {/* Center Page Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0d2137] absolute left-1/2 -translate-x-1/2">
          المنتدى
        </h1>

        {/* Empty Spacer for balance */}
        <div className="w-28 hidden sm:block" />
      </div>

      {/* Sub Navigation Bar */}
      <div className="bg-[#edf9fc]/80 border-t border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-8 py-3 text-xs sm:text-sm">
          {subTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-bold transition-colors ${
                  isActive
                    ? "text-[#0d2137]"
                    : "text-gray-500 hover:text-sky-600"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
