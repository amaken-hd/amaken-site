"use client";

import { useI18n } from "@/lib/i18n/context";
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection";
import { PropertyGallery } from "@/components/group/auctions/property-gallery";
import { PropertyFeatures } from "@/components/group/auctions/property-features";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Share2, Info } from "lucide-react";

// Mock Data
const mockPropertyDetails = {
    id: "p1",
    auctionId: "1",
    auctionTitle: "Commercial Building - Al Olaya District",
    title: "Office Tower A",
    description: "A prestigious 12-story office tower located in the heart of Riyadh. Designed with modern architecture and fully equipped with state-of-the-art facilities. Ideal for corporate headquarters or investment. The building includes smart management systems, 24/7 security, and a multi-level parking structure.",
    location: "Al Olaya, Riyadh",
    price: "15,000,000",
    images: [
        "/commercial-building-riyadh-saudi-arabia.jpg",
        "/modern-luxury-apartment-building.jpg",
        "/construction-site-machinery.jpg",
        "/luxury-villa-residential-property-saudi-arabia.jpg",
    ],
    features: {
        area: "12,000 m²",
        type: "Commercial",
        rooms: "40 Offices",
        bathrooms: "20",
        orientation: "North-West",
        year: "2023",
        floors: "12",
        advantages: [
            "Smart Control System",
            "High-Speed Elevators",
            "Underground Parking",
            "Fiber Optic Internet",
            "CCTV & Security",
            "Central HVAC",
            "Smoke Detectors",
            "Meeting Rooms",
            "Lounge Area"
        ]
    }
};

export default function PropertyDetailsPage({ params }: { params: { id: string, propId: string } }) {
    const { t, locale } = useI18n();
    const isRTL = locale === "ar";
    const groupColor = "#A28B67";

    const breadcrumbItems = [
        { label: t("nav.home"), href: "/group" },
        { label: t("auctions.pageTitles.auctions"), href: "/group/auctions" },
        { label: mockPropertyDetails.auctionTitle, href: `/group/auctions/${params.id}` },
        { label: mockPropertyDetails.title, href: `/group/auctions/${params.id}/property/${params.propId}` },
    ];

    return (
        <div className="min-h-screen bg-[#faf7f2]/50">
            <PageBreadcrumb
                title={t("auctions.pageTitles.propertyDetails")}
                items={breadcrumbItems}
            />

            <main className="container mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Side: Images & Features */}
                    <div className="lg:col-span-2 space-y-12">
                        <SectionReveal>
                            <PropertyGallery images={mockPropertyDetails.images} />
                        </SectionReveal>

                        <SectionReveal delay={0.1}>
                            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Info className="w-6 h-6 text-[#A28B67]" />
                                    {t("auctions.labels.description")}
                                </h2>
                                <p className="text-gray-600 leading-relaxed whitespace-pre-line text-lg">
                                    {mockPropertyDetails.description}
                                </p>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={0.2}>
                            <PropertyFeatures features={mockPropertyDetails.features} />
                        </SectionReveal>
                    </div>

                    {/* Right Side: Sidebar */}
                    <div className="space-y-8">
                        {/* Price & Action Card */}
                        <SectionReveal delay={0.3} className="sticky top-32">
                            <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-xl overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-full h-2 bg-[#A28B67]" />

                                <div className="mb-8">
                                    <span className="text-gray-400 text-sm block mb-1">
                                        {t("auctions.startingPrice")}
                                    </span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-gray-900">
                                            {mockPropertyDetails.price}
                                        </span>
                                        <span className="text-[#A28B67] font-medium">
                                            {t("projectsPage.units.currency")}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        className="w-full h-14 text-white text-lg font-bold rounded-2xl"
                                        style={{ backgroundColor: groupColor }}
                                    >
                                        {t("auctions.labels.register")}
                                    </Button>

                                    <div className="grid grid-cols-2 gap-4">
                                        <Button variant="outline" className="h-12 rounded-xl group border-gray-200">
                                            <Phone className="w-4 h-4 mr-2 group-hover:text-[#A28B67]" />
                                            {isRTL ? "اتصال" : "Call"}
                                        </Button>
                                        <Button variant="outline" className="h-12 rounded-xl group border-gray-200">
                                            <MessageSquare className="w-4 h-4 mr-2 group-hover:text-[#A28B67]" />
                                            {isRTL ? "واتساب" : "WhatsApp"}
                                        </Button>
                                    </div>

                                    <Button variant="ghost" className="w-full h-12 rounded-xl text-gray-500 hover:text-[#A28B67]">
                                        <Share2 className="w-4 h-4 mr-2" />
                                        {isRTL ? "مشاركة العقار" : "Share Property"}
                                    </Button>
                                </div>

                                {/* Status Indicator */}
                                <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-sm font-medium text-gray-600">
                                            {isRTL ? "المزاد قادم" : "Auction Upcoming"}
                                        </span>
                                    </div>
                                    <span className="text-sm text-gray-400">
                                        ID: {mockPropertyDetails.id}
                                    </span>
                                </div>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </main>
        </div>
    );
}
