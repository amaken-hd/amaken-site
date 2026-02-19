"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n/context";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface Auction {
    id: string;
    title: string;
    location: string;
    date: string;
    time: string;
    type: "online" | "onsite" | "hybrid";
    status: "upcoming" | "current" | "ended";
    image: string;
    startingPrice?: string;
}

interface AuctionCardProps {
    auction: Auction;
    index: number;
}

export function AuctionCard({ auction, index }: AuctionCardProps) {
    const { t } = useI18n();

    // Group colors
    const groupColor = "#A28B67";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={auction.image || "/placeholder.svg"}
                    alt={auction.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Type Badge */}
                <Badge
                    className={cn(
                        "absolute top-4 left-4 text-white border-0",
                        auction.type === "online" && "bg-blue-600",
                        auction.type === "onsite" && "bg-green-600",
                        auction.type === "hybrid" && "bg-purple-600"
                    )}
                >
                    {t(`auctions.types.${auction.type}`)}
                </Badge>

                {/* Status Badge */}
                <Badge
                    className={cn(
                        "absolute top-4 right-4 border-0",
                        auction.status === "upcoming" && "bg-amber-500 text-white",
                        auction.status === "current" && "bg-green-500 text-white",
                        auction.status === "ended" && "bg-gray-500 text-white"
                    )}
                >
                    {t(`auctions.status.${auction.status}` as any) || auction.status}
                </Badge>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#A28B67] transition-colors">
                    {auction.title}
                </h3>

                <div className="space-y-3 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#A28B67]" />
                        <span>{auction.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#A28B67]" />
                        <span>
                            {new Date(auction.date).toLocaleDateString(t("nav.language") === "English" ? "en-US" : "ar-SA", {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#A28B67]" />
                        <span>{auction.time}</span>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    {auction.startingPrice && (
                        <div>
                            <p className="text-xs text-gray-400 mb-1">{t("auctions.startingPrice")}</p>
                            <p className="font-bold text-gray-800">{auction.startingPrice} {t("projectsPage.units.currency")}</p>
                        </div>
                    )}

                    <Link href={`/group/auctions/${auction.id}`} className="w-full">
                        <Button
                            className="w-full gap-2 text-white hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: groupColor }}
                        >
                            {t("auctions.viewDetails")}
                            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
