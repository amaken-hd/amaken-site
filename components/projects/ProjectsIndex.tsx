"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "./data";

export function ProjectsIndex() {
    const { dictionary } = useI18n();
    const t = (dictionary as any).projectsPage;

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-4 font-heading"
                >
                    {t.title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-zinc-600 dark:text-zinc-400"
                >
                    {t.subtitle}
                </motion.p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
                <div className="hidden lg:block flex-1" />

                <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                    <button className="px-4 py-2 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                        {t.filter.all}
                    </button>
                    <button className="px-4 py-2 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                        {t.filter.residential}
                    </button>
                    <button className="px-4 py-2 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                        {t.filter.commercial}
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}
