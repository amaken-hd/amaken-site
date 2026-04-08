"use client"

import React from 'react'

export const AppraisalCategory = () => (
    <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-[#041534] tracking-tight">Select Appraisal Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Real Estate (Selected) */}
            <div className="cursor-pointer border-2 border-[#006a66] bg-[#006a66]/5 p-6 rounded-xl flex flex-col items-center text-center transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-[#86f5ee] flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#006a66] text-3xl align-middle">domain</span>
                </div>
                <h3 className="font-bold text-[#041534]">Real Estate</h3>
                <p className="text-xs text-slate-500 mt-2">Residential, Commercial, Lands</p>
            </div>
            {/* Machinery */}
            <div className="cursor-pointer border border-transparent bg-[#ffffff] p-6 rounded-xl flex flex-col items-center text-center transition-all hover:bg-slate-50 hover:shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#edeef0] flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#75777f] text-3xl align-middle">precision_manufacturing</span>
                </div>
                <h3 className="font-bold text-[#041534]">Machinery</h3>
                <p className="text-xs text-slate-500 mt-2">Equipment, Heavy Vehicles</p>
            </div>
            {/* Facilities */}
            <div className="cursor-pointer border border-transparent bg-[#ffffff] p-6 rounded-xl flex flex-col items-center text-center transition-all hover:bg-slate-50 hover:shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#edeef0] flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#75777f] text-3xl align-middle">factory</span>
                </div>
                <h3 className="font-bold text-[#041534]">Facilities</h3>
                <p className="text-xs text-slate-500 mt-2">Industrial Units, Warehouses</p>
            </div>
        </div>
    </div>
)
