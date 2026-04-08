"use client"

import React from 'react'
import Navbar from "@/components/appraisal/google-stitch/landing-page/NavBar"
import Footer from "@/components/appraisal/google-stitch/landing-page/Footer"
import { HeroSection } from './HeroSection'
import { StatsSection } from './StatsSection'
import { TimelineSection } from './TimelineSection'
import { MissionVisionSection } from './MissionVisionSection'
import { ValuesSection } from './ValuesSection'
import { CertificationsSection } from './CertificationsSection'
import { TeamSection } from './TeamSection'

export const AboutUsLayout = () => {
    return (
        <div className="bg-[#f8f9fb] text-[#191c1e] min-h-screen" dir="rtl">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
            <Navbar />
            <main>
                <HeroSection />
                <StatsSection />
                <TimelineSection />
                <MissionVisionSection />
                <ValuesSection />
                <CertificationsSection />
                <TeamSection />
            </main>
            <Footer />
        </div>
    )
}
