'use client';

import React, { useState } from 'react';
import { IMPACT_METRICS_OVERVIEW } from '../lib/mesafData';
import {
  MapPin,
  Users,
  HeartPulse,
  Activity,
  GraduationCap,
  Sparkles,
  Droplets,
  CheckCircle2,
  Building2,
  Compass,
} from 'lucide-react';

export const ImpactMetricsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'borno' | 'adamawa' | 'yobe'>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return Users;
      case 'HeartPulse':
        return HeartPulse;
      case 'Activity':
        return Activity;
      case 'GraduationCap':
        return GraduationCap;
      case 'Sparkles':
        return Sparkles;
      case 'Droplets':
        return Droplets;
      default:
        return Compass;
    }
  };

  const locations = [
    {
      state: 'Borno State (Operations HQ)',
      lgas: ['Maiduguri Metropolitan (MMC)', 'Jere LGA', 'Konduga LGA (Mandarari)', 'Gwoza', 'Bama'],
      impactNote: 'Primary operational hub for health clinics, CMAM malnutrition, WGSS safe spaces & digital academy.',
    },
    {
      state: 'Adamawa State (Corridor)',
      lgas: ['Mubi North', 'Mubi South', 'Michika', 'Madagali'],
      impactNote: 'Emergency education in crisis, dignity kit distributions, and agrarian recovery tools.',
    },
    {
      state: 'Yobe State (North Corridor)',
      lgas: ['Damaturu', 'Gujba', 'Gulani'],
      impactNote: 'Community solar borehole rehabilitation, hygiene promotion, and smallholder farmer seeds.',
    },
  ];

  return (
    <section id="impact" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-mesaf-teal">
          <Compass className="w-4 h-4" /> Transparent Accountability
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Verified Field Impact & Humanitarian Coverage
        </h2>
        <p className="text-sm text-slate-600">
          Tracking lifesaving health, nutrition, education, and women’s economic outcomes across the BAY crisis states of Northeast Nigeria.
        </p>
      </div>

      {/* 6 Key Verified Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {IMPACT_METRICS_OVERVIEW.map((metric, idx) => {
          const Icon = getIcon(metric.icon);

          return (
            <div
              key={idx}
              className="mesaf-card rounded-3xl p-7 flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all bg-white border border-slate-200"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-mesaf-teal flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  VERIFIED OUTCOME
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-3xl font-black text-slate-900 font-mono tracking-tight">
                  {metric.value}
                </div>
                <h4 className="text-sm font-bold text-slate-800">{metric.label}</h4>
                <p className="text-xs text-slate-500">{metric.subtext}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Regional Operational Coverage Map Box */}
      <div className="mesaf-card rounded-3xl p-8 border border-slate-200 bg-white space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-mesaf-teal" /> BAY States Operational Hubs & Interventions
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Active field deployments adhering to UN Humanitarian Inter-Cluster coordination standards.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-slate-700">Active Field Missions Daily</span>
          </div>
        </div>

        {/* State Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-mesaf-teal" />
                  <span>{loc.state}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{loc.impactNote}</p>
              </div>

              <div className="pt-2 border-t border-slate-200 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Target LGAs:</span>
                <div className="flex flex-wrap gap-1">
                  {loc.lgas.map((lga) => (
                    <span
                      key={lga}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
                    >
                      {lga}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
