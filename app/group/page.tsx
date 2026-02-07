"use client";

import { ServicesSection } from "@/components/home/services-section";
import { ClientsSection } from "@/components/home/clients-section";
import { AuctionsPreview } from "@/components/home/auctions-preview";
import { CTASection } from "@/components/home/cta-section";
import { Hero } from "@/components/home/hero";
import { HighlightedServices } from "@/components/home/HighlightedServices";
import { InfoSection } from "@/components/home/info-section";

export default function HomePage() {
    return (
        <>
            <Hero
                images={["/group/landing1.jpg", "/group/landing2.jpg", "/group/landing3.png"]}
                interval={700}
            />
            <ServicesSection />
            <HighlightedServices />
            <ClientsSection />
            <AuctionsPreview />
            <CTASection />
        </>
    );
}

