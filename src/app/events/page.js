"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EventCard from "@/components/EventCard";
import { MOCK_EVENTS } from "@/data/eventsData";

const TABS = [
  { id: "All", label: "All Events" },
  { id: "Live", label: "Live" },
  { id: "Upcoming", label: "Upcoming" },
  { id: "Completed", label: "Completed" },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter events safely
  const filteredEvents = (MOCK_EVENTS || []).filter((event) => {
    if (!event) return false;
    return activeTab === "All" || event.status?.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Chapter <span className="text-[#1D63B8]">Events</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Discover the official programs and gatherings organized by our chapter, bringing together learning, innovation, and industry expertise.
        </p>
      </div>

      {/* Tab Filter */}
      <TabFilter activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-8">
          {filteredEvents.map((event, idx) => (
            <div
              key={event?._id || event?.slug || idx}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md"
            >
              <EventCard event={event} onViewDetails={() => setSelectedEvent(event)} />
            </div>
          ))}
        </div>
      ) : (
        <EmptyState />
      )}

      {/* Details Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}

/* ---------------- Helper Sub-Components ---------------- */

function TabFilter({ activeTab, onTabChange }) {
  return (
    <div className="flex justify-center mb-10">
      <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-[#1D63B8]/30 gap-1 sm:gap-2 shadow-2xl">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
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
  );
}

function EmptyState() {
  return (
    <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800 max-w-lg mx-auto">
      <p className="text-slate-400 text-sm">No events found under the selected state.</p>
    </div>
  );
}

function EventModal({ event, onClose }) {
  const formatDate = (dateString) => {
    if (!dateString) return "Date TBA";
    try {
      return new Date(`${dateString}T00:00:00`).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close event details"
          className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20 uppercase tracking-wider">
            {event.category || "Event"}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 pr-8">
          {event.title}
        </h2>

        {/* Event Meta Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800/80 mb-6 text-xs text-slate-300">
          <div>
            <p className="text-slate-500 uppercase tracking-wider mb-1 font-semibold">Date & Time</p>
            <p className="font-medium text-white">📅 {formatDate(event.date)}</p>
            <p className="text-slate-400">⏰ {event.startTime || "TBA"} - {event.endTime || "TBA"}</p>
          </div>

          <div>
            <p className="text-slate-500 uppercase tracking-wider mb-1 font-semibold">Venue</p>
            <p className="font-medium text-white">📍 {event.venue || "TBA"}</p>
          </div>

          {event.speaker?.name && (
            <div className="sm:col-span-2">
              <p className="text-slate-500 uppercase tracking-wider mb-1 font-semibold">Speaker</p>
              <p className="font-medium text-white">{event.speaker.name}</p>
              <p className="text-slate-400">
                {event.speaker.designation} {event.speaker.organization}
              </p>
            </div>
          )}
        </div>

        {/* About Section */}
        <div className="space-y-3 mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">About Event</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {event.description || "No description available."}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-800">
          {event.status === "Completed" ? (
            <Link
              href={`/gallery#${event.gallerySlug || "inaugural-ceremony"}`}
              className="flex-1 py-3 bg-[#1D63B8] hover:bg-[#154c8c] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-center flex items-center justify-center font-bold"
            >
              View Event Gallery
            </Link>
          ) : (
            <a
              href={event.registrationUrl || "#"}
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-3 bg-[#1D63B8] hover:bg-[#154c8c] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-center flex items-center justify-center font-bold"
            >
              Register Now
            </a>
          )}

          <button
            onClick={onClose}
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors font-bold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}