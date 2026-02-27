"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";

const projects = [
    {
        id: "01",
        name: "CineFlow",
        subtitle: "Visual Narrative Platform",
        overview: "CineFlow is an industry-standard color grading and visual storytelling platform designed for high-end cinematic productions. It offers professional tools for directors and colorists to achieve consistency across complex visual narratives.",
        accentColor: "#d32f2f",
        deviceType: "phone",
        image: "/project-mockup.png",
        tagline: "Visual Excellence",
        mobileLabel: "CineFlow Mobile",
        mobileSub: "Post-Production Suite"
    },
    {
        id: "02",
        name: "Planshift",
        subtitle: "3D Architecture & VR Explorer",
        overview: "Planshift converts flat architectural plans into navigable 3D environments, allowing clients to explore their future homes in VR before construction begins. Experience every detail in immersive virtual reality before the first brick is laid.",
        accentColor: "#d32f2f",
        deviceType: "laptop",
        image: "/planshift-mockup.png",
        tagline: "Spatial Innovation",
        mobileLabel: "Planshift VR",
        mobileSub: "Architectural Engine"
    }
];

export default function FeaturedProjects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const project = projects[currentIndex];

    const nextProject = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, [projects.length]);

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Auto-play timer logic
    useEffect(() => {
        const timer = setInterval(() => {
            nextProject();
        }, 5000); // Switch every 5 seconds

        return () => clearInterval(timer);
    }, [nextProject, currentIndex]); // Reset timer on manual change or nextProject update

    return (
        <section className="relative w-full bg-[#f8f8f8] grid-bg font-jost overflow-hidden py-16 px-12 md:px-32">
            {/* ── Section Header ── */}
            <div className="relative z-10 mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-4 animate-pop-up-in">
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

                {/* Carousel Controls */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={prevProject}
                        className="group w-12 h-12 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center hover:bg-[#1a1a1a] transition-all duration-300"
                    >
                        <svg className="group-hover:text-white transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                        </svg>
                    </button>
                    <div className="flex gap-2">
                        {projects.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 transition-all duration-300 rounded-full ${i === currentIndex ? "w-8 bg-[#d32f2f]" : "w-1.5 bg-[#1a1a1a]/20"}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextProject}
                        className="group w-12 h-12 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center hover:bg-[#1a1a1a] transition-all duration-300"
                    >
                        <svg className="group-hover:text-white transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* ── Main Showcase Container ── */}
            <div key={currentIndex} className="relative w-full min-h-[320px] flex flex-col md:flex-row items-center animate-fade-in transition-all">

                {/* Left Side: Overview & Numbering */}
                <div className="relative z-20 w-full md:w-1/2 flex flex-col items-start pt-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="relative">
                        <span className="text-[8rem] md:text-[12rem] font-black leading-none text-[#1a1a1a]/5 select-none absolute -top-20 -left-6">
                            {project.id}
                        </span>
                        <div className="relative mt-14">
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">
                                Project <span className="text-[#d32f2f]">Overview</span>
                            </h3>

                            <div className="max-w-sm bg-[#d32f2f] text-white p-6 md:p-8 rounded-[2.5rem] rounded-tr-none shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                                <div className="absolute inset-0 opacity-10 pointer-events-none grid-bg-white" />
                                <p className="text-xs md:text-sm leading-relaxed font-medium relative z-10">
                                    {project.overview}
                                </p>
                                <div className="mt-5 flex items-center gap-4 relative z-10">
                                    <div className="h-0.5 w-12 bg-white/30" />
                                    <span className="text-[10px] font-bold tracking-widest uppercase opacity-70">
                                        {project.tagline}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Device & Name */}
                <div className="relative w-full md:w-1/2 flex items-center justify-center pt-20 md:pt-0">

                    {/* Large Project Name in Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                        <h4 className="text-[5rem] md:text-[10rem] font-black text-[#1a1a1a] opacity-[0.03] select-none leading-none tracking-tighter uppercase whitespace-nowrap">
                            {project.name}
                        </h4>
                    </div>

                    {/* Project Title Overlay */}
                    <div className="absolute right-0 top-1/4 md:top-1/3 z-50 text-right pr-4 md:pr-10">
                        <h4
                            className="text-3xl md:text-5xl font-black text-[#1a1a1a] flex items-center justify-end gap-2 leading-tight uppercase"
                            style={{ textShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 40px white" }}
                        >
                            {project.name.substring(0, project.name.length / 2)}<span className="text-[#d32f2f]">{project.name.substring(project.name.length / 2)}</span>
                            <div className="w-8 h-8 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </div>
                        </h4>
                        <span className="text-xs md:text-sm font-bold text-[#1a1a1a]/60 tracking-widest uppercase block mt-2 bg-white/20 backdrop-blur-[2px] inline-block px-1">
                            {project.subtitle}
                        </span>
                    </div>

                    {/* Device Mockup */}
                    <div className="relative z-20 w-full max-w-[420px] flex justify-center">
                        {project.deviceType === "phone" ? (
                            <div className="relative animate-float">
                                <DeviceMockup scale={0.6}>
                                    <div className="relative w-full h-full bg-[#1a1a1a] overflow-hidden">
                                        <Image src={project.image} alt={project.name} fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                                            <div className="w-12 h-1 bg-[#d32f2f] mb-4" />
                                            <h5 className="text-white font-black uppercase text-xl mb-1">{project.mobileLabel}</h5>
                                            <p className="text-white/60 text-[10px] font-medium uppercase tracking-widest">{project.mobileSub}</p>
                                        </div>
                                    </div>
                                </DeviceMockup>

                                {/* Secondary Small Mockup (Restored) */}
                                <div className="absolute -bottom-8 -right-8 w-28 md:w-36 z-50 animate-float" style={{ animationDelay: '1s' }}>
                                    <DeviceMockup scale={0.35}>
                                        <div className="w-full h-full bg-[#d32f2f] flex items-center justify-center p-4">
                                            <span className="text-white font-black text-4xl italic">CF</span>
                                        </div>
                                    </DeviceMockup>
                                </div>
                            </div>
                        ) : (
                            <div className="relative animate-float">
                                <LaptopMockup scale={0.75}>
                                    <div className="relative w-full h-full bg-[#1a1a1a] overflow-hidden">
                                        <Image src={project.image} alt={project.name} fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                                            <div className="w-12 h-1 bg-[#d32f2f] mb-4" />
                                            <h5 className="text-white font-black uppercase text-2xl mb-1">{project.mobileLabel}</h5>
                                            <p className="text-white/60 text-[12px] font-medium uppercase tracking-widest">{project.mobileSub}</p>
                                        </div>
                                    </div>
                                </LaptopMockup>

                                {/* Secondary Small Mockup for Planshift */}
                                <div className="absolute -bottom-8 -right-4 w-28 md:w-36 z-50 animate-float" style={{ animationDelay: '1.5s' }}>
                                    <DeviceMockup scale={0.3}>
                                        <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center p-4">
                                            <span className="text-white font-black text-4xl italic">PS</span>
                                        </div>
                                    </DeviceMockup>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
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
