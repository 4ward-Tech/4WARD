import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function MinimalPage() {
  return (
    <div className={`${playfair.variable} min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black overflow-hidden relative`}>
      {/* Background Texture/Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      {/* Navigation */}
      <nav className="absolute top-0 w-full p-8 md:p-12 flex justify-between items-start z-50">
        <div className="text-2xl font-light tracking-tighter">
          <span className="opacity-50">/</span>
          <span className="opacity-100 italic">4W</span>
        </div>

        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">
          <Link href="#" className="hover:opacity-100 transition-opacity">About</Link>
          <Link href="#" className="hover:opacity-100 transition-opacity">Sponsors</Link>
          <Link href="#" className="hover:opacity-100 transition-opacity">Magazine</Link>
          <Link href="#" className="hover:opacity-100 transition-opacity">Contact</Link>
        </div>

        <div className="flex gap-4 items-center">
          <button className="opacity-60 hover:opacity-100 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="opacity-60 hover:opacity-100 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Side Labels */}
      <div className="absolute left-8 bottom-1/2 translate-y-1/2 flex flex-col gap-12 z-20">
        <div className="rotate-[-90deg] origin-left text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 whitespace-nowrap">
          Twitter / Instagram
        </div>
      </div>

      <div className="absolute right-8 bottom-1/2 translate-y-1/2 flex flex-col gap-12 z-20">
        <div className="rotate-[90deg] origin-right text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 whitespace-nowrap">
          01 <span className="mx-2">/</span> 05
        </div>
      </div>

      {/* Main Content Container */}
      <main className="relative h-screen w-full flex items-center justify-center p-4">

        {/* Central Figure Image */}
        <div className="relative w-full max-w-5xl aspect-[4/5] md:aspect-[16/10] flex items-center justify-center group">
          <div className="relative w-full h-full max-w-2xl overflow-hidden grayscale brightness-75 contrast-125 transition-all duration-1000 group-hover:brightness-100 group-hover:scale-[1.05] shadow-[0_0_100px_rgba(0,0,0,1)]">
            <Image
              src="https://images.unsplash.com/photo-1515281239448-2aba811f0d54?q=80&w=2670&auto=format&fit=crop"
              alt="Artistic Figure"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Gold Framed Box Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-[60%] w-40 h-72 border-[0.5px] border-[#c5a059] z-30 pointer-events-none mix-blend-overlay opacity-80 backdrop-blur-[1px]"></div>

          {/* Main Typography */}
          <div className="absolute left-[50%] md:left-[55%] top-[55%] md:top-1/2 -translate-y-1/2 z-40 mix-blend-difference">
            <h1 className="flex flex-col">
              <span className="font-playfair text-7xl md:text-[9rem] leading-none tracking-tighter font-extralight text-white">
                Minimalis
              </span>
              <span className="flex items-center gap-6 -mt-2 md:-mt-8">
                <span className="w-12 md:w-24 h-[1px] bg-white text-white"></span>
                <span className="font-sans text-5xl md:text-8xl font-extralight tracking-tighter opacity-90 italic">
                  simo
                </span>
              </span>
            </h1>

            <p className="mt-8 max-w-[280px] text-[10px] md:text-xs leading-relaxed tracking-[0.2em] opacity-50 uppercase font-medium">
              We aim to deliver a <span className="underline underline-offset-4 decoration-white/30 text-white opacity-100">diverse understanding</span> of minimalism in many areas.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Info */}
      <div className="absolute bottom-0 w-full p-8 md:p-12 flex flex-wrap justify-between items-end z-50">
        <div className="flex gap-24">
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">Office</h3>
            <p className="text-[11px] leading-relaxed opacity-60 font-medium">
              Sandekra 240<br />
              1398 Billingstad
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">Get in Touch</h3>
            <div className="flex flex-col gap-1 text-[11px] opacity-60 font-medium">
              <span>T. +0085 3456 2188</span>
              <span>E. info@4ward.com</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-12">
          <div className="flex gap-6 items-center">
            <button className="group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:border-white/40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </div>
            </button>
            <button className="group">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:border-white/40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </button>
          </div>

          <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center relative group">
            <div className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-0 group-hover:opacity-20"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
