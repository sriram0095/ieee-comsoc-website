import Link from "next/link";
import Model3D from "@/components/Model3D";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      
      {/* Hero Section with 3D Model */}
      <section className="relative pt-10 lg:pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              IEEE Communications Society
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              CONNECTING IDEAS. <br />
              <span className="text-cyan-400">ENABLING INNOVATION.</span> <br />
              ADVANCING COMMUNICATION.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              Empowering students to explore, innovate, and contribute to the evolving world of modern communication technology, wireless systems, and global connectivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/events"
                className="px-6 py-3 text-sm font-semibold text-[#001529] bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-lg shadow-cyan-500/20 text-center"
              >
                Explore Events
              </Link>
              <Link
                href="/join"
                className="px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all text-center"
              >
                Join Chapter
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Model Embed */}
          <div className="lg:col-span-5 w-full">
            <Model3D />
          </div>

        </div>
      </section>

    </div>
  );
}