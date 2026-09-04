"use client";

import { useState } from "react";
import Link from "next/link";
import EventCard from "@/components/EventCard";

const MOCK_EVENTS = [
  {
    _id: "1",
    slug: "ieee-comsoc-sbc-gnu-inaugural-function",
    gallerySlug: "inaugural-ceremony",
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
  {
    _id: "2",
    slug: "ieee-comsoc-sbc-gnu-robotics-workshop",
    gallerySlug: "robotics-workshop",
    title: "Robotics Workshop - Techfest IIT Bombay x FUNT Robotics x IEEE ComSoc",
    description:
      "The Robotics Workshop, organized by the IEEE Communications Society (ComSoc) Student Branch Chapter at Guru Nanak University in collaboration with Techfest, IIT Bombay, and Funt Robotics Academy, provides students with an introduction to robotics, automation, and innovation. The workshop focuses on bot design, Arduino basics, and robotic challenges including Roboreach, Mesmerize, and Thetasift, helping aspiring engineers strengthen their technical knowledge, problem-solving abilities, and teamwork skills.",
    category: "Workshop",
    date: "2026-09-07",
    startTime: "12:30 PM",
    endTime: "04:00 PM",
    venue: "Guru Gobind Singh Auditorium, Guru Nanak University, Hyderabad",
    speaker: {},
    posterUrl: "/Techfest.jpeg",
    status: "Upcoming",
    registrationUrl: "https://forms.gle/kdQe8aKnF8KKrcwu6",
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
          Chapter <span className="text-[#1D63B8]">Events</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Explore technical sessions, workshops, expert talks, and interactive
          events organized by our chapter. Click any card to view full details.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-[#1D63B8]/30 gap-1 sm:gap-2 shadow-2xl">
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
                className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                  isActive
                    ? "bg-[#1D63B8] text-white shadow-lg shadow-blue-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
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
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md"
            >
              <EventCard 
                event={event} 
                onViewDetails={() => setSelectedEvent(event)} 
              />
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

              {selectedEvent.speaker?.name && (
                <div className="sm:col-span-2">
                  <p className="text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                    Speaker
                  </p>
                  <p className="font-medium text-white">
                    {selectedEvent.speaker.name}
                  </p>
                  <p className="text-slate-400">
                    {selectedEvent.speaker.designation}{" "}
                    {selectedEvent.speaker.organization}
                  </p>
                </div>
              )}
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
                <Link
                  href={`/gallery#${selectedEvent.gallerySlug || "inaugural-ceremony"}`}
                  className="flex-1 py-3 bg-[#1D63B8] hover:bg-[#154c8c] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-center flex items-center justify-center font-bold"
                >
                  View Event Gallery
                </Link>
              ) : (
                <a
                  href={selectedEvent.registrationUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 bg-[#1D63B8] hover:bg-[#154c8c] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-center flex items-center justify-center font-bold"
                >
                  Register Now 
                </a>
              )}

              <button
                onClick={() => setSelectedEvent(null)}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors font-bold"
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