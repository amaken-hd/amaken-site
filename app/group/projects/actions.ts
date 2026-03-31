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
    description: string;
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
        "implementation_year",
        "description"
    ]);

    const filters = JSON.stringify([
        ["is_published", "=", 1]
    ]);

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
                    en: erpProject.description,
                    ar: erpProject.description,
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

export async function getProjectImagesFromERP(projectId: string): Promise<string[]> {
    if (!ERP_API_URL || !API_KEY || !API_SECRET) {
        return [];
    }

    const fields = JSON.stringify(["file_url"]);
    const filters = JSON.stringify([
        ["attached_to_doctype", "=", "Sales Project"],
        ["attached_to_name", "=", projectId]
    ]);

    try {
        const url = `${ERP_API_URL}/api/resource/File?fields=${encodeURIComponent(fields)}&filters=${encodeURIComponent(filters)}`;

        const response = await fetch(
            url,
            {
                headers: {
                    Authorization: `token ${API_KEY}:${API_SECRET}`,
                    "Content-Type": "application/json",
                },
                next: { revalidate: 60 },
            }
        );

        if (!response.ok) {
            console.error("Failed to fetch project images from ERPNext");
            return [];
        }

        const data = await response.json();
        const files: { file_url: string }[] = data.data;

        if (!files || files.length === 0) return [];

        return files.map(f => {
            if (f.file_url.startsWith("http")) return f.file_url;
            return `${ERP_API_URL}${f.file_url}`;
        });
    } catch (error) {
        console.error("Error fetching project images:", error);
        return [];
    }
}

interface ERPUnit {
    name: string;
    property_type: string;
    instrument_size: number;
    number_of_bedrooms: number;
    price: number;
    panner: string;
    status: string;
    custom_name_on_website: string;
    custom_description: string;
    custom_unit_image: string;
    marketing?: string;
    custom_project: string;
}

export async function getProjectUnitsFromERP(projectId: string): Promise<UnitData[]> {
    if (!ERP_API_URL || !API_KEY || !API_SECRET) {
        return [];
    }

    const fields = JSON.stringify([
        "name",
        "property_type",
        "instrument_size",
        "number_of_bedrooms",
        "price",
        "panner",
        "status",
        "custom_name_on_website",
        "custom_description",
        "custom_unit_image",
        "custom_project"
    ]);

    // Assuming the 'Real Estate Sales' doctype links to the project via a 'custom_project' field
    const filters = JSON.stringify([
        ["custom_project", "=", projectId],
        ["marketing", "=", "direct marketing"],
        ["custom_is_published", "=", 1]
    ]);

    try {
        const url = `${ERP_API_URL}/api/resource/Real Estate Sales?fields=${encodeURIComponent(fields)}&filters=${encodeURIComponent(filters)}`;

        const response = await fetch(
            url,
            {
                headers: {
                    Authorization: `token ${API_KEY}:${API_SECRET}`,
                    "Content-Type": "application/json",
                },
                // next: { revalidate: 60 },
                cache: "no-store", // Prevents caching stale data during development
            }
        );

        if (!response.ok) {
            console.error("Failed to fetch project units from ERPNext");
            return [];
        }

        const data = await response.json();
        const erpUnits: ERPUnit[] = data.data;

        if (!erpUnits || erpUnits.length === 0) return [];

        return erpUnits.map(u => {
            let pannerUrl = "..";
            if (u.panner) {
                if (u.panner.startsWith("http")) {
                    pannerUrl = u.panner;
                } else {
                    pannerUrl = `${ERP_API_URL}${u.panner}`;
                }
            }

            let imageUrl = "";
            if (u.custom_unit_image) {
                if (u.custom_unit_image.startsWith("http")) {
                    imageUrl = u.custom_unit_image;
                } else {
                    imageUrl = `${ERP_API_URL}${u.custom_unit_image}`;
                }
            }

            return {
                id: u.name,
                name: {
                    en: u.custom_name_on_website || u.name,
                    ar: u.custom_name_on_website || u.name
                },
                type: {
                    en: u.property_type || "Unit",
                    ar: u.property_type || "وحدة"
                },
                area: u.instrument_size || 0,
                rooms: u.number_of_bedrooms || 0,
                price: u.price,
                image: imageUrl,
                planner_image: pannerUrl,
                description: {
                    en: u.custom_description || "",
                    ar: u.custom_description || ""
                },
                status: u.status || "غير متاح",
                project_id: u.custom_project
            };
        });
    } catch (error) {
        console.error("Error fetching project units:", error);
        return [];
    }
}
