import React from 'react';
import { ConsultationHeader } from './_components/ConsultationHeader';
import { ConsultationFooter } from './_components/ConsultationFooter';

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <ConsultationHeader />
      <div className="flex-grow">
        {children}
      </div>
      <ConsultationFooter />
    </div>
  );
}
