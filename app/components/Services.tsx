"use client";

const services = [
    {
        number: "01",
        title: "Branding",
        description: "Crafting cohesive visual identities — logos, typography, and guidelines that make a lasting impression.",
        accentColor: "#d32f2f",
    },
    {
        number: "02",
        title: "Video Making",
        description: "Full-cycle production: cinematic storytelling, motion graphics, and post-production that captivates.",
        accentColor: "#1a1a1a",
    },
    {
        number: "03",
        title: "3D & Interactive",
        description: "Immersive 3D assets, product visualisations, and interactive web experiences with real-time rendering.",
        accentColor: "#d32f2f",
    },
    {
        number: "04",
        title: "Photography",
        description: "Editorial, commercial, and event photography expertly composed with light-precise imagery.",
        accentColor: "#1a1a1a",
    },
    {
        number: "05",
        title: "Development",
        description: "Scalable apps — clean architecture, modern frameworks, and pixel-perfect interfaces.",
        accentColor: "#d32f2f",
    },
    {
        number: "06",
        title: "Color Grading",
        description: "Professional grading that sets the mood, consistency, and cinematic tone for your visuals.",
        accentColor: "#1a1a1a",
    },
];

/* Inline SVG icons */
const ServiceIcons: React.ReactNode[] = [
    <svg key="01" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /><line x1="2" y1="12" x2="22" y2="12" /></svg>,
    <svg key="02" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>,
    <svg key="03" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
    <svg key="04" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg>,
    <svg key="05" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    <svg key="06" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="10.5" r="2.5" /><circle cx="8.5" cy="7.5" r="2.5" /><circle cx="6.5" cy="12.5" r="2.5" /><path d="M12 22c-4.97 0-9-2.69-9-6 0-1.5 1.34-2.87 3.5-3.84" /></svg>,
];

export default function Services() {
    const CARD_H = 190; // px - height of card slot area

    return (
        <section className="relative w-full bg-[#f8f8f8] grid-bg font-jost overflow-hidden pt-32 pb-24 px-12 md:px-32">

            {/* ── Section header ── */}
            <div className="relative z-10 mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                    <span className="text-[10px] font-black tracking-[0.3em] text-[#d32f2f] uppercase block mb-2">
                        What we offer
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
                        Our{" "}
                        <span className="text-outline" style={{ WebkitTextStroke: "2px #1a1a1a" }}>
                            Services
                        </span>
                    </h2>
                </div>
                <div className="hidden md:flex items-center gap-2 opacity-20 select-none">
                    <span className="text-6xl font-black leading-none">[</span>
                    <span className="text-xs font-black tracking-widest uppercase rotate-90">scroll</span>
                    <span className="text-6xl font-black leading-none">]</span>
                </div>
            </div>

            {/* ══════════ SINGLE LINE TIMELINE ══════════ */}
            <div className="relative">
                <div className="relative w-full">
                    {/* Spine */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#1a1a1a] z-0" />
                    {/* End caps */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#1a1a1a] z-10" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#1a1a1a] z-10" />

                    <div className="relative grid grid-cols-2 md:grid-cols-6 gap-0">
                        {services.map((svc, i) => {
                            const isAbove = i % 2 === 0;
                            return (
                                <div key={svc.number} className="relative flex flex-col items-center">
                                    <CardSlot svc={svc} icon={ServiceIcons[i]} position="above" visible={isAbove} cardH={CARD_H} />
                                    <TimelineNode svc={svc} isAbove={isAbove} />
                                    <CardSlot svc={svc} icon={ServiceIcons[i]} position="below" visible={!isAbove} cardH={CARD_H} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* ── Bottom rule ── */}
            <div className="mt-16 border-t border-[#1a1a1a]/10 pt-6 flex justify-between items-center">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#1a1a1a]/30">
                    4WARD · Portfolio
                </span>
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#1a1a1a]/30">
                    {services.length} Services
                </span>
            </div>
        </section>
    );
}

/* ── Card slot wrapper ── */
function CardSlot({
    svc, icon, position, visible, cardH,
}: {
    svc: (typeof services)[0];
    icon: React.ReactNode;
    position: "above" | "below";
    visible: boolean;
    cardH: number;
}) {
    return (
        <div
            className={`w-full px-1 flex flex-col ${position === "above" ? "justify-end pb-5" : "justify-start pt-5"} ${!visible ? "invisible pointer-events-none" : ""}`}
            style={{ minHeight: `${cardH}px` }}
        >
            {visible && <ServiceCard svc={svc} icon={icon} />}
        </div>
    );
}

/* ── Timeline node ── */
function TimelineNode({ svc, isAbove }: { svc: (typeof services)[0]; isAbove: boolean }) {
    return (
        <div className="relative flex flex-col items-center z-20">
            <div className="w-[2px] bg-[#1a1a1a]/25" style={{ height: isAbove ? "0" : "22px" }} />
            {!isAbove && <span className="font-black text-sm leading-none mb-1 select-none" style={{ color: svc.accentColor }}>{svc.number}</span>}
            <div className="w-5 h-5 rounded-full border-2 border-white shadow-md flex items-center justify-center" style={{ backgroundColor: svc.accentColor }}>
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            {isAbove && <span className="font-black text-sm leading-none mt-1 select-none" style={{ color: svc.accentColor }}>{svc.number}</span>}
            <div className="w-[2px] bg-[#1a1a1a]/25" style={{ height: !isAbove ? "0" : "22px" }} />
        </div>
    );
}

/* ── Service card ── */
function ServiceCard({ svc, icon }: { svc: (typeof services)[0]; icon: React.ReactNode }) {
    return (
        <div className="group relative border border-[#1a1a1a]/10 bg-white/70 backdrop-blur-sm p-4 hover:border-[#d32f2f]/40 hover:shadow-lg transition-all duration-300 cursor-default">
            <div className="absolute top-0 left-0 w-3.5 h-3.5" style={{ borderTop: `2px solid ${svc.accentColor}`, borderLeft: `2px solid ${svc.accentColor}` }} />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5" style={{ borderBottom: `2px solid ${svc.accentColor}`, borderRight: `2px solid ${svc.accentColor}` }} />
            <div className="mb-2.5 w-8 h-8 flex items-center justify-center border border-current/20" style={{ color: svc.accentColor }}>
                {icon}
            </div>
            <h3 className="font-black text-xs uppercase tracking-tight leading-snug mb-1.5 text-[#1a1a1a]">
                {svc.title}
            </h3>
            <p className="text-[10px] leading-relaxed text-[#1a1a1a]/60 font-medium">
                {svc.description}
            </p>
        </div>
    );
}
