import React from 'react';
import { ConsultationHero } from './_components/ConsultationHero';
import { TrustSignals } from './_components/TrustSignals';
import { CoreServices } from './_components/CoreServices';
import { StrategicForesight } from './_components/StrategicForesight';
import { ClientLogos } from './_components/ClientLogos';
import { ConsultationCTA } from './_components/ConsultationCTA';

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-white">
      <ConsultationHero />
      {/* <TrustSignals /> */}
      <CoreServices />
      <StrategicForesight />
      <ClientLogos />
      <ConsultationCTA />
    </main>
  );
}
