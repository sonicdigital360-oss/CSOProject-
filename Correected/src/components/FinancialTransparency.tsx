'use client';

import React, { useState } from 'react';
import { useMesaf } from '../context/MesafContext';
import { MESAF_BANK_ACCOUNTS } from '../lib/mesafData';
import {
  PieChart,
  ShieldCheck,
  Building,
  Copy,
  FileCheck,
  TrendingUp,
  Target,
  ArrowRight,
  Heart,
  CheckCircle2,
  DollarSign,
} from 'lucide-react';

export const FinancialTransparencySection: React.FC = () => {
  const { currency, formatCurrency, showToast, initiateDonation } = useMesaf();
  const [activeTab, setActiveTab] = useState<'allocation' | 'strategic' | 'bankDetails'>('allocation');

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast({
      title: `${label} Copied`,
      description: `${text} copied to clipboard.`,
      type: 'success',
    });
  };

  const fundBreakdown = [
    {
      percentage: '88%',
      title: 'Direct Frontline Humanitarian Programs',
      desc: 'Maternal health clinics, RUTF therapeutic feeding, school-in-a-box kits, WGSS safe spaces, solar boreholes, and seed micro-grants.',
      color: 'bg-mesaf-teal',
      textColor: 'text-mesaf-teal',
      bgLight: 'bg-teal-50',
      border: 'border-teal-200',
    },
    {
      percentage: '8%',
      title: 'Field Monitoring, Evaluation & Accountability (MEAL)',
      desc: 'Rigorous third-party impact assessments, biometric verification, community feedback committees, and data quality audits.',
      color: 'bg-amber-500',
      textColor: 'text-amber-700',
      bgLight: 'bg-amber-50',
      border: 'border-amber-200',
    },
    {
      percentage: '4%',
      title: 'Governance, External Audits & Statutory Compliance',
      desc: 'Independent external auditing, statutory regulatory filings, PSEA safeguarding oversight, and grant accounting.',
      color: 'bg-slate-700',
      textColor: 'text-slate-700',
      bgLight: 'bg-slate-100',
      border: 'border-slate-200',
    },
  ];

  const strategicGoals = [
    {
      year: '2025 - 2026',
      title: 'Maternal & Infant Wasting Eradication',
      metric: 'Screen 50,000+ mother-infant pairs in Konduga, Jere & MMC; deploy 10 mobile CMAM outposts.',
      status: 'On Track (68% Achieved)',
    },
    {
      year: '2025 - 2027',
      title: 'Women’s Digital & Economic Self-Reliance',
      metric: 'Equip 15,000 northern Nigerian women with digital safety, cybersecurity, and enterprise seed funding.',
      status: 'Active Deployment',
    },
    {
      year: '2026 - 2027',
      title: 'Climate-Resilient Safe Water Infrastructure',
      metric: 'Construct 120 deep solar-powered boreholes serving 150,000 conflict & flood-affected residents.',
      status: 'Target Scaling',
    },
  ];

  return (
    <section id="transparency" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600" /> Donor Trust & Fund Efficiency
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Financial Integrity & Strategic Roadmap
        </h2>
        <p className="text-sm text-slate-600">
          Every cent and kobo is tracked with rigorous financial discipline. We ensure maximum resource efficiency reaches vulnerable women and children.
        </p>
      </div>

      {/* Main Container */}
      <div className="mesaf-card rounded-3xl p-8 sm:p-10 border border-slate-200 bg-white space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-xl mx-auto">
          <button
            onClick={() => setActiveTab('allocation')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'allocation'
                ? 'bg-white text-mesaf-teal shadow-sm border border-slate-200 font-extrabold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Where Your Donations Go
          </button>
          <button
            onClick={() => setActiveTab('strategic')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'strategic'
                ? 'bg-white text-mesaf-teal shadow-sm border border-slate-200 font-extrabold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            2025–2027 Strategic Targets
          </button>
          <button
            onClick={() => setActiveTab('bankDetails')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'bankDetails'
                ? 'bg-white text-mesaf-teal shadow-sm border border-slate-200 font-extrabold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Institutional Wire Details
          </button>
        </div>

        {/* Tab 1: Allocation Breakdown */}
        {activeTab === 'allocation' && (
          <div className="space-y-8 animate-fade-in">
            {/* Visual Ratio Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-extrabold text-slate-700">
                <span className="text-mesaf-teal">88% Direct Program Interventions</span>
                <span className="text-amber-600">8% Field M&E Quality</span>
                <span className="text-slate-600">4% Audit & Admin</span>
              </div>
              <div className="w-full h-5 rounded-full overflow-hidden flex shadow-inner border border-slate-200 p-0.5 bg-slate-100">
                <div className="h-full bg-mesaf-teal rounded-l-full" style={{ width: '88%' }} title="88% Direct Programs" />
                <div className="h-full bg-amber-500" style={{ width: '8%' }} title="8% Monitoring & Evaluation" />
                <div className="h-full bg-slate-700 rounded-r-full" style={{ width: '4%' }} title="4% Governance" />
              </div>
            </div>

            {/* 3 Detail Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fundBreakdown.map((item, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-3xl ${item.bgLight} border ${item.border} space-y-3 flex flex-col justify-between`}
                >
                  <div className="space-y-2">
                    <div className="text-3xl font-black font-mono tracking-tight" style={{ color: item.textColor }}>
                      {item.percentage}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Statutory Verified</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-mesaf-teal">Ready to partner with maximum cost-efficiency?</span>
                <p className="text-slate-600">Your gift directly fuels field supplies, infant nutrition, and clean water wells.</p>
              </div>
              <button
                onClick={() => initiateDonation()}
                className="px-6 py-2.5 rounded-xl bg-mesaf-teal text-white font-bold text-xs shadow-sm hover:bg-mesaf-tealDark flex items-center gap-1.5 shrink-0"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Make a Direct Impact</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Strategic Roadmap */}
        {activeTab === 'strategic' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {strategicGoals.map((g, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 rounded-full bg-teal-100 text-mesaf-teal text-[10px] font-extrabold uppercase tracking-wider">
                      {g.year}
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{g.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{g.metric}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-700">{g.status}</span>
                    <Target className="w-4 h-4 text-mesaf-teal" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Institutional Wire Transfer Details */}
        {activeTab === 'bankDetails' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Naira Accounts */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-sm font-black text-slate-900 uppercase tracking-wider">
                  <Building className="w-4 h-4 text-mesaf-teal" /> Dedicated Corporate Naira (NGN) Accounts
                </div>

                <div className="space-y-3">
                  {MESAF_BANK_ACCOUNTS.nairaAccounts.map((b) => (
                    <div
                      key={b.accountNumber}
                      className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-sm"
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-900">{b.bankName}</div>
                        <div className="font-mono text-base font-bold text-mesaf-teal">{b.accountNumber}</div>
                        <div className="text-[10px] text-slate-500">{MESAF_BANK_ACCOUNTS.accountName} &bull; {b.branch}</div>
                      </div>
                      <button
                        onClick={() => handleCopy(b.accountNumber, b.bankName)}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1 border border-slate-200"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Domiciliary Multi-Currency Accounts */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-sm font-black text-slate-900 uppercase tracking-wider">
                  <DollarSign className="w-4 h-4 text-mesaf-teal" /> Institutional Domiciliary Wire (USD / EUR / GBP)
                </div>

                <div className="space-y-3">
                  {MESAF_BANK_ACCOUNTS.domiciliaryAccounts.map((b) => (
                    <div
                      key={b.accountNumber}
                      className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-sm"
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-900">{b.bankName}</div>
                        <div className="font-mono text-base font-bold text-mesaf-teal">
                          {b.accountNumber}
                        </div>
                        <div className="text-[10px] text-slate-500">
                          SWIFT Code: <strong className="text-slate-800">{b.swiftCode}</strong> &bull; {MESAF_BANK_ACCOUNTS.accountName}
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy(b.accountNumber, b.bankName)}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1 border border-slate-200"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-500">
              For bilateral institutional grants, MoUs, and audit confirmation letters, please contact our Grants Desk at <strong className="text-mesaf-teal">partnerships@mercysarah.org</strong>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
