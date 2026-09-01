"use client";

import { useState } from "react";
import Image from "next/image";

// Add "= []" here to prevent undefined crashes
export default function AccordionGallery({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Safety check: if items is empty or undefined, render nothing
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row gap-3 w-full h-[350px] rounded-2xl overflow-hidden p-2 bg-white/[0.02] backdrop-blur-md border border-[#1D63B8]/30 shadow-2xl">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex flex-col justify-end p-5 ${
              isActive
                ? "flex-[3] md:flex-[4]"
                : "flex-[1] opacity-60 hover:opacity-100"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={item.image}
                alt={item.label || "Gallery image"}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`object-cover transition-transform duration-700 ${
                  isActive ? "scale-105" : "scale-100 filter grayscale-[20%]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020611]/90 via-[#020611]/20 to-transparent"></div>
            </div>

            {isActive && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#1D63B8]"></div>
            )}

            <div className="relative z-10 transition-all duration-300">
              {item.tag && (
                <span className="text-[10px] font-semibold bg-[#1D63B8]/20 text-cyan-300 px-2 py-0.5 rounded-md border border-[#1D63B8]/40 uppercase tracking-widest mb-1 inline-block">
                  {item.tag}
                </span>
              )}
              <h3 className={`font-semibold text-white tracking-wide transition-all duration-300 ${isActive ? "text-base sm:text-lg" : "text-xs truncate"}`}>
                {item.label}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}