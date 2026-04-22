"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
    { name: "Simba Supermarket", logo: "/Simba.png", fallback: "SIMBA" },
    { name: "Inyange Industries", logo: "/Inyange.png", fallback: "INYANGE" },
    { name: "Quake Marketing Agency", logo: "/Quake.png", fallback: "QUAKE" }
];

export default function PartnersSection() {
    return (
        <section className="w-full bg-transparent text-[#1a1a1a] py-32 relative overflow-hidden z-20">
            {/* Shared Grid Background for visual consistency */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none -z-10" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col items-center relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center mb-24"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-[1px] bg-[#d32f2f]" />
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#d32f2f]">Network</span>
                        <div className="w-8 h-[1px] bg-[#d32f2f]" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-center">
                        Project <br />
                        <span className="text-outline text-transparent" style={{ WebkitTextStroke: "1px rgba(26,26,26,0.3)" }}>Partners</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-32 w-full mt-10">
                    {partners.map((partner, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="flex flex-col items-center justify-center gap-6 group cursor-pointer"
                        >
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center group-hover:border-[#d32f2f] transition-all duration-500 bg-[#1a1a1a]/[0.02] relative overflow-hidden group-hover:scale-110 shadow-sm group-hover:shadow-[0_20px_40px_rgba(211,47,47,0.15)]">
                                {/* Next Image Wrapper for Logos */}
                                <div className="absolute inset-0 m-6 relative w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                    <Image 
                                        src={partner.logo} 
                                        alt={partner.name} 
                                        fill 
                                        className="object-contain p-4" 
                                        onError={(e) => {
                                            // Fallback if image not found yet
                                            (e.currentTarget.style.display = 'none');
                                            e.currentTarget.parentElement!.innerText = partner.fallback;
                                            e.currentTarget.parentElement!.className = "absolute inset-0 flex items-center justify-center font-black text-xl tracking-widest text-[#d32f2f] opacity-50";
                                        }}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#d32f2f]/10 to-transparent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-center text-[#1a1a1a]/60 group-hover:text-[#1a1a1a] transition-colors duration-300">
                                {partner.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Scrolling Banner Overlay */}
            <div className="w-full mt-32 border-t border-b border-[#1a1a1a]/10 py-6 overflow-hidden flex relative z-10 bg-white">
                <motion.div 
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    className="flex items-center whitespace-nowrap"
                >
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center">
                            <span className="text-[12px] font-black tracking-[0.5em] text-[#1a1a1a]/20 uppercase px-12 flex items-center gap-12">
                                INDUSTRY LEADERS 
                                <span className="w-2 h-2 bg-[#d32f2f] rounded-full" />
                            </span>
                            <span className="text-[12px] font-black tracking-[0.5em] text-[#1a1a1a]/20 uppercase px-12 flex items-center gap-12">
                                TRUSTED NETWORK
                                <span className="w-2 h-2 bg-[#d32f2f] rounded-full" />
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
            
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d32f2f] opacity-[0.02] blur-[100px] pointer-events-none z-0" />
        </section>
    );
}
