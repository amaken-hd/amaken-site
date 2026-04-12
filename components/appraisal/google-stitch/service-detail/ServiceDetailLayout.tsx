"use client"

import React from 'react'

import { ServiceHero } from './ServiceHero'
import { AppraisalTypes } from './AppraisalTypes'
import { ServiceProcess } from './ServiceProcess'
import { ServiceUseCases } from './ServiceUseCases'
import { ReportSamplePreview } from './ReportSamplePreview'
import { PricingPlans } from './PricingPlans'
import { ServiceCTA } from './ServiceCTA'
import { RelatedServices } from './RelatedServices'

export const ServiceDetailLayout = () => {
    return (
        <div className="bg-[#f8f9fb] text-[#191c1e] min-h-screen" dir="rtl">
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
            <main>
                <ServiceHero />
                <AppraisalTypes />
                <ServiceProcess />
                <ServiceUseCases />
                <ReportSamplePreview />
                <PricingPlans />
                <ServiceCTA />
                <RelatedServices />
            </main>
        </div>
    )
}
