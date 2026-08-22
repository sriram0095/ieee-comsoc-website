import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
          Become Part of ComSoc
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
          Join the <span className="text-cyan-400">Next Generation</span> of Communication Innovators
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Whether you want to learn wireless technologies, participate in hackathons, or build leadership skills, our chapter is open to all passionate students.
        </p>
      </div>

      {/* Membership Levels / Guidance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Chapter Participation</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Open to all university students! Attend our workshops, seminars, technical sessions, and open project showcases without any formal prerequisites.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-800/80">
            <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
              Free & Open to All Students
            </span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Official IEEE Membership</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Get official membership with IEEE and IEEE Communications Society. Unlock access to IEEE Xplore digital library, conference discounts, and global networking.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-800/80">
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-cyan-400 hover:underline font-semibold"
            >
              Learn about IEEE Student Membership →
            </a>
          </div>
        </div>
      </div>

      {/* Direct Contact / Connect Section */}
      <div className="bg-slate-900/60 border border-cyan-500/30 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-3">Connect With Us to Join</h2>
        <p className="text-slate-300 text-sm mb-8 max-w-xl mx-auto">
          Reach out directly to our team through any of the channels below to get added to our community group, ask questions, or apply for executive volunteer roles.
        </p>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="mailto:comsoc-chapter@university.edu"
            className="flex flex-col items-center p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all"
          >
            <span className="text-xl mb-1">✉️</span>
            <span className="text-sm font-semibold text-white">Email Us</span>
            <span className="text-xs text-slate-400 mt-1">Direct inquiries & roles</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all"
          >
            <span className="text-xl mb-1">💼</span>
            <span className="text-sm font-semibold text-white">LinkedIn</span>
            <span className="text-xs text-slate-400 mt-1">Official updates & networking</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all"
          >
            <span className="text-xl mb-1">📸</span>
            <span className="text-sm font-semibold text-white">Instagram</span>
            <span className="text-xs text-slate-400 mt-1">Event alerts & highlights</span>
          </a>
        </div>
      </div>

    </div>
  );
}