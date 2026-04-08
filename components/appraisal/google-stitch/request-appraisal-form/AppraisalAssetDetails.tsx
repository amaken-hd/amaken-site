"use client"

import React from 'react'

export const AppraisalAssetDetails = () => (
    <div className="bg-[#ffffff] rounded-xl p-8 space-y-8">
        <div className="flex items-center gap-3 border-b border-[#edeef0] pb-4">
            <span className="material-symbols-outlined text-[#006a66] align-middle">edit_note</span>
            <h2 className="text-xl font-bold text-[#041534]">Property Information</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Property Type</label>
                <select className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]">
                    <option>شقة (Apartment)</option>
                    <option>فيلا (Villa)</option>
                    <option>أرض (Land)</option>
                    <option>عمارة (Building)</option>
                </select>
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">City / Neighborhood</label>
                <input
                    className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                    placeholder="الرياض، الملقا"
                    type="text"
                />
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Total Area (m²)</label>
                <input
                    className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                    placeholder="450"
                    type="number"
                />
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Appraisal Purpose</label>
                <select className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]">
                    <option>Sale (بيع)</option>
                    <option>Finance (تمويل)</option>
                    <option>Legal (قضائي)</option>
                    <option>Internal (داخلي)</option>
                </select>
            </div>
        </div>
        <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Special Requirements</label>
            <textarea
                className="w-full bg-[#f2f4f6] border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#006a66]"
                placeholder="Provide any additional details about the asset..."
                rows={4}
            ></textarea>
        </div>
        <div className="border-2 border-dashed border-[#c5c6cf] rounded-xl p-10 flex flex-col items-center justify-center bg-[#f2f4f6] text-center group cursor-pointer hover:bg-white transition-all">
            <span className="material-symbols-outlined text-4xl text-[#75777f] mb-3 group-hover:text-[#006a66] align-middle">cloud_upload</span>
            <p className="text-sm font-semibold text-[#041534]">Upload Property Documents</p>
            <p className="text-xs text-slate-400 mt-1">Deed, structural plans, or images (Max 10MB)</p>
        </div>
    </div>
)
