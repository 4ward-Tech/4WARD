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
            { title: "Splash", image: "/cineflow_journey.png", description: "Initial brand impression" },
            { title: "Onboarding", image: "/cineflow_journey.png", description: "Quick tool overview" },
            { title: "Capture", image: "/cineflow_journey.png", description: "High-bitrate recording" },
            { title: "Library", image: "/cineflow_journey.png", description: "Manage production clips" },
            { title: "Color Lab", image: "/cineflow_journey.png", description: "Professional grading" },
            { title: "LUTs", image: "/cineflow_journey.png", description: "Apply cinematic presets" },
            { title: "Scopes", image: "/cineflow_journey.png", description: "Waveform analysis" },
            { title: "Export", image: "/cineflow_journey.png", description: "Render in Prores" }
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
            { title: "Start", image: "/planshift_journey.png", description: "Project initialization" },
            { title: "Import", image: "/planshift_journey.png", description: "Upload CAD drawings" },
            { title: "3D Engine", image: "/planshift_journey.png", description: "Voxel extrapolation" },
            { title: "Materials", image: "/planshift_journey.png", description: "Apply textures & lighting" },
            { title: "VR Mode", image: "/planshift_journey.png", description: "Immersive walkthrough" },
            { title: "Snapshot", image: "/planshift_journey.png", description: "High-res render" },
            { title: "Share", image: "/planshift_journey.png", description: "Client presentation" }
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
            { title: "Scan QR", image: "/egate_journey.png", description: "Quick entry point" },
            { title: "Detect", image: "/egate_journey.png", description: "AI face recognition" },
            { title: "Verify", image: "/egate_journey.png", description: "ID authenticity check" },
            { title: "Records", image: "/egate_journey.png", description: "Consult database" },
            { title: "Access", image: "/egate_journey.png", description: "Grant permission" },
            { title: "Notify", image: "/egate_journey.png", description: "Alert staff/parents" },
            { title: "Logs", image: "/egate_journey.png", description: "Movement statistics" }
        ],
        designGoal: "High-contrast UI for readability in various lighting conditions at school entrances.",
        fullImage: "/E-gate.png"
    }
];
