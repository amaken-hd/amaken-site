"use client";

import { useI18n } from "@/lib/i18n/context";
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection";
import { AuctionHero } from "@/components/group/auctions/auction-hero";
import { AuctionUnitsSection } from "@/components/group/auctions/auction-units-section";
import { AuctionInfoBar } from "@/components/group/auctions/auction-info-bar";

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

            {/* Info bar requested by user design */}
            <AuctionInfoBar
                title={mockAuctionDetails.title}
                date="2026/04/12"
                time="10:00 ص"
                days={3}
                productsCount={2}
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

            <AuctionUnitsSection />
        </div>
    );
}
