"use client"

import { User } from "lucide-react"

export default function Navbar() {
    return (
        <nav className="bg-white/80 backdrop-blur-md text-[#041534] text-sm font-medium tracking-tight sticky top-0 z-50 shadow-sm flex justify-between items-center w-full px-6 py-4">
            <div className="flex items-center gap-8">
                <span className="text-xl font-bold">Amaken</span>

                <div className="hidden md:flex gap-6">
                    <a className="text-[#006A66] font-bold border-b-2 border-[#006A66]" href="#">Home</a>
                    <a className="text-slate-600 hover:text-[#006A66]" href="#">Services</a>
                    <a className="text-slate-600 hover:text-[#006A66]" href="#">About</a>
                    <a className="text-slate-600 hover:text-[#006A66]" href="#">Reports</a>
                    <a className="text-slate-600 hover:text-[#006A66]" href="#">Blog</a>
                    <a className="text-slate-600 hover:text-[#006A66]" href="#">Contact</a>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-slate-400 cursor-pointer">EN</span>

                <button className="bg-[#006A66] text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 active:scale-95 duration-150">
                    Request Appraisal
                </button>

                <User className="w-6 h-6 cursor-pointer" />
            </div>
        </nav>
    )
}