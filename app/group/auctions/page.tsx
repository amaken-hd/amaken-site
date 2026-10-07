"use client";

import { useState, useEffect } from "react";
import { PageBreadcrumb } from "@/components/layout/BreadcrumbSection";
import { AuctionsFilter } from "@/components/group/auctions/auctions-filter";
import { AuctionCard } from "@/components/group/auctions/auction-card";
import { Auction } from "@/types/auction";
import { useI18n } from "@/lib/i18n/context";
import { Loader2 } from "lucide-react";
import { getAuctionDynamicStatus } from "@/lib/utils";

export default function AuctionsPage({
    searchParams,
}: {
    searchParams: { filter?: string };
}) {
    const { locale } = useI18n();
    const filter = (searchParams?.filter || "all") as "all" | "upcoming" | "current" | "ended";

    const [auctions, setAuctions] = useState<Auction[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const res = await fetch("/api/group/auctions");
                const json = await res.json();
                setAuctions(json.data || []);
            } catch (e: any) {
                console.error("Failed to load auctions", e);
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAuctions();
    }, []);

    const breadcrumbItems = [
        { label: locale === "ar" ? "الرئيسية" : "Home", href: "/group" },
        { label: locale === "ar" ? "المزادات" : "Auctions", href: "/group/auctions" },
    ];

    // Filter logic on the client using real-time dynamic status
    const filteredAuctions = auctions.filter((auction) => {
        if (filter === "all") return true;
        const { status } = getAuctionDynamicStatus(auction);
        return status === filter;
    });


    return (
        <div className="min-h-screen">
            <PageBreadcrumb
                title={locale === "ar" ? "المزادات" : "Auctions"}
                items={breadcrumbItems}
            />

            <main className="container mx-auto px-4 lg:px-8 py-16">
                <AuctionsFilter currentFilter={filter} />

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                    </div>
                ) : error ? (
                    <div className="text-center py-20">
                        <p className="text-red-500 text-lg mb-4">حدث خطأ في تحميل البيانات {error}</p>
                        <button className="bg-[#A28B67] text-white px-6 py-2 rounded-lg">إعادة المحاولة</button>
                    </div>
                ) : filteredAuctions.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredAuctions.map((auction, index) => (
                            <AuctionCard key={auction.name} auction={auction} index={index} />
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
