"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";

const MOCK_EVENTS = [
  {
    _id: "1",
    slug: "ieee-comsoc-sbc-gnu-inaugural-function",
    title: "Inauguration of IEEE Communications Society (ComSoc)",
    description:
      "The inaugural function of the IEEE Communications Society (ComSoc) Student Branch Chapter at Guru Nanak University marked the establishment of the university's first IEEE Society Chapter. The event brought together IEEE leaders, faculty members, student representatives, and aspiring engineers to launch a platform focused on technical learning, research, innovation, leadership, and professional development.",
    category: "Inauguration",
    date: "2026-07-22",
    startTime: "10:30 AM",
    endTime: "01:00 PM",
    venue: "Guru Gobind Singh Auditorium, Guru Nanak University, Hyderabad",
    speaker: {
      name: "Dr. V. Jayaprakasan",
      designation: "Chair, IEEE ComSoc Hyderabad Section",
      organization: "IEEE Communications Society",
    },
    posterUrl: "/Inaugural.png",
    status: "Completed",
  },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = MOCK_EVENTS.filter((event) => {
    if (activeTab === "All") return true;
    return event.status.toLowerCase() === activeTab.toLowerCase();
  });

  const formatDate = (dateString) => {
    const date = new Date(`${dateString}T00:00:00`);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Chapter <span className="text-cyan-400">Events</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Explore technical sessions, workshops, expert talks, and interactive
          events organized by our chapter. Click any card to view full details.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex flex-wrap justify-center p-1.5 rounded-xl bg-slate-900 border border-slate-800 gap-1 sm:gap-2">
          {[
            { id: "All", label: "All Events" },
            { id: "Live", label: "Live" },
            { id: "Upcoming", label: "Upcoming" },
            { id: "Completed", label: "Completed" },
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

      {filteredEvents.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event._id}
              onClick={() => setSelectedEvent(event)}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md cursor-pointer"
            >
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

      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              aria-label="Close event details"
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="mb-4">
              <span className="text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20 uppercase tracking-wider">
                {selectedEvent.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 pr-8">
              {selectedEvent.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800/80 mb-6 text-xs text-slate-300">
              <div>
                <p className="text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                  Date & Time
                </p>
                <p className="font-medium text-white">
                  📅 {formatDate(selectedEvent.date)}
                </p>
                <p className="text-slate-400">
                  ⏰ {selectedEvent.startTime} - {selectedEvent.endTime}
                </p>
              </div>

              <div>
                <p className="text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                  Venue
                </p>
                <p className="font-medium text-white">
                  📍 {selectedEvent.venue}
                </p>
              </div>

              <div className="sm:col-span-2">
                <p className="text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                  Speaker
                </p>
                <p className="font-medium text-white">
                  👤 {selectedEvent.speaker.name}
                </p>
                <p className="text-slate-400">
                  {selectedEvent.speaker.designation},{" "}
                  {selectedEvent.speaker.organization}
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                About Event
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-800">
              {selectedEvent.status === "Completed" ? (
                <div className="flex-1 py-3 bg-slate-800/50 text-slate-400 text-xs font-semibold uppercase tracking-wider rounded-lg text-center border border-slate-800">
                  ✓ Event Completed
                </div>
              ) : (
                <button
                  onClick={() =>
                    alert(
                      `Redirecting to registration for: ${selectedEvent.title}`
                    )
                  }
                  className="flex-1 py-3 bg-[#1D63B8] hover:bg-[#154c8c] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Register Now
                </button>
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