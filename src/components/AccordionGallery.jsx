"use client";

import { useState } from "react";
import Image from "next/image";

export default function AccordionGallery({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-3 w-full h-[400px] rounded-2xl overflow-hidden p-2 bg-white/[0.02] backdrop-blur-md border border-[#1D63B8]/30 shadow-2xl">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex flex-col justify-end p-6 ${
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
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020611]/90 via-[#020611]/20 to-transparent"></div>
            </div>

            {/* Active Top Accent Line */}
            {isActive && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#1D63B8]"></div>
            )}

            {/* Optional Small Tag & Clean Label */}
            <div className="relative z-10 transition-all duration-300">
              {item.tag && (
                <span className="text-[10px] font-semibold bg-[#1D63B8]/20 text-cyan-300 px-2.5 py-0.5 rounded-md border border-[#1D63B8]/40 uppercase tracking-widest mb-1.5 inline-block">
                  {item.tag}
                </span>
              )}
              <h3 className={`font-semibold text-white tracking-wide transition-all duration-300 ${isActive ? "text-lg sm:text-xl" : "text-xs truncate"}`}>
                {item.label}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}