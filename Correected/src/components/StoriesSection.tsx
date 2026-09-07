'use client';

import React from 'react';
import { BENEFICIARY_STORIES } from '../lib/mesafData';
import {
  Quote,
  MapPin,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { useMesaf } from '../context/MesafContext';

export const StoriesSection: React.FC = () => {
  const { initiateDonation } = useMesaf();

  return (
    <section id="stories" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-mesaf-teal">
          <Sparkles className="w-4 h-4 text-amber-500" /> Lives Transformed
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Field Dispatches & Voices from the Frontlines
        </h2>
        <p className="text-sm text-slate-600">
          Behind every statistic is a human life restored. Read the first-hand accounts of mothers, children, and female innovators across Northeast Nigeria.
        </p>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {BENEFICIARY_STORIES.map((story) => (
          <div
            key={story.id}
            className="mesaf-card rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-white border border-slate-200 shadow-sm"
          >
            {/* Story Image */}
            <div className="h-56 w-full relative overflow-hidden">
              <img
                src={story.image}
                alt={story.beneficiaryName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white font-bold">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {story.community}, {story.lga}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-teal-800/90 text-teal-200 border border-teal-600 text-[10px]">
                  {story.programCategory}
                </span>
              </div>
            </div>

            {/* Story Narrative */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {story.title}
                </h3>

                {/* Quote Box */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 relative">
                  <Quote className="w-5 h-5 text-amber-500/40 absolute top-2 right-2" />
                  <p className="text-xs text-slate-700 italic leading-relaxed relative z-10">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <div className="text-[11px] font-bold text-slate-900 mt-2">
                    &mdash; {story.beneficiaryName}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {story.narrative}
                </p>
              </div>

              {/* Verified Outcome Badge */}
              <div className="pt-3 border-t border-slate-100 flex items-start gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50/60 p-3 rounded-xl border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{story.impactAchieved}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Strip */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-teal-900 via-mesaf-teal to-teal-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="text-xl font-black">Help Us Write More Stories of Hope and Resilience</h4>
          <p className="text-xs text-teal-100 max-w-xl">
            Every contribution directly funds field medicine, maternal clinic screenings, and IDP school kits.
          </p>
        </div>

        <button
          onClick={() => initiateDonation()}
          className="px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-lg transition-all active:scale-95 flex items-center gap-2 shrink-0"
        >
          <Heart className="w-4 h-4 fill-slate-950" />
          <span>Sponsor a Life Today</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
