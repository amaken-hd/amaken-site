"use client"

import React from 'react'
import { AuthQuote } from './AuthQuote'

const AuthBenefitItem = ({ title, description, icon }: { title: string, description: string, icon: string }) => (
    <div className="flex items-start gap-5">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-[#86f5ee]">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                {icon}
            </span>
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-[#8392b7] text-sm leading-relaxed">{description}</p>
        </div>
    </div>
)

export const AuthBenefits = () => (
    <section className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#041534] to-[#1b2a4a] relative flex-col justify-between p-16 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#006a66] opacity-10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-[#baece8] opacity-5 rounded-full blur-[80px]"></div>

        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-16">
                <span className="text-3xl font-extrabold text-white tracking-tighter">Amaken</span>
                <span className="px-2 py-0.5 bg-[#006a66] text-white text-[10px] font-bold tracking-widest uppercase rounded">
                    Appraisal
                </span>
            </div>

            <div className="space-y-12 max-w-lg">
                <h1 className="text-5xl font-extrabold text-white leading-tight tracking-tight">
                    The Sovereign <br /> <span className="text-[#86f5ee]">Archive</span> of Value.
                </h1>

                <div className="space-y-8">
                    <AuthBenefitItem
                        title="Trust"
                        description="Sovereign-grade security for your institutional real estate data and valuations."
                        icon="verified_user"
                    />
                    <AuthBenefitItem
                        title="Speed"
                        description="AI-enhanced workflows that deliver accurate appraisals in a fraction of the time."
                        icon="bolt"
                    />
                    <AuthBenefitItem
                        title="Accuracy"
                        description="Precision-driven methodology meeting the highest international valuation standards."
                        icon="biotech"
                    />
                </div>
            </div>
        </div>

        <AuthQuote />
    </section>
)
