"use client";

import { useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import { X, ArrowRight, ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { ProjectData } from "@/types/ProjectData";

import "leaflet/dist/leaflet.css";

// Leaflet's default marker icons reference image files that don't resolve
// correctly under Next.js bundling. Point them at the CDN copies instead.
const defaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

interface ProjectsMapProps {
    projects: ProjectData[];
}

// Default center: Riyadh, Saudi Arabia — used when we have no markers yet.
const DEFAULT_CENTER: [number, number] = [24.7136, 46.6753];

function FitBoundsToMarkers({ positions }: { positions: [number, number][] }) {
    const map = useMap();

    useMemo(() => {
        if (positions.length === 0) return;
        if (positions.length === 1) {
            map.setView(positions[0], 13);
            return;
        }
        const bounds = L.latLngBounds(positions);
        map.fitBounds(bounds, { padding: [40, 40] });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [positions.map((p) => p.join(",")).join("|")]);

    return null;
}

export function ProjectsMap({ projects }: ProjectsMapProps) {
    const { locale, direction } = useI18n();
    const isRTL = direction === "rtl";
    const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    // Only projects with valid coordinates can be plotted.
    const mappableProjects = useMemo(
        () =>
            projects.filter(
                (p): p is ProjectData & { lat: number; lng: number } =>
                    typeof p.lat === "number" &&
                    typeof p.lng === "number" &&
                    !Number.isNaN(p.lat) &&
                    !Number.isNaN(p.lng)
            ),
        [projects]
    );

    const positions = useMemo(
        () => mappableProjects.map((p) => [p.lat as number, p.lng as number] as [number, number]),
        [mappableProjects]
    );

    if (mappableProjects.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center text-zinc-500">
                <p>
                    {locale === "ar"
                        ? "لا توجد مشاريع تحتوي على إحداثيات موقع بعد."
                        : "No projects have map coordinates yet."}
                </p>
            </div>
        );
    }

    return (
        <div className="relative w-full h-[70vh] min-h-[420px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
            <MapContainer
                center={DEFAULT_CENTER}
                zoom={11}
                scrollWheelZoom
                className="w-full h-full z-0"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <FitBoundsToMarkers positions={positions} />

                {mappableProjects.map((project) => (
                    <Marker
                        key={project.id}
                        position={[project.lat, project.lng]}
                        icon={defaultIcon}
                        eventHandlers={{
                            click: () => setSelectedProject(project),
                        }}
                    />
                ))}
            </MapContainer>

            {/* Overlay detail panel — sits on top of the map, doesn't resize it */}
            {selectedProject && (
                <div
                    className="absolute z-[1000] bg-white dark:bg-zinc-900 shadow-2xl
                    inset-x-0 bottom-0 rounded-t-2xl
                    sm:inset-auto sm:top-4 sm:bottom-4 sm:w-80 sm:rounded-2xl
                    ltr:sm:right-4 rtl:sm:left-4
                    overflow-hidden flex flex-col animate-in slide-in-from-bottom sm:slide-in-from-right duration-300"
                >
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-3 ltr:right-3 rtl:left-3 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors"
                        aria-label={locale === "ar" ? "إغلاق" : "Close"}
                    >
                        <X className="w-4 h-4" />
                    </button>

                    <div className="relative h-44 shrink-0">
                        <img
                            src={selectedProject.images[0]}
                            alt={selectedProject.name[locale]}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-4 overflow-y-auto">
                        <h3 className="text-lg font-bold mb-1">
                            {selectedProject.name[locale]}
                        </h3>
                        <p className="text-sm text-zinc-500 mb-3">
                            {selectedProject.location[locale]}
                        </p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4">
                            {selectedProject.description[locale]}
                        </p>

                        <Link
                            href={`/group/projects/${selectedProject.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:underline"
                        >
                            {locale === "ar" ? "معرفة المزيد" : "Learn more"}
                            <ArrowIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
