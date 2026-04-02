"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import FeaturedProjects from "../components/FeaturedProjects";

// A simple animated counter component to add life to the numbers
function AnimatedCounter({ endValue, label, delay = 0 }: { endValue: number; label: string; delay?: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        const duration = 2000; // 2 seconds

        const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = (time - startTime) / duration;
            
            if (progress < 1) {
                // Easing function outExpo
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
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/90 text-center flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black tracking-tighter">
                +{count}%
            </span>
            <span className="block text-[8px] lg:text-[10px] font-black tracking-widest uppercase mt-1 opacity-80 whitespace-nowrap">
                {label}
            </span>
        </div>
    );
}

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-[#f8f8f8] grid-bg font-jost text-[#1a1a1a] overflow-x-hidden">
            
            {/* Chart KPI Section */}
            <section className="pt-32 md:pt-48 pb-24 px-6 md:px-24 max-w-[1400px] mx-auto min-h-[85vh] flex flex-col justify-center relative">
                
                {/* Decorative Elements */}
                <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-10 w-64 h-64 bg-[#d32f2f]/10 rounded-full blur-3xl pointer-events-none" 
                />
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#1a1a1a]/5 rounded-full blur-3xl pointer-events-none" 
                />

                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-20 lg:gap-14 relative z-10 w-full">
                    
                    {/* Text Header (Left Side) */}
                    <div className="w-full lg:w-5/12 flex flex-col items-start gap-4">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-3 mb-2"
                        >
                            <div className="w-8 h-[1px] bg-[#d32f2f]" />
                            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#d32f2f]">
                                Performance Metrics
                            </span>
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-[4.5rem] font-black uppercase tracking-tighter leading-[0.9]"
                        >
                            Exponential <br/>
                            <span className="text-outline text-[#d32f2f]" style={{ WebkitTextStroke: "1.5px #d32f2f" }}>Output Growth</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[#1a1a1a]/70 text-[11px] font-bold max-w-sm mt-4 leading-relaxed uppercase tracking-widest border-l-2 border-[#1a1a1a]/10 pl-4"
                        >
                            Our multi-disciplinary approach ensures compounding returns across brand identity, immersive interactive media, and high-conversion video production.
                        </motion.p>
                    </div>

                    {/* Bars Chart Area (Right Side) */}
                    <div className="w-full lg:w-7/12 h-[500px] flex items-end justify-center lg:justify-end gap-10 sm:gap-20 lg:gap-24 relative mt-16 lg:mt-0 xl:mr-10">
                        
                        {/* Bar 1: Branding */}
                        <div className="relative h-full flex flex-col justify-end w-20 sm:w-28 opacity-90 hover:opacity-100 transition-opacity translate-y-10 group">
                            {/* Floating White Card (Pushes LEFT) */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20, y: 10 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                className="absolute top-[10%] -left-12 sm:-left-32 w-36 sm:w-48 bg-white rounded-md shadow-[0_15px_50px_rgba(0,0,0,0.08)] p-5 border border-[#1a1a1a]/5 z-30 pointer-events-none group-hover:-translate-y-3 transition-transform duration-500"
                            >
                                <div className="w-5 h-[2px] bg-[#d32f2f] mb-3" />
                                <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-tight text-[#1a1a1a]">Branding</h4>
                                <p className="text-[8px] sm:text-[9px] text-[#1a1a1a]/60 font-bold mt-2 uppercase tracking-wide leading-relaxed">
                                    Establishing high-converting visual systems and market dominance.
                                </p>
                            </motion.div>

                            {/* The Bar */}
                            <motion.div 
                                initial={{ height: 0 }}
                                animate={{ height: "65%" }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className="w-full bg-gradient-to-t from-transparent via-[#d32f2f]/80 to-[#d32f2f] rounded-t-lg shadow-[0_0_30px_rgba(211,47,47,0.2)] relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(211,47,47,0.4)] transition-all duration-500"
                            >
                                {/* Animated Shine Effect inside bar */}
                                <motion.div 
                                    animate={{ y: ["100%", "-100%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                                    className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 w-full h-[200%]" 
                                />
                                <AnimatedCounter endValue={180} label="Retention" delay={0.8} />
                            </motion.div>
                        </div>

                        {/* Bar 2: Video (Taller) */}
                        <div className="relative h-full flex flex-col justify-end w-20 sm:w-28 opacity-90 hover:opacity-100 transition-opacity group">
                            {/* Floating White Card (Pushes UP/CENTER) */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                                className="absolute top-[35%] left-1/2 -translate-x-1/2 w-40 sm:w-52 bg-white rounded-md shadow-[0_15px_50px_rgba(0,0,0,0.08)] p-5 border border-[#1a1a1a]/5 z-40 pointer-events-none group-hover:-translate-y-3 transition-transform duration-500"
                            >
                                <div className="w-5 h-[2px] bg-[#1a1a1a] mb-3" />
                                <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-tight text-[#1a1a1a]">Video Production</h4>
                                <p className="text-[8px] sm:text-[9px] text-[#1a1a1a]/60 font-bold mt-2 uppercase tracking-wide leading-relaxed">
                                    Driving unparalleled user engagement with cinematic storytelling.
                                </p>
                            </motion.div>

                            {/* The Bar */}
                            <motion.div 
                                initial={{ height: 0 }}
                                animate={{ height: "95%" }}
                                transition={{ duration: 1.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                                className="w-full bg-gradient-to-t from-transparent via-[#1a1a1a]/90 to-[#1a1a1a] rounded-t-lg shadow-[0_0_30px_rgba(26,26,26,0.2)] relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(26,26,26,0.4)] transition-all duration-500"
                            >
                                <motion.div 
                                    animate={{ y: ["100%", "-100%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
                                    className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 w-full h-[200%]" 
                                />
                                <AnimatedCounter endValue={340} label="Conversion" delay={1.2} />
                            </motion.div>
                        </div>

                        {/* Bar 3: 3D Interactive */}
                        <div className="relative h-full flex flex-col justify-end w-20 sm:w-28 opacity-90 hover:opacity-100 transition-opacity translate-y-16 group z-20">
                            {/* Floating White Card (Pushes RIGHT) */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20, y: -10 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                                className="absolute top-[10%] -right-12 sm:-right-32 w-36 sm:w-48 bg-white rounded-md shadow-[0_15px_50px_rgba(0,0,0,0.08)] p-5 border border-[#1a1a1a]/5 z-30 pointer-events-none group-hover:-translate-y-3 transition-transform duration-500"
                            >
                                <div className="w-5 h-[2px] bg-[#e53935] mb-3" />
                                <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-tight text-[#1a1a1a]">3D Interactive</h4>
                                <p className="text-[8px] sm:text-[9px] text-[#1a1a1a]/60 font-bold mt-2 uppercase tracking-wide leading-relaxed">
                                    Immersive real-time experiences rendering abstract ideas to life.
                                </p>
                            </motion.div>

                            {/* The Bar */}
                            <motion.div 
                                initial={{ height: 0 }}
                                animate={{ height: "75%" }}
                                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                className="w-full bg-gradient-to-t from-transparent via-[#ef5350]/80 to-[#ef5350] rounded-t-lg shadow-[0_0_30px_rgba(239,83,80,0.2)] relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(239,83,80,0.4)] transition-all duration-500"
                            >
                                <motion.div 
                                    animate={{ y: ["100%", "-100%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.2 }}
                                    className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 w-full h-[200%]" 
                                />
                                <AnimatedCounter endValue={215} label="Engagement" delay={1.0} />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Showcase the rest of the projects portfolio to make the page look fully fleshed out and amazing */}
            <div className="relative z-20 bg-[#f8f8f8] pt-10">
                <FeaturedProjects />
            </div>

        </main>
    );
}
