"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type DropdownItem = { label: string; href: string };
type NavItem = { label: string; href: string; dropdown?: DropdownItem[] };

const navItems: NavItem[] = [
    { label: "HOME", href: "#" },
    {
        label: "WORK",
        href: "#work",
        dropdown: [
            { label: "BRANDING", href: "#branding" },
            { label: "VIDEO", href: "#video" },
            { label: "3D & INTERACTIVE", href: "#3d" },
        ],
    },
    {
        label: "SERVICES",
        href: "#services",
        dropdown: [
            { label: "VIDEO PRODUCTION", href: "#video-production" },
            { label: "MOTION GRAPHICS", href: "#motion" },
            { label: "BRAND IDENTITY", href: "#brand" },
            { label: "DEV & TECH", href: "#dev" },
        ],
    },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
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
                        href="#"
                        className="flex items-center gap-1.5 pr-4 border-r border-[#e5e5e5] mr-1 group"
                    >
                        {/* Tiny logomark: square with red dot */}
                        <span className="relative w-5 h-5 border-[1.5px] border-[#1a1a1a] group-hover:border-[#d32f2f] transition-colors duration-200 shrink-0 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 bg-[#d32f2f] absolute top-[2px] left-[2px]" />
                            <span className="w-[3px] h-[3px] bg-[#1a1a1a] absolute bottom-[2px] right-[2px]" />
                        </span>

                        {/* "4WARD" text — W and R red, rest black */}
                        <span className="font-black text-[11px] tracking-tight uppercase leading-none select-none">
                            {"4WARD".split("").map((char, i) => (
                                <span
                                    key={i}
                                    className={
                                        char === "W" || char === "R"
                                            ? "text-[#d32f2f]"
                                            : "text-[#1a1a1a]"
                                    }
                                >
                                    {char}
                                </span>
                            ))}
                        </span>
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

                {/* ── Mobile dropdown (full-width pill-style panel) ── */}
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
        </>
    );
}
