"use client";

import Image from "next/image";

export default function TeamCard({ member }) {
  return (
    <div className="group relative bg-slate-900/80 border border-slate-800 hover:border-[#1D63B8]/60 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10">
      
      {/* Member Photo */}
      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-cyan-500/30 bg-slate-800 flex items-center justify-center">
        {member.photoUrl && member.photoUrl.trim() !== "" ? (
          <Image
            src={member.photoUrl}
            alt={member.name || "Team Member"}
            fill
            sizes="128px"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className="object-cover pointer-events-none select-none"
          />
        ) : (
          <span className="text-slate-400 font-bold text-2xl">
            {member.name ? member.name.charAt(0) : "T"}
          </span>
        )}
      </div>

      {/* Member Info */}
      <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
      <p className="text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wider">{member.role}</p>
      
      {member.department && (
        <p className="text-xs text-slate-400 mb-3">
          {member.department} {member.academicYear ? `• ${member.academicYear}` : ""}
        </p>
      )}

      {member.bio && (
        <p className="text-xs text-slate-300 mb-4 line-clamp-2 leading-relaxed">
          {member.bio}
        </p>
      )}

      {/* Areas of Interest Tags */}
      {member.areasOfInterest && member.areasOfInterest.length > 0 && (
        <div className="flex flex-wrap justify-center gap-1.5 mb-4">
          {member.areasOfInterest.map((area, idx) => (
            <span key={idx} className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full border border-slate-700">
              {area}
            </span>
          ))}
        </div>
      )}

      {/* Social Links */}
      <div className="flex gap-4 mt-auto pt-3 border-t border-slate-800/80 w-full justify-center text-slate-400 text-xs">
        {member.socials?.linkedin && (
          <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
            LinkedIn
          </a>
        )}
        {member.socials?.github && (
          <a href={member.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
            GitHub
          </a>
        )}
        {member.socials?.email && (
          <a href={`mailto:${member.socials.email}`} className="hover:text-cyan-400 transition-colors">
            Email
          </a>
        )}
      </div>

    </div>
  );
}