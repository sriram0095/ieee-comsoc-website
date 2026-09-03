"use client";

import SimpleGallery from "@/components/SimpleGallery";

// Group your galleries by event sections
const EVENT_GALLERIES = [
  {
    eventTitle: "Inaugural Ceremony 2026",
    eventDate: "July 22, 2026",
    items: [
      {
        image: "/Inaugural.png",
        label: "Ribbon Cutting & Lamp Lighting",
        tag: "Milestone",
      },
      {
        image: "/Inaugural.png",
        label: "Ribbon Cutting & Lamp Lighting",
        tag: "Milestone",
      },
      {
        image: "/Inaugural.png",
        label: "Keynote Address by Dr. V. Jayaprakasan",
        tag: "Expert Talk",
      },
      {
        image: "/Inaugural.png",
        label: "Student & Faculty Networking",
        tag: "Community",
      },
      {
        image: "/Inaugural.png",
        label: "Technical Showcase Display",
        tag: "Exhibition",
      },
    ],
  },
  // You can easily add more event sections here later as you host more events!
  
];

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D63B8]/10 border border-[#1D63B8]/30 text-[#1D63B8] text-xs font-semibold mb-4">
   Chapter Memories & Moments
</div>
       
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Visual <span className="text-[#1D63B8]">Gallery</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Explore highlights from our chapter's events. Click any photo to view it in high resolution.
        </p>
      </div>

      {/* Render Event Sections */}
      <div className="space-y-16">
        {EVENT_GALLERIES.map((section, idx) => (
          <section key={idx} className="space-y-6">
            
            {/* Section Title Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-800 pb-4 gap-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  {section.eventTitle}
                </h2>
              </div>
              <span className="text-xs font-mono text-cyan-400/80">
                {section.eventDate}
              </span>
            </div>

            {/* Clean Grid Gallery for this Event */}
            <SimpleGallery items={section.items} />
            
          </section>
        ))}
      </div>

    </div>
  );
}