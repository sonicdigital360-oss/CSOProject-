'use client';

import React from 'react';
import { useMesaf } from '../context/MesafContext';
import {
  X,
  Heart,
  CheckCircle2,
  MapPin,
  Users,
  Target,
  ShieldCheck,
  ArrowRight,
  Layers,
} from 'lucide-react';

export const ProgramDetailModal: React.FC = () => {
  const { activeProgramModal, setActiveProgramModal, formatCurrency, initiateDonation } = useMesaf();

  if (!activeProgramModal) return null;

  const handleDonateToProgram = () => {
    const pId = activeProgramModal.id;
    setActiveProgramModal(null);
    initiateDonation(pId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="fixed inset-0" onClick={() => setActiveProgramModal(null)} />

      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Modal Header Banner */}
        <div className="relative h-56 w-full shrink-0">
          <img
            src={activeProgramModal.bannerImage}
            alt={activeProgramModal.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={() => setActiveProgramModal(null)}
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 text-white hover:bg-slate-900 border border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Title */}
          <div className="absolute bottom-4 left-6 right-6 space-y-1 text-white">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-teal-600/90 text-white border border-teal-400/40">
              {activeProgramModal.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-black">{activeProgramModal.title}</h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Tagline & Full Description */}
          <div className="space-y-3">
            <div className="text-sm font-bold text-mesaf-teal italic">
              &ldquo;{activeProgramModal.tagline}&rdquo;
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeProgramModal.fullDescription}
            </p>
          </div>

          {/* SDG Alignment Strip */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-mesaf-teal" /> UN Sustainable Development Goals Alignment:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeProgramModal.sdgs.map((sdg) => (
                <span
                  key={sdg.number}
                  style={{ backgroundColor: sdg.color }}
                  className="text-xs font-bold text-white px-3 py-1 rounded-lg shadow-sm"
                >
                  SDG {sdg.number}: {sdg.title}
                </span>
              ))}
            </div>
          </div>

          {/* Key Deliverables & Activities */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
              Core Interventions & Field Activities
            </h4>
            <ul className="space-y-2 text-xs text-slate-700">
              {activeProgramModal.featuredActivities.map((act, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Operational Locations & Beneficiary Target */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-teal-50/60 border border-teal-200 text-xs">
            <div className="space-y-1">
              <span className="font-bold text-mesaf-teal flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Active Locations:
              </span>
              <p className="text-slate-700">{activeProgramModal.activeLocations.join(', ')}</p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-mesaf-teal flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> Target Reach:
              </span>
              <p className="text-slate-700">{activeProgramModal.targetBeneficiaries}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] text-slate-500 uppercase font-bold">Funding Goal:</span>
            <div className="text-base font-black text-slate-900 font-mono">
              {formatCurrency(activeProgramModal.currentFundingNeedUSD)}
            </div>
          </div>

          <button
            onClick={handleDonateToProgram}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-mesaf-teal to-emerald-600 hover:from-mesaf-tealDark hover:to-emerald-700 text-white font-bold text-xs shadow-give-glow transition-all active:scale-95 flex items-center gap-2"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Fund This Program</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
