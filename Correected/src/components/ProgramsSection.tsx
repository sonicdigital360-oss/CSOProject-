'use client';

import React from 'react';
import { useMesaf } from '../context/MesafContext';
import { HUMANITARIAN_PROGRAMS } from '../lib/mesafData';
import {
  HeartPulse,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Droplets,
  Wheat,
  Heart,
  ArrowRight,
  Target,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { HumanitarianProgram } from '../types';

export const ProgramsSection: React.FC = () => {
  const { setActiveProgramModal, formatCurrency, initiateDonation } = useMesaf();

  const getProgramIcon = (name: string) => {
    switch (name) {
      case 'HeartPulse':
        return HeartPulse;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'GraduationCap':
        return GraduationCap;
      case 'Sparkles':
        return Sparkles;
      case 'Droplets':
        return Droplets;
      case 'Wheat':
        return Wheat;
      default:
        return Heart;
    }
  };

  return (
    <section id="programs" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-mesaf-blue bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-sm">
          <Target className="w-4 h-4 text-amber-500" /> UN SDG-Aligned Portfolios
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Humanitarian & Developmental Programs in Action
        </h2>
        <p className="text-sm text-slate-600">
          Rigorous community-led interventions designed according to the Core Humanitarian Standard (CHS) and UN Sustainable Development Goals.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {HUMANITARIAN_PROGRAMS.map((program) => {
          const Icon = getProgramIcon(program.iconName);
          const percentFunded = Math.min(
            100,
            Math.round((program.fundingRaisedUSD / program.currentFundingNeedUSD) * 100)
          );

          return (
            <div
              key={program.id}
              className="mesaf-card rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-white border border-slate-200 shadow-sm group"
            >
              {/* Card Image Banner */}
              <div className="h-48 w-full relative overflow-hidden">
                <img
                  src={program.bannerImage}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 border border-white/20 shadow-sm">
                    {program.category}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-mesaf-blue text-white flex items-center justify-center shadow-md">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* SDG Goal Badges */}
                <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                  {program.sdgs.map((sdg) => (
                    <span
                      key={sdg.number}
                      style={{ backgroundColor: sdg.color }}
                      className="text-[10px] font-black text-white px-2.5 py-0.5 rounded-md shadow-sm"
                    >
                      SDG {sdg.number}: {sdg.title}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-mesaf-blue transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {program.summary}
                  </p>
                </div>

                {/* Key Stat Pills */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  {program.keyStats.slice(0, 2).map((st, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                      <div className="text-sm font-black text-slate-900 font-mono">{st.value}</div>
                      <div className="text-[9px] text-slate-500 font-bold uppercase truncate">{st.label}</div>
                    </div>
                  ))}
                </div>

                {/* Funding Needs Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-500">Program Funding:</span>
                    <span className="font-bold text-slate-900 font-mono">
                      {formatCurrency(program.fundingRaisedUSD)} ({percentFunded}%)
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className="h-full bg-gradient-to-r from-mesaf-blue via-blue-500 to-amber-400 rounded-full transition-all duration-700"
                      style={{ width: `${percentFunded}%` }}
                    />
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setActiveProgramModal(program)}
                    className="py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all text-center border border-slate-200"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => initiateDonation(program.id)}
                    className="py-3 rounded-xl bg-gradient-to-r from-mesaf-blue via-blue-600 to-amber-500 hover:from-mesaf-blueDark hover:to-amber-600 text-white text-xs font-black shadow-sm transition-all flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    <span>Support</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
