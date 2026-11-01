import TeamCard from "@/components/TeamCard";
import { FACULTY_LEADERSHIP, CORE_TEAM, EXECUTIVE_COMMITTEE } from "@/data/teamData";

// Fallback arrays to prevent crashes if external arrays are undefined
const SAFE_CORE_TEAM = typeof CORE_TEAM !== "undefined" && Array.isArray(CORE_TEAM) ? CORE_TEAM : [];
const SAFE_EXEC_COMMITTEE = typeof EXECUTIVE_COMMITTEE !== "undefined" && Array.isArray(EXECUTIVE_COMMITTEE) ? EXECUTIVE_COMMITTEE : [];

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D63B8]/10 border border-[#1D63B8]/30 text-[#1D63B8] text-xs font-semibold mb-4">
          IEEE Student Branch - STB60237593
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Chapter <span className="text-[#1D63B8]">Leadership</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Meet the faculty advisors, core student leaders, and executive committee members driving our chapter forward.
        </p>
      </div>

      {/* Section 1: Faculty Leadership */}
      {Array.isArray(FACULTY_LEADERSHIP) && FACULTY_LEADERSHIP.length > 0 && (
        <section className="mb-20">
          <h2 className="text-xl font-bold text-white mb-8 text-center border-b border-slate-800 pb-4">
            Faculty Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {FACULTY_LEADERSHIP.map((member, idx) => (
              <TeamCard key={member?.id || member?.name || idx} member={member} />
            ))}
          </div>
        </section>
      )}

      {/* Section 2: Core Team */}
      {SAFE_CORE_TEAM.length > 0 && (
        <section className="mb-20">
          <h2 className="text-xl font-bold text-white mb-8 text-center border-b border-slate-800 pb-4">
            Core Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAFE_CORE_TEAM.map((member, idx) => (
              <TeamCard key={member?.id || member?.name || idx} member={member} />
            ))}
          </div>
        </section>
      )}

      {/* Section 3: Executive Committee */}
      {SAFE_EXEC_COMMITTEE.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-white mb-8 text-center border-b border-slate-800 pb-4">
            Executive Committee
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAFE_EXEC_COMMITTEE.map((member, idx) => (
              <TeamCard key={member?.id || member?.name || idx} member={member} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}