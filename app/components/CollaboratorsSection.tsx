"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const collaborators = [
    {
        name: "ALEXANDRA K.",
        role: "UX/UI Specialist",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
        focus: "Interaction Design"
    },
    {
        name: "DAVID JENKINS",
        role: "Motion Designer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        focus: "3D & Animation"
    },
    {
        name: "SARAH WILLIAMS",
        role: "Frontend Engineer",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        focus: "Performance Optimization"
    },
    {
        name: "MICHAEL M.",
        role: "Brand Strategist",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
        focus: "Identity Architecture"
    }
];

export default function CollaboratorsSection() {
    return (
        <section className="w-full bg-transparent text-[#1a1a1a] py-32 relative overflow-hidden z-20">
            {/* Background elements */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d32f2f] opacity-[0.03] blur-[120px] pointer-events-none" />
            
            <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
                >
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-[1px] bg-[#d32f2f]" />
                            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#d32f2f]">Extended Network</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                            Independent <br />
                            <span className="text-outline text-transparent" style={{ WebkitTextStroke: "1px rgba(26,26,26,0.3)" }}>Collaborators</span>
                        </h2>
                    </div>
                    <p className="text-xs font-bold text-[#1a1a1a]/60 uppercase tracking-widest max-w-sm leading-relaxed">
                        Brilliant minds we partner with to scale our capabilities and deliver exceptional results.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {collaborators.map((collab, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="group relative overflow-hidden bg-white border border-[#1a1a1a]/10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-3xl p-8 cursor-pointer hover:shadow-[0_20px_50px_rgba(211,47,47,0.1)] hover:border-[#d32f2f]/30 transition-all duration-500"
                        >
                            {/* Accent line */}
                            <div className="absolute top-0 left-0 w-0 h-1 bg-[#d32f2f] group-hover:w-full transition-all duration-500 ease-in-out" />
                            
                            <div className="relative w-16 h-16 rounded-full overflow-hidden mb-6 border border-[#1a1a1a]/10 grayscale group-hover:grayscale-0 transition-all duration-500">
                                <Image 
                                    src={collab.image}
                                    alt={collab.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            
                            <h3 className="text-lg font-black tracking-tight uppercase text-[#1a1a1a] mb-1">
                                {collab.name}
                            </h3>
                            <p className="text-[10px] font-bold text-[#d32f2f] uppercase tracking-widest mb-6">
                                {collab.role}
                            </p>
                            
                            <div className="flex items-center gap-2 mt-auto">
                                <div className="w-1.5 h-1.5 bg-[#1a1a1a]/20 rounded-full group-hover:bg-[#d32f2f] transition-colors" />
                                <span className="text-[9px] font-bold text-[#1a1a1a]/50 uppercase tracking-[0.2em]">{collab.focus}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
