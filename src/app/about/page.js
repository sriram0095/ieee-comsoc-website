import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* 1. Chapter Introduction Section */}
      <section className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D63B8]/10 border border-[#1D63B8]/30 text-blue-400 text-xs font-semibold mb-4">
          About Our Chapter
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Pioneering the Future of <span className="text-[#1D63B8]">Communications</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Welcome to the official IEEE Communications Society (ComSoc) Student Chapter. We are a dynamic community of tech enthusiasts, researchers, and future engineers dedicated to exploring, innovating, and shaping the world of modern networking and communication technologies.
        </p>
      </section>

      {/* 2. IEEE & ComSoc Relationship */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="bg-white/[0.02] backdrop-blur-md border border-[#1D63B8]/30 p-8 rounded-2xl flex flex-col justify-between shadow-2xl hover:border-[#1D63B8] transition-all">
    <div>
      <div className="text-2xl mb-3">🌐</div>
      <h2 className="text-xl font-bold text-white mb-3">The IEEE Legacy</h2>
      <p className="text-slate-300 text-sm leading-relaxed">
        As part of IEEE—the world's largest technical professional organization—our chapter connects students to a vast global network of innovators, cutting-edge research, and professional growth standards that span across 160 countries.
      </p>
    </div>
    <div className="mt-6 pt-4 border-t border-slate-800/80">
      <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Global Technical Network</span>
    </div>
  </div>

  <div className="bg-white/[0.02] backdrop-blur-md border border-[#1D63B8]/30 p-8 rounded-2xl flex flex-col justify-between shadow-2xl hover:border-[#1D63B8] transition-all">
    <div>
      <div className="text-2xl mb-3">📡</div>
      <h2 className="text-xl font-bold text-white mb-3">IEEE ComSoc Society</h2>
      <p className="text-slate-300 text-sm leading-relaxed">
        The IEEE Communications Society promotes the advancement of science, technology, and applications in communications and networking. Our student branch acts as a local catalyst for these global technological breakthroughs.
      </p>
    </div>
    <div className="mt-6 pt-4 border-t border-slate-800/80">
      <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Communications Excellence</span>
    </div>
  </div>
</section>

      {/* 3. Vision & Mission Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="bg-white/[0.02] backdrop-blur-md border border-[#1D63B8]/30 p-8 rounded-2xl relative overflow-hidden shadow-2xl hover:border-[#1D63B8] transition-all">
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#1D63B8]/10 rounded-full blur-2xl pointer-events-none"></div>
    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
      <span className="text-[#1D63B8]"></span> Our Vision
    </h2>
    <p className="text-slate-300 text-sm leading-relaxed">
      To be a leading student-driven technical hub that empowers members with world-class proficiency in telecommunications, wireless networks, and emerging digital infrastructure, fostering solutions for a hyper-connected world.
    </p>
  </div>

  <div className="bg-white/[0.02] backdrop-blur-md border border-[#1D63B8]/30 p-8 rounded-2xl relative overflow-hidden shadow-2xl hover:border-[#1D63B8] transition-all">
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#1D63B8]/10 rounded-full blur-2xl pointer-events-none"></div>
    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
      <span className="text-[#1D63B8]"></span> Our Mission
    </h2>
    <p className="text-slate-300 text-sm leading-relaxed">
      To bridge the gap between academic theory and industry practice through hands-on workshops, expert keynotes, collaborative projects, and mentorship programs that cultivate ethical and visionary engineering leaders.
    </p>
  </div>
</section>

      {/* 4. Core Objectives */}
      <section className="bg-white/[0.02] backdrop-blur-md border border-[#1D63B8]/30 p-8 sm:p-12 rounded-2xl shadow-2xl">
  <div className="text-center max-w-2xl mx-auto mb-10">
    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Core Objectives</h2>
    <p className="text-slate-400 text-sm">The primary goals driving our chapter initiatives forward.</p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    <div className="p-6 bg-slate-950/40 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-[#1D63B8]/50 transition-all">
      <h3 className="text-white font-semibold text-base mb-2">Technical Skill Building</h3>
      <p className="text-slate-400 text-xs leading-relaxed">Conducting rigorous training sessions on networking software, simulation tools, and hardware architectures.</p>
    </div>
    <div className="p-6 bg-slate-950/40 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-[#1D63B8]/50 transition-all">
      <h3 className="text-white font-semibold text-base mb-2">Industry Interaction</h3>
      <p className="text-slate-400 text-xs leading-relaxed">Connecting students with leading researchers, corporate engineers, and IEEE distinguished lecturers.</p>
    </div>
    <div className="p-6 bg-slate-950/40 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-[#1D63B8]/50 transition-all">
      <h3 className="text-white font-semibold text-base mb-2">Collaborative Research</h3>
      <p className="text-slate-400 text-xs leading-relaxed">Encouraging student paper publications, open-source group projects, and tech innovation challenges.</p>
    </div>
  </div>
</section>

      {/* 5. What We Do & Areas of Interest */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">What We Do</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            We organize a diverse calendar of events ranging from foundational coding bootcamps and advanced simulation workshops to national symposiums, hackathons, and industrial site visits. Every initiative is structured to cultivate practical competence.
          </p>
          <Link
            href="/events"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-white bg-[#1D63B8] hover:bg-[#154c8c] px-5 py-3 rounded-lg shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5"
          >
            Explore Our Events →
          </Link>
        </div>

        <div className="bg-white/[0.02] backdrop-blur-md border border-[#1D63B8]/30 p-8 rounded-2xl shadow-2xl hover:border-[#1D63B8] transition-all">
  <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider text-xs text-blue-400">
    Key Areas of Interest
  </h3>
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
    <li className="flex items-center gap-2">✓ 5G & 6G Wireless Networks</li>
    <li className="flex items-center gap-2">✓ Optical & Terahertz Communications</li>
    <li className="flex items-center gap-2">✓ AI in Signal Processing</li>
    <li className="flex items-center gap-2">✓ IoT & Smart Grid Systems</li>
    <li className="flex items-center gap-2">✓ Software-Defined Networking (SDN)</li>
    <li className="flex items-center gap-2">✓ Antenna Design & RF Engineering</li>
  </ul>
</div>
      </section>

    </div>
  );
}