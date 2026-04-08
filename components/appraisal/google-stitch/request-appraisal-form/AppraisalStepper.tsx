"use client"

import React from 'react'

export const AppraisalStepper = () => (
    <div className="mb-16 relative">
        <div className="flex justify-between items-center relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#006a66] text-white flex items-center justify-center font-bold shadow-lg ring-4 ring-[#86f5ee]">1</div>
                <span className="mt-3 text-sm font-semibold text-[#041534]">Service Type</span>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#e1e2e4] text-[#75777f] flex items-center justify-center font-bold">2</div>
                <span className="mt-3 text-sm font-medium text-[#75777f]">Asset Details</span>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#e1e2e4] text-[#75777f] flex items-center justify-center font-bold">3</div>
                <span className="mt-3 text-sm font-medium text-[#75777f]">Contact</span>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#e1e2e4] text-[#75777f] flex items-center justify-center font-bold">4</div>
                <span className="mt-3 text-sm font-medium text-[#75777f]">Confirmation</span>
            </div>
        </div>
        {/* Progress Line */}
        <div className="absolute top-5 left-0 w-full h-[2px] bg-[#e1e2e4] -z-0">
            <div className="h-full bg-[#041534] w-1/4"></div>
        </div>
    </div>
)
