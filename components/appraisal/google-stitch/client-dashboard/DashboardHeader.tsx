"use client"

import React from 'react'

export const DashboardHeader = () => (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 px-8 py-4 flex justify-between items-center shadow-sm">
        <h2 className="text-xl font-bold text-[#041534]">لوحة التحكم</h2>
        <div className="flex items-center gap-4">
            <button className="p-2 text-[#75777f] hover:bg-[#f8f9fb] rounded-full transition-colors relative">
                <span className="material-symbols-outlined align-middle">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#006a66] rounded-full"></span>
            </button>
            <div className="h-8 w-[1px] bg-[#c5c6cf] mx-2"></div>
            <div className="flex items-center gap-2 cursor-pointer group">
                <span className="text-sm font-medium text-[#041534]">أحمد العتيبي</span>
                <span className="material-symbols-outlined text-[#75777f] group-hover:text-[#041534] transition-colors align-middle">expand_more</span>
            </div>
        </div>
    </header>
)
