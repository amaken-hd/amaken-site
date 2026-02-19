"use client";

import { useI18n } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AuctionsFilterProps {
    currentFilter: "all" | "upcoming" | "current" | "ended";
    onFilterChange: (filter: "all" | "upcoming" | "current" | "ended") => void;
}

export function AuctionsFilter({ currentFilter, onFilterChange }: AuctionsFilterProps) {
    const { t } = useI18n();

    const filters = [
        { id: "all", label: t("auctions.filters.all") },
        { id: "upcoming", label: t("auctions.filters.upcoming") },
        { id: "current", label: t("auctions.filters.current") },
        { id: "ended", label: t("auctions.filters.ended") },
    ];

    const groupColor = "#A28B67";

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    onClick={() => onFilterChange(filter.id as any)}
                    className={cn(
                        "relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                        currentFilter === filter.id
                            ? "text-white shadow-md"
                            : "bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    )}
                    style={{
                        backgroundColor: currentFilter === filter.id ? groupColor : undefined,
                    }}
                >
                    {currentFilter === filter.id && (
                        <motion.div
                            layoutId="activeFilter"
                            className="absolute inset-0 rounded-full bg-white/20"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10">{filter.label}</span>
                </button>
            ))}
        </div>
    );
}
