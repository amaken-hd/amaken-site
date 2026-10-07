"use client";

import { useI18n } from "@/lib/i18n/context";
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection";
import { AuctionHero } from "@/components/group/auctions/auction-hero";
import { AuctionUnitsSection } from "@/components/group/auctions/auction-units-section";
import { AuctionInfoBar } from "@/components/group/auctions/auction-info-bar";
import { useState, useEffect, use } from "react";
import { Auction } from "@/types/auction";
import { Skeleton } from "@/components/ui/skeleton";
import { getAuctionDynamicStatus } from "@/lib/utils";

export default function AuctionDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { t } = useI18n();
    const [auction, setAuction] = useState<Auction | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const NEXT_PUBLIC_ERPNEXT_URL = process.env.NEXT_PUBLIC_ERPNEXT_URL;
    useEffect(() => {
        const fetchAuction = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`/api/group/auctions/${id}`);
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || "Failed to fetch auction");
                }

                setAuction(result.data);
            } catch (err: any) {
                setError(err.message);
                console.error("Error fetching auction:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAuction();
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Skeleton className="h-[400px] w-full" />
                <div className="container mx-auto px-4 py-8 space-y-8">
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-[600px] w-full" />
                </div>
            </div>
        );
    }

    if (error || !auction) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8 bg-white rounded-xl shadow-sm border">
                    <h2 className="text-xl font-bold text-red-600 mb-2">Error</h2>
                    <p className="text-gray-600">{error || "Auction not found"}</p>
                </div>
            </div>
        );
    }

    const breadcrumbItems = [
        { label: t("nav.home"), href: "/group" },
        { label: t("auctions.pageTitles.auctions"), href: "/group/auctions" },
        { label: auction.auction_name, href: `/group/auctions/${id}` },
    ];

    const { status, targetDate } = getAuctionDynamicStatus(auction);

    // Calculate duration in days between start and end date if available
    let auctionDays = 1;
    if (auction.expected_start_date && auction.expected_end_date) {
        const start = new Date(auction.expected_start_date).getTime();
        const end = new Date(auction.expected_end_date).getTime();
        const diffDays = Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24)) + 1;
        if (!isNaN(diffDays) && diffDays > 0) {
            auctionDays = diffDays;
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <PageBreadcrumb
                title={t("auctions.pageTitles.auctionDetails")}
                items={breadcrumbItems}
            />
            <AuctionHero
                title={auction.auction_name}
                description={auction.auction_name} // Using name as description if not available
                date={auction.expected_start_date}
                time={auction.custom_expected_start_time}
                location={auction.location || auction.city || ""}
                status={status}
                videoUrl={auction.custom_youtube_url}
                custom_mobasher_url={auction.custom_mobasher_url}
                approvalNumber={auction.general_authority_for_real_estate_approval_number}
                auctionImage={auction.custom_project_image}
            />

            <AuctionInfoBar
                title={auction.auction_name}
                date={auction.expected_start_date}
                time={auction.custom_expected_start_time}
                days={auctionDays}
                productsCount={auction.units?.length || auction.no_of_realestates || 0}
                status={status}
                targetDate={targetDate}
                custom_brochureUrl={auction.custom_brochure}
            />


            <AuctionUnitsSection
                units={auction.units?.map((u: any) => ({
                    id: u.name,
                    auctionId: id,
                    lotNumber: u.plot_number || "0",
                    title: u.title,
                    type: u.property_type,
                    location: u.city,
                    startingBid: parseFloat(u.opening_price) || 0,
                    highestBid: parseFloat(u.auctionprice) || 0, // Placeholder
                    bidCount: 0, // Placeholder
                    status: status === "current" ? "active" : status as any,
                    image: NEXT_PUBLIC_ERPNEXT_URL + u.custom_صورة_خارجية_للعقار || "/placeholder.svg",
                    custom_bidding_link: u.custom_bidding_link
                })) || []}
                isLoading={isLoading}
            />
        </div>
    );
}
