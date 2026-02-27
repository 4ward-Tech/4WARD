"use client";

import Image from "next/image";
import React from "react";

export default function FeaturedProjects() {
    return (
        <section className="relative w-full bg-[#f8f8f8] grid-bg font-jost overflow-hidden py-16 px-12 md:px-32">
            {/* ── Section Header ── */}
            <div className="relative z-10 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4 animate-pop-up-in">
                <div>
                    <span className="text-[10px] font-black tracking-[0.3em] text-[#d32f2f] uppercase block mb-2">
                        Selected Work
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
                        Featured{" "}
                        <span className="text-outline" style={{ WebkitTextStroke: "2px #1a1a1a" }}>
                            Projects
                        </span>
                    </h2>
                </div>
            </div>

            {/* ── Main Showcase Container ── */}
            <div className="relative w-full min-h-[400px] flex flex-col md:flex-row items-center">

                {/* Left Side: Overview & Numbering */}
                <div className="relative z-20 w-full md:w-1/2 flex flex-col items-start pt-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <div className="relative">
                        <span className="text-[12rem] md:text-[18rem] font-black leading-none text-[#1a1a1a]/5 select-none absolute -top-32 -left-10">
                            01
                        </span>
                        <div className="relative mt-20">
                            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
                                Project <span className="text-[#d32f2f]">Overview</span>
                            </h3>

                            {/* Rounded Description Box (Inspired by Reference) */}
                            <div className="max-w-md bg-[#d32f2f] text-white p-8 md:p-12 rounded-[3.5rem] rounded-tr-none shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                                <div className="absolute inset-0 opacity-10 pointer-events-none grid-bg-white" />
                                <p className="text-sm md:text-base leading-relaxed font-medium relative z-10">
                                    CineFlow is an industry-standard color grading and visual storytelling
                                    platform designed for high-end cinematic productions. It offers
                                    professional tools for directors and colorists to achieve
                                    consistency across complex visual narratives.
                                </p>
                                <div className="mt-8 flex items-center gap-4 relative z-10">
                                    <div className="h-0.5 w-12 bg-white/30" />
                                    <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">
                                        Visual Excellence
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: 3D Device & Name */}
                <div className="relative w-full md:w-1/2 flex items-center justify-center pt-20 md:pt-0">

                    {/* Large Project Name in Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                        <h4 className="text-[8rem] md:text-[15rem] font-black text-[#1a1a1a] opacity-[0.03] select-none leading-none tracking-tighter">
                            CINEFLOW
                        </h4>
                    </div>

                    {/* Project Title Overlay */}
                    <div className="absolute right-0 top-1/4 md:top-1/3 z-50 text-right pr-4 md:pr-10">
                        <h4
                            className="text-4xl md:text-6xl font-black text-[#1a1a1a] flex items-center justify-end gap-3 leading-tight"
                            style={{ textShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 40px white" }}
                        >
                            Cine<span className="text-[#d32f2f]">Flow</span>
                            <div className="w-10 h-10 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </div>
                        </h4>
                        <span className="text-xs md:text-sm font-bold text-[#1a1a1a]/60 tracking-widest uppercase block mt-2 bg-white/20 backdrop-blur-[2px] inline-block px-1">
                            Visual Narrative Platform
                        </span>
                    </div>

                    {/* Dynamic CSS 3D Device Container */}
                    <div className="relative z-20 w-full max-w-[450px] animate-float">
                        <DeviceMockup rotation="0deg" scale={0.85}>
                            <div className="relative w-full h-full bg-[#1a1a1a] overflow-hidden">
                                <Image
                                    src="/project-mockup.png"
                                    alt="Project Screen"
                                    fill
                                    className="object-cover"
                                />
                                {/* UI Overlay Simulating an App */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                                    <div className="w-12 h-1 bg-[#d32f2f] mb-4" />
                                    <h5 className="text-white font-black uppercase text-xl mb-1">CineFlow Mobile</h5>
                                    <p className="text-white/60 text-[10px] font-medium uppercase tracking-widest">Post-Production Suite</p>
                                </div>
                            </div>
                        </DeviceMockup>

                        {/* Secondary Small Mockup */}
                        <div className="absolute -bottom-16 -right-10 w-40 md:w-56 z-50 animate-float" style={{ animationDelay: '1s' }}>
                            <DeviceMockup rotation="0deg" scale={0.5}>
                                <div className="w-full h-full bg-[#d32f2f] flex items-center justify-center p-4">
                                    <span className="text-white font-black text-4xl italic">CF</span>
                                </div>
                            </DeviceMockup>
                        </div>
                    </div>
                </div>

            </div>

            {/* ── Decoration Elements ── */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1 h-32 bg-[#d32f2f]/10" />
            <div className="absolute bottom-10 right-10 flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d32f2f]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#d32f2f]/30" />
            </div>
        </section>
    );
}

/**
 * DeviceMockup: A dynamic CSS 3D device container.
 * Acts as a placeholder with standard phone proportions.
 */
function DeviceMockup({
    children,
    rotation = "0deg",
    scale = 1
}: {
    children: React.ReactNode,
    rotation?: string,
    scale?: number
}) {
    return (
        <div className="relative" style={{ perspective: "2000px" }}>
            {/* The 3D Frame */}
            <div
                className="relative mx-auto transition-transform duration-1000 ease-out"
                style={{
                    width: `${300 * scale}px`,
                    height: `${620 * scale}px`,
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${rotation}) scale(${scale})`
                }}
            >
                {/* 1. Phone Body (Depth/Sides) */}
                <div
                    className="absolute inset-0 bg-[#0f0f0f] rounded-[3rem] shadow-[0_0_0_2px_#2a2a2a]"
                    style={{ transform: "translateZ(-10px)" }}
                />

                {/* 2. Main Bezel/Frame */}
                <div className="absolute inset-0 bg-black rounded-[2.8rem] border-[10px] border-[#1a1a1a] shadow-inner overflow-hidden">
                    {/* Screen Content Slot */}
                    <div className="w-full h-full relative bg-zinc-900 overflow-hidden">
                        {children}
                    </div>

                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full flex items-center justify-center gap-1.5 z-50">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20" />
                        <div className="w-3 h-3 rounded-full bg-[#1a1a1a] border border-white/5" />
                    </div>
                </div>

                {/* 3. Glass Overlay & Shine */}
                <div
                    className="absolute inset-0 rounded-[2.8rem] pointer-events-none z-40"
                    style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.05) 100%)",
                        boxShadow: "inset 0 0 40px rgba(0,0,0,0.5)"
                    }}
                />

                {/* Side Buttons Decoration */}
                <div className="absolute -left-[2px] top-24 w-1 h-12 bg-[#2a2a2a] rounded-r-sm" />
                <div className="absolute -left-[2px] top-40 w-1 h-12 bg-[#2a2a2a] rounded-r-sm" />
                <div className="absolute -right-[2px] top-28 w-1 h-16 bg-[#2a2a2a] rounded-l-sm" />

                {/* Floor Shadow (Inclined) */}
                <div
                    className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-12 bg-black/20 blur-3xl rounded-full"
                    style={{ transform: "translateZ(-50px) rotateX(90deg)" }}
                />
            </div>
        </div>
    );
}
