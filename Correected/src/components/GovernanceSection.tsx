'use client';

import React, { useState } from 'react';
import { POLICY_DOCUMENTS, LEADERSHIP_MEMBERS, MESAF_INFO } from '../lib/mesafData';
import {
  ShieldCheck,
  FileText,
  Download,
  Users,
  Lock,
  Award,
  AlertOctagon,
  Building,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { useMesaf } from '../context/MesafContext';

export const GovernanceSection: React.FC = () => {
  const { showToast } = useMesaf();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Safeguarding & PSEA', 'Governance & Anti-Fraud', 'Financial & Audit', 'Operations & Procurement'];

  const filteredDocs = activeCategory === 'All'
    ? POLICY_DOCUMENTS
    : POLICY_DOCUMENTS.filter((d) => d.category === activeCategory);

  const handleDownloadDoc = (title: string) => {
    showToast({
      title: 'Institutional Document Downloaded',
      description: `${title} has been downloaded for your due diligence audit.`,
      type: 'info',
    });
  };

  return (
    <section id="governance" className="py-20 px-6 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600" /> Donor Due Diligence & Safeguarding
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Governance, Accountability & Compliance Standards
        </h2>
        <p className="text-sm text-slate-600">
          Built for multilateral institutional partnerships. Explore our independent annual audits, PSEA safeguarding protocols, and executive oversight guild.
        </p>
      </div>

      {/* Institutional Assurance Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-teal-50/70 border border-teal-200 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-mesaf-teal text-white flex items-center justify-center font-bold">
            <Lock className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-slate-900">Zero Tolerance for SEA</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Strict institutional adherence to the UN IASC Core Principles on Sexual Exploitation, Abuse, and Harassment with mandatory reporting for all staff and contractors.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-slate-900">External Financial Audits</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Annual statutory financial audits conducted in full compliance with International Financial Reporting Standards (IFRS) and CAMA Non-Profit regulations.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-slate-800 text-white flex items-center justify-center font-bold">
            <AlertOctagon className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-slate-900">Confidential Whistleblowing</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Independent, confidential reporting channel managed directly by the Board of Trustees for any suspected fraud, misconduct, or breach of ethics.
          </p>
        </div>
      </div>

      {/* Policy & Due Diligence Download Repository */}
      <div className="mesaf-card rounded-3xl p-8 border border-slate-200 bg-white space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-mesaf-teal" /> Institutional Policy & Audit Repository
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Download complete, unredacted governance frameworks for partner vetting and due diligence.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-mesaf-teal text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Policy Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="p-5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                    {doc.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-bold">{doc.version} &bull; {doc.fileSize}</span>
                </div>

                <h4 className="text-sm font-bold text-slate-900">{doc.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{doc.description}</p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
                <span className="text-[11px] text-slate-400">Reviewed: {doc.lastUpdated}</span>
                <button
                  onClick={() => handleDownloadDoc(doc.title)}
                  className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-teal-50 border border-slate-300 text-mesaf-teal font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Board of Trustees & Executive Leadership Guild */}
      <div className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h3 className="text-2xl font-black text-slate-900">
            Executive Leadership & Board of Trustees
          </h3>
          <p className="text-xs text-slate-600">
            Guided by seasoned humanitarian practitioners, public health epidemiologists, chartered accountants, and legal advocates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="mesaf-card rounded-3xl overflow-hidden bg-white border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all"
            >
              <div className="space-y-3 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-2xl mx-auto object-cover border-2 border-teal-600/30 shadow-md"
                />
                <div>
                  <h4 className="text-base font-bold text-slate-900 leading-snug">{member.name}</h4>
                  <p className="text-xs text-mesaf-teal font-semibold mt-0.5">{member.role}</p>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block mt-1">
                    {member.category}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed text-left pt-2 border-t border-slate-100">
                  {member.bio}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                {member.expertise.map((exp) => (
                  <span
                    key={exp}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
