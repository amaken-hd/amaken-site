"use client"

import React from 'react'

export const AppraisalSidebar = () => (
    <aside className="lg:col-span-4">
        <div className="sticky top-28 space-y-6">
            {/* Helper Card */}
            <div className="bg-[#1b2a4a] text-white p-6 rounded-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-2">Need Help?</h4>
                    <p className="text-sm text-[#8392b7] mb-4">Our specialized team is ready to assist you with technical details or large-scale portfolio appraisals.</p>
                    <button className="flex items-center gap-2 text-[#86f5ee] font-bold text-sm hover:underline">
                        <span className="material-symbols-outlined align-middle">support_agent</span>
                        Chat with Expert
                    </button>
                </div>
                {/* Abstract texture */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </div>
            {/* Summary Card */}
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-sm space-y-4">
                <h4 className="font-bold text-[#041534]">Request Summary</h4>
                <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Service</span>
                        <span className="font-medium text-[#041534]">Real Estate Appraisal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Asset</span>
                        <span className="font-medium text-[#041534]">Villa / Riyadh</span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-[#edeef0] pt-3">
                        <span className="text-slate-500">Est. Timeline</span>
                        <span className="font-medium text-[#006a66]">3-5 Business Days</span>
                    </div>
                </div>
            </div>
        </div>
    </aside>
)
