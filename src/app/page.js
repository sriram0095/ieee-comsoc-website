import Link from "next/link";
import Model3D from "@/components/Model3D";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Title & CTA */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D63B8]/10 border border-[#1D63B8]/30 text-blue-400 text-xs font-semibold">
            IEEE Communications Society Student Branch Chapter
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Advancing Technology for a <span className="text-[#1D63B8]">Connected World</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Empowering the next generation of engineers with hands-on expertise in wireless communications, 5G/6G architectures, and advanced networking systems.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              href="/events"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1D63B8] hover:bg-[#154c8c] rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5"
            >
              Explore Events
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white rounded-xl transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Column: 3D Model Embed */}
        <div className="lg:col-span-5 w-full">
          <Model3D />
        </div>

      </section>

      {/* What We Offer Section */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            What We <span className="text-[#1D63B8]">Offer</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Discover the pathways and platforms we provide to bridge academic concepts with real-world industry experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-[#1D63B8]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#1D63B8]/10 border border-[#1D63B8]/30 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
              📡
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Technical Workshops</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Gain practical, hands-on experience with hardware simulators, software-defined radios, antenna prototyping, and next-gen wireless standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-[#1D63B8]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#1D63B8]/10 border border-[#1D63B8]/30 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
              🎤
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Expert Talks & Webinars</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Interact directly with IEEE Distinguished Lecturers, industry researchers, and senior professionals leading telecom innovations globally.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-[#1D63B8]/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#1D63B8]/10 border border-[#1D63B8]/30 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
              🚀
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Research & Hackathons</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Collaborate on peer groups, participate in networking hackathons, and receive mentorship for technical paper writing and publications.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}