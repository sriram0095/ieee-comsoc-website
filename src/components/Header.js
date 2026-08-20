"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Resources", href: "/resources" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#001529]/95 backdrop-blur-md border-b border-cyan-500/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wider text-white">
              IEEE <span className="text-cyan-400">ComSoc</span>
            </span>
            <span className="text-xs text-slate-300 tracking-tight">
              Student Branch Chapter
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/join"
            className="px-4 py-2 text-sm font-semibold text-[#001529] bg-cyan-400 hover:bg-cyan-300 rounded-md transition-all"
          >
            Join Us
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#001529] border-b border-cyan-500/20 px-4 pt-2 pb-6 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-200 hover:text-cyan-400 py-1"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}