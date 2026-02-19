"use client";

import { useI18n } from "@/lib/i18n/context";
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection";
import { AuctionHero } from "@/components/group/auctions/auction-hero";
import { PropertyCard, Property } from "@/components/group/auctions/property-card";
import { SectionReveal } from "@/components/ui/section-reveal";

// Mock Data (In a real app, fetch based on params.id)
const mockAuctionDetails = {
    id: "1",
    title: "Commercial Building - Al Olaya District",
    description: "A prime commercial opportunity in the heart of Riyadh's business district. This auction features a multi-story office building with high potential for ROI.",
    location: "Riyadh",
    date: "2026-02-15",
    time: "10:00 AM",
    type: "online",
    status: "upcoming" as const,
    videoUrl: "/placeholder-video.mp4",
};

const mockProperties: Property[] = [
    {
        id: "p1",
        auctionId: "1",
        title: "Office Tower A",
        description: "12-story office building with modern amenities.",
        location: "Al Olaya, Riyadh",
        type: "commercial",
        area: 12000,
        rooms: 40,
        bathrooms: 20,
        image: "/commercial-building-riyadh-saudi-arabia.jpg",
        status: "available",
    },
    {
        id: "p2",
        auctionId: "1",
        title: "Retail Annex",
        description: "Separate retail space adjacent to the main tower.",
        location: "Al Olaya, Riyadh",
        type: "commercial",
        area: 3000,
        image: "/modern-luxury-apartment-building.jpg",
        status: "available",
    },
    {
        id: "p3",
        auctionId: "1",
        title: "Parking Structure",
        description: "Multi-level parking facility.",
        location: "Al Olaya, Riyadh",
        type: "land",
        area: 5000,
        image: "/construction-site-machinery.jpg",
        status: "available",
    },
];

export default function AuctionDetailsPage({ params }: { params: { id: string } }) {
    const { t } = useI18n();

    const breadcrumbItems = [
        { label: t("nav.home"), href: "/group" },
        { label: t("auctions.pageTitles.auctions"), href: "/group/auctions" },
        { label: mockAuctionDetails.title, href: `/group/auctions/${params.id}` },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <PageBreadcrumb
                title={t("auctions.pageTitles.auctionDetails")}
                items={breadcrumbItems}
            />

            <AuctionHero
                title={mockAuctionDetails.title}
                description={mockAuctionDetails.description}
                date={mockAuctionDetails.date}
                time={mockAuctionDetails.time}
                location={mockAuctionDetails.location}
                status={mockAuctionDetails.status}
                videoUrl={mockAuctionDetails.videoUrl}
            />

            <section className="py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionReveal className="mb-12 text-center">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                            {t("projectsPage.units.title") || "Properties"}
                        </h2>
                        <div className="w-20 h-1 bg-[#A28B67] mx-auto" />
                    </SectionReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mockProperties.map((property, index) => (
                            <PropertyCard key={property.id} property={property} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
