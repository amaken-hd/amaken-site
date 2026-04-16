import React from 'react';
import { ContactHeader } from '../_components/ContactHeader';
import { ContactForm } from '../_components/ContactForm';
import { ContactSidebar } from '../_components/ContactSidebar';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <ContactHeader />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">
        <ContactForm />
        <ContactSidebar />
      </div>
    </main>
  );
}
