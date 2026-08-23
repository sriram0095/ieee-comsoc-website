import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          
          {/* Column 1: Brand & Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-extrabold text-white tracking-wider">
                IEEE <span className="text-[#1D63B8]">ComSoc</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Advancing Communication Technology and empowering students to pioneer developments in global networking and wireless systems.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Events", href: "/events" },
                { name: "Team", href: "/team" },
                { name: "Join Us", href: "/join-us" }, // Or point to wherever your join page/section lives
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>comsoc-chapter@university.edu</li>
              <li>+91 98765 43210</li>
              <li>Department of ECE, Campus Name</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} IEEE ComSoc Student Branch Chapter GNU. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}