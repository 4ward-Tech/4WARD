"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/projects";

// Massive Animated Counter Component
function AnimatedCounter({ endValue, delay = 0 }: { endValue: number; delay?: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        const duration = 2000;

        const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = (time - startTime) / duration;

            if (progress < 1) {
                const currentCount = Math.floor(endValue * (progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)));
                setCount(currentCount);
                requestAnimationFrame(animate);
            } else {
                setCount(endValue);
            }
        };

        const timeoutId = setTimeout(() => {
            requestAnimationFrame(animate);
        }, delay * 1000);

        return () => clearTimeout(timeoutId);
    }, [endValue, delay]);

    return (
        <span className="text-white text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter drop-shadow-sm">
            {count}%
        </span>
    );
}

function PhoneShowcase({ projects }: { projects: any[] }) {
    // We take the top 3 projects for the primary display
    const primaryProjects = projects.slice(0, 3);

    return (
        <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-32">
            
            {/* Massive Background Text - Outlined */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
                <h2 className="text-[15rem] md:text-[25rem] font-black uppercase text-transparent stroke-text opacity-[0.05]" style={{ WebkitTextStroke: "2px #1a1a1a" }}>
                    SCREENSHOTS
                </h2>
            </div>

            {/* Project HUD Overlays */}
            <div className="absolute top-12 left-12 flex flex-col gap-2 z-10">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-[1px] bg-[#d32f2f]" />
                    <span className="text-[10px] font-mono tracking-[0.5em] text-[#1a1a1a]/50 uppercase">Selected_Archives</span>
                </div>
                <span className="text-[10px] font-mono text-[#1a1a1a]/30 ml-14">[ SCANNING_PROTOCOL_0.5 ]</span>
            </div>

            {/* Main Phone Row */}
            <div className="relative z-10 w-full max-w-7xl px-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-6 mt-20">
                {primaryProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50, rotate: index === 0 ? -5 : index === 2 ? 5 : 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="relative group cursor-pointer"
                    >
                        {/* Information Title (Top) */}
                        <div className="absolute -top-16 left-0 w-full text-center transition-all opacity-0 group-hover:opacity-100 group-hover:-top-20">
                            <span className="text-[10px] font-black tracking-[0.4em] text-[#d32f2f] uppercase">{project.name}</span>
                        </div>

                        {/* High-Fidelity Phone Frame */}
                        <div className="relative w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-[#1a1a1a] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.3)] overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:rotate-0 group-hover:-translate-y-4">
                            {/* Notch/Dynamic Island */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-full z-20" />
                            
                            {/* Screen Content */}
                            <Image 
                                src={project.image} 
                                alt={project.name} 
                                fill 
                                className="object-cover transition-transform duration-[5s] group-hover:scale-110" 
                            />
                            
                            {/* Screen Glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                        </div>

                        {/* Interactive Footer (Case Study) */}
                        <div className="mt-8 flex flex-col items-center gap-4">
                            <Link href={`/work/${project.slug}`} className="px-8 py-3 border border-[#1a1a1a]/20 rounded-full text-[9px] font-black uppercase tracking-[0.3em] text-[#1a1a1a]/60 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all">
                                View_Artifact
                            </Link>
                            <span className="text-[8px] font-mono text-[#1a1a1a]/30 uppercase tracking-widest">TS_ID: {project.id}-KGL</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Corner UI Accent */}
            <div className="absolute bottom-12 right-12 flex flex-col items-end gap-1 opacity-40">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#1a1a1a]">4WARD Technical</span>
                <span className="text-[9px] font-mono text-[#1a1a1a]/60">SYSTEM_RECOVERY_COMPLETE</span>
            </div>
        </section>
    );
}

export default function WorkPage() {
    return (
        <main className="min-h-screen grid-bg font-jost text-[#1a1a1a] overflow-x-hidden">
            {/* Chart KPI Section */}
            <section className="pt-28 md:pt-40 pb-24 px-6 md:px-24 max-w-[1400px] mx-auto flex flex-col justify-center relative">
                {/* Decorative Elements */}
                <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 right-10 w-64 h-64 bg-[#d32f2f] rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 md:gap-20 relative z-10 w-full">
                    <div className="w-full lg:w-5/12 flex flex-col items-start gap-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-[1px] bg-[#d32f2f]" />
                            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#d32f2f]">Performance Metrics</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-black uppercase tracking-tighter leading-[0.9] text-[#1a1a1a]">
                            Exponential <br />
                            <span className="text-outline text-[#d32f2f]" style={{ WebkitTextStroke: "1.5px #d32f2f" }}>Output Growth</span>
                        </h1>
                        <p className="opacity-70 text-[11px] font-bold max-w-sm mt-4 leading-relaxed uppercase tracking-widest border-l-2 border-[#d32f2f]/30 pl-4 text-[#1a1a1a]">
                            Our multi-disciplinary approach ensures compounding returns across brand identity, immersive interactive media, and high-conversion video production.
                        </p>
                    </div>

                    <div className="w-full lg:w-7/12 h-[450px] md:h-[500px] flex items-end justify-center lg:justify-start gap-12 sm:gap-16 lg:ml-12 relative pb-10 mt-10 lg:mt-0">
                        {/* Bar 1 - Red */}
                        <div className="relative h-full flex flex-col justify-end w-20 sm:w-24 lg:w-28 z-10">
                            <motion.div initial={{ height: 0 }} animate={{ height: "79%" }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} className="w-full rounded-[6px] relative flex flex-col items-center pt-8 px-2 bg-gradient-to-t from-transparent via-[#d32f2f]/80 to-[#d32f2f] shadow-[0_20px_50px_rgba(211,47,47,0.15)] group transition-transform duration-500 hover:-translate-y-2">
                                <AnimatedCounter endValue={79} delay={0.2} />
                                
                                {/* Floating Box ON the Bar */}
                                <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-28 sm:w-32 lg:w-36 bg-white rounded-[6px] p-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-[#1a1a1a]/[0.03] z-20">
                                    <h4 className="text-[10px] font-black uppercase text-[#1a1a1a] mb-1 tracking-tight leading-tight">Branding</h4>
                                    <p className="text-[8px] text-[#1a1a1a]/50 leading-tight font-bold">
                                        Identity retention metrics.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                        
                        {/* Bar 2 - Dark */}
                        <div className="relative h-full flex flex-col justify-end w-20 sm:w-24 lg:w-28 z-20">
                            <motion.div initial={{ height: 0 }} animate={{ height: "94%" }} transition={{ duration: 1.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} className="w-full rounded-[6px] relative flex flex-col items-center pt-8 px-2 bg-gradient-to-t from-transparent via-[#1a1a1a]/80 to-[#1a1a1a] shadow-[0_20px_50px_rgba(26,26,26,0.15)] group transition-transform duration-500 hover:-translate-y-2">
                                <AnimatedCounter endValue={94} delay={0.4} />
                                
                                {/* Floating Box ON the Bar */}
                                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-28 sm:w-32 lg:w-36 bg-white rounded-[6px] p-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-[#1a1a1a]/[0.03] z-30">
                                    <h4 className="text-[10px] font-black uppercase text-[#1a1a1a] mb-1 tracking-tight leading-tight">3D & Interactive</h4>
                                    <p className="text-[8px] text-[#1a1a1a]/50 leading-tight font-bold">
                                        Maximized spatial engagement.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bar 3 - Light Red */}
                        <div className="relative h-full flex flex-col justify-end w-20 sm:w-24 lg:w-28 z-30">
                            <motion.div initial={{ height: 0 }} animate={{ height: "84%" }} transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} className="w-full rounded-[6px] relative flex flex-col items-center pt-8 px-2 bg-gradient-to-t from-transparent via-[#ef5350]/80 to-[#ef5350] shadow-[0_20px_50px_rgba(239,83,80,0.15)] group transition-transform duration-500 hover:-translate-y-2">
                                <AnimatedCounter endValue={84} delay={0.6} />
                                
                                {/* Floating Box ON the Bar */}
                                <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-28 sm:w-32 lg:w-36 bg-white rounded-[6px] p-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-[#1a1a1a]/[0.03] z-40">
                                    <h4 className="text-[10px] font-black uppercase text-[#1a1a1a] mb-1 tracking-tight leading-tight">Video</h4>
                                    <p className="text-[8px] text-[#1a1a1a]/50 leading-tight font-bold">
                                        Cinematic sequences and conversions.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Showcase Section */}
            <PhoneShowcase projects={projects} />
        </main>
    );
}
