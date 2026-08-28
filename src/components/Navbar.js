"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
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
              src="/logo.png" 
              alt="IEEE ComSoc Logo"
              width={140}
              height={40}
              className="h-18 w-auto object-contain select-none pointer-events-none"
              draggable={false}
              priority
            />
          </div>
        </Link>

        {/* Navigation Links with Hover Effects */}
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

        {/* Right CTA Button */}
        <div>
          <Link
            href="/join-us"
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#1D63B8] hover:bg-[#154c8c] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-md shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
          Join Chapter
          </Link>
        </div>

      </div>
    </header>
  );
}