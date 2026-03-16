"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const projects = [
    {
        id: "01",
        name: "CineFlow",
        subtitle: "Visual Narrative Platform",
        overview: "An industry-standard color grading and visual storytelling platform for cinematic productions. achieve consistency across complex narratives with professional-grade tools.",
        accentColor: "#d32f2f",
        deviceType: "phone",
        image: "/project-mockup.png",
        tagline: "Visual Excellence",
        mobileLabel: "CineFlow Mobile",
        mobileSub: "Post-Production Suite",
        year: "2024",
        category: "Cinematography"
    },
    {
        id: "02",
        name: "Planshift",
        subtitle: "3D Architecture & VR Explorer",
        overview: "Transform flat architectural plans into navigable 3D environments. Explore future spaces in immersive VR before construction even begins.",
        accentColor: "#d32f2f",
        deviceType: "laptop",
        image: "/Planshift.png",
        tagline: "Spatial Innovation",
        mobileLabel: "Planshift VR",
        mobileSub: "Architectural Engine",
        year: "2023",
        category: "Visualization"
    },
    {
        id: "03",
        name: "E-Gate",
        subtitle: "Digital Access Control",
        overview: "A digital visitor registration system for schools. Digitize visitation with identity verification and secure QR-based entry to improve campus security and efficiency.",
        accentColor: "#d32f2f",
        deviceType: "phone",
        image: "/E-gate.png",
        tagline: "Secure Access",
        mobileLabel: "E-Gate System",
        mobileSub: "Visitor Verification",
        year: "2024",
        category: "Security Tech"
    }
];

export default function FeaturedProjects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
    const project = projects[currentIndex];

    const nextProject = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, [projects.length]);

    const prevProject = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Auto-play timer logic
    useEffect(() => {
        const timer = setInterval(() => {
            nextProject();
        }, 8000); 

        return () => clearInterval(timer);
    }, [nextProject, currentIndex]);

    const variants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.98
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
            }
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.98,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
            }
        })
    };

    return (
        <section className="relative w-full bg-[#f8f8f8] grid-bg font-jost overflow-hidden pt-12 pb-48 pr-12 pl-20 md:pr-24 md:pl-40">
            {/* ── Section Header ── */}
            <div className="relative z-50 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-3"
                    >
                        <div className="w-12 h-[1px] bg-[#d32f2f]" />
                        <span className="text-xs font-black tracking-[0.4em] text-[#d32f2f] uppercase block">
                            Portfolio
                        </span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black uppercase leading-[0.85] tracking-tighter"
                    >
                        Selected <br />
                        <span className="text-outline" style={{ WebkitTextStroke: "1.2px #1a1a1a" }}>
                            Creations
                        </span>
                    </motion.h2>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={prevProject}
                        className="group w-12 h-12 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center hover:bg-[#d32f2f] hover:border-[#d32f2f] transition-all duration-500"
                    >
                        <svg className="group-hover:text-white transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                        </svg>
                    </button>
                    <div className="flex gap-3">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > currentIndex ? 1 : -1);
                                    setCurrentIndex(i);
                                }}
                                className={`h-1 transition-all duration-500 rounded-full ${i === currentIndex ? "w-8 bg-[#d32f2f]" : "w-1 bg-[#1a1a1a]/10 hover:bg-[#1a1a1a]/30"}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextProject}
                        className="group w-12 h-12 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center hover:bg-[#d32f2f] hover:border-[#d32f2f] transition-all duration-500"
                    >
                        <svg className="group-hover:text-white transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* ── Main Showcase Container ── */}
            <div className="relative w-full min-h-[500px] flex items-center">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div 
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="w-full flex flex-col md:flex-row items-center gap-12 md:gap-0"
                    >
                        {/* Left Side: Overview & Numbering */}
                        <div className="relative z-20 w-full md:w-1/2 flex flex-col items-start pt-10">
                            <div className="relative">
                                <span className="text-[8rem] md:text-[10rem] font-black leading-none text-[#1a1a1a]/[0.05] select-none absolute -top-20 -left-6">
                                    {project.id}
                                </span>
                                <div className="relative mt-14">
                                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 leading-[0.9] max-w-sm">
                                        {project.name.substring(0, project.name.length / 2)}<span className="text-[#d32f2f]">{project.name.substring(project.name.length / 2)}</span>
                                    </h3>

                                    <div className="max-w-md bg-white/40 backdrop-blur-sm border border-[#1a1a1a]/5 p-7 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-[#d32f2f] opacity-20 group-hover:opacity-100 transition-opacity" />
                                        <p className="text-sm md:text-base leading-relaxed font-bold text-[#1a1a1a]/70 font-jost">
                                            {project.overview}
                                        </p>
                                        <div className="mt-7 flex items-center gap-5 cursor-pointer group/link">
                                            <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white group-hover/link:bg-[#d32f2f] transition-all duration-500 overflow-hidden relative">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                                                </svg>
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover/link:translate-x-1.5 transition-transform duration-500">
                                                Case Study
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-8 flex items-center gap-6 overflow-hidden">
                                        <span className="font-mono text-[9px] font-black text-[#1a1a1a]/30 uppercase tracking-[0.2em]">
                                            Yr / {project.year}
                                        </span>
                                        <div className="w-1 h-1 rounded-full bg-[#d32f2f]/30" />
                                        <span className="font-mono text-[9px] font-black text-[#d32f2f] uppercase tracking-[0.2em]">
                                            Cat / {project.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content Area: Device Mockups */}
                        <div className="relative w-full md:w-1/2 flex items-center justify-center pt-16 md:pt-0">
                            {/* Elegant background text overlaying the mockup transition area */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.04] z-0 select-none pointer-events-none">
                                <h4 className="text-[14rem] md:text-[16rem] font-black uppercase tracking-tighter leading-none italic">
                                    {project.id}
                                </h4>
                            </div>

                            <div className="relative z-10 transform translate-x-0 md:translate-x-12 scale-90 md:scale-95 group">
                                <InteractiveTilt>
                                    {project.deviceType === "phone" ? (
                                        <div className="relative">
                                            <DeviceMockup scale={0.65}>
                                                <div className="relative w-full h-full bg-[#0a0a0a] overflow-hidden">
                                                    <Image 
                                                        src={project.image} 
                                                        alt={project.name} 
                                                        fill 
                                                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700" 
                                                    />
                                                    {/* Sophisticated Glass Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#000]/90 via-transparent to-transparent p-7 flex flex-col justify-end">
                                                        <div className="w-12 h-1 bg-[#d32f2f] mb-4 shadow-[0_0_15px_rgba(211,47,47,0.5)]" />
                                                        <h5 className="text-white font-black uppercase text-lg mb-0.5 tracking-tighter leading-none">{project.mobileLabel}</h5>
                                                        <p className="text-white/40 text-[8px] font-black uppercase tracking-[0.3em]">{project.mobileSub}</p>
                                                    </div>
                                                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
                                                </div>
                                            </DeviceMockup>

                                            {/* Premium Floating Detail */}
                                            <div className="absolute -bottom-8 -right-8 w-24 md:w-32 z-50 transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4">
                                                <div className="bg-[#d32f2f] p-5 rounded-[1.2rem] shadow-2xl flex flex-col items-center justify-center transform -rotate-12 border-2 border-white/20 overflow-hidden group/detail">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover/detail:opacity-100 transition-opacity" />
                                                    <span className="text-white font-black text-3xl italic tracking-tigh relative z-10">{project.name.charAt(0)}</span>
                                                    <span className="text-white/40 text-[6px] font-black uppercase tracking-widest mt-0.5 relative z-10">Verify</span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative">
                                            <LaptopMockup scale={0.8}>
                                                <div className="relative w-full h-full bg-[#0a0a0a] overflow-hidden">
                                                    <Image 
                                                        src={project.image} 
                                                        alt={project.name} 
                                                        fill 
                                                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700" 
                                                    />
                                                    {/* Sophisticated Glass Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#000]/90 via-transparent to-transparent p-9 flex flex-col justify-end">
                                                        <div className="w-12 h-1 bg-[#d32f2f] mb-4 shadow-[0_0_15px_rgba(211,47,47,0.5)]" />
                                                        <h5 className="text-white font-black uppercase text-xl mb-0.5 tracking-tighter leading-none">{project.mobileLabel}</h5>
                                                        <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.3em]">{project.mobileSub}</p>
                                                    </div>
                                                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
                                                </div>
                                            </LaptopMockup>

                                            {/* Floating Tag Detail */}
                                            <div className="absolute -bottom-6 -right-5 w-28 md:w-36 z-50 transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4">
                                                <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-2xl border border-[#d32f2f]/40 flex flex-col items-start gap-1.5 backdrop-blur-xl">
                                                    <div className="flex gap-1">
                                                        {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-[#d32f2f]/50" />)}
                                                    </div>
                                                    <span className="text-white font-black text-xl italic tracking-tighter leading-none">PS_02</span>
                                                    <div className="w-full h-[1px] bg-white/5" />
                                                    <span className="text-[#d32f2f] text-[7px] font-black uppercase tracking-widest">Active System</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </InteractiveTilt>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

function InteractiveTilt({ children }: { children: React.ReactNode }) {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const degX = (y - centerY) / 20;
        const degY = (centerX - x) / 20;
        
        setRotateX(degX);
        setRotateY(degY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
        >
            {children}
        </motion.div>
    );
}

function DeviceMockup({ children, scale = 1 }: { children: React.ReactNode, scale?: number }) {
    return (
        <div className="relative" style={{ perspective: "2000px" }}>
            <div className="relative mx-auto" style={{ width: `${300 * scale}px`, height: `${620 * scale}px`, transformStyle: "preserve-3d" }}>
                <div className="absolute inset-0 bg-black rounded-[2.8rem] border-[10px] border-[#1a1a1a] shadow-inner overflow-hidden">
                    <div className="w-full h-full relative bg-zinc-900 overflow-hidden">{children}</div>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-50" />
                </div>
                <div className="absolute inset-0 rounded-[2.8rem] pointer-events-none z-40 bg-gradient-to-br from-white/5 to-transparent" />
            </div>
        </div>
    );
}

function LaptopMockup({ children, scale = 1 }: { children: React.ReactNode, scale?: number }) {
    const w = 500 * scale;
    const h = 320 * scale;
    return (
        <div className="relative" style={{ perspective: "2000px" }}>
            <div className="relative mx-auto flex flex-col items-center" style={{ width: `${w}px`, transformStyle: "preserve-3d" }}>
                {/* Screen */}
                <div
                    className="relative bg-[#0a0a0a] rounded-t-xl border-[12px] border-[#1a1a1a] overflow-hidden shadow-2xl"
                    style={{ width: `${w}px`, height: `${h}px` }}
                >
                    <div className="w-full h-full bg-zinc-900">{children}</div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#1a1a1a] mt-1" />
                </div>
                {/* Base / Keyboard Area */}
                <div
                    className="relative bg-[#1a1a1a] rounded-b-xl shadow-xl"
                    style={{
                        width: `${w + 40}px`,
                        height: "15px",
                        background: "linear-gradient(to bottom, #1a1a1a, #0a0a0a)"
                    }}
                />
                <div
                    className="relative bg-[#0a0a0a] rounded-b-2xl mx-auto"
                    style={{ width: `${w + 20}px`, height: "8px" }}
                />
            </div>
        </div>
    );
}
