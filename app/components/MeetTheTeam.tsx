"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
    {
        id: 1,
        name: "CYIZERE Happy",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800&auto=format&fit=crop", 
        quote: "Form must follow feeling."
    },
    {
        id: 2,
        name: "KAYIRANGA S. Kelia",
        role: "Lead 3D Architect",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
        quote: "Spaces shape the mind."
    },
    {
        id: 3,
        name: "NKUNDA Isabella",
        role: "Head of Video Production",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        quote: "Motion is emotion."
    },
    {
        id: 4,
        name: "UMUTONI U. Sandra",
        role: "Brand Strategist",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        quote: "Identity is the silent ambassador."
    }
];

export default function MeetTheTeam() {
    // phase: 0, 1, 2, 3 (team members) -> 4 (4WARD Extraordinary Phase)
    const [phase, setPhase] = useState(0);
    const [progress, setProgress] = useState(0);

    const SLIDE_DURATION = 5000; // 5 seconds per slide
    const TICK_RATE = 50;

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setPhase((p) => (p + 1) % 5);
                    return 0;
                }
                return prev + (100 / (SLIDE_DURATION / TICK_RATE));
            });
        }, TICK_RATE);

        return () => clearInterval(timer);
    }, []);

    // Manual navigation
    const goToPhase = (index: number) => {
        setPhase(index);
        setProgress(0);
    };

    const isFinale = phase === 4;
    const member = !isFinale ? teamMembers[phase] : null;

    return (
        <section id="about" className="relative w-full min-h-screen bg-[#f8f8f8] text-[#1a1a1a] flex items-center justify-center overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 grid-bg opacity-30" />
                {!isFinale && (
                    <motion.div 
                        key={phase}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-10"
                    >
                        <span className="text-[40rem] font-black leading-none font-jost tabular-nums text-[#1a1a1a]">
                            {phase + 1}
                        </span>
                    </motion.div>
                )}
            </div>

            {/* Main Content Area */}
            <div className="w-full max-w-[1400px] px-6 md:px-16 z-10 h-full flex flex-col justify-center">
                
                {/* Header */}
                <div className="absolute top-16 left-6 md:left-16 flex items-center gap-4 z-50">
                    <div className="w-12 h-[2px] bg-[#d32f2f]" />
                    <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-[#d32f2f]">Meet The Core</h2>
                </div>

                <AnimatePresence mode="wait">
                    {!isFinale ? (
                        <motion.div 
                            key={phase}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100, filter: "blur(10px)" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-32 w-full"
                        >
                            {/* Giant Number Indicator */}
                            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                                <div className="relative">
                                    <motion.span 
                                        initial={{ rotateY: 90 }}
                                        animate={{ rotateY: 0 }}
                                        transition={{ duration: 1, type: "spring" }}
                                        className="text-[12rem] lg:text-[18rem] font-black leading-none text-[#1a1a1a] opacity-[0.08] select-none"
                                    >
                                        0{phase + 1}
                                    </motion.span>
                                    <div className="absolute top-1/2 -left-10 w-full h-[2px] bg-[#d32f2f] -z-10" />
                                </div>
                            </div>

                            {/* Profile Card */}
                            <div className="w-full md:w-2/3 flex flex-col md:flex-row items-center md:items-start gap-8">
                                <div className="relative w-64 h-80 overflow-hidden shrink-0 shadow-[0_20px_50px_rgba(0,0,0,0.1)] group border border-[#1a1a1a]/10 bg-white p-2">
                                    {/* Grayscale to Color Reveal */}
                                    <motion.div 
                                        initial={{ scale: 1.2, filter: "grayscale(100%)" }}
                                        animate={{ scale: 1, filter: "grayscale(0%)" }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="w-full h-full relative"
                                    >
                                        <Image 
                                            src={member!.image}
                                            alt={member!.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                    {/* Scanning Line overlay */}
                                    <motion.div 
                                        animate={{ y: ["-10%", "110%"] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-x-0 top-0 h-[2px] bg-[#d32f2f] opacity-50 shadow-[0_0_10px_#d32f2f]"
                                    />
                                </div>

                                <div className="flex flex-col justify-center max-w-sm text-center md:text-left mt-0 md:mt-8 relative z-10">
                                    <motion.span 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-[#d32f2f] text-[10px] font-black tracking-[0.3em] uppercase mb-2 block"
                                    >
                                        {member!.role}
                                    </motion.span>
                                    <motion.h3 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6"
                                    >
                                        {member!.name}
                                    </motion.h3>
                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        className="text-sm font-bold text-[#1a1a1a]/50 italic border-l-2 border-[#d32f2f] pl-4"
                                    >
                                        &quot;{member!.quote}&quot;
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        // Phase 5 Finale: 4WARD Engaging Animation
                        <motion.div 
                            key="finale"
                            className="flex flex-col justify-center items-center h-full w-full relative"
                        >
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                                className="relative z-20 flex flex-col items-center"
                            >
                                <span className="text-[12px] font-black tracking-[0.8em] text-[#d32f2f] uppercase mb-8 ml-4">
                                    We Are
                                </span>
                                <h1 className="text-[6rem] sm:text-[10rem] md:text-[14rem] font-black uppercase tracking-tighter leading-none flex items-center">
                                    <motion.span 
                                        animate={{ color: ["#1a1a1a", "#d32f2f", "#1a1a1a"] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    >
                                        4
                                    </motion.span>
                                    <span className="text-outline border-[#1a1a1a]/20" style={{ WebkitTextStroke: "2px rgba(26,26,26,0.2)" }}>WARD</span>
                                </h1>
                                
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                    className="mt-8 text-[#1a1a1a]/60 text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-center max-w-lg"
                                >
                                    Extraordinary minds building the future of digital experience and creative commerce.
                                </motion.p>
                            </motion.div>
                            

                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <button 
                            key={i} 
                            onClick={() => goToPhase(i)}
                            className="relative w-16 h-1 bg-[#1a1a1a]/10 overflow-hidden cursor-pointer group"
                        >
                            {/* Fill bar if active */}
                            {phase === i && (
                                <motion.div 
                                    className="absolute top-0 left-0 h-full bg-[#d32f2f]"
                                    style={{ width: `${progress}%` }}
                                />
                            )}
                            {/* Fill bar if already passed */}
                            {phase > i && (
                                <div className="absolute top-0 left-0 h-full w-full bg-[#d32f2f]/40" />
                            )}
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
}
