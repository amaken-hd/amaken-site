"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, MapPin, Bed, Calendar, Building } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Mock Data - In a real app, this would likely come from an API or the dictionary
const projects = [
    {
        id: 1,
        title: "Aurora Villa",
        titleAr: "ارورا فيلا",
        location: "Riyadh, Saudi Arabia",
        locationAr: "الرياض، المملكة العربية السعودية",
        type: "residential_sale",
        units: 14,
        year: 2023,
        image: "/projects/1.jpg", // Placeholder
        status: "For Sale",
        statusAr: "للبيع"
    },
    {
        id: 2,
        title: "Vega Residences",
        titleAr: "فيجا ريزيدنسز",
        location: "Riyadh, Qurtubah",
        locationAr: "الرياض، قرطبة",
        type: "residential_sale",
        units: 27,
        year: 2024,
        image: "/projects/2.jpg", // Placeholder
        status: "For Sale",
        statusAr: "للبيع"
    },
    {
        id: 3,
        title: "Manazil Al Safwa",
        titleAr: "منازل الصفوة",
        location: "Jeddah, Al Safa",
        locationAr: "جدة، الصفا",
        type: "residential_sale",
        units: 65,
        year: 2023,
        image: "/projects/3.jpg", // Placeholder
        status: "For Sale",
        statusAr: "للبيع"
    },
    {
        id: 4,
        title: "Amaken Tower",
        titleAr: "برج أماكن",
        location: "Riyadh, Olaya",
        locationAr: "الرياض، العليا",
        type: "commercial",
        units: 12,
        year: 2022,
        image: "/projects/4.jpg", // Placeholder
        status: "Leased",
        statusAr: "مؤجر"
    },
    {
        id: 5,
        title: "Al Malqa Center",
        titleAr: "مركز الملقا",
        location: "Riyadh, Al Malqa",
        locationAr: "الرياض، الملقا",
        type: "commercial",
        units: 8,
        year: 2024,
        image: "/projects/5.jpg", // Placeholder
        status: "For Lease",
        statusAr: "للإيجار"
    }
]

const categories = [
    { id: "all", label: "All", labelAr: "الكل" },
    { id: "residential_sale", label: "Residential for Sale", labelAr: "وحدات سكنية للبيع" },
    { id: "residential_rent", label: "Residential for Rent", labelAr: "وحدات سكنية للايجار" },
    { id: "commercial", label: "Commercial", labelAr: "وحدات تجارية" },
]

export function ProjectsSection() {
    const { locale, direction } = useI18n()
    const isRTL = direction === "rtl"
    const [activeCategory, setActiveCategory] = React.useState("all")
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        direction: isRTL ? "rtl" : "ltr"
    })

    // Filter projects
    const filteredProjects = React.useMemo(() => {
        if (activeCategory === "all") return projects
        return projects.filter(p => p.type === activeCategory)
    }, [activeCategory])

    const scrollPrev = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">
                        {locale === "ar" ? "المشاريع" : "Projects"}
                    </h2>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={cn(
                                    "px-6 py-2 rounded-none border transition-all duration-300 text-sm font-medium",
                                    activeCategory === cat.id
                                        ? "bg-[#66bb6a] text-white border-[#66bb6a]"
                                        // Using Green from image example for active state? Or Gold?
                                        // User said "With our colors". Amaken uses Gold/Web Colors.
                                        // The user image shows Green buttons like "#66bb6a".
                                        // But in the prompt they said "with our colors" (Amaken Colors).
                                        // Previous Amaken Gold is #A28B67. Teal is #1b9d98.
                                        // Let's use Amaken Gold #A28B67 for active state to comply with "Our Colors".
                                        : "bg-white text-gray-500 border-gray-200 hover:border-[#A28B67] hover:text-[#A28B67]"
                                )}
                                style={activeCategory === cat.id ? { backgroundColor: "#A28B67", borderColor: "#A28B67" } : {}}
                            >
                                {locale === "ar" ? cat.labelAr : cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative group">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4 touch-pan-y">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="pl-4 min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full border border-gray-100 group/card">
                                        {/* Image */}
                                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                            {/* Placeholder generic image since we don't have real ones loaded yet */}
                                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                                                <Building className="w-12 h-12 opacity-50" />
                                            </div>
                                            {/* 
                           Commented out actual image tag to avoid broken images if paths don't exist.
                           Using a colored div with placeholder for now.
                        */}
                                            {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"/> */}

                                            <div className="absolute top-4 right-4 z-10">
                                                <span className="bg-[#66bb6a] text-white text-xs font-bold px-3 py-1 rounded-sm">
                                                    {locale === "ar" ? project.statusAr : project.status}
                                                    {/* The image shows Green tag "للبيع". Let's keep it green or use Gold? 
                                 Real estate "For Sale" often green. Let's stick to standard practice or Gold.
                                 Let's make it Gold to align with "Our Colors".
                             */}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 text-center">
                                            <h3 className="text-xl font-bold text-[#1e2c3a] mb-2">
                                                {locale === "ar" ? project.titleAr : project.title}
                                            </h3>

                                            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6">
                                                <MapPin className="w-4 h-4" />
                                                <span>{locale === "ar" ? project.locationAr : project.location}</span>
                                            </div>

                                            <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-100 text-sm text-gray-500">
                                                <div className="flex items-center gap-1.5">
                                                    <Building className="w-4 h-4" />
                                                    <span>
                                                        {project.units} {locale === "ar" ? "الوحدات" : "Units"}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>
                                                        {locale === "ar" ? "سنة التنفيذ" : "Year"}: {project.year}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollPrev}
                        className={`absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-[#66bb6a] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 disabled:opacity-50 z-10 ${isRTL ? "right-auto left-auto -right-12" : ""}`}
                        style={{ backgroundColor: "#A28B67" }}
                    >
                        {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
                    </button>

                    <button
                        onClick={scrollNext}
                        className={`absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-[#66bb6a] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 disabled:opacity-50 z-10 ${isRTL ? "left-auto right-auto -left-12" : ""}`}
                        style={{ backgroundColor: "#A28B67" }}
                    >
                        {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                    </button>

                </div>

                {/* View More Button */}
                <div className="flex justify-center mt-12">
                    <Button
                        asChild
                        className="bg-[#A28B67] hover:bg-[#8e7a5a] text-white px-8 py-6 h-auto text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <a href="/group/projects">
                            {locale === "ar" ? "المزيد من المشاريع" : "More Projects"}
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
