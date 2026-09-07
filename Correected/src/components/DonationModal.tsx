'use client';

import React, { useState } from 'react';
import { useMesaf } from '../context/MesafContext';
import {
  X,
  Heart,
  ShieldCheck,
  CreditCard,
  Building,
  CheckCircle2,
  Copy,
  Printer,
  ArrowRight,
  Lock,
  Globe,
  User,
  Mail,
  Sparkles,
  Gift,
} from 'lucide-react';
import { Currency, DonationSubmission } from '../types';
import { HUMANITARIAN_PROGRAMS, MESAF_BANK_ACCOUNTS, DONATION_GIFT_TIERS } from '../lib/mesafData';

export const DonationModal: React.FC = () => {
  const {
    isDonationModalOpen,
    setIsDonationModalOpen,
    selectedProgramForDonation,
    setSelectedProgramForDonation,
    donationReceipt,
    processDonation,
    currency,
    setCurrency,
    formatCurrency,
    convertFromUSD,
    showToast,
  } = useMesaf();

  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');
  const [selectedUSDAmount, setSelectedUSDAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [donorCountry, setDonorCountry] = useState<string>('Nigeria');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<'paystack' | 'flutterwave' | 'stripe_card' | 'bank_transfer'>('paystack');
  const [dedicatedTo, setDedicatedTo] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  if (!isDonationModalOpen) return null;

  const currentNumericAmount = isCustom
    ? parseFloat(customAmount) || 0
    : convertFromUSD(selectedUSDAmount);

  const handleSelectPreset = (usd: number) => {
    setIsCustom(false);
    setSelectedUSDAmount(usd);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCustom(true);
    setCustomAmount(e.target.value);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast({
      title: `${label} Copied`,
      description: `${text} copied to clipboard.`,
      type: 'success',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAnonymous && !donorName.trim()) {
      showToast({
        title: 'Name Required',
        description: 'Please provide your name or check "Make donation anonymous".',
        type: 'warning',
      });
      return;
    }
    if (!donorEmail.trim()) {
      showToast({
        title: 'Email Required',
        description: 'Please provide your email address to receive your official tax receipt.',
        type: 'warning',
      });
      return;
    }

    if (currentNumericAmount <= 0) {
      showToast({
        title: 'Invalid Amount',
        description: 'Please select or enter a valid donation amount.',
        type: 'warning',
      });
      return;
    }

    setIsProcessing(true);

    const submission: DonationSubmission = {
      programId: selectedProgramForDonation?.id,
      programTitle: selectedProgramForDonation?.title || 'General Humanitarian Relief Fund (BAY States)',
      amount: currentNumericAmount,
      currency,
      frequency,
      donorName: donorName.trim(),
      donorEmail: donorEmail.trim(),
      donorCountry,
      isAnonymous,
      dedicatedTo: dedicatedTo.trim() || undefined,
      paymentMethod,
    };

    setTimeout(async () => {
      try {
        await processDonation(submission);
      } catch (err) {
        console.error(err);
      } finally {
        setIsProcessing(false);
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="fixed inset-0" onClick={() => setIsDonationModalOpen(false)} />

      <div className="relative w-full max-w-2xl max-h-[92vh] bg-white rounded-3xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100 bg-slate-50/90">
          <div className="flex items-center gap-3.5">
            <img
              src="/mesaf-logo.png"
              alt="MESAF Logo"
              className="h-10 w-auto object-contain"
            />
            <div>
              <h3 className="text-base font-black text-slate-900">
                {donationReceipt ? 'Donation Confirmation & Tax Receipt' : 'Global Humanitarian Giving Portal'}
              </h3>
              <p className="text-[11px] font-black text-amber-600 uppercase tracking-wider">
                MERCY SARAH FOUNDATION &bull; TOUCHING NEXT GENERATION
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsDonationModalOpen(false)}
            className="p-2 rounded-xl bg-white text-slate-400 hover:text-slate-800 border border-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* If Receipt Exists -> Render Official NGO Certificate View */}
          {donationReceipt ? (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border-2 border-emerald-300 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-slate-900">
                  Thank You for Saving Lives!
                </h4>
                <p className="text-xs text-slate-500">
                  Official Verification Reference:{' '}
                  <span className="font-mono font-bold text-mesaf-teal">
                    {donationReceipt.reference}
                  </span>
                </p>
              </div>

              {/* Verified Receipt Ticket */}
              <div className="mesaf-card rounded-2xl p-6 border border-slate-200 space-y-3.5 text-xs bg-slate-50/70">
                <div className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Beneficiary Fund Allocation:</span>
                  <span className="font-bold text-slate-900 text-right max-w-xs truncate">
                    {donationReceipt.programTitle}
                  </span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Donor Name:</span>
                  <span className="font-bold text-slate-900">{donationReceipt.donorName}</span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Giving Cadence:</span>
                  <span className="font-semibold text-mesaf-teal">{donationReceipt.frequency}</span>
                </div>

                <div className="flex justify-between border-b border-slate-200 pb-2.5">
                  <span className="text-slate-500">Issue Date:</span>
                  <span className="font-mono text-slate-700">{donationReceipt.date}</span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-bold text-slate-900">Total Gift Value:</span>
                  <span className="text-2xl font-black text-slate-900 font-mono">
                    {donationReceipt.currency === 'NGN' ? '₦' : donationReceipt.currency === 'GBP' ? '£' : donationReceipt.currency === 'EUR' ? '€' : '$'}
                    {donationReceipt.amount.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Institutional Bank Transfer Details (if bank_transfer was chosen) */}
              {paymentMethod === 'bank_transfer' && (
                <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 space-y-3">
                  <h5 className="text-xs font-bold text-mesaf-teal uppercase tracking-wider flex items-center gap-1.5">
                    <Building className="w-4 h-4" /> Please complete wire transfer to any of our dedicated humanitarian accounts:
                  </h5>

                  <div className="space-y-2 text-xs">
                    {currency === 'NGN' ? (
                      MESAF_BANK_ACCOUNTS.nairaAccounts.map((b) => (
                        <div key={b.accountNumber} className="p-3 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                          <div>
                            <div className="font-bold text-slate-900">{b.bankName}</div>
                            <div className="font-mono text-sm font-bold text-mesaf-teal">{b.accountNumber}</div>
                            <div className="text-[10px] text-slate-500">{MESAF_BANK_ACCOUNTS.accountName}</div>
                          </div>
                          <button
                            onClick={() => handleCopy(b.accountNumber, b.bankName)}
                            className="px-2.5 py-1 bg-slate-100 text-xs font-semibold rounded-lg hover:bg-slate-200 flex items-center gap-1"
                          >
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </button>
                        </div>
                      ))
                    ) : (
                      MESAF_BANK_ACCOUNTS.domiciliaryAccounts.map((b) => (
                        <div key={b.accountNumber} className="p-3 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                          <div>
                            <div className="font-bold text-slate-900">{b.bankName}</div>
                            <div className="font-mono text-sm font-bold text-mesaf-teal">{b.accountNumber} (SWIFT: {b.swiftCode})</div>
                            <div className="text-[10px] text-slate-500">{MESAF_BANK_ACCOUNTS.accountName}</div>
                          </div>
                          <button
                            onClick={() => handleCopy(b.accountNumber, b.bankName)}
                            className="px-2.5 py-1 bg-slate-100 text-xs font-semibold rounded-lg hover:bg-slate-200 flex items-center gap-1"
                          >
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* Receipt Footer Actions */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-bold flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Receipt</span>
                </button>
                <button
                  onClick={() => setIsDonationModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-mesaf-teal to-emerald-600 text-white text-xs font-bold shadow-sm"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            /* Donation Form View */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Frequency Toggle (Larger Buttons) */}
              <div className="grid grid-cols-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
                    frequency === 'monthly'
                      ? 'bg-white text-mesaf-teal shadow-md border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Monthly Sustaining Partner (High Impact)
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`py-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
                    frequency === 'once'
                      ? 'bg-white text-mesaf-teal shadow-md border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One-Time Contribution
                </button>
              </div>

              {/* Fund Designation Selector */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-black text-slate-800">Designate Your Gift To:</label>
                <select
                  value={selectedProgramForDonation?.id || 'general'}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === 'general') {
                      setSelectedProgramForDonation(null);
                    } else {
                      const p = HUMANITARIAN_PROGRAMS.find((item) => item.id === val) || null;
                      setSelectedProgramForDonation(p);
                    }
                  }}
                  className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-slate-900 font-bold focus:ring-2 focus:ring-mesaf-teal cursor-pointer"
                >
                  <option value="general">🌟 General Humanitarian Relief Fund (Where Most Needed)</option>
                  <option value="health-nutrition">Primary Health Care & Emergency Nutrition (Konduga/Mandarari)</option>
                  <option value="protection-gbv">Protection & Gender-Based Violence (GBV) Safe Spaces</option>
                  <option value="education-crisis">Inclusive Education in Emergencies (IDP School Kits)</option>
                  <option value="women-digital-empowerment">Women’s Digital Skills Academy & Seed Micro-Grants</option>
                  <option value="wash-climate">WASH, Clean Solar Boreholes & Flood Resilience</option>
                  <option value="food-security">Food Security & Agriculture Livelihoods</option>
                </select>
              </div>

              {/* Preset Amounts Grid (Larger Buttons) */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-black text-slate-800">Select Gift Amount:</label>
                  <div className="flex gap-1.5 text-xs font-black">
                    {(['USD', 'GBP', 'EUR', 'NGN'] as Currency[]).map((c) => (
                      <button
                        type="button"
                        key={c}
                        onClick={() => setCurrency(c)}
                        className={`px-3 py-1 rounded-xl ${
                          currency === c ? 'bg-mesaf-teal text-white shadow-sm' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[25, 50, 100, 250].map((amt) => {
                    const isSelected = !isCustom && selectedUSDAmount === amt;
                    return (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => handleSelectPreset(amt)}
                        className={`py-4 rounded-2xl font-mono text-base font-black transition-all ${
                          isSelected
                            ? 'bg-mesaf-teal text-white shadow-md border-2 border-mesaf-teal scale-102'
                            : 'bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-teal-400'
                        }`}
                      >
                        {formatCurrency(amt)}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount Input */}
                <div className="pt-1">
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomChange}
                    placeholder={`Or enter custom amount in ${currency}...`}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-mesaf-teal font-mono font-bold"
                  />
                </div>
              </div>

              {/* Payment Gateway Picker */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-black text-slate-800">Select Payment Channel:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'paystack', label: 'Paystack', sub: 'Cards / NGN', icon: CreditCard },
                    { id: 'flutterwave', label: 'Flutterwave', sub: 'Global Multi-Currency', icon: Globe },
                    { id: 'stripe_card', label: 'Stripe Card', sub: 'Visa/Mastercard', icon: ShieldCheck },
                    { id: 'bank_transfer', label: 'Direct Wire', sub: 'Naira & Domiciliary', icon: Building },
                  ].map((m) => (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setPaymentMethod(m.id as any)}
                      className={`p-3.5 rounded-2xl text-left transition-all ${
                        paymentMethod === m.id
                          ? 'bg-teal-50 border-2 border-mesaf-teal text-mesaf-teal font-black shadow-sm'
                          : 'bg-slate-50 border border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="text-xs font-black">{m.label}</div>
                      <div className="text-[10px] text-slate-500">{m.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Donor Information */}
              <div className="space-y-3 pt-1 border-t border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-800">Full Name *</label>
                    <input
                      type="text"
                      disabled={isAnonymous}
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="e.g. Dr. Ngozi Adeleke"
                      className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-2xl p-3 text-slate-900 focus:ring-2 focus:ring-mesaf-teal disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-800">Email Address (For Tax Receipt) *</label>
                    <input
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="ngozi@organization.org"
                      className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-2xl p-3 text-slate-900 focus:ring-2 focus:ring-mesaf-teal"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer font-medium">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded border-slate-300 text-mesaf-teal focus:ring-mesaf-teal w-4 h-4"
                    />
                    <span>Make my gift anonymous on public impact reports</span>
                  </label>
                </div>
              </div>

              {/* Submit CTA (Bigger & High Impact) */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-mesaf-teal via-mesaf-tealLight to-emerald-600 hover:from-mesaf-tealDark hover:to-emerald-700 text-white font-black text-base sm:text-lg shadow-give-glow hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                <Heart className={`w-5 h-5 fill-white ${isProcessing ? 'animate-spin' : ''}`} />
                <span>
                  {isProcessing
                    ? 'Connecting to Secure Giving Gateway...'
                    : paymentMethod === 'bank_transfer'
                    ? `Generate Bank Wire Instructions (${currency === 'NGN' ? '₦' : currency === 'GBP' ? '£' : currency === 'EUR' ? '€' : '$'}${currentNumericAmount.toLocaleString()})`
                    : `Complete Gift of ${currency === 'NGN' ? '₦' : currency === 'GBP' ? '£' : currency === 'EUR' ? '€' : '$'}${currentNumericAmount.toLocaleString()}${frequency === 'monthly' ? ' / month' : ''}`}
                </span>
                {!isProcessing && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
