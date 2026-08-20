import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000d1a] border-t border-slate-800 text-slate-400 text-sm py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="font-bold text-white text-base">IEEE ComSoc Chapter</span>
          <p className="text-xs text-slate-400 mt-2">Advancing Communication Technology.</p>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-2 text-xs uppercase">Quick Links</h5>
          <div className="flex flex-col gap-1 text-xs">
            <Link href="/about" className="hover:text-cyan-400">About Us</Link>
            <Link href="/events" className="hover:text-cyan-400">Events</Link>
            <Link href="/team" className="hover:text-cyan-400">Team</Link>
          </div>
        </div>
        <div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} IEEE ComSoc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}