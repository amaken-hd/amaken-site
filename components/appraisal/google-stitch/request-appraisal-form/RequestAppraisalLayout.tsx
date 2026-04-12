"use client"

import React from 'react'

import { AppraisalStepper } from './AppraisalStepper'
import { AppraisalCategory } from './AppraisalCategory'
import { AppraisalAssetDetails } from './AppraisalAssetDetails'
import { AppraisalFormNav } from './AppraisalFormNav'
import { AppraisalSidebar } from './AppraisalSidebar'
import { AppraisalSuccessModal } from './AppraisalSuccessModal'

export const RequestAppraisalLayout = () => {
    return (
        <div className="bg-[#f8f9fb] text-[#191c1e] min-h-screen" dir="rtl">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
            <main className="max-w-5xl mx-auto px-6 py-12" dir="ltr">
                <AppraisalStepper />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Form Canvas */}
                    <section className="lg:col-span-8 space-y-10">
                        <AppraisalCategory />
                        <AppraisalAssetDetails />
                        <AppraisalFormNav />
                    </section>
                    <AppraisalSidebar />
                </div>
                <AppraisalSuccessModal />
            </main>
        </div>
    )
}
