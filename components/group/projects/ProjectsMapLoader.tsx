"use client";

import dynamic from "next/dynamic";
import { ProjectData } from "@/types/ProjectData";
import { Loader2 } from "lucide-react";

// Leaflet touches `window` on import, which breaks Next.js SSR.
// Loading it client-side only avoids that entirely.
const ProjectsMap = dynamic(
    () => import("./ProjectsMap").then((mod) => mod.ProjectsMap),
    {
        ssr: false,
        loading: () => (
            <div className="flex justify-center items-center h-[70vh] min-h-[420px]">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            </div>
        ),
    }
);

export function ProjectsMapLoader({ projects }: { projects: ProjectData[] }) {
    return <ProjectsMap projects={projects} />;
}
