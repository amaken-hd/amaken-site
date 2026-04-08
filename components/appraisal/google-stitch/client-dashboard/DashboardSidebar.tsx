"use client"

import React from 'react'

export const DashboardSidebar = () => (
    <aside className="h-screen w-64 fixed right-0 top-0 bg-[#f8f9fb] flex flex-col p-4 space-y-2 z-40">
        <div className="mb-8 px-2 py-4">
            <h1 className="font-bold text-[#041534] text-xl tracking-tight">Amaken Appraisal</h1>
            <p className="text-xs text-[#75777f]">Sovereign Archive</p>
        </div>
        <nav className="flex-1 space-y-1">
            <a className="flex items-center gap-3 px-4 py-3 bg-white text-[#006a66] font-semibold rounded-lg shadow-sm transition-all duration-300 ease-in-out" href="#">
                <span className="material-symbols-outlined align-middle">dashboard</span>
                <span>Dashboard</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-[#75777f] hover:bg-white/50 rounded-lg transition-all duration-300 ease-in-out" href="#">
                <span className="material-symbols-outlined align-middle">description</span>
                <span>My Requests</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-[#75777f] hover:bg-white/50 rounded-lg transition-all duration-300 ease-in-out" href="#">
                <span className="material-symbols-outlined align-middle">assessment</span>
                <span>My Reports</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-[#75777f] hover:bg-white/50 rounded-lg transition-all duration-300 ease-in-out" href="#">
                <span className="material-symbols-outlined align-middle">receipt_long</span>
                <span>Invoices</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-[#75777f] hover:bg-white/50 rounded-lg transition-all duration-300 ease-in-out" href="#">
                <span className="material-symbols-outlined align-middle">person</span>
                <span>Profile</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-[#75777f] hover:bg-white/50 rounded-lg transition-all duration-300 ease-in-out" href="#">
                <span className="material-symbols-outlined align-middle">help</span>
                <span>Help</span>
            </a>
        </nav>
        <div className="pt-4 border-t border-[#edeef0]">
            <a className="flex items-center gap-3 px-4 py-3 text-[#75777f] hover:bg-white/50 rounded-lg transition-all" href="#">
                <span className="material-symbols-outlined align-middle">logout</span>
                <span>Logout</span>
            </a>
            <div className="mt-4 flex items-center gap-3 px-2">
                <img
                    className="w-10 h-10 rounded-full object-cover"
                    alt="User Profile"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzpP60Bb4azW8pwyoQMINdjQVBtzQIiy7Y9BJXDLT0d3mHDaxb7YyMzCysg8EPiJ552Ic_Um3Lzyb1SKPLISYIQoI02qCIIa3WOpVYM5ShW81aXO18PKXeoTRpNwpEbJOBntTNXRaU28pED-ixLdwd6Qxk5dbG-4-TkGMSV1oj56rDc9tuJQ6pt1z3oYFuhtD_Q_ki9SoGUoQ6AU7bEX7hSBpeA23NTvUxgXmbvz3rTsz17YDFZ_us7IiPgA48iBTinyXC-322Re8"
                />
                <div className="overflow-hidden">
                    <p className="text-sm font-bold text-[#041534] truncate">احمد العتيبي</p>
                    <p className="text-xs text-[#75777f] truncate">الرئيس التنفيذي</p>
                </div>
            </div>
        </div>
    </aside>
)
