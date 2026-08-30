"use client";

import { useState, useEffect } from "react";

export default function TelemetryHUD() {
  const [coords, setCoords] = useState({ lat: "0.0000", lng: "0.0000" });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Bottom-left origin (0,0) coordinate system mapping:
      // X-axis (Longitude): 0 at the left edge, increases to 100.0000 towards the right.
      // Y-axis (Latitude): 0 at the bottom edge, increases to 50.0000 upwards towards the top.
      
      const maxLat = 50.0; 
      const maxLng = 100.0; 

      const xVal = (e.clientX / window.innerWidth) * maxLng;
      const yVal = ((window.innerHeight - e.clientY) / window.innerHeight) * maxLat;

      setCoords({ 
        lat: yVal.toFixed(4), 
        lng: xVal.toFixed(4) 
      });
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
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping absolute opacity-75"></span>
        <span className="w-2 h-2 rounded-full bg-cyan-400 relative"></span>
      </div>

      {/* Lat & Long Coordinates */}
      <span className="text-slate-300">
        LAT: {coords.lat}° N <span className="text-slate-600">|</span> LNG: {coords.lng}° E
      </span>

    </div>
  );
}