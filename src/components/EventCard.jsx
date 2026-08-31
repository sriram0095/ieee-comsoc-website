import Image from "next/image";

export default function EventCard({ event, onViewDetails }) {
  const isLive = event.status?.toLowerCase() === "live";

  return (
    <div
      onClick={onViewDetails}
      className={`relative flex flex-col bg-white/[0.02] backdrop-blur-md rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 shadow-2xl cursor-pointer ${
        isLive
          ? "border-red-500 shadow-red-500/20"
          : "border-[#1D63B8]/30 hover:border-[#1D63B8]"
      }`}
    >
      {/* Event Poster Header */}
      <div className="relative h-48 w-full bg-slate-950/40 flex items-center justify-center overflow-hidden">
        {event.posterUrl ? (
          <Image
            src={event.posterUrl}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <span className="text-slate-600 text-xs font-semibold">
            NO POSTER AVAILABLE
          </span>
        )}

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          {isLive ? (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white tracking-wide animate-pulse shadow-lg">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              LIVE NOW
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-950/80 backdrop-blur-sm text-cyan-400 border border-cyan-500/30 capitalize">
              {event.category?.replace("-", " ") || "Event"}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs text-cyan-400/80 font-mono mb-2">
          {new Date(event.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}{" "}
          • {event.startTime}
        </div>

        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
          {event.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 mb-4 line-clamp-2 flex-grow leading-relaxed">
          {event.description}
        </p>

        <div className="text-xs text-slate-400 mb-6 pt-3 border-t border-slate-800/80 space-y-1">
          <p className="truncate">
            <span className="text-slate-500 font-semibold">Venue:</span> {event.venue}
          </p>
          <p className="truncate">
            <span className="text-slate-500 font-semibold">Speaker:</span>{" "}
            {event.speaker?.name || "TBA"}
          </p>
        </div>

        {/* CTA Button (Converted to button to prevent routing/404 issues) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation(); // Prevents double-triggering parent div click
            onViewDetails();
          }}
          className={`w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all ${
            isLive
              ? "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/20"
              : "bg-[#1D63B8] hover:bg-[#154c8c] text-white shadow-lg shadow-blue-500/20"
          }`}
        >
          {isLive ? "Join Live Stream" : "View Details"}
        </button>
      </div>
    </div>
  );
}