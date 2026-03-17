export interface Project {
    id: string;
    slug: string;
    name: string;
    subtitle: string;
    overview: string;
    accentColor: string;
    deviceType: 'phone' | 'laptop';
    image: string;
    tagline: string;
    mobileLabel: string;
    mobileSub: string;
    year: string;
    category: string;
    // New fields for Case Study
    description: string;
    role: string;
    techStack: string[];
    userFlowSteps: {
        title: string;
        image: string;
        description: string;
    }[];
    designGoal: string;
    fullImage: string;
}

export const projects: Project[] = [
    {
        id: "01",
        slug: "cineflow",
        name: "CineFlow",
        subtitle: "Visual Narrative Platform",
        overview: "An industry-standard color grading and visual storytelling platform for cinematic productions.",
        accentColor: "#d32f2f",
        deviceType: "phone",
        image: "/project-mockup.png",
        tagline: "Visual Excellence",
        mobileLabel: "CineFlow Mobile",
        mobileSub: "Post-Production Suite",
        year: "2024",
        category: "Cinematography",
        description: "We wanted to reimagine the mobile video editing experience, making it simple yet powerful enough for professional cinematographers to perform quick color grades on-set.",
        role: "Lead UI/UX Designer",
        techStack: ["Next.js", "Three.js", "Framer Motion"],
        userFlowSteps: [
            { title: "Splash", image: "/project-mockup.png", description: "Initial brand impression" },
            { title: "Onboarding", image: "/project-mockup.png", description: "Quick tool overview" },
            { title: "Registration", image: "/project-mockup.png", description: "Secure account sync" },
            { title: "Catalog", image: "/project-mockup.png", description: "Browse production assets" }
        ],
        designGoal: "Clean-cut minimalistic design with accentuated key interface elements for focused editing.",
        fullImage: "/project-mockup.png"
    },
    {
        id: "02",
        slug: "planshift",
        name: "Planshift",
        subtitle: "3D Architecture & VR Explorer",
        overview: "Transform flat architectural plans into navigable 3D environments. Explore future spaces in immersive VR before construction even begins.",
        accentColor: "#d32f2f",
        deviceType: "laptop",
        image: "/Planshift.png",
        tagline: "Spatial Innovation",
        mobileLabel: "Planshift VR",
        mobileSub: "Architectural Engine",
        year: "2023",
        category: "Visualization",
        description: "We thought through the user path from the initial visit to placing an order. It's an important step that helps you see the whole scenario and not miss important details.",
        role: "3D Product Designer",
        techStack: ["React", "WebGL", "Unity"],
        userFlowSteps: [
            { title: "Upload", image: "/Planshift.png", description: "Import 2D blueprints" },
            { title: "Process", image: "/Planshift.png", description: "AI-driven 3D extrapolation" },
            { title: "Explore", image: "/Planshift.png", description: "Immersive VR walkthrough" }
        ],
        designGoal: "Minimalist spatial UI that stays out of the way of the architectural vision.",
        fullImage: "/Planshift.png"
    },
    {
        id: "03",
        slug: "e-gate",
        name: "E-Gate",
        subtitle: "Digital Access Control",
        overview: "A digital visitor registration system for schools. Digitize visitation with identity verification and secure QR-based entry.",
        accentColor: "#d32f2f",
        deviceType: "phone",
        image: "/E-gate.png",
        tagline: "Secure Access",
        mobileLabel: "E-Gate System",
        mobileSub: "Visitor Verification",
        year: "2024",
        category: "Security Tech",
        description: "A complete overhaul of the manual visitor logging system. We focused on speed and reliability for staff while maintaining a friendly face for visitors.",
        role: "Full Stack Developer",
        techStack: ["TypeScript", "Firebase", "React Native"],
        userFlowSteps: [
            { title: "Scan", image: "/E-gate.png", description: "Quick QR entry" },
            { title: "Verify", image: "/E-gate.png", description: "Database check" },
            { title: "Confirm", image: "/E-gate.png", description: "Admission granted" }
        ],
        designGoal: "High-contrast UI for readability in various lighting conditions at school entrances.",
        fullImage: "/E-gate.png"
    }
];
