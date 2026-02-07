"use client"

import { FeasibilityHero } from "@/components/consultation/feasibility/feasibility-hero"
import { FeasibilityBenefits } from "@/components/consultation/feasibility/feasibility-benefits"
import { FeasibilityProcess } from "@/components/consultation/feasibility/feasibility-process"
import { FeasibilityDeliverables } from "@/components/consultation/feasibility/feasibility-deliverables"
import { FeasibilityCTA } from "@/components/consultation/feasibility/feasibility-cta"

export default function FeasibilityPage() {
  return (
    <>
      <FeasibilityHero />
      <FeasibilityBenefits />
      <FeasibilityProcess />
      <FeasibilityDeliverables />
      <FeasibilityCTA />
    </>
  )
}
