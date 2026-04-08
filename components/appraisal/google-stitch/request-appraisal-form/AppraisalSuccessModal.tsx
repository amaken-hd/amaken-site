"use client"

import React from 'react'

export const AppraisalSuccessModal = () => (
    <div className="hidden fixed inset-0 bg-[#041534]/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-10 max-w-lg w-full text-center space-y-6 shadow-2xl">
            <div className="w-24 h-24 bg-[#86f5ee] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-[#006a66] text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#041534]">Request Submitted!</h2>
            <p className="text-[#75777f]">Your appraisal request has been successfully registered in our sovereign archive.</p>
            <div className="bg-[#f2f4f6] p-4 rounded-xl inline-block border border-[#c5c6cf]/30">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Order Number</p>
                <p className="text-2xl font-mono font-bold text-[#041534]">APR-2024-00142</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
                <button className="bg-[#041534] text-white py-3 rounded-lg font-bold shadow-lg">Track Status</button>
                <button className="bg-[#edeef0] text-[#041534] py-3 rounded-lg font-bold">Download Receipt</button>
            </div>
        </div>
    </div>
)
