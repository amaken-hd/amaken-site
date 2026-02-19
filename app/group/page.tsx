import { ServicesSection2 } from "@/components/group/services-section-2";
import { ProjectsSection } from "@/components/group/projects-section";
import { ClientsSection } from "@/components/home/clients-section";
import { AuctionsPreview } from "@/components/home/auctions-preview";
import { CTASection } from "@/components/home/cta-section";
import { Hero } from "@/components/home/hero";
import { getProjectsFromERP } from "@/app/group/projects/actions";

export default async function HomePage() {
    const projects = await getProjectsFromERP();

    return (
        <>
            <Hero
                images={["/group/landing1.jpg", "/group/landing2.jpg", "/group/landing3.png"]}
                interval={5000}
            />
            <ServicesSection2 />
            <ProjectsSection projects={projects} />
            <AuctionsPreview />
            <ClientsSection />
            <CTASection />
        </>
    );
}

