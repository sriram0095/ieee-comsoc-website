"use client";

import { useState } from "react";
import Image from "next/image";

export default function CustomMarqueeGallery({ items = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!items || items.length === 0) return null;

  // Tripling the array creates a seamless infinite track width
  const loopItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden relative py-4">
      {/* Pure CSS Animation Styles (No external packages required) */}
      <style jsx>{`
        @keyframes scrollMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scrollMarquee 60s linear infinite;  //adjustable speed
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Scrolling Marquee Track */}
      <div className="marquee-track flex gap-6">
        {loopItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(item)}
            className="relative min-w-[280px] sm:min-w-[360px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-[#1D63B8]/30 bg-white/[0.02] backdrop-blur-md shadow-xl flex-shrink-0 cursor-pointer group/card transition-all duration-300 hover:border-cyan-400"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.label || "Gallery image"}
              fill
              sizes="(max-width: 768px) 280px, 360px"
              priority={index === 0}
              className="object-cover transition-transform duration-500 group-hover/card:scale-105"
            />

            {/* Gradient Overlay (Only rendered if label or tag exists) */}
            {(item.label || item.tag) && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#020611]/90 via-transparent to-transparent"></div>
            )}

            {/* Tag & Label (Optional) */}
            {(item.label || item.tag) && (
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col items-start">
                {item.tag && (
                  <span className="text-[10px] font-semibold bg-[#1D63B8]/30 text-cyan-300 px-2 py-0.5 rounded-md border border-[#1D63B8]/40 uppercase tracking-widest mb-1">
                    {item.tag}
                  </span>
                )}
                {item.label && (
                  <h3 className="text-white font-semibold text-sm sm:text-base tracking-wide truncate w-full">
                    {item.label}
                  </h3>
                )}
              </div>
            )}
          </div>
        ))}
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

            {/* Modal Caption (Optional) */}
            {(selectedImage.label || selectedImage.tag) && (
              <div className="text-center w-full">
                {selectedImage.tag && (
                  <span className="text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20 uppercase tracking-wider inline-block mb-2">
                    {selectedImage.tag}
                  </span>
                )}
                {selectedImage.label && (
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {selectedImage.label}
                  </h2>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}