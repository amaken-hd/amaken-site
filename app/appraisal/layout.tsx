"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

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
        <div className="min-h-screen division-appraisal">
            <Header color="#1b9d98" links={appraisalNavigation} />
            <main>{children}</main>
            <Footer color="#1b9d98" />
        </div>
    )
}
