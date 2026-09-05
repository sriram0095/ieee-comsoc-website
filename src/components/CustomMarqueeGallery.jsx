"use client";

import { useRef } from "react";
import Image from "next/image";

export default function CustomMarqueeGallery({ items = [] }) {
  const trackRef = useRef(null);

  if (!items || items.length === 0) return null;

  // Tripling the array creates a seamless infinite track
  const loopItems = [...items, ...items, ...items];

  // Endless boundary reset handler for manual scrolling
  const handleScroll = () => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const oneSetWidth = container.scrollWidth / 3;

    if (container.scrollLeft >= oneSetWidth * 2) {
      container.scrollLeft -= oneSetWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += oneSetWidth;
    }
  };

  // Button manual scroll controls
  const scroll = (direction) => {
    if (!trackRef.current) return;
    const scrollAmount = 380;
    trackRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div 
      className="w-full relative py-4 select-none group/gallery"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes scrollMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .marquee-auto-track {
          display: flex;
          width: max-content;
          animation: scrollMarquee 50s linear infinite;
        }
        .marquee-container:hover .marquee-auto-track,
        .nav-arrow-btn:hover ~ .marquee-container .marquee-auto-track,
        .group\/gallery:hover .marquee-auto-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Navigation Arrow Buttons */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="nav-arrow-btn absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/80 border border-[#1D63B8]/40 text-cyan-400 flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity backdrop-blur-md hover:bg-[#1D63B8] hover:text-white shadow-lg active:scale-95"
      >
        ❮
      </button>

      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="nav-arrow-btn absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/80 border border-[#1D63B8]/40 text-cyan-400 flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity backdrop-blur-md hover:bg-[#1D63B8] hover:text-white shadow-lg active:scale-95"
      >
        ❯
      </button>

      {/* Outer Scroll Container */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="marquee-container overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Inner Auto-Scrolling Marquee Track */}
        <div className="marquee-auto-track flex gap-6">
          {loopItems.map((item, index) => (
            <div
              key={index}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              className="relative min-w-[280px] sm:min-w-[360px] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-[#1D63B8]/30 bg-white/[0.02] backdrop-blur-md shadow-xl flex-shrink-0 group/card transition-all duration-300 hover:border-cyan-400 no-save"
            >
              <Image
                src={item.image}
                alt={item.label || "Gallery image"}
                fill
                sizes="(max-width: 768px) 280px, 360px"
                priority={index === 0}
                draggable={false}
                className="object-cover transition-transform duration-500 group-hover/card:scale-105 select-none"
              />

              {/* Invisible Shield Overlay to prevent direct right-click or drag */}
              <div 
                className="absolute inset-0 z-10 bg-transparent" 
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />

              {(item.label || item.tag) && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#020611]/90 via-transparent to-transparent pointer-events-none" />
              )}

              {(item.label || item.tag) && (
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col items-start pointer-events-none">
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
      </div>
    </div>
  );
}