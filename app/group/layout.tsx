"use client";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

const groupNavigation = [
    { key: "home", href: "/group" },
    { key: "services", href: "/group/services" },
    { key: "projects", href: "/group/projects" },
    { key: "auctions", href: "/group/auctions" },
    { key: "about", href: "/group/about" },
    { key: "contactus", href: "/group/contactus" },
];

export default function GroupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen">
            <Header links={groupNavigation} color="#A28B67" logo="/amaken-logo.png" />
            <main>{children}</main>
            <Footer color="#A28B67" />
        </div>
    );
}
