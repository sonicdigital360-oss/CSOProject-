'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import confetti from 'canvas-confetti';
import {
  Currency,
  HumanitarianProgram,
  DonationSubmission,
  DonationReceipt,
  EmergencyAppeal,
} from '../types';
import { HUMANITARIAN_PROGRAMS, ACTIVE_EMERGENCY_APPEAL } from '../lib/mesafData';

interface ToastMessage {
  id: string;
  title: string;
  description: string;
  type: 'success' | 'info' | 'warning';
}

interface MesafContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatCurrency: (amountUSD: number, amountNGN?: number, amountGBP?: number, amountEUR?: number) => string;
  convertFromUSD: (amountUSD: number) => number;
  isDonationModalOpen: boolean;
  setIsDonationModalOpen: (open: boolean) => void;
  selectedProgramForDonation: HumanitarianProgram | null;
  setSelectedProgramForDonation: (p: HumanitarianProgram | null) => void;
  donationReceipt: DonationReceipt | null;
  setDonationReceipt: (r: DonationReceipt | null) => void;
  initiateDonation: (programId?: string, presetAmountUSD?: number) => void;
  processDonation: (submission: DonationSubmission) => Promise<DonationReceipt>;
  toasts: ToastMessage[];
  showToast: (msg: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
  activeProgramModal: HumanitarianProgram | null;
  setActiveProgramModal: (p: HumanitarianProgram | null) => void;
}

const MesafContext = createContext<MesafContextType | undefined>(undefined);

export const MesafProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [selectedProgramForDonation, setSelectedProgramForDonation] = useState<HumanitarianProgram | null>(null);
  const [activeProgramModal, setActiveProgramModal] = useState<HumanitarianProgram | null>(null);
  const [donationReceipt, setDonationReceipt] = useState<DonationReceipt | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Exchange rates baseline (USD 1 = NGN 1600, GBP 0.78, EUR 0.92)
  const formatCurrency = (
    amountUSD: number,
    amountNGN?: number,
    amountGBP?: number,
    amountEUR?: number
  ): string => {
    switch (currency) {
      case 'NGN': {
        const val = amountNGN ?? Math.round(amountUSD * 1600);
        return `₦${val.toLocaleString()}`;
      }
      case 'GBP': {
        const val = amountGBP ?? Math.round(amountUSD * 0.78);
        return `£${val.toLocaleString()}`;
      }
      case 'EUR': {
        const val = amountEUR ?? Math.round(amountUSD * 0.92);
        return `€${val.toLocaleString()}`;
      }
      case 'USD':
      default:
        return `$${amountUSD.toLocaleString()}`;
    }
  };

  const convertFromUSD = (amountUSD: number): number => {
    switch (currency) {
      case 'NGN':
        return Math.round(amountUSD * 1600);
      case 'GBP':
        return Math.round(amountUSD * 0.78);
      case 'EUR':
        return Math.round(amountUSD * 0.92);
      case 'USD':
      default:
        return amountUSD;
    }
  };

  const showToast = (msg: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = { ...msg, id };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const initiateDonation = (programId?: string, presetAmountUSD?: number) => {
    if (programId) {
      const prog = HUMANITARIAN_PROGRAMS.find((p) => p.id === programId) || null;
      setSelectedProgramForDonation(prog);
    } else {
      setSelectedProgramForDonation(null);
    }
    setDonationReceipt(null);
    setIsDonationModalOpen(true);
  };

  const processDonation = async (submission: DonationSubmission): Promise<DonationReceipt> => {
    const randomRef = 'MESAF-GIFT-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    const dateStr = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    let outcome = 'Critical humanitarian relief deployed to Northeast Nigeria crisis response.';
    if (submission.programTitle) {
      outcome = `Directly funding ${submission.programTitle} for vulnerable beneficiaries.`;
    }

    const receipt: DonationReceipt = {
      reference: randomRef,
      programTitle: submission.programTitle || 'General Humanitarian Relief Fund (BAY States)',
      amount: submission.amount,
      currency: submission.currency,
      frequency: submission.frequency === 'monthly' ? 'Monthly Recurring Donor' : 'One-Time Life-Saving Gift',
      donorName: submission.isAnonymous ? 'Anonymous Humanitarian Partner' : submission.donorName,
      donorEmail: submission.donorEmail,
      donorCountry: submission.donorCountry || 'Global Donor',
      date: dateStr,
      taxDeductibleInfo: 'Mercy Sarah Foundation is a registered NGO with CAC Nigeria. Official certificate for international tax relief.',
      tangibleOutcome: outcome,
    };

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0e6262', '#d97706', '#168a8a', '#e11d48'],
      });
    } catch (e) {
      // ignore
    }

    setDonationReceipt(receipt);
    showToast({
      title: 'Donation Received with Sincere Gratitude',
      description: `Your contribution of ${receipt.currency === 'NGN' ? '₦' : receipt.currency === 'GBP' ? '£' : receipt.currency === 'EUR' ? '€' : '$'}${receipt.amount.toLocaleString()} will save lives in Northeast Nigeria.`,
      type: 'success',
    });

    return receipt;
  };

  return (
    <MesafContext.Provider
      value={{
        currency,
        setCurrency,
        formatCurrency,
        convertFromUSD,
        isDonationModalOpen,
        setIsDonationModalOpen,
        selectedProgramForDonation,
        setSelectedProgramForDonation,
        donationReceipt,
        setDonationReceipt,
        initiateDonation,
        processDonation,
        toasts,
        showToast,
        removeToast,
        activeProgramModal,
        setActiveProgramModal,
      }}
    >
      {children}
    </MesafContext.Provider>
  );
};

export const useMesaf = () => {
  const context = useContext(MesafContext);
  if (!context) {
    throw new Error('useMesaf must be used within a MesafProvider');
  }
  return context;
};
