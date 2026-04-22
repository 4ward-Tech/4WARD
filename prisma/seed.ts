import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // 1. Clear existing data
  await prisma.testimonial.deleteMany();
  await prisma.processStep.deleteMany();
  await prisma.project.deleteMany();
  await prisma.service.deleteMany();

  // 2. Seed Services
  const services = [
    { order: 1, title: "Branding", description: "Crafting cohesive visual identities — logos, typography, and guidelines that make a lasting impression.", accentColor: "#d32f2f", iconName: "brand" },
    { order: 2, title: "Video Making", description: "Full-cycle production: cinematic storytelling, motion graphics, and post-production that captivates.", accentColor: "#1a1a1a", iconName: "video" },
    { order: 3, title: "3D & Interactive", description: "Immersive 3D assets, product visualisations, and interactive web experiences with real-time rendering.", accentColor: "#d32f2f", iconName: "motion" },
    { order: 4, title: "Photography", description: "Editorial, commercial, and event photography expertly composed with light-precise imagery.", accentColor: "#1a1a1a", iconName: "camera" },
    { order: 5, title: "Development", description: "Scalable apps — clean architecture, modern frameworks, and pixel-perfect interfaces.", accentColor: "#d32f2f", iconName: "dev" },
    { order: 6, title: "Color Grading", description: "Professional grading that sets the mood, consistency, and cinematic tone for your visuals.", accentColor: "#1a1a1a", iconName: "color" },
  ];

  for (const svc of services) {
    await prisma.service.create({ data: svc });
  }

  // 3. Seed Projects
  const projects = [
    {
      slug: "cashwater",
      name: "CashWater",
      subtitle: "Intelligent Water Management",
      overview: "An intelligent water management system that digitizes water billing and empowers local communities to record usage.",
      description: "CashWater is an intelligent water management system that digitizes water billing, empowers local communities to record usage, and uses AI to detect anomalies and improve revenue collection.",
      year: 2024,
      category: "IoT / AI",
      deviceType: "phone",
      accentColor: "#d32f2f",
      image: "/project-mockup.png",
      modelPath: "/cashwater1_draco.glb",
      techStack: ["Next.js", "Three.js", "AI Integration", "IoT"],
      isFeatured: true,
    },
    {
      slug: "planshift",
      name: "Planshift",
      subtitle: "3D Architecture & VR Explorer",
      overview: "Transform flat architectural plans into navigable 3D environments. Explore future spaces in immersive VR before construction even begins.",
      description: "Transform flat architectural plans into navigable 3D environments. Explore future spaces in immersive VR before construction even begins.",
      year: 2023,
      category: "Visualization",
      deviceType: "laptop",
      accentColor: "#d32f2f",
      image: "/Planshift.png",
      techStack: ["React", "WebGL", "Unity"],
      isFeatured: true,
    },
    {
      slug: "e-gate",
      name: "E-Gate",
      subtitle: "Digital Access Control",
      overview: "A digital visitor registration system for schools. Digitize visitation with identity verification and secure QR-based entry.",
      description: "A digital visitor registration system for schools. Digitize visitation with identity verification and secure QR-based entry.",
      year: 2024,
      category: "Security Tech",
      deviceType: "phone",
      accentColor: "#d32f2f",
      image: "/E-gate.png",
      techStack: ["TypeScript", "Firebase", "React Native"],
      isFeatured: true,
    },
  ];

  for (const project of projects) {
    await prisma.project.create({ data: project });
  }

  // 4. Seed Process Workflow
  const steps = [
    {
      order: 1,
      phase: "EXPLORATION PHASE",
      duration: "1 WEEK",
      title: "Discovery",
      description: "Initial exploration to find the best solution.",
      details: [
        { label: "PROBLEM SPACE", icon: "P", iconColor: "#d32f2f", items: ["Define problem & success metrics."] },
        { label: "FEEDBACK", icon: "F", iconColor: "#1a1a1a", items: ["Brainstorm audience needs."] }
      ]
    },
    {
      order: 2,
      phase: "REFINEMENT PHASE",
      duration: "1-2 WEEKS",
      title: "Design",
      description: "Executing core creative design concepts.",
      details: [
        { label: "DESIGNING MOCKS", icon: "D", iconColor: "#d32f2f", items: ["Iteration on visual concepts."] }
      ]
    },
    {
      order: 3,
      phase: "REFINEMENT PHASE",
      duration: "1-2 WEEKS",
      title: "Approval",
      description: "Stakeholder review and final direction.",
      details: [
        { label: "SOLIDIFY DIRECTION", icon: "S", iconColor: "#1a1a1a", items: ["Stakeholder feedback loop."] }
      ]
    },
    {
      order: 4,
      phase: "DEVELOPMENT PHASE",
      duration: "2 WEEKS",
      title: "Build",
      description: "Handoff and implementation support.",
      details: [
        { label: "ASSET DELIVERY", icon: "E", iconColor: "#1a1a1a", items: ["Polished assets delivery."] }
      ]
    }
  ];

  for (const step of steps) {
    await prisma.processStep.create({
      data: {
        order: step.order,
        phase: step.phase,
        duration: step.duration,
        title: step.title,
        description: step.description,
        details: step.details,
      }
    });
  }

  // 5. Seed Testimonials
  await prisma.testimonial.create({
    data: {
      name: "Jeremy",
      role: "Manager",
      feedback: "They exceeded my expectations! We commissioned them to design and build a sustainable platform for our project, and the result was amazing. They implemented advanced technology and created a beautiful interface.",
    }
  });

  console.log("✅ Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
