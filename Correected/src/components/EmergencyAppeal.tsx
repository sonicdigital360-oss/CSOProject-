'use client';

import React from 'react';
import { useMesaf } from '../context/MesafContext';
import { ACTIVE_EMERGENCY_APPEAL } from '../lib/mesafData';
import {
  AlertTriangle,
  Heart,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';

export const EmergencyAppealSection: React.FC = () => {
  const { formatCurrency, currency, initiateDonation } = useMesaf();
  const appeal = ACTIVE_EMERGENCY_APPEAL;

  const percentageFunded = Math.round((appeal.raisedAmountUSD / appeal.targetAmountUSD) * 100);

  const handleFundItem = (unitCostUSD: number, itemName: string) => {
    initiateDonation(undefined, unitCostUSD);
  };

  return (
    <section id="emergency-appeal" className="py-20 px-6 max-w-7xl mx-auto space-y-10">
      {/* Header Container with Urgent Alert Frame */}
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-rose-900 via-rose-950 to-slate-950 text-white shadow-2xl relative overflow-hidden border border-rose-800/60">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 space-y-8">
          {/* Urgency Pill & Location */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-xs font-black text-rose-300 uppercase tracking-widest">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span>{appeal.urgency} HUMANITARIAN EMERGENCY APPEAL</span>
            </div>

            <div className="flex items-center gap-4 text-xs text-rose-200">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {appeal.location}
              </span>
              <span className="flex items-center gap-1 font-bold">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {appeal.daysRemaining} Days Remaining
              </span>
            </div>
          </div>

          {/* Headline & Narrative */}
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-snug">
              {appeal.title}
            </h2>
            <p className="text-sm sm:text-base text-rose-100/90 leading-relaxed">
              {appeal.description}
            </p>
          </div>

          {/* Funding Progress Bar & Target Counters */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div className="space-y-1">
                <span className="text-xs text-rose-200 uppercase font-bold tracking-wider">
                  Total Relief Raised So Far:
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                  {formatCurrency(appeal.raisedAmountUSD, appeal.raisedAmountNGN)}
                </div>
              </div>

              <div className="text-right space-y-1">
                <span className="text-xs text-rose-200 uppercase font-bold tracking-wider">
                  Emergency Appeal Target:
                </span>
                <div className="text-xl sm:text-2xl font-bold text-amber-300 font-mono">
                  {formatCurrency(appeal.targetAmountUSD, appeal.targetAmountNGN)}
                </div>
              </div>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full h-4 bg-slate-900/60 rounded-full overflow-hidden p-0.5 border border-white/20">
              <div
                className="h-full bg-gradient-to-r from-amber-400 via-rose-500 to-emerald-400 rounded-full transition-all duration-1000"
                style={{ width: `${percentageFunded}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-rose-200 font-semibold">
              <span>{percentageFunded}% Funded</span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                Targeting {appeal.beneficiaryTarget}
              </span>
            </div>
          </div>

          {/* Concrete Emergency Items Needed Grid */}
          <div className="space-y-4 pt-2">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-400" /> Sponsor Specific Life-Saving Relief Kits:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {appeal.itemsNeeded.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-white leading-snug">{item.item}</h4>
                      <span className="text-base font-black text-amber-300 font-mono shrink-0">
                        {formatCurrency(item.unitCostUSD, item.unitCostNGN, item.unitCostGBP, item.unitCostEUR)}
                      </span>
                    </div>
                    <p className="text-xs text-rose-200 leading-relaxed">
                      {item.impactDescription}
                    </p>
                  </div>

                  <button
                    onClick={() => handleFundItem(item.unitCostUSD, item.item)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-black text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <Heart className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Fund This Item ({formatCurrency(item.unitCostUSD, item.unitCostNGN)})</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
