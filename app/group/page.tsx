"use client";

import { ServicesSection } from "@/components/home/services-section";
import { ServicesSection2 } from "@/components/group/services-section-2";
import { ProjectsSection } from "@/components/group/projects-section";
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
                interval={5000}
            />
            {/* <ServicesSection /> */}
            <ServicesSection2 />
            <ProjectsSection />
            <AuctionsPreview />
            <ClientsSection />

            {/* <HighlightedServices /> */}
            <CTASection />
        </>
    );
}

