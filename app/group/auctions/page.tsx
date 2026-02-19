"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection";
import { AuctionsFilter } from "@/components/group/auctions/auctions-filter";
import { AuctionCard, Auction } from "@/components/group/auctions/auction-card";
// import { MotionDiv } from "@/components/ui/motion";

// Mock Data
const mockAuctions: Auction[] = [
    {
        id: "1",
        title: "Commercial Building - Al Olaya District",
        location: "Riyadh",
        date: "2026-02-15",
        time: "10:00 AM",
        type: "online",
        status: "upcoming",
        image: "/commercial-building-riyadh-saudi-arabia.jpg",
        startingPrice: "5,000,000",
    },
    {
        id: "2",
        title: "Industrial Equipment Lot",
        location: "Jeddah",
        date: "2026-02-20",
        time: "2:00 PM",
        type: "onsite",
        status: "current",
        image: "/industrial-machinery-equipment-auction.jpg",
        startingPrice: "500,000",
    },
    {
        id: "3",
        title: "Residential Villa - Al Rabwah",
        location: "Riyadh",
        date: "2026-01-25",
        time: "11:00 AM",
        type: "hybrid",
        status: "ended",
        image: "/luxury-villa-residential-property-saudi-arabia.jpg",
        startingPrice: "3,200,000",
    },
    {
        id: "4",
        title: "Luxury Apartment Complex",
        location: "Dammam",
        date: "2026-03-10",
        time: "09:00 AM",
        type: "online",
        status: "upcoming",
        image: "/modern-luxury-apartment-building.jpg",
        startingPrice: "12,000,000",
    },
    {
        id: "5",
        title: "Heavy Construction Machinery",
        location: "Tabuk",
        date: "2026-02-22",
        time: "1:00 PM",
        type: "onsite",
        status: "upcoming",
        image: "/construction-site-machinery.jpg",
        startingPrice: "850,000",
    }
];

export default function AuctionsPage() {
    const { t, locale } = useI18n();
    const [filter, setFilter] = useState<"all" | "upcoming" | "current" | "ended">("all");

    const breadcrumbItems = [
        { label: t("nav.home"), href: "/group" },
        { label: t("auctions.pageTitles.auctions"), href: "/group/auctions" },
    ];

    const filteredAuctions = mockAuctions.filter((auction) => {
        if (filter === "all") return true;
        return auction.status === filter;
    });

    return (
        <div className="min-h-screen bg-[#faf7f2]">
            <PageBreadcrumb
                title={t("auctions.pageTitles.auctions")}
                items={breadcrumbItems}
            />

            <main className="container mx-auto px-4 lg:px-8 py-16">
                <AuctionsFilter currentFilter={filter} onFilterChange={setFilter} />

                {filteredAuctions.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredAuctions.map((auction, index) => (
                            <AuctionCard key={auction.id} auction={auction} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">
                            {locale === "ar" ? "لا توجد مزادات في هذه الفئة حالياً." : "No auctions found in this category at the moment."}
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}
