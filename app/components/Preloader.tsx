"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { projects } from "../lib/projects";

const DRACO_URL = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";

export default function Preloader() {
    useEffect(() => {
        // Preload all 3D models once at the root level
        projects.forEach(project => {
            if (project.modelPath) {
                useGLTF.preload(project.modelPath, DRACO_URL);
            }
        });
    }, []);

    return null;
}
