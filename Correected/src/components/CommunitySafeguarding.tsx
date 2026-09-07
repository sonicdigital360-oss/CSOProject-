'use client';

import React, { useState } from 'react';
import {
  ShieldAlert,
  Lock,
  PhoneCall,
  Mail,
  Send,
  CheckCircle2,
  Heart,
  EyeOff,
  AlertTriangle,
} from 'lucide-react';
import { useMesaf } from '../context/MesafContext';

export const CommunitySafeguardingSection: React.FC = () => {
  const { showToast } = useMesaf();

  const [incidentType, setIncidentType] = useState('PSEA / Sexual Misconduct');
  const [location, setLocation] = useState('Borno State');
  const [incidentDetails, setIncidentDetails] = useState('');
  const [contactOptional, setContactOptional] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!incidentDetails.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast({
        title: 'Confidential Report Received',
        description: 'Your report has been encrypted and routed directly to the Independent Safeguarding Focal Point.',
        type: 'success',
      });
      setIncidentDetails('');
      setContactOptional('');
    }, 600);
  };

  return (
    <section id="safeguarding" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-rose-700 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200">
          <EyeOff className="w-4 h-4 text-rose-600" /> Protection & Accountability (AAP)
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Community Safeguarding & Zero-Tolerance PSEA Charter
        </h2>
        <p className="text-sm text-slate-600">
          Mercy Sarah Foundation enforces a strict zero-tolerance mandate against sexual exploitation, abuse, child harm, and corruption. We protect whistleblowers and prioritize survivor well-being.
        </p>
      </div>

      {/* Main Grid: Info + Confidential Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Channels & Survivor Pathways */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-7 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center font-bold">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Direct Safeguarding Hotlines</h4>
                <p className="text-xs text-slate-400">Strictly confidential & independent of field managers</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="font-bold text-rose-400 flex items-center gap-1.5">
                  <Mail className="w-4 h-4" /> Dedicated Safeguarding Focal Point:
                </div>
                <div className="font-mono text-white text-xs">safeguarding@mercysarah.org</div>
                <div className="text-[10px] text-slate-400">Routed straight to the Legal & Safeguarding Committee</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="font-bold text-amber-400 flex items-center gap-1.5">
                  <PhoneCall className="w-4 h-4" /> Emergency Protection Helpline:
                </div>
                <div className="font-mono text-white text-xs">+234 (0) 806 807 1967</div>
                <div className="text-[10px] text-slate-400">24/7 rapid intake for medical & psychosocial emergencies</div>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
              <h5 className="font-bold text-white">Survivor-Centered Support Guarantee:</h5>
              <ul className="space-y-1.5 text-[11px] text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Immediate clinical management of rape (CMR) medical access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Confidential trauma counseling & psychosocial therapy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Emergency safe house relocation assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Encrypted Confidential Reporting Box */}
        <div className="lg:col-span-7 mesaf-card rounded-3xl p-8 border border-slate-200 bg-white space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-rose-600" /> Confidential & Anonymous Report Portal
            </h3>
            <p className="text-xs text-slate-500">
              Your identity is protected. You are not required to provide your name or contact unless you wish to receive follow-up updates.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Category of Concern *</label>
                <select
                  value={incidentType}
                  onChange={(e) => setIncidentType(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:ring-1 focus:ring-rose-500 cursor-pointer font-medium"
                >
                  <option value="PSEA / Sexual Misconduct">PSEA / Sexual Misconduct</option>
                  <option value="Child Safeguarding Concern">Child Safeguarding Concern</option>
                  <option value="Aid Diversion / Fraud / Bribery">Aid Diversion / Fraud / Bribery</option>
                  <option value="Staff Misbehavior / Code Breach">Staff Misbehavior / Code Breach</option>
                  <option value="Beneficiary Quality Complaint">Beneficiary Quality Complaint</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Location / Camp / Community</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Mandarari, Konduga LGA or Custom House"
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:ring-1 focus:ring-rose-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Incident Description & Specific Details *</label>
              <textarea
                rows={4}
                required
                value={incidentDetails}
                onChange={(e) => setIncidentDetails(e.target.value)}
                placeholder="Please describe what occurred, dates, persons involved (if known), or immediate safety needs..."
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:ring-1 focus:ring-rose-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">
                Optional Contact Details (If you wish to receive investigation updates)
              </label>
              <input
                type="text"
                value={contactOptional}
                onChange={(e) => setContactOptional(e.target.value)}
                placeholder="Phone number, email, or safe pseudonym (Leave blank to remain 100% anonymous)"
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:ring-1 focus:ring-rose-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-700 to-slate-900 hover:from-rose-500 hover:to-slate-800 text-white font-extrabold text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Transmitting Encrypted Report...' : 'Submit Confidential Report'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
