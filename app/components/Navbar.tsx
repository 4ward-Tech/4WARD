"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { projects, Project } from "../lib/projects";

type DropdownItem = { label: string; href: string };
type NavItem = { label: string; href: string; dropdown?: DropdownItem[] };

const navItems: NavItem[] = [
    { label: "HOME", href: "/" },
    {
        label: "WORK",
        href: "/work",
        dropdown: [
            { label: "BRANDING", href: "#branding" },
            { label: "VIDEO", href: "#video" },
            { label: "3D & INTERACTIVE", href: "#3d" },
        ],
    },
    {
        label: "SERVICES",
        href: "/services",
        dropdown: [
            { label: "VIDEO PRODUCTION", href: "#video-production" },
            { label: "MOTION GRAPHICS", href: "#motion" },
            { label: "BRAND IDENTITY", href: "#brand" },
            { label: "DEV & TECH", href: "#dev" },
        ],
    },
    { label: "PRICING", href: "/pricing" },
    { label: "MEET THE TEAM", href: "/team" },
    { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    const isMinimalPage = pathname === '/minimal';

    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [searchResults, setSearchResults] = useState<{ projects: Project[], services: string[], fastAnswer?: string } | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const enter = (label: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveDropdown(label);
    };
    const leave = () => {
        timeoutRef.current = setTimeout(() => setActiveDropdown(null), 160);
    };

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchQuery.trim()) {
            setIsSearching(true);
            setSearchResults(null);
            
            // Simulate AI/System search delay
            setTimeout(() => {
                const query = searchQuery.toLowerCase();
                
                // Filter Projects
                const filteredProjects = projects.filter(p => 
                    p.name.toLowerCase().includes(query) || 
                    p.category.toLowerCase().includes(query) ||
                    p.techStack.some(t => t.toLowerCase().includes(query)) ||
                    p.overview.toLowerCase().includes(query)
                );

                // Filter Services
                const allServices = ["Branding", "Video Production", "3D Modeling", "Software Development", "Motion Graphics", "UI/UX Design"];
                const filteredServices = allServices.filter(s => s.toLowerCase().includes(query));

                // Direct Answers (Agency FAQ)
                const fastAnswers: { [key: string]: string } = {
                    "location": "Our primary headquarters are based in Kigali, Rwanda (Kicukiro District), with regional offices in Rubavu, Musanze, and Huye.",
                    "who are you": "4WARD is a Rwandan-rooted multi-disciplinary design and technology network specializing in premium branding, high-end video production, and custom software infrastructure.",
                    "contact": "You can reach our team directly at connect@4ward.tech or visit our Contact page to initialize a briefing session in Kigali.",
                    "team": "Our team consists of specialized Rwandan and international leads in product strategy, 3D architecture, full-stack engineering, and cinematic production.",
                    "services": "We provide Branding Identity, Video Making, 3D Modeling & Interactive experiences, and Software Development.",
                    "pricing": "We offer flexible plans starting from $1999 for Landing Pages and custom Product Partnerships. Visit our Pricing page for a full breakdown of our services.",
                    "vision": "Bridging the gap between Rwandan artistic vision, motion, and global technical infrastructure."
                };

                let bestAnswer = "";
                for (const key in fastAnswers) {
                    if (query.includes(key)) {
                        bestAnswer = fastAnswers[key];
                        break;
                    }
                }

                setSearchResults({
                    projects: filteredProjects,
                    services: filteredServices,
                    fastAnswer: bestAnswer
                });
                setIsSearching(false);
            }, 800);
        }
    };

    if (isMinimalPage) return null;

    return (
        <>
            {/* ── Floating Pill Navbar ── */}
            <header className="fixed top-5 left-0 right-0 z-[9999] flex justify-center pointer-events-none">
                {/* Pill container */}
                <div
                    className={`
            pointer-events-auto flex items-center gap-0
            rounded-full border border-[#e0e0e0]
            px-3 py-0 h-11
            transition-all duration-400
            ${scrolled
                            ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.10)]"
                            : "bg-white/80 backdrop-blur-md shadow-[0_2px_16px_rgba(0,0,0,0.07)]"
                        }
          `}
                >
                    {/* ── Logo ── */}
                    <Link
                        href="/"
                        className="flex items-center gap-1 pr-4 border-r border-[#e5e5e5] mr-1 group"
                    >
                        {/* Custom SVG Logo Recreation */}
                        <svg width="80" height="20" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-105">
                            {/* Stylized '4' */}
                            <path d="M5 18L18 4H24L12 18H5Z" fill="#1a1a1a" />
                            <path d="M16 4H26L30 18H20L16 4Z" fill="#1a1a1a" />
                            <path d="M10 14H30V17H10V14Z" fill="#1a1a1a" />
                            
                            {/* Signature Red Slash */}
                            <path d="M8 22L32 4L36 6L14 26L8 22Z" fill="#d32f2f" />
                            
                            {/* 'WARD' Typography */}
                            <text x="35" y="19" fill="#1a1a1a" style={{ font: "900 15.5px Jost", letterSpacing: "-0.04em", textTransform: "uppercase" }}>WARD</text>
                        </svg>
                    </Link>

                    {/* ── Desktop nav links ── */}
                    <nav className="hidden md:flex items-center h-full">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative h-full flex items-center"
                                onMouseEnter={() => item.dropdown && enter(item.label)}
                                onMouseLeave={item.dropdown ? leave : undefined}
                            >
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-0.5 px-3.5 h-full text-[9.5px] font-black tracking-[0.13em] text-[#1a1a1a] hover:text-[#d32f2f] transition-colors duration-200 whitespace-nowrap uppercase"
                                >
                                    {item.label}
                                    {item.dropdown && (
                                        <svg
                                            width="7"
                                            height="5"
                                            viewBox="0 0 7 5"
                                            fill="none"
                                            className={`ml-0.5 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""
                                                }`}
                                        >
                                            <path
                                                d="M1 1L3.5 4L6 1"
                                                stroke="currentColor"
                                                strokeWidth="1.4"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    )}
                                </Link>

                                {/* Dropdown panel */}
                                {item.dropdown && activeDropdown === item.label && (
                                    <div
                                        className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 min-w-[160px] bg-white border border-[#e5e5e5] rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.10)] py-1.5 z-50 overflow-hidden"
                                        onMouseEnter={() => enter(item.label)}
                                        onMouseLeave={leave}
                                    >
                                        {/* red top line */}
                                        <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-[#d32f2f] rounded-full" />
                                        {item.dropdown.map((sub) => (
                                            <Link
                                                key={sub.label}
                                                href={sub.href}
                                                className="block px-4 py-2.5 text-[9px] font-black tracking-[0.14em] uppercase text-[#1a1a1a] hover:text-[#d32f2f] hover:bg-[#fafafa] transition-colors duration-150"
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* ── Right: search + mobile toggle ── */}
                    <div className="flex items-center pl-1 ml-1 border-l border-[#e5e5e5]">
                        {/* Search */}
                        <button
                            aria-label="Search"
                            onClick={() => setSearchOpen(true)}
                            className="hidden md:flex w-8 h-8 items-center justify-center text-[#1a1a1a] hover:text-[#d32f2f] transition-colors duration-200 rounded-full"
                        >
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                            >
                                <circle cx="5.5" cy="5.5" r="4" />
                                <path d="M9 9L12 12" />
                            </svg>
                        </button>

                        {/* Mobile hamburger */}
                        <button
                            aria-label="Toggle menu"
                            onClick={() => setMobileOpen((v) => !v)}
                            className="md:hidden flex flex-col gap-[4px] w-8 h-8 items-center justify-center"
                        >
                            {[0, 1, 2].map((i) => (
                                <span
                                    key={i}
                                    className={`block bg-[#1a1a1a] rounded-full transition-all duration-300 ${i === 1
                                            ? `h-[1.5px] w-4 ${mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"}`
                                            : `h-[1.5px] w-4 origin-center ${mobileOpen
                                                ? i === 0
                                                    ? "rotate-45 translate-y-[5.5px]"
                                                    : "-rotate-45 -translate-y-[5.5px]"
                                                : ""
                                            }`
                                        }`}
                                />
                            ))}
                        </button>
                    </div>
                </div>

                <div
                    className={`
            pointer-events-auto absolute top-[52px] left-4 right-4
            md:hidden bg-white/95 backdrop-blur-xl border border-[#e5e5e5] rounded-2xl
            shadow-[0_8px_32px_rgba(0,0,0,0.10)] overflow-hidden
            transition-all duration-400
            ${mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
          `}
                >
                    <nav className="px-5 py-4 flex flex-col gap-0">
                        {navItems.map((item) => (
                            <div key={item.label}>
                                <Link
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex justify-between items-center py-3 text-[9.5px] font-black tracking-[0.14em] uppercase text-[#1a1a1a] border-b border-[#f0f0f0] last:border-0 hover:text-[#d32f2f] transition-colors"
                                >
                                    {item.label}
                                    {item.dropdown && (
                                        <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
                                            <path d="M1 1L3.5 4L6 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                        </svg>
                                    )}
                                </Link>
                                {item.dropdown && (
                                    <div className="pl-3 pb-1">
                                        {item.dropdown.map((sub) => (
                                            <Link
                                                key={sub.label}
                                                href={sub.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="block py-1.5 text-[8.5px] font-bold tracking-[0.12em] uppercase text-[#1a1a1a]/50 hover:text-[#d32f2f] transition-colors"
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </header>

            {/* ── Search Overlay ── */}
            <AnimatePresence>
                {searchOpen && (
                    <motion.div 
                        initial={{ opacity: 0, clipPath: "circle(0% at 85% 10%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 85% 10%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 85% 10%)" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[10000] bg-[#f8f8f8] grid-bg flex flex-col justify-between overflow-hidden font-jost"
                    >
                        {/* Top Bar for Overlay */}
                        <div className="flex justify-between items-center px-6 md:px-12 py-8 w-full absolute top-0 left-0 z-50">
                            <div className="text-[9px] font-black tracking-[0.2em] uppercase text-[#1a1a1a]/40 flex gap-4 md:gap-8 flex-wrap">
                                <span className="hidden md:inline">Branding</span>
                                <span className="hidden md:inline">Interactive</span>
                                <span className="hidden md:inline">Video Production</span>
                                <span className="text-[#d32f2f]">Query Index</span>
                            </div>
                            <button 
                                onClick={() => setSearchOpen(false)}
                                className="w-12 h-12 flex items-center justify-center text-[#1a1a1a] hover:text-[#d32f2f] transition-all hover:rotate-90 duration-300 pointer-events-auto cursor-pointer border border-[#1a1a1a]/10 hover:border-[#d32f2f] rounded-full bg-white/50 backdrop-blur-sm"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                            </button>
                        </div>

                        {/* Red Accent Elements (Replicating the Graphic) */}
                        <div className="absolute top-[25%] right-[25%] w-16 h-16 bg-[#d32f2f] z-10 pointer-events-none md:block hidden">
                            <span className="absolute -top-5 left-0 text-[8px] font-black uppercase tracking-widest text-[#d32f2f]">Target</span>
                        </div>
                        <div className="absolute bottom-[20%] left-[30%] w-24 h-24 bg-[#d32f2f] z-10 pointer-events-none flex items-end p-2 md:block hidden">
                            <span className="text-[8px] font-black uppercase tracking-widest text-white leading-tight">Match<br/>Found</span>
                        </div>
                        
                        {/* Red Vertical Guide Line */}
                        <div className="absolute top-[10%] bottom-[10%] right-[35%] w-[1px] bg-[#d32f2f] z-10 pointer-events-none opacity-50 hidden lg:block" />
                        <div className="absolute top-[15%] left-[20%] w-[20px] h-[1px] bg-[#1a1a1a] z-10 pointer-events-none hidden md:block" />

                        {/* Giant Input Area */}
                        <div className="flex-grow flex flex-col items-center justify-center relative z-20 mt-10 w-full pointer-events-none">
                            
                            <div className="absolute top-[30%] left-[10%] md:left-[20%] text-[8px] font-black text-[#1a1a1a]/50 uppercase w-[150px] text-left leading-relaxed">
                                Enter your <span className="text-[#d32f2f]">vision</span> to initialize a global search across all portfolios.
                            </div>

                            <div className="relative w-full flex justify-center perspective-[1000px] pointer-events-auto px-4 cursor-text">
                                <motion.input 
                                    type="text"
                                    autoFocus
                                    placeholder="DISCOVER"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        if (!e.target.value) setSearchResults(null);
                                    }}
                                    onKeyDown={handleSearch}
                                    initial={{ rotateX: 20, scale: 0.95, opacity: 0 }}
                                    animate={{ rotateX: 0, scale: 1, opacity: 1 }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                    className="w-full bg-transparent outline-none text-center font-black uppercase text-[#1a1a1a] placeholder:text-[#1a1a1a]/10 placeholder:italic transition-all duration-300"
                                    style={{ 
                                        lineHeight: "0.85",
                                        letterSpacing: "-0.08em",
                                        transformStyle: "preserve-3d"
                                    }}
                                />
                                {/* Add CSS via a style tag for the dynamic font size based on viewport */}
                                <style dangerouslySetInnerHTML={{__html: `
                                    input::-webkit-input-placeholder { opacity: 0.7; }
                                    input { font-size: min(22vw, 250px); }
                                    @media (max-width: 768px) { input { font-size: 15vw; } }
                                `}} />
                            </div>
                            
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="mt-16 md:mt-24 text-[10px] sm:text-[12px] font-black uppercase tracking-widest text-[#1a1a1a]/30 flex flex-col items-center gap-6"
                                >
                                    {isSearching ? (
                                        <div className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-[#d32f2f] animate-ping" />
                                            <span className="text-[#d32f2f]">Querying Project Index...</span>
                                        </div>
                                    ) : searchResults ? (
                                        <div className="w-full max-w-4xl px-4 animate-fade-in">
                                            <div className="flex flex-col gap-8 text-left">
                                                {/* Fast Answer Section */}
                                                {searchResults.fastAnswer && (
                                                    <motion.div 
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="p-6 bg-[#d32f2f]/5 border-l-4 border-[#d32f2f]"
                                                    >
                                                        <span className="text-[8px] font-black uppercase tracking-widest text-[#d32f2f] mb-2 block">System Response:</span>
                                                        <p className="text-sm md:text-md font-bold text-[#1a1a1a] leading-tight max-w-2xl">{searchResults.fastAnswer}</p>
                                                    </motion.div>
                                                )}

                                                <div className="flex flex-col md:flex-row gap-8 justify-between">
                                                    {/* Projects Results */}
                                                    <div className="flex-1">
                                                        <h4 className="text-[10px] text-[#d32f2f] mb-4 border-b border-[#d32f2f]/20 pb-2 uppercase tracking-widest font-black">Matched Projects ({searchResults.projects.length})</h4>
                                                        <div className="space-y-4">
                                                            {searchResults.projects.length > 0 ? searchResults.projects.map(p => (
                                                                <Link key={p.id} href={`/work/${p.slug}`} onClick={() => setSearchOpen(false)} className="block group">
                                                                    <div className="flex justify-between items-end border-b border-[#1a1a1a]/5 pb-2 group-hover:border-[#d32f2f]/40 transition-colors">
                                                                        <span className="text-sm font-black text-[#1a1a1a] group-hover:text-[#d32f2f] transition-colors">{p.name}</span>
                                                                        <span className="text-[8px] opacity-40 uppercase tracking-widest font-bold">{p.category}</span>
                                                                    </div>
                                                                </Link>
                                                            )) : (
                                                                <span className="text-[10px] opacity-30 italic whitespace-nowrap">NO PROJECTS INDEXED FOR THIS QUERY</span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Services Results */}
                                                    <div className="flex-1 md:max-w-[250px]">
                                                        <h4 className="text-[10px] text-[#d32f2f] mb-4 border-b border-[#d32f2f]/20 pb-2 uppercase tracking-widest font-black">Capabilities</h4>
                                                        <div className="space-y-2">
                                                            {searchResults.services.length > 0 ? searchResults.services.map(s => (
                                                                <div key={s} className="flex items-center gap-2">
                                                                    <div className="w-1.5 h-1.5 bg-[#d32f2f]" />
                                                                    <span className="text-[10px] font-black tracking-widest uppercase text-[#1a1a1a]/70">{s}</span>
                                                                </div>
                                                            )) : (
                                                                <span className="text-[10px] opacity-30 italic">NO CORE CAPABILITIES MATCHED</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-3 md:gap-5">
                                            <span>Press</span>
                                            <span className="px-4 py-2 border-2 border-[#1a1a1a]/20 rounded-md text-[#d32f2f]">Enter</span>
                                            <span>to search</span>
                                        </div>
                                    )}
                                </motion.div>
                        </div>

                        {/* Bottom Footer Elements */}
                        <div className="w-full px-6 md:px-12 py-8 flex flex-col sm:flex-row justify-between absolute bottom-0 left-0 z-50 overflow-hidden pointer-events-none gap-4">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase text-[#d32f2f] flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#d32f2f] animate-pulse" />
                                    System Active
                                </span>
                                <span className="text-[8px] font-bold text-[#1a1a1a]/50 max-w-[200px] mt-1.5 uppercase tracking-widest leading-relaxed hidden sm:block">
                                    Awaiting input for project index retrieval protocol.
                                </span>
                            </div>
                            <div className="flex flex-col sm:text-right">
                                <span className="text-[10px] font-black uppercase text-[#1a1a1a]">Coordinates</span>
                                <span className="text-[8px] font-bold text-[#1a1a1a]/50 mt-1.5 uppercase tracking-widest font-mono">
                                    40&deg;42&apos;46&quot;N 74&deg;0&apos;21&quot;W
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
