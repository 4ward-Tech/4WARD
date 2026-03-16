"use client";

import React, { useState, useEffect } from "react";
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
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % workflowSteps.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

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
                                <motion.div 
                                    animate={{ 
                                        scale: activeStep === idx ? [1, 1.5, 1] : 1,
                                        backgroundColor: activeStep === idx ? "#d32f2f" : "rgba(211, 47, 47, 0.4)"
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className="w-1.5 h-1.5 rounded-full shrink-0" 
                                />
                                <span className={`text-[8px] font-black tracking-widest uppercase shrink-0 transition-colors duration-500 ${activeStep === idx ? "text-[#d32f2f]" : "text-[#1a1a1a]/30"}`}>
                                    {step.duration}
                                </span>
                                <div className="h-[1px] w-full bg-[#1a1a1a]/5" />
                            </div>

                            {/* Refined Step Card */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ 
                                    scale: activeStep === idx ? 1.02 : 1,
                                    borderColor: activeStep === idx ? "rgba(211, 47, 47, 0.2)" : "rgba(26, 26, 26, 0.05)",
                                    boxShadow: activeStep === idx ? "0 10px 30px rgb(0,0,0,0.04)" : "0 4px 20px rgb(0,0,0,0.01)"
                                }}
                                transition={{ duration: 0.5 }}
                                className={`bg-white p-4 border mb-6 relative transition-all duration-500 rounded-sm cursor-pointer ${activeStep === idx ? "shadow-[0_10px_30px_rgb(0,0,0,0.04)]" : ""}`}
                                onMouseEnter={() => setActiveStep(idx)}
                            >
                                <div className={`absolute top-0 left-0 w-[2.5px] h-full bg-[#d32f2f] transition-opacity duration-500 ${activeStep === idx ? "opacity-100" : "opacity-20"}`} />
                                <h3 className={`text-sm font-black uppercase tracking-tight mb-2 transition-colors duration-500 ${activeStep === idx ? "text-[#d32f2f]" : "text-[#1a1a1a]"}`}>{step.title}</h3>
                                <p className={`text-[9px] leading-relaxed font-bold italic line-clamp-2 transition-colors duration-500 ${activeStep === idx ? "text-[#1a1a1a]/70" : "text-[#1a1a1a]/40"}`}>
                                    {step.description}
                                </p>

                                {/* Connection Arrow (only on desktop desktops) */}
                                {idx < workflowSteps.length - 1 && (
                                    <div className={`absolute top-1/2 -right-8 translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-500 hidden md:block ${activeStep === idx ? "opacity-60 translate-x-[60%]" : "opacity-5"}`}>
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
                                        animate={{ 
                                            opacity: activeStep === idx ? 1 : 0.6,
                                            x: activeStep === idx ? 2 : 0
                                        }}
                                        className="pl-2"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <div 
                                                className="w-4 h-4 rounded-full flex items-center justify-center text-[6px] font-black text-white shrink-0 transition-transform duration-500"
                                                style={{ 
                                                    backgroundColor: detail.iconColor,
                                                    transform: activeStep === idx ? "scale(1.1)" : "scale(1)"
                                                }}
                                            >
                                                {detail.icon}
                                            </div>
                                            <span className={`text-[8px] font-black tracking-widest uppercase transition-colors duration-500 ${activeStep === idx ? "text-[#1a1a1a]" : "text-[#1a1a1a]/60"}`}>
                                                {detail.label}
                                            </span>
                                        </div>
                                        <div className={`ml-2 border-l pl-3 py-0.5 transition-colors duration-500 ${activeStep === idx ? "border-[#d32f2f]/30" : "border-[#1a1a1a]/5"}`}>
                                            {detail.items.map((item, iIdx) => (
                                                <p key={iIdx} className={`text-[8.5px] leading-relaxed font-bold transition-colors duration-500 ${activeStep === idx ? "text-[#1a1a1a]/60" : "text-[#1a1a1a]/30"}`}>
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
