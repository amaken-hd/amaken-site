"use client"

import Footer from "@/components/appraisal/google-stitch/landing-page/Footer";
import Navbar from "@/components/appraisal/google-stitch/landing-page/NavBar";



const appraisalNavigation = [
    { key: "home", href: "/appraisal" },
    { key: "services", href: "/appraisal/services" },
    { key: "about", href: "/appraisal/about" },
    { key: "contactus", href: "/appraisal/contactus" },
];

export default function AppraisalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
