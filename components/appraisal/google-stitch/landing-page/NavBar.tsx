"use client"

import { User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
    { key: "home", title: "Home", href: "/appraisal" },
    { key: "services", title: "Services", href: "/appraisal/service-detail" },
    { key: "about", title: "About", href: "/appraisal/about-us" },
    { key: "reports", title: "Reports", href: "/appraisal/sample-reports" },
    { key: "blog", title: "Blog", href: "/appraisal/blog-insights" },
    { key: "contactus", title: "Contact", href: "/appraisal/contact-us" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-white/80 backdrop-blur-md text-[#041534] text-sm font-medium tracking-tight sticky top-0 z-50 shadow-sm flex justify-between items-center w-full px-6 py-4">
            <div className="flex items-center gap-8">
                <span className="text-xl font-bold">Amaken</span>

                <div className="hidden md:flex gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.key}
                            href={link.href}
                            className={cn(
                                "transition-all duration-200",
                                pathname === link.href
                                    ? "text-[#006A66] font-bold border-b-2 border-[#006A66]"
                                    : "text-slate-600 hover:text-[#006A66]"
                            )}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-slate-400 cursor-pointer">EN</span>
                <Link href="/appraisal/request-appraisal-form">
                    <button className="bg-[#041534] text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 active:scale-95 duration-150">
                        Request Appraisal
                    </button>
                </Link>

                <User className="w-6 h-6 cursor-pointer" />
            </div>
        </nav>
    )
}