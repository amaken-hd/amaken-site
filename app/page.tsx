"use client";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ServicesSection } from "@/components/group/home/services-section";

import { ClientsSection } from "@/components/group/home/clients-section";
import { StatsSection } from "@/components/group/home/stats-section";
import { AuctionsPreview } from "@/components/group/home/auctions-preview";
import { NewsPreview } from "@/components/group/home/news-preview";
import { CTASection } from "@/components/group/home/cta-section";

import { Hero } from "@/components/group/home/hero";
import { Gate } from "@/components/group/home/gate";
import { InfoSection } from "@/components/group/home/info-section";
import { redirect } from "next/navigation";

export default function HomePage() {
    // return (
    //     <div className="min-h-screen">
    //         {/* <Header /> */}
    //         <main>
    //             <Gate />
    //         </main>
    //     </div>
    // );
    redirect("/group");
}
