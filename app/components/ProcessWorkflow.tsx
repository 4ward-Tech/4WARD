"use client";

import React from "react";
import { motion } from "framer-motion";

const workflowSteps = [
    {
        phase: "EXPLORATION PHASE",
        duration: "1 WEEKS",
        title: "Discovery",
        description: "Initial exploration to find the best solution.",
        details: [
            {
                label: "PROBLEM SPACE",
                icon: "P",
                iconColor: "#d32f2f",
                items: ["Define problem & success metrics."]
            },
            {
                label: "FEEDBACK",
                icon: "F",
                iconColor: "#1a1a1a",
                items: ["Brainstorm audience needs."]
            }
        ]
    },
    {
        phase: "REFINEMENT PHASE",
        duration: "1-2 WEEKS",
        title: "Design",
        description: "Executing core creative design concepts.",
        details: [
            {
                label: "DESIGNING MOCKS",
                icon: "D",
                iconColor: "#d32f2f",
                items: ["Iteration on visual concepts."]
            }
        ]
    },
    {
        phase: "REFINEMENT PHASE",
        duration: "1-2 WEEKS",
        title: "Approval",
        description: "Stakeholder review and final direction.",
        details: [
            {
                label: "SOLIDIFY DIRECTION",
                icon: "S",
                iconColor: "#1a1a1a",
                items: ["Stakeholder feedback loop."]
            }
        ]
    },
    {
        phase: "DEVELOPMENT PHASE",
        duration: "2 WEEKS",
        title: "Build",
        description: "Handoff and implementation support.",
        details: [
            {
                label: "ASSET DELIVERY",
                icon: "E",
                iconColor: "#1a1a1a",
                items: ["Polished assets delivery."]
            }
        ]
    }
];

export default function ProcessWorkflow() {
    return (
        <section id="process" className="relative w-full bg-[#f8f8f8] grid-bg font-jost overflow-hidden pt-12 pb-32 pr-12 pl-20 md:pr-24 md:pl-40">
            {/* ── Section Header ── */}
            <div className="relative z-10 mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-6xl mx-auto">
                <div className="max-w-xl">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-2"
                    >
                        <div className="w-10 h-[1px] bg-[#d32f2f]/50" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-[#d32f2f] uppercase block">
                            Workflow
                        </span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black uppercase leading-[0.85] tracking-tighter"
                    >
                        The Creative <br />
                        <span className="text-outline" style={{ WebkitTextStroke: "1.2px #1a1a1a" }}>
                            Journey
                        </span>
                    </motion.h2>
                </div>
            </div>

            {/* ── Timeline Container ── */}
            <div className="max-w-6xl mx-auto relative overflow-visible">
                {/* Timeline Header Labels */}
                <div className="flex w-full mb-10 relative">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1a1a1a]/5 -translate-y-1/2 border-t border-dashed border-[#1a1a1a]/20" />
                    <div className="flex w-full relative z-10 text-[8px] font-black tracking-[0.2em] text-[#1a1a1a]/20 uppercase">
                        <div className="w-1/4"><span className="bg-[#f8f8f8] pr-2">Exploration</span></div>
                        <div className="w-2/4 text-center"><span className="bg-[#f8f8f8] px-2">Refinement</span></div>
                        <div className="w-1/4 text-right"><span className="bg-[#f8f8f8] pl-2">Delivery</span></div>
                    </div>
                </div>

                {/* Timeline Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 items-start relative">
                    {/* Background Vertical Guide lines (only on desktop) */}
                    <div className="absolute inset-y-0 left-0 w-full pointer-events-none opacity-[0.02] hidden md:block">
                        <div className="flex w-full h-full">
                            {[1, 2, 3, 4].map(n => (
                                <div key={n} className="flex-1 border-r border-[#1a1a1a]" />
                            ))}
                        </div>
                    </div>

                    {workflowSteps.map((step, idx) => (
                        <div key={idx} className="relative z-20 group">
                            {/* Duration Indicator */}
                            <div className="mb-4 flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-[#d32f2f]/40 shrink-0" />
                                <span className="text-[8px] font-black tracking-widest text-[#1a1a1a]/30 uppercase shrink-0">
                                    {step.duration}
                                </span>
                                <div className="h-[1px] w-full bg-[#1a1a1a]/5" />
                            </div>

                            {/* Refined Step Card */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-4 border border-[#1a1a1a]/5 shadow-[0_4px_20px_rgb(0,0,0,0.01)] mb-6 relative hover:shadow-[0_10px_30px_rgb(0,0,0,0.02)] transition-all duration-500 rounded-sm"
                            >
                                <div className="absolute top-0 left-0 w-[2px] h-full bg-[#d32f2f] opacity-20 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-sm font-black uppercase tracking-tight mb-2 text-[#1a1a1a] leading-none">{step.title}</h3>
                                <p className="text-[9px] leading-relaxed text-[#1a1a1a]/40 font-bold italic line-clamp-2">
                                    {step.description}
                                </p>

                                {/* Connection Arrow (only on desktop desktops) */}
                                {idx < workflowSteps.length - 1 && (
                                    <div className="absolute top-1/2 -right-8 translate-x-1/2 -translate-y-1/2 z-30 opacity-5 group-hover:opacity-50 transition-all duration-500 hidden md:block">
                                        <svg width="12" height="6" viewBox="0 0 24 12" fill="none">
                                            <path d="M0 6H22M22 6L17 1M22 6L17 11" stroke="#d32f2f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                )}
                            </motion.div>

                            {/* Minimalist Sub-details */}
                            <div className="space-y-6">
                                {step.details.map((detail, dIdx) => (
                                    <motion.div 
                                        key={dIdx}
                                        initial={{ opacity: 0, x: -5 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (idx * 0.1) + (dIdx * 0.05) }}
                                        className="pl-2"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <div 
                                                className="w-4 h-4 rounded-full flex items-center justify-center text-[6px] font-black text-white shrink-0"
                                                style={{ backgroundColor: detail.iconColor }}
                                            >
                                                {detail.icon}
                                            </div>
                                            <span className="text-[8px] font-black tracking-widest text-[#1a1a1a]/60 uppercase">
                                                {detail.label}
                                            </span>
                                        </div>
                                        <div className="ml-2 border-l border-[#1a1a1a]/5 pl-3 py-0.5">
                                            {detail.items.map((item, iIdx) => (
                                                <p key={iIdx} className="text-[8.5px] leading-relaxed text-[#1a1a1a]/30 font-bold">
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
