import React from 'react';
import { ServicesHero } from '../_components/ServicesHero';
import { MarketResearchDeepDive } from '../_components/MarketResearchDeepDive';
import { HbuStudiesDetail } from '../_components/HbuStudiesDetail';
import { ConsultationSuccessHighlights } from '../_components/ConsultationSuccessHighlights';
import { ServicesBottomCTA } from '../_components/ServicesBottomCTA';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <MarketResearchDeepDive />
      <HbuStudiesDetail />
      <ConsultationSuccessHighlights />
      <ServicesBottomCTA />
    </main>
  );
}
