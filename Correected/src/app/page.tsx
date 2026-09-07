'use client';

import React from 'react';
import { ToastContainer } from '../components/Toast';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { EmergencyAppealSection } from '../components/EmergencyAppeal';
import { ImpactMetricsSection } from '../components/ImpactMetrics';
import { ProgramsSection } from '../components/ProgramsSection';
import { ProgramDetailModal } from '../components/ProgramDetailModal';
import { FinancialTransparencySection } from '../components/FinancialTransparency';
import { DonationModal } from '../components/DonationModal';
import { StoriesSection } from '../components/StoriesSection';
import { GovernanceSection } from '../components/GovernanceSection';
import { CommunitySafeguardingSection } from '../components/CommunitySafeguarding';
import { PartnersSection } from '../components/PartnersSection';
import { GetInvolvedSection } from '../components/GetInvolvedSection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-mesaf-teal selection:text-white">
      {/* Global Modals & Overlays */}
      <ToastContainer />
      <DonationModal />
      <ProgramDetailModal />

      {/* Main Donor-Standard Platform Layout */}
      <Navbar />

      <main className="flex-1 space-y-6">
        <HeroSection />
        <EmergencyAppealSection />
        <ImpactMetricsSection />
        <ProgramsSection />
        <FinancialTransparencySection />
        <StoriesSection />
        <GovernanceSection />
        <CommunitySafeguardingSection />
        <PartnersSection />
        <GetInvolvedSection />
      </main>

      <Footer />
    </div>
  );
}
