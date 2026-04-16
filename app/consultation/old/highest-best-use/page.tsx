"use client"

import { HBUHero } from "@/components/consultation/hbu/hbu-hero"
import { HBUExplanation } from "@/components/consultation/hbu/hbu-explanation"
import { HBUMethodology } from "@/components/consultation/hbu/hbu-methodology"
import { HBUCTA } from "@/components/consultation/hbu/hbu-cta"

export default function HighestBestUsePage() {
  return (
    <>
      <HBUHero />
      <HBUExplanation />
      <HBUMethodology />
      <HBUCTA />
    </>
  )
}
