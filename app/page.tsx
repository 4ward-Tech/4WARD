import Image from "next/image";
import Services from "./components/Services";
import FeaturedProjects from "./components/FeaturedProjects";
import ProcessWorkflow from "./components/ProcessWorkflow";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#f8f8f8] grid-bg font-jost text-[#1a1a1a] overflow-x-hidden">
      <div className="relative z-10 py-12 pr-12 pl-20 md:py-24 md:pr-24 md:pl-40 min-h-screen flex flex-col justify-between">
        {/* Background Red Accents (SVGs) - Moved inside hero container */}
        <div className="absolute top-[20%] right-[15%] w-[400px] animate-fade-in delay-final wait-for-animation pointer-events-none z-0">
          <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* The main pen tool curve from the design */}
            <path d="M50 200C100 100 250 50 350 150C380 180 340 250 300 150C280 100 320 50 380 20" stroke="#d32f2f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Nodes on the path */}
            <circle cx="50" cy="200" r="3" fill="#d32f2f" />
            <circle cx="175" cy="125" r="3" fill="#d32f2f" />
            <circle cx="350" cy="150" r="3" fill="#d32f2f" />
            <circle cx="380" cy="20" r="3" fill="#d32f2f" />

            {/* Construction lines */}
            <path d="M30 220L70 180" stroke="#d32f2f" strokeWidth="1" opacity="0.4" />
            <path d="M360 40L400 0" stroke="#d32f2f" strokeWidth="1" opacity="0.4" />

            {/* Pen tool nib near the top right node */}
            <g transform="translate(370, 30) rotate(-45)">
              <path d="M0 0L8 16L0 20L-8 16L0 0Z" fill="black" />
              <circle cx="0" cy="14" r="1.5" fill="white" />
            </g>
          </svg>
        </div>

        {/* Decorative SVGs moving with the push */}
        <div className="animate-push-down-top delay-push absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 opacity-10 w-8 h-8">
            <Image src="/globe.svg" alt="Globe" width={32} height={32} />
          </div>
          <div className="absolute bottom-20 left-1/4 opacity-10 w-8 h-8">
            <Image src="/window.svg" alt="Window" width={32} height={32} />
          </div>
          <div className="absolute top-1/2 left-10 opacity-10 w-6 h-6">
            <Image src="/file.svg" alt="File" width={24} height={24} />
          </div>
        </div>

        {/* Top Section: Date and Framed Image */}
        <div className="animate-push-down-top delay-push flex flex-col md:flex-row gap-16 items-start relative z-20">
          <div className="relative">
            <span className="text-sm font-black tracking-widest text-[#d32f2f] mb-4 block">
              2026-2027
            </span>

            {/* Main Image Framing */}
            <div className="relative w-64 h-80 bg-white border border-[#e5e5e5] p-1 shadow-sm">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/Portfolio.jpg"
                  alt="Portfolio Silhouette"
                  fill
                  className="object-cover grayscale brightness-110 opacity-90"
                />
              </div>
              {/* Red Construction Box */}
              <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-[#d32f2f]/40 pointer-events-none">
                <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-[#d32f2f] border border-white" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#d32f2f] border border-white" />
                <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-[#d32f2f] border border-white" />
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#d32f2f] border border-white" />

                {/* Node markers in middle of lines */}
                <div className="absolute top-1/2 -left-1.25 w-2 h-2 bg-white border border-[#d32f2f] -translate-y-1/2" />
                <div className="absolute top-1/2 -right-1.25 w-2 h-2 bg-white border border-[#d32f2f] -translate-y-1/2" />
              </div>

              {/* Red Scribble Accent (Left) */}
              <div className="absolute -left-16 top-[20%] opacity-80 scale-150">
                <svg width="24" height="40" viewBox="0 0 24 40">
                  <path d="M4 4L20 12M4 12L20 20M4 20L20 28M4 28L20 36" stroke="#d32f2f" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Design Categories Box */}
          <div className="mt-8 md:mt-32 max-w-sm">
            <div className="border border-dashed border-[#1a1a1a]/40 p-10 relative bg-white/50 backdrop-blur-[1px]">
              <ul className="space-y-3 text-sm font-black tracking-tight uppercase">
                <li>Branding Identity</li>
                <li>Video Making</li>
                <li>3D Modeling & Interactive</li>
                <li>Software Development</li>
              </ul>
              {/* Vision Description */}
              <div className="mt-8 pt-8 border-t border-[#1a1a1a]/10">
                <p className="text-[10px] md:text-xs font-bold leading-relaxed tracking-tight text-[#1a1a1a]/60 uppercase italic">
                  Bridging the gap between artistic vision, motion, and full-stack technical infrastructure.
                </p>
              </div>

              {/* Pointer Icon */}
              <div className="absolute -bottom-4 right-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 2L18 8L5 14V2Z" fill="black" />
                  <path d="M12 10L16 16" stroke="black" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Typography Section - Centered Vertically and Horizontally */}
        <div className="relative flex-1 z-50 animate-push-down-text delay-push flex items-center justify-center w-full">
          <h1 className="flex flex-col select-none items-center text-center">
            <span className="text-[5rem] md:text-[9rem] font-black leading-[0.7] tracking-tighter uppercase flex justify-center">
              {"4WARD".split("").map((char, i) => (
                <span
                  key={i}
                  className={`animate-letter-in ${char.toLowerCase() === "w" || char.toLowerCase() === "r"
                    ? "text-[#d32f2f]"
                    : ""
                    }`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>
        </div>

        {/* Footer Credit */}
        <div className="absolute bottom-10 right-10 flex items-center gap-8 animate-fade-in">
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-black tracking-[0.3em] opacity-30 uppercase">Design by</span>
            <span className="text-xs font-black uppercase tracking-tight">4WARD</span>
          </div>
          <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center p-3 shadow-xl">
            <Image src="/vercel.svg" alt="Logomark" width={24} height={24} className="invert" />
          </div>
        </div>
      </div>

      <Services />
      <FeaturedProjects />
      <ProcessWorkflow />
    </main>
  );
}
