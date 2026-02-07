"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { UnitList } from "@/components/projects/UnitList";
import { projectsData } from "@/components/projects/data";
import { ProjectData } from "@/components/projects/types";
import { InfoSection } from "@/components/home/info-section";
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection";
import { useI18n } from "@/lib/i18n/context";

export default function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const [project, setProject] = useState<ProjectData | null>(null);
    const [loading, setLoading] = useState(true);
    const { locale } = useI18n();

    useEffect(() => {
        if (!slug) return;
        // Simulate data fetching
        const found = projectsData.find((p) => p.slug === slug);
        if (found) {
            setProject(found);
        }
        setLoading(false);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900 dark:border-white"></div>
            </div>
        );
    }

    if (!project) {
        notFound();
        return null;
    }

    const breadcrumbItems = [
        { label: locale === "ar" ? "الرئيسية" : "Home", href: "/group" },
        { label: locale === "ar" ? "المشاريع" : "Projects", href: "/group/projects" },
        { label: project.name[locale] },
    ];

    return (
        <div className="pt-24 min-h-screen bg-zinc-50 dark:bg-zinc-950">
            <PageBreadcrumb
                title={locale === "ar" ? "المشاريع" : "Projects"}
                items={breadcrumbItems}
            />
            <main>
                <InfoSection project={project} />
                {/* <ProjectHero project={project} /> */}
                <UnitList units={project.units} />
            </main>
        </div>

    );
}