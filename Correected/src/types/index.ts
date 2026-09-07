export type Currency = 'USD' | 'NGN' | 'GBP' | 'EUR';

export interface SDGGoal {
  number: number;
  title: string;
  color: string;
  iconName: string;
}

export interface HumanitarianProgram {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  fullDescription: string;
  category: 'Health & Nutrition' | 'Protection & GBV' | 'Education' | 'Women Empowerment' | 'WASH & Environment' | 'Emergency Response';
  iconName: string;
  bannerImage: string;
  sdgs: SDGGoal[];
  clusters: string[];
  keyStats: {
    label: string;
    value: string;
  }[];
  activeLocations: string[];
  currentFundingNeedUSD: number;
  currentFundingNeedNGN: number;
  fundingRaisedUSD: number;
  targetBeneficiaries: string;
  featuredActivities: string[];
}

export interface EmergencyAppeal {
  id: string;
  title: string;
  urgency: 'CRITICAL' | 'HIGH' | 'ACTIVE';
  targetAmountUSD: number;
  raisedAmountUSD: number;
  targetAmountNGN: number;
  raisedAmountNGN: number;
  beneficiaryTarget: string;
  location: string;
  headline: string;
  description: string;
  daysRemaining: number;
  itemsNeeded: {
    item: string;
    unitCostUSD: number;
    unitCostNGN: number;
    unitCostGBP: number;
    unitCostEUR: number;
    impactDescription: string;
  }[];
}

export interface BeneficiaryStory {
  id: string;
  title: string;
  beneficiaryName: string;
  community: string;
  lga: string;
  programCategory: string;
  quote: string;
  narrative: string;
  image: string;
  impactAchieved: string;
}

export interface PolicyDocument {
  id: string;
  title: string;
  category: 'Safeguarding & PSEA' | 'Governance & Anti-Fraud' | 'Financial & Audit' | 'Operations & Procurement';
  fileSize: string;
  lastUpdated: string;
  description: string;
  version: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  category: 'Executive Management' | 'Board of Trustees' | 'Advisory Council';
  bio: string;
  image: string;
  expertise: string[];
}

export interface DonationItem {
  id: string;
  title: string;
  amountUSD: number;
  amountNGN: number;
  amountGBP: number;
  amountEUR: number;
  tangibleImpact: string;
  category: string;
}

export interface DonationSubmission {
  programId?: string;
  programTitle?: string;
  amount: number;
  currency: Currency;
  frequency: 'once' | 'monthly' | 'annually';
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  donorCountry: string;
  isAnonymous: boolean;
  dedicatedTo?: string;
  paymentMethod: 'paystack' | 'flutterwave' | 'stripe_card' | 'bank_transfer';
}

export interface DonationReceipt {
  reference: string;
  programTitle: string;
  amount: number;
  currency: Currency;
  frequency: string;
  donorName: string;
  donorEmail: string;
  donorCountry: string;
  date: string;
  taxDeductibleInfo: string;
  tangibleOutcome: string;
}
