"use client"

import React from 'react'

export const AppraisalFormNav = () => (
    <div className="flex justify-between items-center pt-6">
        <button className="px-8 py-3 rounded-lg text-[#041534] font-bold hover:bg-[#edeef0] transition-colors">Save Draft</button>
        <button className="bg-[#041534] text-white px-12 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#041534]/90 transition-transform active:scale-95 shadow-xl shadow-[#041534]/20">
            Continue to Contact
            <span className="material-symbols-outlined text-sm align-middle">arrow_back</span>
        </button>
    </div>
)
