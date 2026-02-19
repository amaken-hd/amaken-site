"use server";

import { ProjectData, UnitData } from "@/components/projects/types";
import { generateUnits } from "@/components/projects/data";

const ERP_API_URL = process.env.NEXT_PUBLIC_ERPNEXT_URL;
const API_KEY = process.env.ERP_API_KEY;
const API_SECRET = process.env.ERP_API_SECRET;

interface ERPProject {
    name: string;
    project_name: string;
    project_type: string;
    project_image: string;
    city: string;
    neighborhood: string;
    no_of_units: number;
    no_of_buildings: number;
    status: string;
    creation: string;
}

interface ERPResponse {
    data: ERPProject[];
}

export async function getProjectsFromERP(): Promise<ProjectData[]> {
    if (!ERP_API_URL || !API_KEY || !API_SECRET) {
        console.error("ERPNext credentials missing");
        return [];
    }

    const fields = JSON.stringify([
        "name",
        "project_name",
        "project_type",
        "project_image",
        "city",
        "neighborhood",
        "no_of_units",
        "no_of_buildings",
        "status",
        "creation"
    ]);

    const filters = JSON.stringify([]);

    try {
        const url = `${ERP_API_URL}/api/resource/Sales Project?order_by=creation desc&fields=${encodeURIComponent(fields)}&filters=${encodeURIComponent(filters)}`;
        console.log("Fetching projects from:", url);

        const response = await fetch(
            url,
            {
                headers: {
                    Authorization: `token ${API_KEY}:${API_SECRET}`,
                    "Content-Type": "application/json",
                },
                next: { revalidate: 60 }, // Cache for 1 minute
            }
        );

        if (!response.ok) {
            console.error("Failed to fetch projects from ERPNext:", await response.text());
            return [];
        }

        const data: ERPResponse = await response.json();
        const erpProjects = data.data;

        if (!erpProjects) return [];

        // Transform to ProjectData
        const projects: ProjectData[] = erpProjects.map((erpProject) => {
            // "Projects only": No static units generation

            // Handle image URL
            let imageUrl = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop";
            if (erpProject.project_image) {
                if (erpProject.project_image.startsWith("http")) {
                    imageUrl = erpProject.project_image;
                } else {
                    imageUrl = `${ERP_API_URL}${erpProject.project_image}`;
                }
            }

            // Map project type to match ProjectsSection categories if possible
            let mappedType = "residential_sale";
            if (erpProject.project_type?.toLowerCase().includes("commercial")) {
                mappedType = "commercial";
            } else if (erpProject.project_type?.toLowerCase().includes("rent")) {
                mappedType = "residential_rent";
            }

            return {
                id: erpProject.name, // Use name as unique ID
                slug: erpProject.name.toLowerCase().replace(/\s+/g, "-"),
                name: {
                    en: erpProject.project_name,
                    ar: erpProject.project_name,
                },
                description: {
                    en: `${erpProject.project_type || 'Residential'} project with ${erpProject.no_of_units || 0} units in ${erpProject.no_of_buildings || 0} buildings.`,
                    ar: `مشروع ${erpProject.project_type || 'سكني'} يحتوي على ${erpProject.no_of_units || 0} وحدة في ${erpProject.no_of_buildings || 0} مبنى.`,
                },
                location: {
                    en: `${erpProject.city || ''} ${erpProject.neighborhood ? ', ' + erpProject.neighborhood : ''}`,
                    ar: `${erpProject.city || ''} ${erpProject.neighborhood ? ', ' + erpProject.neighborhood : ''}`,
                },
                type: mappedType,
                status: erpProject.status || "For Sale",
                statusAr: erpProject.status === "Leased" ? "مؤجر" : (erpProject.status === "For Lease" ? "للإيجار" : "للبيع"),
                year: parseInt(erpProject.creation?.split('-')[0]) || new Date().getFullYear(),
                images: [imageUrl],
                developer: {
                    en: "Amaken Development",
                    ar: "أماكن للتطوير",
                },
                units: [], // No units as requested
                totalUnits: erpProject.no_of_units || 0,
            };
        });

        return projects;

    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}
