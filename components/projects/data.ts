
import { ProjectData, UnitData } from "./types";

export const generateUnits = (): UnitData[] => {
    const units: UnitData[] = [];
    const types = [
        { en: "Townhouse", ar: "تاون هاوس" },
        { en: "Villa", ar: "فيلا" },
    ];

    for (let i = 1; i <= 8; i++) {
        const isSold = i % 3 === 0; // Every 3rd is sold
        const typeIndex = i % 2;
        const area = 250 + (i * 10);
        const rooms = 4 + (i % 2);

        units.push({
            id: `unit-${i}`,
            name: {
                en: `${types[typeIndex].en} ${100 + i}`,
                ar: `${types[typeIndex].ar} ${100 + i}`
            },
            type: types[typeIndex],
            area: area,
            rooms: rooms,
            bathrooms: rooms + 1,
            price: isSold ? undefined : 1500000 + (i * 50000),
            isSold: isSold,
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop", // Placeholder
        });
    }
    return units;
};

export const projectsData: ProjectData[] = [
    {
        id: "p1",
        slug: "650",
        name: {
            en: "Green Fields",
            ar: "الحقول الخضراء",
        },
        description: {
            en: "A modern residential community designed for family living, featuring sustainable architecture and premium amenities. Located in the heart of North Riyadh.",
            ar: "مجتمع سكني حديث مصمم للحياة العائلية، يتميز بهندسة معمارية مستدامة ومرافق متميزة. يقع في قلب شمال الرياض.",
        },
        location: {
            en: "Riyadh, An Narjis",
            ar: "الرياض، النرجس",
        },
        year: 2024,
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-2a4d9f8770d3?q=80&w=2670&auto=format&fit=crop", // Cover
            "https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=2670&auto=format&fit=crop",
        ],
        developer: {
            en: "Amaken Development",
            ar: "أماكن للتطوير",
        },
        units: generateUnits(),
    },
    {
        id: "p2",
        slug: "luxury-heights",
        name: {
            en: "Luxury Heights",
            ar: "مرتفعات الفخامة",
        },
        description: {
            en: "Experience elevated living in our signature high-rise towers offering panoramic views of the city.",
            ar: "استمتع بتجربة حياة راقية في أبراجنا المميزة التي توفر إطلالات بانورامية على المدينة.",
        },
        location: {
            en: "Jeddah, Corniche",
            ar: "جدة، الكورنيش",
        },
        year: 2025,
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop",
        ],
        developer: {
            en: "Amaken Development",
            ar: "أماكن للتطوير",
        },
        units: [], // Coming soon
    }
];
