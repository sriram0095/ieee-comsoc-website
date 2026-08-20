import Image from "next/image";
import Link from "next/link";

export default function EventCard({ event }) {
  const isLive = event.status === "live";

  return (
    <div
      className={`relative flex flex-col bg-slate-900 rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
        isLive
          ? "border-red-500 shadow-lg shadow-red-500/20"
          : "border-slate-800 hover:border-cyan-500/50"
      }`}
    >
      {/* Event Poster Header */}
      <div className="relative h-48 w-full bg-slate-800 flex items-center justify-center">
        {event.posterUrl ? (
          <Image
            src={event.posterUrl}
            alt={event.title}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-slate-600 text-xs font-semibold">
            NO POSTER AVAILABLE
          </span>
        )}

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          {isLive ? (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white tracking-wide animate-pulse">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              🔴 LIVE NOW
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-950/80 text-cyan-400 border border-cyan-500/30 capitalize">
              {event.category?.replace("-", " ") || "Event"}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs text-slate-400 mb-2">
          {new Date(event.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}{" "}
          • {event.startTime}
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">
          {event.title}
        </h3>

        <p className="text-sm text-slate-300 mb-4 line-clamp-2 flex-grow">
          {event.description}
        </p>

        <div className="text-xs text-slate-400 mb-4 pt-3 border-t border-slate-800">
          <p>
            <span className="text-slate-500">Venue:</span> {event.venue}
          </p>
          <p>
            <span className="text-slate-500">Speaker:</span>{" "}
            {event.speaker?.name || "TBA"}
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href={`/events/${event.slug}`}
          className={`w-full text-center py-2 text-sm font-medium rounded-lg transition-colors ${
            isLive
              ? "bg-red-600 hover:bg-red-500 text-white"
              : "bg-slate-800 hover:bg-cyan-400 hover:text-slate-950 text-slate-200"
          }`}
        >
          {isLive ? "Join Live Stream" : "View Details"}
        </Link>
      </div>
    </div>
  );
}