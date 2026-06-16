"use client";

import { useState } from "react";
import Image from "next/image";

export default function GeneratorGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Main image */}
      <div className="relative w-full rounded-lg overflow-hidden bg-gray-light mb-3" style={{ aspectRatio: "4/3" }}>
        <Image
          src={images[activeIndex]}
          alt={`${name} — view ${activeIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 flex-wrap">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setActiveIndex(i)}
            className={`relative flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all duration-150 ${
              i === activeIndex
                ? "border-brand"
                : "border-gray-border hover:border-charcoal-mid"
            }`}
          >
            <Image
              src={img}
              alt={`${name} thumbnail ${i + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
