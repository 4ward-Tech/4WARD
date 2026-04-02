"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselItem {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
}

const carouselItems: CarouselItem[] = [
    {
        id: 1,
        category: "Branding Identity",
        title: "VIRTUAL IDENTITY",
        description: "We craft digital-first branding systems that resonate across all platforms. At 4WARD, we don't just design logos; we build living brand architectures that evolve with your vision, blending technical precision with artistic flair.",
        image: "/Portfolio.jpg", // Using existing as fallback
    },
    {
        id: 2,
        category: "Video Making",
        title: "MOTION NARRATIVES",
        description: "Cinematic storytelling meets cutting-edge motion graphics. Our video production team focuses on high-impact visual narratives that capture the essence of your project, ensuring every frame 'screams' quality and innovation.",
        image: "/Portfolio.jpg",
    },
    {
        id: 3,
        category: "3D Modeling",
        title: "SPATIAL DIMENSIONS",
        description: "Transforming abstract concepts into tangible 3D realities. We specialize in high-end 3D modeling and interactive spatial designs that push the boundaries of visual immersion, showcasing the '4WARD' thinking in every polygon.",
        image: "/Portfolio.jpg",
    },
    {
        id: 4,
        category: "Software Dev",
        title: "DIGITAL INFRA",
        description: "Building the backbone of modern digital experiences. Our development process bridges the gap between complex technical infrastructure and seamless user interaction, delivering robust, high-performance software solutions.",
        image: "/Portfolio.jpg",
    },
];

export default function AboutCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prev) => (prev + 1) % carouselItems.length);
        setTimeout(() => setIsTransitioning(false), 800);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
        setTimeout(() => setIsTransitioning(false), 800);
    };

    const currentItem = carouselItems[activeIndex];

    return (
        <section className="relative w-full py-32 md:py-48 px-12 md:px-32 lg:px-48 overflow-hidden bg-white/20 backdrop-blur-sm mt-24">
            {/* Grid Pattern Background for this section */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                {/* Left Column: Text Content */}
                <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="h-[2px] w-12 bg-[#d32f2f]" />
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-[#d32f2f]">
                            {currentItem.category}
                        </span>
                    </div>

                    <div className="relative mb-8">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
                            {currentItem.title.split(" ").map((word, i) => (
                                <span key={i} className="block last:text-outline">
                                    {word}
                                </span>
                            ))}
                        </h2>
                    </div>

                    <div className="relative py-8 border-y border-[#1a1a1a]/10">
                        <p className="text-sm md:text-base font-medium leading-relaxed text-[#1a1a1a]/80 max-w-md">
                            {currentItem.description}
                        </p>
                    </div>

                    <button className="mt-12 bg-[#1a1a1a] text-white px-10 py-5 font-black uppercase tracking-widest text-xs flex items-center gap-4 group transition-all hover:bg-[#d32f2f]">
                        Learn More
                        <svg
                            width="20" height="20" viewBox="0 0 24 24" fill="none"
                            className="transition-transform group-hover:translate-x-2"
                        >
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Right Column: Visual Carousel */}
                <div className="relative h-[500px] flex items-center justify-center lg:justify-end">
                    <div className="relative w-full h-[400px] flex gap-6 items-center overflow-visible">
                        {carouselItems.map((item, index) => {
                            // Calculate relative position to active index
                            const diff = (index - activeIndex + carouselItems.length) % carouselItems.length;

                            const isActive = diff === 0;
                            const isNext = diff === 1;
                            const isPrev = diff === carouselItems.length - 1;
                            const isHidden = !isActive && !isNext && !isPrev;

                            return (
                                <div
                                    key={item.id}
                                    className={`absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer ${isActive
                                        ? "z-30 w-full h-full opacity-100 scale-100 translate-x-0"
                                        : isNext
                                            ? "z-20 w-[80%] h-[80%] opacity-40 scale-90 translate-x-[40%] translate-y-[5%]"
                                            : isPrev
                                                ? "z-10 w-[60%] h-[60%] opacity-0 scale-75 -translate-x-[40%] translate-y-[10%]"
                                                : "z-0 opacity-0 scale-50 translate-x-[100%]"
                                        }`}
                                    onClick={() => {
                                        if (isNext) nextSlide();
                                        if (isPrev) prevSlide();
                                    }}
                                >
                                    <div className={`relative w-full h-full group overflow-hidden border border-[#e5e5e5] p-2 bg-white shadow-2xl ${isActive ? 'ring-4 ring-[#d32f2f]/10' : ''}`}>
                                        <div className="relative w-full h-full bg-[#f0f0f0] overflow-hidden">
                                            {/* Branded "4WARD" placeholder for 3D/Video items */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a] text-white font-black overflow-hidden">
                                                <div className="text-[12rem] opacity-20 select-none tracking-tighter">4W</div>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                                                    <span className="text-4xl tracking-tighter mb-2 italic scale-x-125">4WARD</span>
                                                    <span className="text-[8px] tracking-[0.5em] opacity-50 uppercase">{item.category}</span>

                                                    {/* Technical Decorations */}
                                                    <div className="absolute top-4 left-4 border border-white/20 p-1">
                                                        <div className="w-1 h-1 bg-[#d32f2f]" />
                                                    </div>
                                                    <div className="absolute bottom-4 right-4 border border-white/20 p-1">
                                                        <div className="w-1 h-1 bg-[#d32f2f]" />
                                                    </div>
                                                </div>

                                                {/* SVG Decorative overlay to give "3D/Technical" feel */}
                                                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                    <path d="M0 0L100 100M100 0L0 100" stroke="white" strokeWidth="0.1" />
                                                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.1" fill="none" />
                                                    <rect x="10" y="10" width="80" height="80" stroke="white" strokeWidth="0.1" fill="none" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Overlay info on active card */}
                                        {isActive && (
                                            <div className="absolute bottom-8 left-8 text-white z-40 animate-fade-in delay-300">
                                                <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-1 opacity-60">Project {item.id}</div>
                                                <div className="text-lg font-black tracking-widest">{item.category}</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Controls */}
                    <div className="absolute bottom-0 right-0 flex gap-4 z-50 p-4">
                        <button
                            onClick={prevSlide}
                            className="w-16 h-16 border border-[#1a1a1a]/20 flex items-center justify-center bg-white hover:bg-[#1a1a1a] hover:text-white transition-all group shadow-lg"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:-translate-x-1">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-16 h-16 border border-[#1a1a1a]/20 flex items-center justify-center bg-white hover:bg-[#d32f2f] hover:text-white transition-all group shadow-lg"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Dynamic Background Indicator */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-8">
                {carouselItems.map((_, i) => (
                    <div
                        key={i}
                        className={`w-[2px] h-8 transition-all duration-500 ${i === activeIndex ? "bg-[#d32f2f] h-16" : "bg-[#1a1a1a]/10"}`}
                    />
                ))}
            </div>
        </section>
    );
}
