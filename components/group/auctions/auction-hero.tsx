"use client";

import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Calendar, Clock, MapPin } from "lucide-react";

interface AuctionHeroProps {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    status: "upcoming" | "current" | "ended";
    videoUrl?: string; // Placeholder for now
}

export function AuctionHero({ title, description, date, time, location, status, videoUrl }: AuctionHeroProps) {
    const { t, locale } = useI18n();
    const groupColor = "#A28B67";

    return (
        <section className="relative min-h-[80vh] flex items-center bg-[#faf7f2] overflow-hidden">

            {/* Background Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A28B67]/5 skew-x-12 hidden lg:block" />

            <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
                        <SectionReveal>
                            <div className="inline-block px-4 py-2 rounded-full bg-[#A28B67]/10 text-[#A28B67] font-medium text-sm mb-6">
                                {t(`auctions.status.${status}` as any) || status}
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                                {title}
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-6 text-gray-500 mb-10">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-[#A28B67]" />
                                    <span>{date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-[#A28B67]" />
                                    <span>{time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-[#A28B67]" />
                                    <span>{location}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Button
                                    size="lg"
                                    className="text-white px-8 text-lg h-14"
                                    style={{ backgroundColor: groupColor }}
                                >
                                    {t("auctions.labels.register")}
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-[#A28B67] text-[#A28B67] px-8 text-lg h-14 hover:bg-[#A28B67] hover:text-white"
                                >
                                    {t("common.contactUs")}
                                </Button>
                            </div>
                        </SectionReveal>
                    </div>

                    {/* Video Side */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <SectionReveal delay={0.2} className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
                            {/* Placeholder Video / Image */}
                            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                                {/* Replace with actual video component later */}
                                <video
                                    className="w-full h-full object-cover opacity-80"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster="/placeholder-video-poster.jpg" // Add a poster if available
                                >
                                    <source src="/placeholder-video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <p className="font-medium text-lg opacity-90">{t("auctions.previewSubtitle")}</p>
                                </div>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
