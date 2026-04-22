import React from "react";
import { prisma } from "../lib/prisma";
import ServicesPageClient from "./ServicesPageClient";

export default async function ServicesPage() {
    const services = await prisma.service.findMany({ orderBy: { order: "asc" } });
    const projects = await prisma.project.findMany({ where: { isFeatured: true }, take: 3 });
    const testimonials = await prisma.testimonial.findMany({ take: 1 });

    return <ServicesPageClient initialServices={services} initialProjects={projects} initialTestimonial={testimonials[0]} />;
}
