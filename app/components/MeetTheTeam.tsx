"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
    {
        id: "T-001",
        name: "CYIZERE Happy",
        role: "Co-founder",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800&auto=format&fit=crop", 
        quote: "Grounding structure in practical efficiency.",
        bio: "Cyizere is a co-founder who brings structure and strategic thinking to the team. He contributes to planning, problem-solving, and ensuring projects stay aligned with their goals. His approach is grounded in efficiency and practical results.",
        tech: ["Strategic Planning", "Optimization", "System Architecture", "Efficiency Ops"]
    },
    {
        id: "T-002",
        name: "KAYIRANGA S. Kelia",
        role: "Co-founder",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
        quote: "Maintaining synergy and forward momentum.",
        bio: "Kelia is a co-founder who contributes energy and collaboration to the team. She supports coordination, idea development, and maintaining team synergy. Her strength lies in communication and keeping the team moving forward together.",
        tech: ["Coordination", "Collaboration", "Idea Development", "Synergy Management"]
    },
    {
        id: "T-003",
        name: "NKUNDA Isabella",
        role: "Co-founder",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        quote: "Refining creativity with rigorous detail.",
        bio: "Isabella is a co-founder known for her creativity and attention to detail. She helps refine ideas, improve user experience, and ensure the team’s work is both functional and engaging. She has a strong eye for design and presentation.",
        tech: ["Creative Direction", "UX Refinement", "Design Ethics", "Visual Presentation"]
    },
    {
        id: "T-004",
        name: "UMUTONI U. Sandra",
        role: "Co-founder",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        quote: "Innovation meets impactful execution.",
        bio: "Sandra is a co-founder with a strong focus on innovation and execution. She plays a key role in shaping the team’s vision and ensuring ideas turn into real, impactful solutions. Her interests lie in technology, product design, and building systems that solve real-world problems.",
        tech: ["Tech Innovation", "Product Design", "Execution Logic", "Systemic Solutions"]
    }
];

export default function MeetTheTeam() {
    const [phase, setPhase] = useState(0);
    const [progress, setProgress] = useState(0);
    const [selectedMember, setSelectedMember] = useState<any>(null);

    const SLIDE_DURATION = 5000; 
    const TICK_RATE = 50;

    useEffect(() => {
        if (selectedMember) return; // Pause auto-slide when details are open

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
    }, [selectedMember, phase]);

    const goToPhase = (index: number) => {
        setPhase(index);
        setProgress(0);
    };

    const isFinale = phase === 4;
    const member = !isFinale ? teamMembers[phase] : null;

    return (
        <section id="about" className="relative w-full min-h-screen bg-transparent text-[#1a1a1a] flex items-center justify-center overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute inset-0 z-0">

                {!isFinale && (
                    <motion.div 
                        key={phase}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
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

                            <div className="w-full md:w-2/3 flex flex-col md:flex-row items-center md:items-start gap-8">
                                <motion.div 
                                    onClick={() => setSelectedMember(member)}
                                    layoutId={`member-${member!.id}`}
                                    className="relative w-64 h-80 overflow-hidden shrink-0 shadow-[0_20px_50px_rgba(0,0,0,0.1)] group border border-[#1a1a1a]/10 bg-white p-2 cursor-pointer transition-transform hover:scale-[1.02]"
                                >
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
                                            className="object-cover transition-all duration-700 group-hover:scale-110"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <span className="text-[10px] font-black text-white uppercase tracking-[0.4em] border border-white/20 px-6 py-3 backdrop-blur-md">View Protocol</span>
                                    </div>
                                    <motion.div 
                                        animate={{ y: ["-10%", "110%"] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-x-0 top-0 h-[2px] bg-[#d32f2f] opacity-50 shadow-[0_0_10px_#d32f2f]"
                                    />
                                </motion.div>

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
                            {phase === i && (
                                <motion.div 
                                    className="absolute top-0 left-0 h-full bg-[#d32f2f]"
                                    style={{ width: `${progress}%` }}
                                />
                            )}
                            {phase > i && (
                                <div className="absolute top-0 left-0 h-full w-full bg-[#d32f2f]/40" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* FULL SCREEN MEMBER DETAIL OVERLAY */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-6 md:p-12 cursor-default bg-[#0a0a0a]"
                    >
                        {/* Immersive Background (The 'Transparent' Photo) */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <motion.div 
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 0.25 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="w-full h-full"
                            >
                                <Image 
                                    src={selectedMember.image} 
                                    alt="Ambient"
                                    fill
                                    className="object-cover blur-[80px] scale-110"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-black/40" />
                        </div>

                        {/* Precision Backdrop Trigger */}
                        <div 
                            className="absolute inset-0 z-10" 
                            onClick={() => setSelectedMember(null)}
                        />

                        {/* The High-Precision Modal Box */}
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                            className="relative z-20 w-full max-w-7xl h-[85vh] bg-[#0d0d0d] rounded-3xl border border-white/5 shadow-[0_120px_200px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
                        >
                            {/* Ambient Cinematic Backdrop inside box */}
                            <div className="absolute inset-0 z-0 pointer-events-none">
                                <Image src={selectedMember.image} alt="glow" fill className="object-cover opacity-[0.05] blur-[80px]" />
                            </div>

                            {/* Precision Header */}
                            <div className="relative z-20 flex justify-between items-center px-12 py-10">
                                <button 
                                    onClick={() => setSelectedMember(null)}
                                    className="text-[10px] font-mono tracking-[0.4em] text-white/40 uppercase hover:text-white transition-all flex items-center gap-2 group"
                                >
                                    [ <span className="group-hover:text-[#d32f2f] transition-colors">CLOSE</span> ]
                                </button>
                                <button className="text-[10px] font-mono tracking-[0.4em] text-white/40 uppercase hover:text-white transition-all">
                                    [ HIDE SIDEBAR ]
                                </button>
                            </div>

                            {/* Modal Content - Fixed Hierarchy */}
                            <div className="relative z-20 flex-1 flex flex-col lg:flex-row items-center px-12 lg:px-24 pb-12 gap-20 overflow-hidden">
                                
                                {/* Central Creative Asset (The Portrait) */}
                                <div className="flex-1 h-full flex items-center justify-center">
                                    <motion.div 
                                        layoutId={`member-${selectedMember.id}`}
                                        className="relative aspect-[3/4] h-[85%] max-h-[500px] shadow-[0_50px_100px_rgba(0,0,0,0.6)] border border-white/10 group overflow-hidden"
                                    >
                                        <Image 
                                            src={selectedMember.image} 
                                            alt={selectedMember.name} 
                                            fill 
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    </motion.div>
                                </div>

                                {/* Detail Sidebar (Right) */}
                                <div className="w-full lg:w-[450px] h-full flex flex-col justify-center gap-10">
                                    
                                    {/* Identity & Protocol */}
                                    <div className="flex flex-col gap-6">
                                        <h2 className="text-2xl md:text-3xl font-mono font-bold uppercase tracking-widest text-white leading-tight">
                                            {selectedMember.role} - <br /> {selectedMember.name}
                                        </h2>
                                        <div className="flex items-center gap-4 text-[9px] font-mono text-white/30 tracking-[0.3em] uppercase">
                                            <span>MAR.22.RANDA</span>
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#d32f2f] animate-pulse" />
                                            <span>8 MINS AGO</span>
                                        </div>
                                    </div>

                                    <div className="h-[1px] w-full bg-white/5" />

                                    {/* Personnel Prompt */}
                                    <div className="flex flex-col gap-5">
                                        <span className="text-[10px] font-mono uppercase text-[#d32f2f] tracking-[0.4em]">[ PROMPT ]</span>
                                        <p className="text-[11px] font-mono text-white/50 leading-relaxed uppercase tracking-normal">
                                            {selectedMember.bio} Optimized for 4WARD creative core operations. Protocol strength 98.4%.
                                        </p>
                                    </div>

                                    {/* Core Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {selectedMember.tech.map((t: string) => (
                                            <span key={t} className="px-4 py-1.5 border border-white/10 bg-white/5 text-[9px] font-mono uppercase tracking-widest text-white/40">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="h-[1px] w-full bg-white/5" />

                                    {/* Registry ID */}
                                    <div className="flex flex-col gap-5">
                                        <span className="text-[10px] font-mono uppercase text-[#d32f2f] tracking-[0.4em]">[ JOB-ID ]</span>
                                        <span className="text-[10px] font-mono text-white/20 select-all break-all">
                                            4WARD_SECURE_TOKEN_{selectedMember.id.replace('T-', '')}_KGL_NODE
                                        </span>
                                    </div>

                                    {/* Interactive Actions */}
                                    <div className="flex items-center gap-6 pt-4">
                                        <button className="flex items-center gap-3 bg-white text-black px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-[#d32f2f] hover:text-white">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                                            DOWNLOAD
                                        </button>
                                        <button className="text-[10px] font-mono tracking-widest text-white/30 uppercase hover:text-white transition-colors flex items-center gap-3 group">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                            COPY PROMPT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
