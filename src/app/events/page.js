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
      "A deep dive into next-generation cellular communication systems, beamforming, and ultra-dense networks. Ideal for students looking to understand real-world telecommunication protocols.",
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
      "Understanding free-space optics, fiber capacity scaling, and high-frequency wave propagation in modern data centers.",
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
      "Hands-on demonstration of neural networks applied to channel estimation and dynamic spectrum access in crowded spectrum bands.",
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
  const [selectedEvent, setSelectedEvent] = useState(null);

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
          Explore technical sessions, workshops, expert talks, and live interactive webinars organized by our chapter. Click any card to view full details.
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
            <div key={event._id} onClick={() => setSelectedEvent(event)}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800 max-w-lg mx-auto">
          <p className="text-slate-400 text-sm">
            No events found under the selected state.
          </p>
        </div>
      )}

      {/* DETAILED EVENT POPUP MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div 
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20 uppercase tracking-wider">
                {selectedEvent.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              {selectedEvent.title}
            </h2>

            {/* Quick Meta Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800/80 mb-6 text-xs text-slate-300">
              <div>
                <p className="text-slate-500 uppercase tracking-wider mb-1 font-semibold">Date & Time</p>
                <p className="font-medium text-white">📅 {selectedEvent.date}</p>
                <p className="text-slate-400">⏰ {selectedEvent.startTime} - {selectedEvent.endTime}</p>
              </div>
              <div>
                <p className="text-slate-500 uppercase tracking-wider mb-1 font-semibold">Venue & Speaker</p>
                <p className="font-medium text-white">📍 {selectedEvent.venue}</p>
                <p className="text-slate-400">👤 {selectedEvent.speaker.name} ({selectedEvent.speaker.organization})</p>
              </div>
            </div>

            {/* Full Description */}
            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">About Session</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>

            
            {/* Modal Actions */}
            <div className="flex gap-4 pt-4 border-t border-slate-800 items-center justify-between">
              {selectedEvent.status !== "completed" ? (
                <button
                  onClick={() => alert(`Redirecting to registration for: ${selectedEvent.title}`)}
                  className="flex-1 py-3 bg-[#1D63B8] hover:bg-[#154c8c] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Register Now
                </button>
              ) : (
                <div className="flex-1 py-3 bg-slate-800/50 text-slate-400 text-xs font-semibold uppercase tracking-wider rounded-lg text-center border border-slate-800">
                  ✓ Event Completed
                </div>
              )}
              
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}