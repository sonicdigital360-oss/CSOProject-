'use client';

import React, { useState } from 'react';
import { useMesaf } from '../context/MesafContext';
import {
  Heart,
  Globe,
  Menu,
  X,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { Currency } from '../types';

export const Navbar: React.FC = () => {
  const { currency, setCurrency, initiateDonation } = useMesaf();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const currencies: { code: Currency; label: string; symbol: string }[] = [
    { code: 'USD', label: 'USD ($)', symbol: '$' },
    { code: 'GBP', label: 'GBP (£)', symbol: '£' },
    { code: 'EUR', label: 'EUR (€)', symbol: '€' },
    { code: 'NGN', label: 'NGN (₦)', symbol: '₦' },
  ];

  return (
    <>
      {/* Top Emergency Action Ticker */}
      <div className="bg-mesaf-navy text-white py-2.5 px-6 text-xs sm:text-sm font-semibold border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <span className="px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 font-black text-[11px] uppercase tracking-wider animate-pulse shadow-sm">
              ACTIVE APPEAL
            </span>
            <span className="text-blue-100 font-medium">
              Northeast Nigeria Flood Recovery & Emergency Child Nutrition Campaign
            </span>
          </div>

          <button
            onClick={() => initiateDonation()}
            className="text-amber-400 hover:text-amber-300 font-black underline underline-offset-4 flex items-center gap-1.5 shrink-0 text-xs sm:text-sm"
          >
            <span>Send Emergency Relief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between gap-4">
          {/* Brand Official Logo */}
          <a href="#" className="flex items-center group shrink-0 py-1">
            <img
              src="/mesaf-logo.png"
              alt="Mercy Sarah Foundation — Touching Next Generation"
              className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden 2xl:flex items-center gap-8 text-sm font-extrabold text-slate-800">
            <a href="#impact" className="hover:text-mesaf-blue transition-colors">
              Impact & Map
            </a>
            <a href="#programs" className="hover:text-mesaf-blue transition-colors">
              Humanitarian Programs
            </a>
            <a href="#emergency-appeal" className="hover:text-mesaf-blue transition-colors flex items-center gap-1.5">
              <span>Emergency Appeal</span>
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
            </a>
            <a href="#transparency" className="hover:text-mesaf-blue transition-colors">
              Transparency & Targets
            </a>
            <a href="#stories" className="hover:text-mesaf-blue transition-colors">
              Field Stories
            </a>
            <a href="#governance" className="hover:text-mesaf-blue transition-colors flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Governance</span>
            </a>
            <a href="#safeguarding" className="hover:text-rose-600 transition-colors">
              Safeguarding (PSEA)
            </a>
            <a href="#contact" className="hover:text-mesaf-blue transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Actions: Multi-Currency Selector & Large Donate CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {/* Multi-Currency Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-sm font-extrabold text-slate-900 transition-all shadow-sm"
              >
                <Globe className="w-4 h-4 text-mesaf-blue" />
                <span className="font-mono">{currency}</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl border border-slate-200 shadow-2xl py-2 z-50 animate-fade-in">
                  <div className="px-4 py-1.5 text-[11px] font-black uppercase text-slate-400">
                    Select Currency
                  </div>
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setCurrency(c.code);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-extrabold flex items-center justify-between hover:bg-slate-50 ${
                        currency === c.code ? 'text-mesaf-blue bg-blue-50/80 font-black' : 'text-slate-700'
                      }`}
                    >
                      <span>{c.label}</span>
                      <span className="font-mono text-slate-400 font-bold">{c.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Big Donate CTA */}
            <button
              onClick={() => initiateDonation()}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-mesaf-blue via-blue-600 to-amber-500 hover:from-mesaf-blueDark hover:to-amber-600 text-white text-sm sm:text-base font-black shadow-give-glow hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5"
            >
              <Heart className="w-5 h-5 fill-white" />
              <span>Donate Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex 2xl:hidden items-center gap-3">
            <button
              onClick={() => initiateDonation()}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-mesaf-blue to-amber-500 text-white text-xs sm:text-sm font-black flex items-center gap-1.5 shadow-md"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-2xl bg-slate-100 text-slate-800 border border-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="2xl:hidden border-b border-slate-200 bg-white px-6 py-6 space-y-4 animate-fade-in text-base shadow-2xl">
            <a
              href="#impact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-900 hover:text-mesaf-blue font-black"
            >
              Impact & Map
            </a>
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-900 hover:text-mesaf-blue font-black"
            >
              Humanitarian Programs
            </a>
            <a
              href="#emergency-appeal"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-rose-600 hover:text-rose-700 font-black"
            >
              Emergency Relief Appeal
            </a>
            <a
              href="#transparency"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-900 hover:text-mesaf-blue font-black"
            >
              Financial Transparency & Allocation
            </a>
            <a
              href="#stories"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-900 hover:text-mesaf-blue font-black"
            >
              Field Stories & Beneficiaries
            </a>
            <a
              href="#governance"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-900 hover:text-mesaf-blue font-black"
            >
              Governance, Audits & Safeguarding
            </a>
            <a
              href="#safeguarding"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-rose-600 hover:text-rose-700 font-black"
            >
              PSEA Confidential Reporting
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-900 hover:text-mesaf-blue font-black"
            >
              Contact & Maiduguri HQ
            </a>

            {/* Currency selector inside mobile drawer */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <div className="text-xs font-black text-slate-500 uppercase">Select Giving Currency:</div>
              <div className="grid grid-cols-4 gap-2">
                {currencies.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setCurrency(c.code)}
                    className={`py-3 rounded-2xl text-xs font-black text-center border ${
                      currency === c.code
                        ? 'bg-mesaf-blue text-white border-mesaf-blue shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    {c.code}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
