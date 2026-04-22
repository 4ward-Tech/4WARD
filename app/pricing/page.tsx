"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const pricingPlans = [
  {
    id: "landing-page",
    name: "Landing Page",
    category: "Design",
    price: "1999",
    type: "fixed",
    description: "Get a high-quality landing page for your product.",
    cta: "Book a call",
    features: [
      "Design concepts",
      "Responsive design",
      "Up to 4 subpages",
      "Post-launch support",
      "Tailored solution",
      "Revisions",
    ],
    highlight: false,
  },
  {
    id: "product-design",
    name: "Product design",
    category: "Design",
    price: "2999",
    type: "fixed",
    description: "Let's bring your idea to life.",
    cta: "Book a call",
    features: [
      "Brainstorming",
      "UX-based strategy",
      "Revisions",
      "On-time delivery",
      "Async communication",
      "Tailored solution",
      "Design concepts",
      "Support",
      "Scaleable",
    ],
    highlight: false,
    gradient: "from-pink-500/10 to-violet-500/10",
  },
  {
    id: "product-partnership",
    name: "Product Partnership",
    category: "Development",
    price: "3999",
    type: "month",
    description: "Get full-product team, according to your needs. No long-term commitment.",
    cta: "Book a call",
    features: [
      "Development lead",
      "Flexible communication",
      "No hire costs",
      "1 workstream",
      "Pause or resume anytime",
      "Revisions",
    ],
    highlight: true,
    limited: true,
  },
];

export default function PricingPage() {
  const [filter, setFilter] = useState("All");
  const [fastDelivery, setFastDelivery] = useState(false);

  const filteredPlans = pricingPlans.filter(
    (plan) => filter === "All" || plan.category === filter
  );

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 grid-bg font-jost overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[3rem] md:text-[4.5rem] font-black leading-tight text-[#1a1a1a] mb-6 tracking-tighter"
          >
            Flexible plans for <br className="hidden md:block"/> every business
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d32f2f] mb-2">Your product design partner</p>
            <p className="text-sm font-bold text-[#1a1a1a]/60 uppercase leading-relaxed tracking-tight max-w-lg">
                Unlock instant, world-class design with a simple monthly fee.
            </p>
          </motion.div>
        </header>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="flex bg-white/50 backdrop-blur-sm border border-[#e5e5e5] p-1.5 rounded-xl shadow-sm">
            {["All", "Design", "Development"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#1a1a1a] text-white shadow-lg"
                    : "text-[#1a1a1a]/40 hover:text-[#1a1a1a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
             <span className={`text-[9px] font-black uppercase tracking-widest transition-opacity ${fastDelivery ? "opacity-100 text-[#d32f2f]" : "opacity-30"}`}>
                Fast delivery (7 days)
             </span>
             <button 
                onClick={() => setFastDelivery(!fastDelivery)}
                className={`w-12 h-6 rounded-full relative transition-colors duration-300 border ${fastDelivery ? "bg-[#d32f2f] border-[#d32f2f]" : "bg-[#1a1a1a]/10 border-[#1a1a1a]/10"}`}
             >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${fastDelivery ? "left-7 shadow-md" : "left-1"}`} />
             </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
           {filteredPlans.filter(p => !p.highlight).map((plan) => (
             <motion.div
               key={plan.id}
               layout
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className={`relative bg-white border border-[#e5e5e5] rounded-[2.5rem] p-10 shadow-sm overflow-hidden flex flex-col group hover:shadow-2xl hover:border-[#d32f2f]/20 transition-all duration-500`}
             >
                {plan.gradient && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50`} />
                )}
                
                <div className="relative z-10 flex-grow">
                    <h3 className="text-2xl font-black text-[#1a1a1a] mb-2">{plan.name}</h3>
                    <p className="text-xs font-bold text-[#1a1a1a]/50 mb-8 uppercase tracking-tight">{plan.description}</p>
                    
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-sm font-black text-[#1a1a1a]/40">$</span>
                        <span className="text-5xl font-black text-[#1a1a1a] tracking-tighter">
                            {fastDelivery ? parseInt(plan.price) + 500 : plan.price}
                        </span>
                        <span className="text-xs font-black text-[#1a1a1a]/40 uppercase ml-2">/ {plan.type}</span>
                    </div>

                    <Link href="/contact" className="block mb-10 w-full group/btn">
                        <div className="relative overflow-hidden bg-[#1a1a1a] text-white py-4 rounded-2xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Book a call</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                        </div>
                    </Link>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                        {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/20 group-hover:bg-[#d32f2f] transition-colors" />
                                <span className="text-[10px] font-bold text-[#1a1a1a]/70 uppercase tracking-tight">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Featured Full-Width Card */}
        {filteredPlans.filter(p => p.highlight).map((plan) => (
            <motion.div
                key={plan.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative bg-[#1a1a1a] rounded-[2.5rem] p-10 md:p-14 shadow-2xl overflow-hidden text-white flex flex-col md:flex-row gap-12 group hover:shadow-[0_40px_100px_rgba(0,0,0,0.3)] transition-all duration-700"
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d32f2f] opacity-10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-3 mb-8">
                        <h3 className="text-3xl font-black tracking-tight">{plan.name}</h3>
                        {plan.limited && (
                            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
                                <span className="text-[8px] font-black uppercase tracking-widest text-white/60">Limited availability</span>
                            </div>
                        )}
                    </div>
                    
                    <p className="text-sm font-bold text-white/50 mb-10 uppercase tracking-tight max-w-md">{plan.description}</p>
                    
                    <div className="flex items-baseline gap-1 mb-10">
                        <span className="text-sm font-black text-white/30">$</span>
                        <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">{plan.price}</span>
                        <span className="text-xs font-black text-white/30 uppercase ml-3">/ {plan.type}</span>
                    </div>

                    <Link href="/contact" className="inline-block max-w-[280px] w-full group/btn">
                        <div className="relative overflow-hidden bg-white text-[#1a1a1a] py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] hover:bg-[#d32f2f] hover:text-white group-hover:shadow-[0_10px_40px_rgba(211,47,47,0.3)]">
                            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Book a call</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                        </div>
                    </Link>
                </div>

                <div className="relative z-10 flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 h-full bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                        {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <span className="text-[10px] md:text-[11px] font-bold text-white/80 uppercase tracking-widest">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        ))}
      </div>
    </main>
  );
}
