"use client"

import { ConsultingHero } from "@/components/consultation/consulting-hero"
import { ConsultingServices } from "@/components/consultation/consulting-services"
import { ConsultingProcess } from "@/components/consultation/consulting-process"
import { ConsultingCaseStudies } from "@/components/consultation/consulting-case-studies"
import { ConsultingCTA } from "@/components/consultation/consulting-cta"

export default function consultationPage() {
  return (
    <>
      <ConsultingHero />
      <ConsultingServices />
      <ConsultingProcess />
      <ConsultingCaseStudies />
      <ConsultingCTA />
    </>
  )
}
