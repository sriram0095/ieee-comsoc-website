"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Join Us", href: "/join-us" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#020611]/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Secured Logo / Brand Link */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group select-none"
        >
          {/* Protective Wrapper preventing right-click and dragging */}
          <div 
            className="relative flex items-center select-none"
            onContextMenu={(e) => e.preventDefault()}
          >
            <Image
              src="/logo4.png" 
              alt="IEEE ComSoc Logo"
              width={140}
              height={40}
              className="h-18 w-auto object-contain select-none pointer-events-none"
              draggable={false}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links with Hover Effects */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group ${
                  isActive
                    ? "text-blue-400 bg-slate-800/50"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {link.name}
                {/* Subtle bottom glowing indicator line on hover */}
                <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#1D63B8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/join-us"
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#1D63B8] hover:bg-[#154c8c] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-md shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Join Chapter
          </Link>

          {/* Mobile Menu Hamburger Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="md:hidden text-slate-300 hover:text-white focus:outline-none p-2 rounded-lg bg-slate-800/50 border border-slate-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu (Only visible on mobile screens when toggled open) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#020611]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 flex flex-col gap-3 shadow-2xl transition-all">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Automatically close menu upon clicking a link
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? "text-blue-400 bg-slate-800/60"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}