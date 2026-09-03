"use client";

import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

export default function AutoScrollGallery({ items = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Duplicate the array multiple times to guarantee a seamless, infinite loop track
  const loopItems = [...items, ...items, ...items];

  // Initialize Embla with loop and the AutoScroll plugin
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [
      AutoScroll({
        speed: 1.2,
        stopOnInteraction: false, // Keeps scrolling smoothly after user interaction
        stopOnMouseEnter: true,   // Pauses when user hovers or touches the gallery
      }),
    ]
  );

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Embla Viewport Container */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing py-4" ref={emblaRef}>
        <div className="flex gap-5 touch-pan-y">
          {loopItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              // Added "mr-8" to match "gap-8" and fix the end-of-loop collision issue
              className="relative min-w-[280px] sm:min-w-[360px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-[#1D63B8]/30 bg-white/[0.02] backdrop-blur-md shadow-xl flex-shrink-0 group transition-all duration-300 hover:border-cyan-400 mr-4"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.label || "Gallery image"}
                fill
                sizes="(max-width: 768px) 280px, 360px"
                // Only prioritize the absolute first element to clear Next.js LCP duplication warnings
                priority={index === 0}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020611]/90 via-transparent to-transparent"></div>

              {/* Tag & Label */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col items-start">
                {item.tag && (
                  <span className="text-[10px] font-semibold bg-[#1D63B8]/30 text-cyan-300 px-2 py-0.5 rounded-md border border-[#1D63B8]/40 uppercase tracking-widest mb-1">
                    {item.tag}
                  </span>
                )}
                <h3 className="text-white font-semibold text-sm sm:text-base tracking-wide truncate w-full">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Large-Scale Modal Popup when an Image is Clicked */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl overflow-hidden flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {/* Large Expanded Image Container */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-xl overflow-hidden bg-slate-950 mb-4">
              <Image
                src={selectedImage.image}
                alt={selectedImage.label || "Expanded gallery image"}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="text-center w-full">
              {selectedImage.tag && (
                <span className="text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20 uppercase tracking-wider inline-block mb-2">
                  {selectedImage.tag}
                </span>
              )}
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {selectedImage.label}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}