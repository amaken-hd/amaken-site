
export interface UnitData {
    id: string;
    name: { en: string; ar: string };
    type: { en: string; ar: string }; // "Townhouse", "Villa"
    area: number;
    rooms: number;
    price?: number;
    isSold: boolean;
    image: string; // The main image on UnitCard
    planner_image: string; // The panner image for the modal
    description?: { en: string; ar: string };
    status: string;
}

export interface ProjectData {
    id: string;
    slug: string; // "green-fields"
    name: { en: string; ar: string };
    description: { en: string; ar: string };
    location: { en: string; ar: string };
    type?: string;
    status?: string;
    statusAr?: string;
    year: number;
    images: string[];
    units: UnitData[];
    developer: { en: string; ar: string };
    totalUnits?: number;
}
