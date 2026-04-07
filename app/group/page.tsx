import { ServicesSection2 } from "@/components/group/services-section-2";
import { ProjectsSection } from "@/components/group/projects-section";
import { ClientsSection } from "@/components/group/home/clients-section";
import { AuctionsPreview } from "@/components/group/home/auctions-preview";
import { CTASection } from "@/components/group/home/cta-section";
import { Hero } from "@/components/group/home/hero";
async function getProjects() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/group/projects`, { next: { revalidate: 60 } });
        if (!res.ok) return [];
        const json = await res.json();
        return json.data || [];
    } catch (error) {
        console.error("Failed to fetch projects via API:", error);
        return [];
    }
}

export default async function HomePage() {
    const projects = await getProjects();

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

