"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
    {
        number: "01",
        title: "Branding",
        description: "Crafting cohesive visual identities — logos, typography, and guidelines that make a lasting impression.",
        accentColor: "#d32f2f",
    },
    {
        number: "02",
        title: "Video Making",
        description: "Full-cycle production: cinematic storytelling, motion graphics, and post-production that captivates.",
        accentColor: "#1a1a1a",
    },
    {
        number: "03",
        title: "3D & Interactive",
        description: "Immersive 3D assets, product visualisations, and interactive web experiences with real-time rendering.",
        accentColor: "#d32f2f",
    },
    {
        number: "04",
        title: "Photography",
        description: "Editorial, commercial, and event photography expertly composed with light-precise imagery.",
        accentColor: "#1a1a1a",
    },
    {
        number: "05",
        title: "Development",
        description: "Scalable apps — clean architecture, modern frameworks, and pixel-perfect interfaces.",
        accentColor: "#d32f2f",
    },
    {
        number: "06",
        title: "Color Grading",
        description: "Professional grading that sets the mood, consistency, and cinematic tone for your visuals.",
        accentColor: "#1a1a1a",
    },
];

/* Inline SVG icons */
const ServiceIcons: React.ReactNode[] = [
    <svg key="01" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /><line x1="2" y1="12" x2="22" y2="12" /></svg>,
    <svg key="02" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>,
    <svg key="03" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
    <svg key="04" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg>,
    <svg key="05" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    <svg key="06" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="10.5" r="2.5" /><circle cx="8.5" cy="7.5" r="2.5" /><circle cx="6.5" cy="12.5" r="2.5" /><path d="M12 22c-4.97 0-9-2.69-9-6 0-1.5 1.34-2.87 3.5-3.84" /></svg>,
];

export default function Services() {
    const row1 = services.slice(0, 3);
    const row2 = services.slice(3, 6);

    return (
        <section id="services" className="relative w-full bg-[#f8f8f8] grid-bg font-jost overflow-hidden pt-12 pb-48 pr-12 pl-20 md:pr-24 md:pl-40">
            
            {/* ── Section header ── */}
            <div className="relative z-10 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div className="max-w-2xl">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-black tracking-[0.3em] text-[#d32f2f] uppercase block mb-3"
                    >
                        Capabilities & Expertise
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-4"
                    >
                        Elevating <br />
                        <span className="text-outline" style={{ WebkitTextStroke: "1.5px #1a1a1a" }}>
                            Your Vision
                        </span>
                    </motion.h2>
                </div>
            </div>

            {/* ── Serpentine Pathway ── */}
            <div className="relative z-10 max-w-6xl mx-auto">
                
                {/* Connecting Path SVGs (Desktop only) */}
                <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible">
                    <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="none">
                        {/* Row 1 (01 -> 02 -> 03) */}
                        <motion.path 
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            d="M166 100h668" stroke="rgba(211,47,47,0.15)" strokeWidth="2" strokeDasharray="6 6" 
                        />
                        
                        {/* Drop (03 -> 04) */}
                        <motion.path 
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            d="M834 100c60 0 60 260 0 260" stroke="rgba(211,47,47,0.15)" strokeWidth="2" strokeDasharray="6 6" 
                        />

                        {/* Row 2 (04 -> 05 -> 06) */}
                        <motion.path 
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            d="M834 360H166" stroke="rgba(211,47,47,0.15)" strokeWidth="2" strokeDasharray="6 6" 
                        />
                    </svg>
                </div>

                {/* Grid Layout */}
                <div className="flex flex-col gap-20 relative">
                    {/* Row 1: 01 - 02 - 03 */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
                        {row1.map((svc, i) => (
                            <div key={svc.number} className="flex justify-center">
                                <ServiceCard svc={svc} icon={ServiceIcons[i]} index={i} />
                            </div>
                        ))}
                    </div>

                    {/* Row 2: 06 - 05 - 04 (Snake visual order) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
                        {[row2[2], row2[1], row2[0]].map((svc, i) => (
                            <div key={svc.number} className="flex justify-center">
                                <ServiceCard 
                                    svc={svc} 
                                    icon={ServiceIcons[parseInt(svc.number) - 1]} 
                                    index={parseInt(svc.number) - 1} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Bottom Details ── */}
            <div className="mt-48 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 border-t border-[#1a1a1a]/5 pt-8">
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase">Tech-Artistry Collective</span>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase">Core Capabilities / 2024</span>
            </div>
        </section>
    );
}

function ServiceCard({ svc, icon, index }: { svc: typeof services[0]; icon: React.ReactNode; index: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (index % 3) * 0.1, duration: 0.5 }}
            className="group relative w-full max-w-[200px] bg-white border border-[#1a1a1a]/10 ring-1 ring-[#1a1a1a]/5 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(211,47,47,0.08)] hover:border-[#d32f2f]/30 transition-all duration-500 rounded-sm z-10"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-6 h-1 bg-[#d32f2f] opacity-20 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex justify-between items-center mb-5">
                <span className="text-[10px] font-black text-[#1a1a1a]/20 group-hover:text-[#d32f2f] transition-colors tabular-nums uppercase tracking-widest">
                    {svc.number}
                </span>
                <div className="text-[#1a1a1a]/40 group-hover:text-[#1a1a1a] transition-all transform group-hover:scale-110">
                    {icon}
                </div>
            </div>

            <div className="relative z-10 mb-4">
                <h3 className="text-[12px] font-black uppercase tracking-tight mb-2 text-[#1a1a1a]">
                    {svc.title}
                </h3>
                <p className="text-[9.5px] leading-relaxed text-[#1a1a1a]/50 group-hover:text-[#1a1a1a]/80 transition-colors line-clamp-3">
                    {svc.description}
                </p>
            </div>

            <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="h-[1px] flex-grow bg-[#d32f2f]/20 mr-2" />
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </div>
        </motion.div>
    );
}
