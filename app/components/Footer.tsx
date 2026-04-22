"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return (
    <footer className="relative w-full overflow-hidden flex flex-col items-center justify-center font-jost pt-20 pb-36 lg:pb-48 px-4 md:px-8 lg:px-12 grid-bg">
      
      {/* Giant Background Watermark Text positioned behind/below */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none z-0">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes aliveGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; opacity: 0.8; }
            100% { background-position: 0% 50%; }
          }
        `}} />
        <span 
          className="text-[25vw] sm:text-[28vw] font-black uppercase leading-none tracking-tighter select-none translate-y-[20%] bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(26, 26, 26, 0.02) 0%, rgba(211, 47, 47, 0.15) 50%, rgba(26, 26, 26, 0.02) 100%)",
            backgroundSize: "200% 200%",
            animation: "aliveGradient 7s ease-in-out infinite"
          }}
        >
          4WARD
        </span>
      </div>

      {/* Floating Footer Card */}
      <div className="relative z-10 w-full max-w-6xl bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-[#1a1a1a]/5">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Left Column: Logo & Description */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-12">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-7 h-7 bg-[#1a1a1a] rounded flex items-center justify-center group-hover:bg-[#d32f2f] transition-colors">
                <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M4.5 12l5.5-5.5 5.5 5.5-5.5 5.5zM14 12l5.5-5.5 4.5 4.5-5.5 5.5z"/>
                </svg>
              </div>
              <span className="text-[17px] font-bold tracking-tight text-[#1a1a1a]">4WARD</span>
            </Link>
            <p className="text-[13px] text-[#1a1a1a]/60 leading-relaxed max-w-sm">
              4WARD helps teams transform complex visions into clear, engaging digital experiences — everything you need in one place.
            </p>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4 text-sm">
              <h3 className="font-bold text-[#1a1a1a] mb-2 tracking-wide">Services</h3>
              <ul className="flex flex-col gap-3 text-[13px] text-[#1a1a1a]/50 font-medium">
                <li><Link href="/services" className="hover:text-[#d32f2f] transition-colors">Branding</Link></li>
                <li><Link href="/services" className="hover:text-[#d32f2f] transition-colors">Video Production</Link></li>
                <li><Link href="/services" className="hover:text-[#d32f2f] transition-colors">3D Animation</Link></li>
                <li><Link href="/services" className="hover:text-[#d32f2f] transition-colors">Software</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 text-sm">
              <h3 className="font-bold text-[#1a1a1a] mb-2 tracking-wide">Portfolio</h3>
              <ul className="flex flex-col gap-3 text-[13px] text-[#1a1a1a]/50 font-medium">
                <li><Link href="/work" className="hover:text-[#d32f2f] transition-colors">Featured Work</Link></li>
                <li><Link href="/minimal" className="hover:text-[#d32f2f] transition-colors">Minimal</Link></li>
                <li><Link href="/pricing" className="hover:text-[#d32f2f] transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-[#d32f2f] transition-colors">Updates</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 text-sm">
              <h3 className="font-bold text-[#1a1a1a] mb-2 tracking-wide">Company</h3>
              <ul className="flex flex-col gap-3 text-[13px] text-[#1a1a1a]/50 font-medium">
                <li><Link href="/team" className="hover:text-[#d32f2f] transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-[#d32f2f] transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-[#d32f2f] transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-[#d32f2f] transition-colors">Partners</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-[#1a1a1a]/5 text-[12px] text-[#1a1a1a]/40 font-medium">
          <p>© 2026 4WARD. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#d32f2f] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#d32f2f] transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
