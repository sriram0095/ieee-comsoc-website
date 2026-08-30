"use client";

import { useState, useEffect } from "react";

export default function TelemetryHUD() {
  const [coords, setCoords] = useState({ lat: "42.8591", lng: "118.4204" });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const baseLat = 12.0000;
      const baseLng = 78.0000;
      
      const dynamicLat = (baseLat + (e.clientY / window.innerHeight) * 45.0).toFixed(4);
      const dynamicLng = (baseLng + (e.clientX / window.innerWidth) * 120.0).toFixed(4);
      
      setCoords({ lat: dynamicLat, lng: dynamicLng });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-md bg-slate-950/60 backdrop-blur-md border border-cyan-500/30 text-cyan-400 font-mono text-[11px] tracking-wider shadow-lg shadow-cyan-950/50 select-none">
      
      {/* Pulsing Status Dot */}
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping absolute opacity-100"></span>
        <span className="w-2 h-2 rounded-full bg-cyan-400 relative"></span>
      </div>

      {/* Lat & Long Coordinates */}
      <span className="text-slate-300">
        LAT: {coords.lat}° N <span className="text-slate-600">|</span> LNG: {coords.lng}° E
      </span>

    </div>
  );
}