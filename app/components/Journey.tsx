"use client";

import React, { useState } from "react";

const milestones = [
    {
        id: "01",
        title: "The First Gig",
        year: "2021",
        subtitle: "FREELANCE BEGINNINGS",
        description:
            "Started as a solo creator, focusing on local branding and small-scale video projects. Learning the ropes of cinematic storytelling.",
        cx: 50,
        cy: 350,
    },
    {
        id: "02",
        title: "Breaking Ground",
        year: "2022",
        subtitle: "STUDIO FORMATION",
        description:
            "Expanded into a collective of creative minds. Secured our first major corporate contracts and invested in high-end 3D infrastructure.",
        cx: 300,
        cy: 150,
    },
    {
        id: "03",
        title: "Going Mobile",
        year: "2023",
        subtitle: "NGWINO PLATFORM",
        description:
            "Moved into mobile. Built a community super-app handling real money, real users, real pressure. The grind was real — so were the results.",
        cx: 700,
        cy: 250,
    },
    {
        id: "04",
        title: "Sicily Labs",
        year: "2024",
        subtitle: "GLOBAL EXPANSION",
        description:
            "Partnering with Sicily Labs to push the boundaries of post-production and immersive 3D architectural visualizations.",
        cx: 950,
        cy: 50,
    },
];

// Card positioning: anchored to each dot's actual SVG position
// left = cx/1000*100%, top = cy/400*100%
// Cards appear ABOVE the dot (except 04 which is near top, so BELOW)
const cardPositions: Record<string, { left: string; top: string; transform: string }> = {
    "01": { left: "5%", top: "87.5%", transform: "translate(-10%, -110%)" },
    "02": { left: "30%", top: "37.5%", transform: "translate(-50%, -110%)" },
    "03": { left: "70%", top: "62.5%", transform: "translate(-50%, -110%)" },
    "04": { left: "95%", top: "12.5%", transform: "translate(-80%, 40%)" },
};

export default function Journey() {
    const [activeId, setActiveId] = useState("03");
    const activeMilestone =
        milestones.find((m) => m.id === activeId) || milestones[0];

    return (
        <section className="relative w-full bg-[#f8f8f8] py-24 px-12 md:px-32 font-jost overflow-hidden h-[800px] flex items-end pb-32">
            {/* ── Background Typography ── */}
            <h2 className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] md:text-[12rem] font-black text-[#1a1a1a]/5 tracking-tighter select-none pointer-events-none z-0">
                EVOLUTION
            </h2>

            {/* ── Section Header ── */}
            <div className="absolute top-20 left-12 md:left-32 z-20">
                <span className="text-[10px] font-black tracking-[0.3em] text-[#1a1a1a]/40 uppercase block mb-2">
                    About Us
                </span>
                <h3 className="text-4xl md:text-6xl font-black uppercase text-[#1a1a1a] tracking-tighter">
                    Our{" "}
                    <span
                        className="text-outline"
                        style={{ WebkitTextStroke: "2px #1a1a1a" }}
                    >
                        Journey
                    </span>
                </h3>
            </div>

            {/* ── Timeline Container ── */}
            <div className="relative w-full max-w-4xl mx-auto aspect-[1000/400]">
                {/* SVG: Path + Dots in the SAME coordinate system */}
                <svg
                    viewBox="0 0 1000 400"
                    className="w-full h-full absolute inset-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* The serpentine path — starts at (50,350) and curves through each milestone */}
                    <path
                        d="M50 350 C 200 350, 150 150, 300 150 C 450 150, 550 250, 700 250 C 850 250, 800 50, 950 50"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.15"
                    />

                    {/* Milestone dots — exact same coordinates as the path */}
                    {milestones.map((m) => (
                        <g
                            key={m.id}
                            onClick={() => setActiveId(m.id)}
                            className="cursor-pointer"
                        >
                            {/* Outer ring for active state */}
                            {activeId === m.id && (
                                <circle
                                    cx={m.cx}
                                    cy={m.cy}
                                    r="16"
                                    fill="none"
                                    stroke="black"
                                    strokeWidth="1"
                                    opacity="0.15"
                                />
                            )}
                            {/* Main dot */}
                            <circle
                                cx={m.cx}
                                cy={m.cy}
                                r={activeId === m.id ? 8 : 6}
                                fill={activeId === m.id ? "#1a1a1a" : "#1a1a1a"}
                                opacity={activeId === m.id ? 1 : 0.25}
                            />
                            {/* Label */}
                            <text
                                x={m.cx}
                                y={m.cy + 28}
                                textAnchor="middle"
                                className="font-jost"
                                fontSize="11"
                                fontWeight="900"
                                fill="#1a1a1a"
                                opacity={activeId === m.id ? 0.8 : 0.35}
                            >
                                {m.id}.
                            </text>
                            <text
                                x={m.cx}
                                y={m.cy + 42}
                                textAnchor="middle"
                                className="font-jost uppercase"
                                fontSize="13"
                                fontWeight="900"
                                letterSpacing="-0.5"
                                fill="#1a1a1a"
                                opacity={activeId === m.id ? 1 : 0.35}
                            >
                                {m.title}
                                {m.id === "04" ? " ↗" : ""}
                            </text>
                        </g>
                    ))}
                </svg>

                {/* Feature/Detail Card */}
                {activeMilestone && activeId && (
                    <div
                        className="absolute z-30 transition-all duration-500 ease-out pointer-events-none md:pointer-events-auto"
                        style={{
                            left: cardPositions[activeId]?.left,
                            top: cardPositions[activeId]?.top,
                            transform: cardPositions[activeId]?.transform,
                        }}
                    >
                        <div className="w-56 md:w-64 bg-white p-6 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-[#1a1a1a]/5 relative group animate-fade-in">
                            <span className="text-[10px] font-bold text-[#1a1a1a]/40 block mb-2 uppercase tracking-widest">
                                {activeMilestone.year}
                            </span>
                            <h4 className="text-lg font-black text-[#1a1a1a] uppercase leading-tight mb-1">
                                {activeMilestone.title}
                            </h4>
                            <span className="text-[8px] font-black tracking-widest text-[#d32f2f] uppercase block mb-3">
                                {activeMilestone.subtitle}
                            </span>
                            <p className="text-[11px] font-medium leading-relaxed text-[#1a1a1a]/60">
                                {activeMilestone.description}
                            </p>

                            <button
                                className="mt-4 text-[8px] font-black uppercase tracking-widest text-[#1a1a1a]/40 hover:text-[#d32f2f] flex items-center gap-1 transition-colors group/btn pointer-events-auto"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveId("");
                                }}
                            >
                                Close{" "}
                                <span className="group-hover/btn:translate-x-1 transition-transform">
                                    ×
                                </span>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* ── Bottom Accent Line ── */}
            <div className="absolute bottom-10 left-12 w-32 h-0.5 bg-[#d32f2f]/20" />
        </section>
    );
}
