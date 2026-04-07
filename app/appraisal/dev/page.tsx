import Navbar from "@/components/appraisal/google-stitch/NavBar"
import HeroSection from "@/components/appraisal/google-stitch/HeroSection"
import StatsBar from "@/components/appraisal/google-stitch/StatsBar"
import ServicesSection from "@/components/appraisal/google-stitch/ServicesSection"

import ReportsSection from "@/components/appraisal/google-stitch/ReportsSection"
import TeamSection from "@/components/appraisal/google-stitch/TeamSection"
import Partners from "@/components/appraisal/google-stitch/Partners"
import Footer from "@/components/appraisal/google-stitch/Footer"
import WhyUsSection from "@/components/appraisal/google-stitch/WhyUsSection"
import Achievements from "@/components/appraisal/google-stitch/Achievements"

export default function Page() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <StatsBar />
            <ServicesSection />
            <WhyUsSection />
            <Achievements />
            <ReportsSection />
            <TeamSection />
            <Partners />
            <Footer />
        </>
    )
}