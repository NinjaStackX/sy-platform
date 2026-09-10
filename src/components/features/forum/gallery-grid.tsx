"use client";

import React from "react";
import Image from "next/image";

interface GalleryGridProps {
  images: string[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-3 dir-rtl">
      <h4 className="text-sm font-bold text-gray-800">صور وملحقات أخرى :</h4>
      <div className="grid grid-cols-3 gap-3">
        {images.slice(0, 2).map((img, index) => (
          <div
            key={index}
            className="relative h-28 rounded-xl overflow-hidden bg-gray-100"
          >
            <Image
              src={img}
              alt="Gallery Image"
              fill
              className="object-cover"
            />
          </div>
        ))}
        {images.length > 2 && (
          <div className="relative h-28 rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center cursor-pointer">
            <Image
              src={images[2]}
              alt="Gallery Image"
              fill
              className="object-cover opacity-40"
            />
            <span className="relative z-10 text-white font-bold text-sm">
              +20 صورة
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
