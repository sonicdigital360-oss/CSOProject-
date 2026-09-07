'use client';

import React, { useState } from 'react';
import { MESAF_INFO } from '../lib/mesafData';
import {
  Heart,
  ShieldCheck,
  Mail,
  ArrowRight,
  MapPin,
  Phone,
  Lock,
  Award,
} from 'lucide-react';
import { useMesaf } from '../context/MesafContext';

export const Footer: React.FC = () => {
  const { showToast } = useMesaf();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    showToast({
      title: 'Subscribed to MESAF Field Reports',
      description: 'You will receive our monthly humanitarian field dispatches and impact audits.',
      type: 'success',
    });
    setNewsletterEmail('');
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: NGO Identity & Core Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="p-2 bg-white rounded-2xl shrink-0 shadow-md">
                <img
                  src="/mesaf-logo.png"
                  alt="MESAF Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight block">
                  MERCY SARAH <span className="text-teal-400">FOUNDATION</span>
                </span>
                <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mt-0.5">
                  TOUCHING NEXT GENERATION
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated to creating an enabling environment for social, health, economic, and academic advancement for crisis-affected women, children, and vulnerable communities across Northeast Nigeria.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>{MESAF_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{MESAF_INFO.phones.primary} / {MESAF_INFO.phones.secondary}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{MESAF_INFO.emails.general}</span>
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-teal-400" /> CAC Registered NGO
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-400" /> Non-Profit Awards 2025
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-400" /> PSEA Safeguarding Compliant
              </span>
            </div>
          </div>

          {/* Col 3: UN Portfolios */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-teal-400">
              Humanitarian Portfolios
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Health & Nutrition (CMAM)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Protection & GBV Safe Spaces
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Inclusive Crisis Education
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Women’s Digital Skills
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  WASH & Solar Water Points
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Food Security & Seeds
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Governance & Due Diligence */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-teal-400">
              Due Diligence Hub
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#governance" className="hover:text-white transition-colors">
                  PSEA Policy Charter
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-white transition-colors">
                  Child Safeguarding Code
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-white transition-colors">
                  2024 Audited Financials
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-white transition-colors">
                  Anti-Fraud & Whistleblowing
                </a>
              </li>
              <li>
                <a href="#emergency-appeal" className="hover:text-white transition-colors">
                  Flood Relief Appeal
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Careers & Open Vacancies
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Field Briefs & PSEA Hotline */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-teal-400">
              Field Dispatch Briefs
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe for monthly verified monitoring and evaluation reports from Borno, Adamawa, and Yobe.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="donor.relations@agency.org"
                className="w-full text-xs bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-teal-400"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-mesaf-teal to-emerald-600 hover:from-mesaf-tealDark hover:to-emerald-700 text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="pt-2">
              <span className="text-[10px] text-slate-500 uppercase font-bold block">
                Confidential Safeguarding Channel:
              </span>
              <a
                href="mailto:safeguarding@mercysarah.org"
                className="text-xs text-rose-400 hover:underline font-mono"
              >
                safeguarding@mercysarah.org
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 Mercy Sarah Foundation (MESAF). All Rights Reserved. &bull; Registered NGO with CAC Nigeria.
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <span>UN OCHA Cluster Participant</span>
            <span>Core Humanitarian Standard (CHS)</span>
            <span>IFRS Non-Profit Accounting</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
