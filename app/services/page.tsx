"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const feedbacks = [
    {
        id: 1,
        quote: "They exceeded my expectations! We commissioned them to design and build a sustainable platform for our project, and the result was amazing. They implemented advanced technology and created a beautiful interface.",
        name: "Jeremy",
        role: "Manager",
    },
    {
        id: 2,
        quote: "The 4WARD team transformed our visual identity within weeks. Their ability to fuse high-end 3D graphics with seamless web experiences is unmatched. We saw a completely massive increase in user engagement.",
        name: "Samantha",
        role: "Creative Director",
    },
    {
        id: 3,
        quote: "Professional, punctual, and visionary. They didn't just build us an app; they built us a complete digital ecosystem. The video production quality alone was worth the entire investment.",
        name: "Marcus",
        role: "Founder",
    }
];

export default function ServicesPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            zIndex: 0,
            x: dir < 0 ? 100 : -100,
            opacity: 0,
        })
    };

    const nextFeedback = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    };

    const prevFeedback = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
    };

    return (
        <main className="min-h-screen bg-[#f8f8f8] grid-bg font-jost text-[#1a1a1a] pt-16 pb-24 px-6 md:px-16 overflow-x-hidden">
            {/* Services Minimal Grid Section */}
            <section className="max-w-[1200px] mx-auto relative mb-40 pt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-0 relative h-auto md:min-h-[500px]">
                    
                    {/* Left Column */}
                    <div className="flex flex-col items-center md:items-end gap-10 md:gap-32 md:pt-16 z-10 relative">
                        {/* Video Production */}
                        <ServiceBox 
                            title="Video Production"
                            description="Full-cycle video production, bringing your vision to life with cinematic storytelling and post-production."
                            iconName="video"
                            accentColor="#d32f2f"
                            delay={0.1}
                            number="01"
                        />
                        {/* Motion Graphics */}
                        <ServiceBox 
                            title="Motion Graphics"
                            description="Captivating 2D/3D animations and motion design that make your brand visually dynamic and elite."
                            iconName="motion"
                            accentColor="#1a1a1a"
                            delay={0.2}
                            number="02"
                        />
                    </div>

                    {/* Middle Column - Center Text */}
                    <div className="flex flex-col items-center justify-center relative min-h-[300px] md:min-h-full">
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute z-0 flex justify-center pointer-events-none"
                        >
                            <h1 className="text-[5rem] md:text-[7rem] lg:text-[8rem] font-black uppercase tracking-tighter text-[#1a1a1a] flex mb-0 leading-[0.8] text-center" style={{ letterSpacing: "-0.05em" }}>
                                Core <br/> Services
                            </h1>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col items-center md:items-start gap-10 md:gap-32 md:pt-36 z-10 relative">
                        {/* Brand Identity */}
                        <ServiceBox 
                            title="Brand Identity"
                            description="Crafting cohesive visual identities, from sleek logos to expansive brand guidelines that define your legacy."
                            iconName="brand"
                            accentColor="#1a1a1a"
                            delay={0.3}
                            number="03"
                        />
                        {/* Dev & Tech */}
                        <ServiceBox 
                            title="Dev & Tech"
                            description="Building robust custom software solutions, modern web applications, and flawless digital experiences."
                            iconName="dev"
                            accentColor="#d32f2f"
                            delay={0.4}
                            number="04"
                        />
                    </div>
                </div>
            </section>

            {/* Vertical Project Cards Section */}
            <section className="max-w-[1200px] mx-auto mb-32 relative z-20">
                <div className="flex w-full mb-10 relative">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1a1a1a]/5 -translate-y-1/2 border-t border-dashed border-[#1a1a1a]/20" />
                    <div className="flex w-full relative z-10 text-[10px] font-black tracking-[0.3em] text-[#d32f2f] uppercase">
                        <span className="bg-[#f8f8f8] pr-4">Featured Applications</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <VerticalProjectCard 
                        imageSrc="/Planshift.png"
                        title="FUTURECO BUSINESS"
                        tags={["Eco", "AI tech"]}
                        delay={0.2}
                    />
                    <VerticalProjectCard 
                        imageSrc="/grocery-welcome.png"
                        title="INFINITY GREEN"
                        tags={["Dining", "Organic"]}
                        darkLayer
                        delay={0.3}
                    />
                    <VerticalProjectCard 
                        imageSrc="/project-mockup.png"
                        title="RENOVASPHERE AREA"
                        tags={["District", "Urban"]}
                        darkLayer
                        delay={0.4}
                    />
                </div>
            </section>

            {/* Testimonials Section (Interactive Carousel) */}
            <section className="max-w-[800px] mx-auto text-center relative z-20 pt-10 pb-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black uppercase leading-[0.85] tracking-tighter mb-12"
                >
                    Recent <br />
                    <span className="text-outline" style={{ WebkitTextStroke: "1px #1a1a1a" }}>Feedback</span> 
                </motion.h2>
                
                <div className="flex justify-center gap-4 mb-10">
                    <button onClick={prevFeedback} className="w-8 h-8 rounded-full border border-[#1a1a1a]/20 flex items-center justify-center hover:border-[#d32f2f] hover:text-[#d32f2f] transition-all duration-300">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6" strokeWidth={2}/></svg>
                    </button>
                    <button onClick={nextFeedback} className="w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-[#d32f2f] transition-all duration-300 shadow-md">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18l6-6-6-6" strokeWidth={2}/></svg>
                    </button>
                </div>

                {/* Testimonial Active Slider */}
                <div className="relative mx-auto max-w-[650px] min-h-[220px]">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div 
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            className="bg-white rounded-sm p-10 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#1a1a1a]/10 text-left group hover:border-[#d32f2f]/30 transition-colors duration-500 ring-1 ring-[#1a1a1a]/5 relative"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-10 h-1 bg-[#d32f2f] opacity-20 group-hover:opacity-100 transition-opacity" />
                            <p className="text-sm text-[#1a1a1a]/70 leading-relaxed font-bold italic mb-10 border-l border-[#d32f2f]/20 pl-6">
                                &quot;{feedbacks[currentIndex].quote}&quot;
                            </p>
                            <div className="flex items-center gap-4 pl-6">
                                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#1a1a1a]/10 relative bg-[#f8f8f8]">
                                    <div className="absolute inset-0 bg-[#d32f2f]/5" />
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#1a1a1a]/80 rounded-t-full" />
                                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a]/80 rounded-full" />
                                </div>
                                <div>
                                    <h4 className="font-black text-xs uppercase tracking-tight text-[#1a1a1a]">{feedbacks[currentIndex].name}</h4>
                                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#1a1a1a]/40 font-bold">{feedbacks[currentIndex].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </main>
    );
}

function ServiceBox({ title, description, iconName, accentColor, delay, number }: { title: string; description: string; iconName: string; accentColor: string; delay: number; number: string }) {
    // Subtle float animation instead of extreme bounce
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
        >
            <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
                className="group relative w-full max-w-[210px] bg-white border border-[#1a1a1a]/10 ring-1 ring-[#1a1a1a]/5 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(211,47,47,0.08)] hover:border-[#d32f2f]/30 transition-all duration-500 rounded-sm z-10 flex flex-col justify-between"
                style={{ minHeight: "220px" }}
            >
                {/* Top Subtle Red Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-6 h-[2px] bg-[#d32f2f] opacity-20 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black text-[#1a1a1a]/20 group-hover:text-[#d32f2f] transition-colors tabular-nums uppercase tracking-widest">
                        {number}
                    </span>
                    <div className="text-[#1a1a1a]/30 group-hover:text-[#1a1a1a] transition-all transform group-hover:scale-110">
                        <Icon name={iconName} color={accentColor} />
                    </div>
                </div>

                <div className="relative flex flex-col gap-3">
                    <h3 className="text-xs font-black uppercase tracking-tight text-[#1a1a1a] group-hover:text-[#d32f2f] transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-[9px] leading-relaxed text-[#1a1a1a]/50 group-hover:text-[#1a1a1a]/80 transition-colors line-clamp-3">
                        {description}
                    </p>
                </div>
                
                <div className="mt-5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="h-[1px] flex-grow bg-[#d32f2f]/20 mr-2" />
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </motion.div>
        </motion.div>
    );
}

function VerticalProjectCard({ imageSrc, title, tags, delay, darkLayer = false }: { imageSrc: string; title: string; tags: string[], delay: number, darkLayer?: boolean }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-full h-[400px] border border-[#1a1a1a]/10 overflow-hidden bg-gray-200 cursor-pointer rounded-sm"
        >
            {/* Background Image */}
            <Image 
                src={imageSrc} 
                alt={title} 
                fill 
                className={`object-cover transition-transform duration-1000 group-hover:scale-105 ${darkLayer ? 'brightness-75' : 'brightness-90 grayscale-[20%]'}`}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/80 transition-all duration-500" />

            <div className="absolute inset-x-0 top-0 p-5 flex flex-wrap gap-2 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                {tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[8px] font-black tracking-widest uppercase text-[#1a1a1a]">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-4 leading-none group-hover:text-[#d32f2f] transition-colors duration-300">
                    {title}
                </h3>
                <div className="flex items-center gap-2 text-[9px] font-black tracking-widest uppercase text-white/50 group-hover:text-white transition-colors duration-300">
                    <span>EXPLORE PROJECT</span>
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
            </div>
            
            {/* Active Red Highlight */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#d32f2f] transition-all duration-500 group-hover:w-full" />
        </motion.div>
    );
}

/* Minimal Helper Icons */
function Icon({ name, color }: { name: string; color: string }) {
    switch (name) {
        case "video":
            return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>;
        case "motion":
            return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>;
        case "brand":
            return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
        case "dev":
            return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
        default:
            return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/></svg>;
    }
}
