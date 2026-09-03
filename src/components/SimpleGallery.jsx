"use client";

import { useState } from "react";
import Image from "next/image";

export default function SimpleGallery({ items = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  if (!items || items.length === 0) return null;

  // Set the initial limit to show 1 row (4 items)
  const displayLimit = 4;
  const hasMore = items.length > displayLimit;
  const visibleItems = isExpanded ? items : items.slice(0, displayLimit);

  return (
    <div className="w-full">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(item)}
            className="relative h-[240px] rounded-2xl overflow-hidden border border-[#1D63B8]/30 bg-white/[0.02] backdrop-blur-md shadow-xl cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.label || "Gallery image"}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              priority={index < 4}
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
              <h3 className="text-white font-semibold text-sm tracking-wide truncate w-full">
                {item.label}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* See More / Show Less Button */}
      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300"
          >
            {isExpanded ? "Show Less" : "See More"}
          </button>
        </div>
      )}

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