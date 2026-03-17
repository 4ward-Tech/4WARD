"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "../../lib/projects";
import React from "react";

export default function ProjectPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="relative min-h-screen w-full bg-[#f8f8f8] grid-bg font-jost text-[#1a1a1a] overflow-x-hidden pt-12">
            {/* Header / Intro Section */}
            <section className="relative z-10 py-8 pr-12 pl-20 md:py-12 md:pr-24 md:pl-40 flex flex-col items-center">
                <div className="w-full flex flex-col md:flex-row items-center gap-12 md:gap-24 max-w-7xl">
                    {/* Left: Device Mockup */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full md:w-1/2 flex justify-center"
                    >
                        <div className="relative group">
                            <div className="relative z-10 scale-75 md:scale-90 lg:scale-100">
                                {project.deviceType === "phone" ? (
                                    <div className="w-[260px] h-[540px] bg-black rounded-[2.5rem] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden relative">
                                        <Image src={project.image} alt={project.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    </div>
                                ) : (
                                    <div className="w-[450px] h-[280px] bg-black rounded-t-xl border-[10px] border-[#1a1a1a] shadow-2xl overflow-hidden relative">
                                        <Image src={project.image} alt={project.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                        <div className="absolute inset-x-0 bottom-[-15px] h-[15px] bg-[#1a1a1a] rounded-b-xl" />
                                    </div>
                                )}
                            </div>
                            {/* Floating Card */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -bottom-6 -right-4 md:-right-10 bg-white p-6 md:p-8 shadow-2xl border border-[#1a1a1a]/5 max-w-xs z-20"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-[1.5px] bg-[#d32f2f]" />
                                    <span className="text-[9px] font-black tracking-[0.3em] text-[#d32f2f] uppercase">Case Study</span>
                                </div>
                                <h3 className="text-xl font-black uppercase mb-2 tracking-tighter leading-none">{project.name}</h3>
                                <p className="text-[9px] font-bold text-[#1a1a1a]/50 leading-relaxed uppercase italic">
                                    {project.description}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Project Title & Stats */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="mb-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-white shadow-xl flex items-center justify-center border border-[#1a1a1a]/5">
                                    <span className="text-[#d32f2f] font-black text-xl italic">{project.name.charAt(0)}</span>
                                </div>
                                <div className="h-full w-[1px] bg-[#1a1a1a]/10 self-stretch my-1" />
                                <span className="text-[9px] font-black uppercase tracking-[0.5em] opacity-40">{project.name} PLATFORM</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.8] tracking-tighter mb-8 overflow-visible">
                                <span className="block mb-1">{project.name}</span>
                                <span className="text-outline block" style={{ WebkitTextStroke: "1.2px #1a1a1a" }}>Engine</span>
                            </h1>
                            
                            <p className="text-sm md:text-base text-[#1a1a1a]/80 font-bold leading-relaxed max-w-md border-l-2 border-[#d32f2f] pl-5 py-1">
                                {project.overview}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 border-t border-[#1a1a1a]/5 pt-8">
                            <div className="flex flex-col gap-1">
                                <span className="text-[8px] font-black uppercase tracking-[0.4em] opacity-30 block">Industry</span>
                                <span className="text-xs font-black uppercase tracking-tight text-[#d32f2f]">{project.category}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[8px] font-black uppercase tracking-[0.4em] opacity-30 block">Launch Year</span>
                                <span className="text-xs font-black tracking-widest">{project.year}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Exploration / User Flow Section */}
            <section className="relative z-10 py-16 pr-12 pl-20 md:py-24 md:pr-24 md:pl-40 border-y border-[#1a1a1a]/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-[1px] bg-[#d32f2f]" />
                            <span className="text-[9px] font-black text-[#d32f2f] uppercase tracking-[0.5em]">System Architecture</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">Exploration</h2>
                        <p className="text-xs md:text-sm text-[#1a1a1a]/50 font-bold leading-relaxed max-w-xl uppercase tracking-tight">
                            We structured the system to prioritize user velocity and clarity.
                        </p>
                    </motion.div>

                    {/* Refined Tree Diagram - COMPACT HEIGHT */}
                    <div className="relative min-h-[450px] w-full mt-12 hidden md:block overflow-visible scale-90 origin-left">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse">
                                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#1a1a1a" filter="opacity(0.1)" />
                                </marker>
                            </defs>
                            
                            {/* Lines connecting nodes - UPDATED COORDINATES */}
                            <g stroke="#1a1a1a" strokeWidth="1" fill="none" opacity="0.1" markerEnd="url(#arrow)">
                                <path d="M110 225 H170" />
                                <path d="M280 225 C310 225 310 150 340 150" />
                                <path d="M280 225 C310 225 310 300 340 300" />
                                <path d="M450 150 C480 150 480 75 510 75" />
                                <path d="M450 150 C480 150 480 175 510 175" />
                                <path d="M450 300 C480 300 480 250 510 250" />
                                <path d="M450 300 C480 300 480 325 510 325" />
                                <path d="M450 300 C480 300 480 400 510 400" />
                                <path d="M620 75 C650 75 650 100 680 100" />
                                <path d="M620 175 C650 175 650 175 680 175" />
                                <path d="M620 250 C650 250 650 250 680 250" />
                                <path d="M620 400 C650 400 650 400 680 400" />
                                <path d="M790 175 C820 175 820 250 850 250" />
                                <path d="M790 250 C820 250 820 250 850 250" />
                            </g>
                        </svg>

                        {/* Nodes positioned absolutely - COMPACTED */}
                        <div className="absolute top-[175px] left-0"><FlowNode label="Splash" /></div>
                        <div className="absolute top-[175px] left-[170px]"><FlowNode label="Onboarding" showAccent /></div>
                        <div className="absolute top-[100px] left-[340px]"><FlowNode label="Registration" /></div>
                        <div className="absolute top-[250px] left-[340px]"><FlowNode label="Login" showAccent /></div>
                        <div className="absolute top-[25px] left-[510px]"><FlowNode label="Home" /></div>
                        <div className="absolute top-[125px] left-[510px]"><FlowNode label="Catalog" showAccent /></div>
                        <div className="absolute top-[200px] left-[510px]"><FlowNode label="Favorites" showAccent /></div>
                        <div className="absolute top-[350px] left-[510px]"><FlowNode label="Profile" /></div>
                        <div className="absolute top-[50px] left-[680px]"><FlowNode label="Quick View" showAccent /></div>
                        <div className="absolute top-[125px] left-[680px]"><FlowNode label="Game Page" /></div>
                        <div className="absolute top-[200px] left-[680px]"><FlowNode label="Hardware" showAccent /></div>
                        <div className="absolute top-[350px] left-[680px]"><FlowNode label="Quick View" /></div>
                        <div className="absolute top-[200px] left-[850px]"><FlowNode label="Checkout" showAccent /></div>
                    </div>

                    {/* Mobile View */}
                    <div className="flex flex-col items-center gap-12 md:hidden px-4">
                        {project.userFlowSteps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center w-full">
                                <FlowNode label={step.title} showAccent={idx % 2 === 1} wide />
                                {idx < project.userFlowSteps.length - 1 && (
                                    <div className="w-[1px] h-10 bg-gray-200 mt-4" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Designing Section */}
            <section className="relative z-10 py-16 pr-12 pl-20 md:py-24 md:pr-24 md:pl-40">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-[1px] bg-[#d32f2f]" />
                            <span className="text-[9px] font-black text-[#d32f2f] uppercase tracking-[0.5em]">Case Production</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">{project.deviceType === "phone" ? "Mobile app" : "Web Experience"}</h2>
                        <p className="text-sm text-[#1a1a1a]/60 font-bold leading-relaxed mb-10 max-w-md">
                            {project.designGoal}
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex gap-5 items-start group">
                                <div className="w-9 h-9 border border-[#1a1a1a]/10 flex items-center justify-center bg-white shadow-sm group-hover:bg-[#d32f2f] group-hover:text-white transition-all duration-500">
                                    <span className="text-[10px] font-black">01</span>
                                </div>
                                <div>
                                    <h4 className="text-xs font-black uppercase mb-1 tracking-widest">Minimalist UI</h4>
                                    <p className="text-[10px] font-bold text-[#1a1a1a]/40 max-w-[280px] leading-relaxed">Eliminated all superfluous elements.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-start group">
                                <div className="w-9 h-9 border border-[#1a1a1a]/10 flex items-center justify-center bg-white shadow-sm group-hover:bg-[#d32f2f] group-hover:text-white transition-all duration-500">
                                    <span className="text-[10px] font-black">02</span>
                                </div>
                                <div>
                                    <h4 className="text-xs font-black uppercase mb-1 tracking-widest">UX Velocity</h4>
                                    <p className="text-[10px] font-bold text-[#1a1a1a]/40 max-w-[280px] leading-relaxed">Engineered shortest possible paths.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full md:w-1/2 relative flex justify-center py-12 md:py-0"
                        style={{ perspective: "1500px" }}
                    >
                        <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
                            {/* Primary Phone */}
                            <motion.div 
                                initial={{ rotateY: 0, x: 0 }}
                                whileInView={{ rotateY: -25, x: -30, rotateX: 5 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="relative w-[210px] h-[430px] bg-black rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-[20px_40px_80px_rgba(0,0,0,0.3)] overflow-hidden z-20"
                            >
                                <Image src={project.image} alt="Mobile App 1" fill className="object-cover grayscale group-hover:grayscale-0 transition-opacity duration-700" />
                                <div className="absolute inset-x-0 top-0 h-6 bg-black/40 backdrop-blur-md z-30" />
                            </motion.div>

                            {/* Secondary Phone (Offset) */}
                            <motion.div 
                                initial={{ rotateY: 0, x: 0 }}
                                whileInView={{ rotateY: -15, x: 50, y: 30, rotateX: -5 }}
                                transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                                className="absolute w-[210px] h-[430px] bg-[#1a1a1a] rounded-[2.5rem] border-[6px] border-[#151515] shadow-[40px_20px_100px_rgba(0,0,0,0.4)] overflow-hidden z-10 opacity-80"
                            >
                                <Image src={project.fullImage} alt="Mobile App 2" fill className="object-cover grayscale" />
                                <div className="absolute inset-0 bg-black/20" />
                            </motion.div>

                            {/* Floating ID Tag - Refined */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-4 right-0 md:-right-4 bg-[#d32f2f] p-8 shadow-[0_30px_60px_rgba(211,47,47,0.3)] z-30 flex flex-col gap-2 min-w-[140px] rotate-3"
                            >
                                <div className="w-8 h-[1.5px] bg-white/40 mb-1" />
                                <span className="text-white font-black text-2xl italic leading-none tracking-tighter">
                                    VER_{project.id}
                                </span>
                                <span className="text-white/60 text-[8px] font-black uppercase tracking-[0.4em]">Creative ID</span>
                            </motion.div>
                            
                            {/* Background blur/shadow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#d32f2f]/5 blur-[120px] rounded-full pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bottom Nav / Next Project */}
            <section className="relative z-10 py-12 bg-[#1a1a1a] text-white">
                <div className="max-w-7xl mx-auto px-12 md:px-24 flex justify-between items-center">
                    <Link href="/" className="group flex items-center gap-4">
                        <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest">Back to Home</span>
                    </Link>

                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 mb-2">Next Journey</span>
                        <Link href={`/projects/${projects[(projects.indexOf(project) + 1) % projects.length].slug}`} className="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-[#d32f2f] transition-colors">
                            {projects[(projects.indexOf(project) + 1) % projects.length].name}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

const FlowNode = ({ label, showAccent = false, wide = false }: { label: string; showAccent?: boolean; wide?: boolean }) => (
    <div className={`h-36 bg-white border border-[#e5e5e5] p-2 flex flex-col items-center justify-between shadow-sm group hover:shadow-md transition-shadow ${wide ? "w-full" : "w-28"}`}>
        <div className="w-full aspect-[4/3] bg-gray-50 flex items-center justify-center p-2">
            <svg className="w-full h-full text-gray-200" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c0 1.1-.9-2-2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
        </div>
        <div className="w-full flex flex-col gap-1 mt-2">
            <div className="w-3/4 h-[2px] bg-gray-100" />
            <div className="w-1/2 h-[2px] bg-gray-100" />
            {showAccent && <div className="w-full h-4 mt-1 bg-[#d32f2f]/80" />}
        </div>
        <span className="text-[8px] font-black uppercase tracking-widest mt-2">{label}</span>
    </div>
);

const DeviceMockup = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mx-auto w-[300px] h-[600px] bg-black rounded-[3rem] border-[12px] border-[#1a1a1a] shadow-2xl overflow-hidden">
        {children}
    </div>
);
