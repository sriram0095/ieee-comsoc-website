"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";

// Mock data array to verify UI tabs before connecting MongoDB
const MOCK_EVENTS = [
  {
    _id: "1",
    slug: "5g-6g-wireless-architecture-workshop",
    title: "Workshop on 5G & 6G Wireless Architecture",
    description:
      "A deep dive into next-generation cellular communication systems, beamforming, and ultra-dense networks.",
    category: "workshop",
    date: "2026-09-15",
    startTime: "10:00 AM",
    endTime: "01:00 PM",
    venue: "Main Campus Auditorium / Online",
    speaker: {
      name: "Dr. Aris Thorne",
      designation: "Senior Researcher",
      organization: "Ericsson Research",
    },
    posterUrl: "",
    status: "upcoming",
  },
  {
    _id: "2",
    slug: "optical-communication-tech-talk",
    title: "Expert Talk: Optical & Terahertz Communications",
    description:
      "Understanding free-space optics, fiber capacity scaling, and high-frequency wave propagation.",
    category: "expert-talk",
    date: "2026-08-20",
    startTime: "03:00 PM",
    endTime: "05:00 PM",
    venue: "Virtual Keynote Room",
    speaker: {
      name: "Prof. Elena Rostova",
      designation: "Head of Photonics Lab",
      organization: "IEEE ComSoc Distinguished Lecturer",
    },
    posterUrl: "",
    status: "live",
  },
  {
    _id: "3",
    slug: "ai-for-signal-processing-seminar",
    title: "Seminar: AI Applications in Signal Processing",
    description:
      "Hands-on demonstration of neural networks applied to channel estimation and dynamic spectrum access.",
    category: "seminar",
    date: "2026-07-10",
    startTime: "02:00 PM",
    endTime: "04:30 PM",
    venue: "EC Seminar Hall",
    speaker: {
      name: "Karan Mehta",
      designation: "Lead AI Engineer",
      organization: "Qualcomm",
    },
    posterUrl: "",
    status: "completed",
  },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("all");

  // Filter events based on selected tab state
  const filteredEvents = MOCK_EVENTS.filter((event) => {
    if (activeTab === "all") return true;
    return event.status === activeTab;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Chapter <span className="text-cyan-400">Events</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Explore technical sessions, workshops, expert talks, and live interactive webinars organized by our chapter.
        </p>
      </div>

      {/* Tab Filter Controls */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 gap-1 sm:gap-2">
          {[
            { id: "all", label: "All Events" },
            { id: "live", label: "Live" },
            { id: "upcoming", label: "Upcoming" },
            { id: "completed", label: "Completed" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  isActive
                    ? "bg-cyan-400 text-[#001529] shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800 max-w-lg mx-auto">
          <p className="text-slate-400 text-sm">
            No events found under the selected state.
          </p>
        </div>
      )}
    </div>
  );
}