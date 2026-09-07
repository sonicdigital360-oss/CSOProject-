'use client';

import React from 'react';
import { MESAF_INFO } from '../lib/mesafData';
import {
  Globe,
  Award,
  ShieldCheck,
  Building2,
  CheckCircle2,
  HeartPulse,
  Droplets,
  BookOpen,
  Wheat,
  Users,
} from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const clusters = [
    { name: 'Health Cluster Nigeria', icon: HeartPulse, role: 'Primary & Maternal Health Coordination' },
    { name: 'Nutrition Sector Coordination', icon: Users, role: 'CMAM & Therapeutic Feeding Protocols' },
    { name: 'Protection & GBV Sub-Sector', icon: ShieldCheck, role: 'Safe Spaces & PSEA Compliance' },
    { name: 'WASH Cluster Nigeria', icon: Droplets, role: 'Emergency Water & Sanitation' },
    { name: 'Education in Emergencies (EiE)', icon: BookOpen, role: 'Displaced Child Reintegration' },
    { name: 'Food Security & Livelihood (FSL)', icon: Wheat, role: 'Agrarian Input Distribution' },
  ];

  return (
    <section id="partners" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-mesaf-teal">
          <Globe className="w-4 h-4" /> Global Coordination Standards
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Humanitarian Clusters, Consortiums & Recognition
        </h2>
        <p className="text-sm text-slate-600">
          MESAF participates actively in the UN Global Humanitarian Response Plan, coordinating field missions with local and multilateral partners across Northeast Nigeria.
        </p>
      </div>

      {/* Award & Global Recognition Spotlight Card */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-teal-500/10 to-emerald-500/10 border-2 border-amber-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-amber-500 text-slate-950 shadow-sm">
            <Award className="w-4 h-4" /> International Humanitarian Award
          </div>
          <h3 className="text-2xl font-black text-slate-900">
            Winner: Non-Profit Organisation Awards 2025
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Recognized by Acquisition International for outstanding grassroots humanitarian response, community accountability to affected populations (AAP), and innovative women-led health interventions in the Lake Chad Basin.
          </p>
        </div>

        <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-2 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 mx-auto flex items-center justify-center font-bold">
            <Award className="w-8 h-8" />
          </div>
          <div className="text-xs font-black text-slate-900">Excellence in Humanitarian Action</div>
          <div className="text-[11px] text-slate-500">Non-Profit Organisation Awards 2025</div>
        </div>
      </div>

      {/* 6 UN Cluster Affiliations Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-black uppercase tracking-wider text-slate-500">
          Humanitarian Cluster Coordination Bodies
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clusters.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 hover:border-mesaf-teal transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-mesaf-teal flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{c.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{c.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
