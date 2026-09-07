'use client';

import React, { useState } from 'react';
import { useMesaf } from '../context/MesafContext';
import {
  Heart,
  ShieldCheck,
  Award,
  ArrowRight,
  Sparkles,
  Users,
  Droplets,
  HeartPulse,
  BookOpen,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { formatCurrency, convertFromUSD, currency, initiateDonation } = useMesaf();
  const [selectedAmountUSD, setSelectedAmountUSD] = useState<number>(50);
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');

  const presetAmounts = [25, 50, 100, 250];

  const getImpactDescription = (amount: number) => {
    switch (amount) {
      case 25:
        return 'Provides 2 displaced children with complete school-in-a-box learning packs and books.';
      case 50:
        return 'Funds a 4-week supply of Ready-to-Use Therapeutic Food (RUTF) to save 2 severely malnourished infants.';
      case 100:
        return 'Equips 3 pregnant mothers in Mandarari with maternal health checks, antimalarials, and sterile delivery kits.';
      case 250:
        return 'Sponsors a woman IDP survivor with 6 weeks of digital enterprise training and seed micro-grant.';
      default:
        return 'Deploys lifesaving medical, nutritional, and protection assistance to cut-off communities.';
    }
  };

  return (
    <section className="relative pt-10 pb-20 px-6 overflow-hidden bg-hero-humanitarian">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Top Badges Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-200 text-xs sm:text-sm font-black text-mesaf-blue shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
            <span>TOUCHING NEXT GENERATION &bull; MESAF</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-xs sm:text-sm font-black text-amber-900 shadow-sm">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Winner — Non-Profit Organisation Awards 2025</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700">
            <MapPin className="w-4 h-4 text-mesaf-blue" />
            <span>Maiduguri &bull; Borno, Adamawa & Yobe (BAY) States</span>
          </div>
        </div>

        {/* Main Grid: Headline & Interactive Quick-Giving Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission Narrative */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Restoring <span className="text-mesaf-gradient">Dignity, Health & Hope</span> for Crisis-Affected Women & Children in Northeast Nigeria.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              Operating across the frontline communities of Borno, Adamawa, and Yobe states, Mercy Sarah Foundation (MESAF) delivers lifesaving maternal health & nutrition, gender-based violence protection, inclusive emergency schooling, and transformative women’s digital empowerment.
            </p>

            {/* Micro Pillars Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-mesaf-blue flex items-center justify-center shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black text-slate-900">Health & CMAM</div>
                  <div className="text-[11px] text-slate-500">Maternal & RUTF Care</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black text-slate-900">GBV Protection</div>
                  <div className="text-[11px] text-slate-500">Safe Spaces & Therapy</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black text-slate-900">Digital Academy</div>
                  <div className="text-[11px] text-slate-500">Cybersecurity for Women</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <button
                onClick={() => initiateDonation()}
                className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-mesaf-blue via-blue-600 to-amber-500 hover:from-mesaf-blueDark hover:to-amber-600 text-white font-black text-base shadow-give-glow hover:shadow-xl hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>Support Our Humanitarian Mission</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#programs"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border-2 border-slate-300 hover:border-mesaf-blue hover:bg-blue-50/50 text-slate-800 font-extrabold text-sm shadow-sm transition-all flex items-center justify-center gap-2.5"
              >
                <BookOpen className="w-4 h-4 text-mesaf-blue" />
                <span>Explore 6 UN Portfolios</span>
              </a>
            </div>
          </div>

          {/* Right Column: Super-Sized Interactive Quick-Giving Card */}
          <div className="lg:col-span-5">
            <div className="mesaf-card rounded-3xl p-8 border-2 border-blue-600/30 shadow-2xl space-y-7 bg-white relative">
              {/* Card Badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-50 text-mesaf-blue border border-blue-200">
                  INSTANT HUMANITARIAN IMPACT
                </span>
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Direct Relief
                </span>
              </div>

              {/* Frequency Toggle */}
              <div className="grid grid-cols-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
                <button
                  onClick={() => setFrequency('monthly')}
                  className={`py-3.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                    frequency === 'monthly'
                      ? 'bg-white text-mesaf-blue shadow-md border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Give Monthly (Sustained Life)
                </button>
                <button
                  onClick={() => setFrequency('once')}
                  className={`py-3.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                    frequency === 'once'
                      ? 'bg-white text-mesaf-blue shadow-md border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One-Time Gift
                </button>
              </div>

              {/* Amount Selection Buttons */}
              <div className="space-y-2.5">
                <label className="text-xs sm:text-sm font-black text-slate-800">
                  Choose Gift Amount ({currency}):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {presetAmounts.map((amt) => {
                    const isSelected = selectedAmountUSD === amt;
                    return (
                      <button
                        key={amt}
                        onClick={() => setSelectedAmountUSD(amt)}
                        className={`py-4 sm:py-5 rounded-2xl font-mono text-base sm:text-lg font-black transition-all ${
                          isSelected
                            ? 'bg-mesaf-blue text-white shadow-lg border-2 border-mesaf-blue scale-105'
                            : 'bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-blue-400 hover:bg-slate-100'
                        }`}
                      >
                        {formatCurrency(amt)}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tangible Impact Box */}
              <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 space-y-2">
                <div className="text-xs sm:text-sm font-black text-amber-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Your Gift Outcome:</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-semibold">
                  {getImpactDescription(selectedAmountUSD)}
                </p>
              </div>

              {/* Submit Button */}
              <button
                onClick={() => initiateDonation(undefined, selectedAmountUSD)}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-mesaf-blue via-blue-600 to-amber-500 hover:from-mesaf-blueDark hover:to-amber-600 text-white font-black text-base sm:text-lg shadow-give-glow hover:shadow-2xl hover:scale-102 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>
                  {frequency === 'monthly' ? 'Pledge ' : 'Donate '}
                  {formatCurrency(selectedAmountUSD)}
                  {frequency === 'monthly' ? ' / Month' : ''}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1 font-semibold">
                <span>&bull; Verified NGO Status</span>
                <span>&bull; Instant Tax Receipt</span>
                <span>&bull; Secure Encrypted Giving</span>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Numbers Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto pt-6 border-t border-slate-200">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-1 shadow-sm">
            <div className="text-3xl font-black text-slate-900 font-mono">124,500+</div>
            <div className="text-xs text-slate-500 font-black uppercase tracking-wider">Total Lives Reached</div>
            <div className="text-[11px] text-slate-400">Across BAY Crisis Region</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-1 shadow-sm">
            <div className="text-3xl font-black text-mesaf-blue font-mono">32,400+</div>
            <div className="text-xs text-slate-500 font-black uppercase tracking-wider">Mothers & Infants</div>
            <div className="text-[11px] text-slate-400">Treated for Malnutrition</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-1 shadow-sm">
            <div className="text-3xl font-black text-amber-600 font-mono">14,800+</div>
            <div className="text-xs text-slate-500 font-black uppercase tracking-wider">Children Educated</div>
            <div className="text-[11px] text-slate-400">Safe Classrooms & Study Kits</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center space-y-1 shadow-sm">
            <div className="text-3xl font-black text-orange-600 font-mono">8,650+</div>
            <div className="text-xs text-slate-500 font-black uppercase tracking-wider">Women Empowered</div>
            <div className="text-[11px] text-slate-400">Digital Skills & Micro-Grants</div>
          </div>
        </div>
      </div>
    </section>
  );
};
