'use client';

import React, { useState } from 'react';
import { MESAF_INFO } from '../lib/mesafData';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Briefcase,
  Users,
  Handshake,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { useMesaf } from '../context/MesafContext';

export const GetInvolvedSection: React.FC = () => {
  const { showToast } = useMesaf();
  const [activeTab, setActiveTab] = useState<'partner' | 'careers' | 'volunteer'>('partner');

  // Form states
  const [orgName, setOrgName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [partnershipType, setPartnershipType] = useState('Institutional Grant / Sub-Grant');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPerson.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast({
        title: 'Inquiry Transmitted to MESAF Partnerships Desk',
        description: 'Our Grants & Strategy team in Maiduguri will respond within 24 business hours.',
        type: 'success',
      });
      setOrgName('');
      setContactPerson('');
      setEmail('');
      setMessage('');
    }, 600);
  };

  const vacancies = [
    {
      title: 'Senior Nutrition & CMAM Project Manager',
      location: 'Konduga & Maiduguri, Borno State',
      type: 'Full-Time &bull; Humanitarian Response',
      deadline: 'Rolling / Immediate',
      email: 'recruitment@mercysarah.org',
    },
    {
      title: 'Monitoring, Evaluation & Learning (MEL) Officer',
      location: 'Maiduguri HQ (With field travel to BAY states)',
      type: 'Full-Time &bull; Data & Reporting',
      deadline: 'Open Vacancy',
      email: 'recruitment@mercysarah.org',
    },
    {
      title: 'Protection & PSEA Community Field Officers (2 Positions)',
      location: 'Custom House & Gwoza Outposts',
      type: 'Full-Time &bull; Field Operations',
      deadline: 'Urgent Deployment',
      email: 'recruitment@mercysarah.org',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-mesaf-teal">
          <Handshake className="w-4 h-4" /> Global Collaboration
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Partner With Us & Join the Mission
        </h2>
        <p className="text-sm text-slate-600">
          Whether you represent an institutional funding body, a humanitarian cluster partner, or wish to contribute your expertise to our frontline team.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct HQ & Operational Contact */}
        <div className="lg:col-span-5 space-y-6">
          <div className="mesaf-card rounded-3xl p-7 border border-slate-200 bg-white space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-mesaf-teal" /> Operations Headquarters (Borno State)
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {MESAF_INFO.address}
            </p>

            <div className="space-y-3 pt-2 border-t border-slate-100 text-xs text-slate-600 font-mono">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-mesaf-teal shrink-0" />
                <span>{MESAF_INFO.phones.primary} / {MESAF_INFO.phones.secondary}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-mesaf-teal shrink-0" />
                <span>General: {MESAF_INFO.emails.general}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Grants & Institutional: {MESAF_INFO.emails.partnerships}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Recruitment: {MESAF_INFO.emails.recruitment}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-mesaf-teal font-medium space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Working Hours:
              </div>
              <div>Monday – Friday: 8:00 AM – 5:00 PM (WAT)</div>
              <div>Emergency Rapid Response Mobile Teams On Call 24/7</div>
            </div>
          </div>
        </div>

        {/* Right Column: Tabbed Partnership & Careers Hub */}
        <div className="lg:col-span-7 mesaf-card rounded-3xl p-8 border border-slate-200 bg-white space-y-6">
          {/* Tab Buttons */}
          <div className="grid grid-cols-3 p-1 rounded-2xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveTab('partner')}
              className={`py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'partner'
                  ? 'bg-white text-mesaf-teal shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Institutional Grants
            </button>
            <button
              onClick={() => setActiveTab('careers')}
              className={`py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'careers'
                  ? 'bg-white text-mesaf-teal shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Open Vacancies
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'volunteer'
                  ? 'bg-white text-mesaf-teal shadow-sm border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Volunteer
            </button>
          </div>

          {/* Tab 1: Institutional Partnership Form */}
          {activeTab === 'partner' && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Organization / Agency Name *</label>
                  <input
                    type="text"
                    required
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="e.g. Global Humanitarian Fund / Foundation"
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:ring-1 focus:ring-mesaf-teal"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Official Contact Person *</label>
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="e.g. Jane Doe (Program Officer)"
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:ring-1 focus:ring-mesaf-teal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Official Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane.doe@agency.org"
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:ring-1 focus:ring-mesaf-teal"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Partnership Modality</label>
                  <select
                    value={partnershipType}
                    onChange={(e) => setPartnershipType(e.target.value)}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:ring-1 focus:ring-mesaf-teal cursor-pointer"
                  >
                    <option value="Institutional Grant / Sub-Grant">Institutional Grant / Sub-Grant</option>
                    <option value="Consortium Joint Field Implementation">Consortium Joint Field Implementation</option>
                    <option value="Corporate CSR & Philanthropic Endowment">Corporate CSR & Philanthropic Endowment</option>
                    <option value="Technical & Research Collaboration">Technical & Research Collaboration</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Proposed Collaboration Scope & Objectives</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your target intervention sector (Health, Nutrition, GBV, Education), target LGA, or timeline..."
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:ring-1 focus:ring-mesaf-teal"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-mesaf-teal to-emerald-600 hover:from-mesaf-tealDark hover:to-emerald-700 text-white font-extrabold text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Transmitting Request...' : 'Initiate Institutional Dialogue'}</span>
              </button>
            </form>
          )}

          {/* Tab 2: Careers & Open Positions */}
          {activeTab === 'careers' && (
            <div className="space-y-4 animate-fade-in">
              <div className="text-xs text-slate-600">
                MESAF provides equal opportunity employment with strict safeguarding, competitive humanitarian remuneration, and comprehensive medical cover.
              </div>

              <div className="space-y-3">
                {vacancies.map((v, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-900">{v.title}</h4>
                      <p className="text-[11px] text-slate-500">{v.location} &bull; {v.type}</p>
                    </div>

                    <a
                      href={`mailto:${v.email}?subject=Application for ${v.title}`}
                      className="px-4 py-2 rounded-xl bg-white hover:bg-teal-50 border border-slate-300 text-mesaf-teal font-bold text-xs shrink-0 text-center"
                    >
                      Apply via Email
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Volunteer Onboarding */}
          {activeTab === 'volunteer' && (
            <div className="space-y-4 animate-fade-in text-center p-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-mesaf-teal mx-auto flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Become a Community Volunteer or Field Advocate</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Join our network of community educators, health mobilizers, and psychosocial support champions in Borno, Adamawa, and Yobe states.
              </p>
              <a
                href="mailto:recruitment@mercysarah.org?subject=Volunteer Registration Expression of Interest"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-mesaf-teal text-white font-bold text-xs shadow-sm hover:bg-mesaf-tealDark transition-all"
              >
                <span>Submit Volunteer Expression of Interest</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
