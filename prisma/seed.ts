import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // 1. Clear existing data to avoid duplicates
  await prisma.testimonial.deleteMany();
  await prisma.processStep.deleteMany();
  await prisma.project.deleteMany();
  await prisma.service.deleteMany();

  // 2. Seed Services
  const services = [
    {
      number: "01",
      title: "Branding",
      description: "Crafting cohesive visual identities — logos, typography, and guidelines that make a lasting impression.",
      accentColor: "#d32f2f",
      iconName: "brand",
    },
    {
      number: "02",
      title: "Video Making",
      description: "Full-cycle production: cinematic storytelling, motion graphics, and post-production that captivates.",
      accentColor: "#1a1a1a",
      iconName: "video",
    },
    {
      number: "03",
      title: "3D & Interactive",
      description: "Immersive 3D assets, product visualisations, and interactive web experiences with real-time rendering.",
      accentColor: "#d32f2f",
      iconName: "motion",
    },
    {
      number: "04",
      title: "Photography",
      description: "Editorial, commercial, and event photography expertly composed with light-precise imagery.",
      accentColor: "#1a1a1a",
      iconName: "camera",
    },
    {
      number: "05",
      title: "Development",
      description: "Scalable apps — clean architecture, modern frameworks, and pixel-perfect interfaces.",
      accentColor: "#d32f2f",
      iconName: "dev",
    },
    {
      number: "06",
      title: "Color Grading",
      description: "Professional grading that sets the mood, consistency, and cinematic tone for your visuals.",
      accentColor: "#1a1a1a",
      iconName: "color",
    },
  ];

  for (const [index, svc] of services.entries()) {
    await prisma.service.create({
      data: {
        order: index + 1,
        title: svc.title,
        description: svc.description,
        iconName: svc.iconName,
        accentColor: svc.accentColor,
      },
    });
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
    await prisma.project.create({
      data: project,
    });
  }

  // 4. Seed Process Workflow
  const steps = [
    { order: 1, title: "Discovery", description: "Deep dive into your brand and goals." },
    { order: 2, title: "Strategy", description: "Mapping out the technical and creative path." },
    { order: 3, title: "Design", description: "Crafting the visual and interactive experience." },
    { order: 4, title: "Development", description: "Building robust, scalable infrastructure." },
    { order: 5, title: "Launch", description: "Deployment and performance optimization." },
  ];

  for (const step of steps) {
    await prisma.processStep.create({
      data: step,
    });
  }

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
