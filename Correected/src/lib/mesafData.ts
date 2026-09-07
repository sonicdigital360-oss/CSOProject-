import {
  HumanitarianProgram,
  EmergencyAppeal,
  BeneficiaryStory,
  PolicyDocument,
  LeadershipMember,
  DonationItem,
} from '../types';

export const MESAF_INFO = {
  name: 'Mercy Sarah Foundation',
  acronym: 'MESAF',
  tagline: 'Empowering Vulnerable Lives, Building Resilient Communities',
  foundedYear: 2021,
  type: 'Women-Led Humanitarian & Developmental Non-Governmental Organization (NGO)',
  hqLocation: 'Maiduguri, Borno State, Northeast Nigeria',
  operationalArea: 'BAY States (Borno, Adamawa, Yobe) & Lake Chad Basin',
  cacRegistration: 'Registered under Part C of CAMA, CAC Nigeria',
  award: 'Winner — Non-Profit Organisation Awards 2025 (Excellence in Humanitarian Interventions)',
  emails: {
    general: 'info@mercysarah.org',
    partnerships: 'partnerships@mercysarah.org',
    recruitment: 'recruitment@mercysarah.org',
    safeguarding: 'safeguarding@mercysarah.org',
  },
  phones: {
    primary: '+234 (0) 806 807 1967',
    secondary: '+234 (0) 802 499 2099',
  },
  address: 'No. 2 Open Air Theatre Complex, Off Damboa Road, Maiduguri, Borno State, Nigeria',
  unClusters: [
    'Health Cluster Nigeria',
    'Nutrition Sector Coordination',
    'Protection & GBV Sub-Sector',
    'WASH Cluster',
    'Education in Emergencies (EiE)',
    'Food Security & Livelihood (FSL)',
  ],
};

export const IMPACT_METRICS_OVERVIEW = [
  {
    label: 'Total Lives Reached',
    value: '124,500+',
    subtext: 'Across Borno, Adamawa & Yobe states',
    icon: 'Users',
  },
  {
    label: 'Malnutrition Interventions',
    value: '32,400+',
    subtext: 'Pregnant/lactating mothers & infants',
    icon: 'HeartPulse',
  },
  {
    label: 'Health & Malaria Treatments',
    value: '46,200+',
    subtext: 'Konduga, Jere & IDP host communities',
    icon: 'Activity',
  },
  {
    label: 'Children in Safe Classrooms',
    value: '14,800+',
    subtext: 'Learning kits & emergency education',
    icon: 'GraduationCap',
  },
  {
    label: 'Women Digitally & Financially Empowered',
    value: '8,650+',
    subtext: 'Cybersecurity, IT skills & seed microgrants',
    icon: 'Sparkles',
  },
  {
    label: 'Clean Water & Sanitation Sites',
    value: '75+',
    subtext: 'Solar boreholes & camp WASH facilities',
    icon: 'Droplets',
  },
];

export const HUMANITARIAN_PROGRAMS: HumanitarianProgram[] = [
  {
    id: 'health-nutrition',
    title: 'Primary Health Care & Emergency Nutrition',
    tagline: 'Lifesaving maternal healthcare, malaria eradication & therapeutic malnutrition clinics.',
    category: 'Health & Nutrition',
    iconName: 'HeartPulse',
    bannerImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1000&auto=format&fit=crop&q=80',
    summary:
      'We deliver emergency primary healthcare, comprehensive malaria mitigation in high-prevalence areas like Mandarari (Konduga LGA), and community-based management of acute malnutrition (CMAM) using Ready-to-Use Therapeutic Food (RUTF).',
    fullDescription:
      'In protracted crisis areas of Northeast Nigeria, preventable diseases and infant wasting threaten vulnerable lives. MESAF deploys mobile clinics, community health workers, and maternal screening outposts. We provide malaria prophylaxis, antimalarial medications, rapid diagnostic tests, micronutrient supplementation, and immunization mobilization across remote settlements.',
    sdgs: [
      { number: 2, title: 'Zero Hunger', color: '#DDA63A', iconName: 'Utensils' },
      { number: 3, title: 'Good Health and Well-Being', color: '#4C9F38', iconName: 'Heart' },
    ],
    clusters: ['Health Cluster', 'Nutrition Sector'],
    keyStats: [
      { label: 'Infants Treated for Malnutrition', value: '18,200+' },
      { label: 'Pregnant Mothers Received Antenatal Care', value: '14,200+' },
      { label: 'Malaria Doses Administered', value: '46,200+' },
    ],
    activeLocations: ['Konduga LGA (Mandarari Community)', 'Jere LGA', 'Maiduguri Metropolitan (MMC)'],
    currentFundingNeedUSD: 85000,
    currentFundingNeedNGN: 136000000,
    fundingRaisedUSD: 54000,
    targetBeneficiaries: '35,000 Women and Children in 2026',
    featuredActivities: [
      'Procurement and distribution of Ready-to-Use Therapeutic Food (RUTF)',
      'Community malaria testing, bed net distribution, and indoor residual spraying',
      'Mobile maternal care clinics and emergency obstetric referrals',
      'Infant and Young Child Feeding (IYCF) counseling for adolescent mothers',
    ],
  },
  {
    id: 'protection-gbv',
    title: 'Protection & Gender-Based Violence (GBV) Mitigation',
    tagline: 'Safe spaces, trauma psychosocial therapy, legal aid & dignity for survivors.',
    category: 'Protection & GBV',
    iconName: 'ShieldCheck',
    bannerImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop&q=80',
    summary:
      'MESAF operates Women and Girls Safe Spaces (WGSS), offers trauma-informed psychosocial counseling, survivor clinical management assistance, dignity kit provision, and Mine Action awareness campaigns.',
    fullDescription:
      'Conflict-affected women and girls face severe risks of gender-based violence, sexual exploitation, and psychological trauma. MESAF’s specialized protection officers provide comprehensive case management, confidential psycho-social first aid, emergency dignity supplies, legal empowerment, and explosive ordnance risk education (EORE).',
    sdgs: [
      { number: 5, title: 'Gender Equality', color: '#FF3A21', iconName: 'Users' },
      { number: 16, title: 'Peace, Justice and Strong Institutions', color: '#00689D', iconName: 'Scale' },
    ],
    clusters: ['Protection Cluster', 'GBV Sub-Sector', 'Mine Action Area of Responsibility'],
    keyStats: [
      { label: 'Dignity Kits Distributed', value: '9,500+' },
      { label: 'Safe Space Sessions Hosted', value: '1,400+' },
      { label: 'Mine Risk Education Participants', value: '28,000+' },
    ],
    activeLocations: ['Gwoza', 'Konduga', 'Custom House IDP Camp', 'Stadium Camp Maiduguri'],
    currentFundingNeedUSD: 65000,
    currentFundingNeedNGN: 104000000,
    fundingRaisedUSD: 41000,
    targetBeneficiaries: '15,000 Survivors & At-Risk Adolescents',
    featuredActivities: [
      'Operation of confidential Women & Girls Safe Spaces (WGSS)',
      'Distribution of dignity, hygiene, and emergency solar lighting kits',
      'Clinical management of rape (CMR) referrals and psychological therapy',
      'Explosive Ordnance Risk Education (EORE) in high-risk resettlement corridors',
    ],
  },
  {
    id: 'education-crisis',
    title: 'Inclusive Education in Emergencies',
    tagline: 'Bridging learning gaps for displaced children with safe classrooms & study supplies.',
    category: 'Education',
    iconName: 'GraduationCap',
    bannerImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&auto=format&fit=crop&q=80',
    summary:
      'We establish non-formal learning spaces, provide school-in-a-box supplies, train community volunteer teachers, and reintegrate out-of-school displaced children into formal schooling.',
    fullDescription:
      'Thousands of school-aged children in Borno State have experienced learning disruption due to displacement. MESAF builds transitional learning centers, provides foundational literacy and numeracy curriculums, supports school feeding initiatives, and equips students with backpacks, books, and hygiene essentials.',
    sdgs: [
      { number: 4, title: 'Quality Education', color: '#C5192D', iconName: 'BookOpen' },
      { number: 10, title: 'Reduced Inequalities', color: '#DD1367', iconName: 'Scale' },
    ],
    clusters: ['Education in Emergencies (EiE) Cluster'],
    keyStats: [
      { label: 'Children Reintegrated to School', value: '14,800+' },
      { label: 'Volunteer Teachers Trained', value: '380+' },
      { label: 'Learning Kits Supplied', value: '22,000+' },
    ],
    activeLocations: ['Jere LGA', 'MMC Maiduguri', 'Bama Host Communities'],
    currentFundingNeedUSD: 50000,
    currentFundingNeedNGN: 80000000,
    fundingRaisedUSD: 33000,
    targetBeneficiaries: '8,000 Displaced Children in 2026',
    featuredActivities: [
      'Accelerated learning programs for adolescents who missed foundational years',
      'School-in-a-Box distributions containing curriculum books and stationery',
      'Training community educators on trauma-informed pedagogy',
      'WASH and sanitation rehabilitation in primary schools',
    ],
  },
  {
    id: 'women-digital-empowerment',
    title: 'Women’s Digital Skills & Economic Enterprise',
    tagline: 'Cybersecurity literacy, digital skills & micro-seed funding for female entrepreneurs.',
    category: 'Women Empowerment',
    iconName: 'Sparkles',
    bannerImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=80',
    summary:
      'MESAF empowers women and youth through elementary cybersecurity, digital literacy, vocational enterprise incubation, and micro-grant financial inclusion.',
    fullDescription:
      'Building sustainable self-reliance requires modern tools. MESAF pioneers digital safety and cybersecurity training for northern Nigerian women, paired with vocational trade masterclasses (tailoring, agro-processing, eco-soap production) and conditional micro-grants for enterprise launch.',
    sdgs: [
      { number: 5, title: 'Gender Equality', color: '#FF3A21', iconName: 'Users' },
      { number: 8, title: 'Decent Work and Economic Growth', color: '#A21942', iconName: 'Briefcase' },
      { number: 9, title: 'Industry, Innovation and Infrastructure', color: '#FD6925', iconName: 'Cpu' },
    ],
    clusters: ['Early Recovery & Livelihoods Cluster', 'Inter-Sector Working Group'],
    keyStats: [
      { label: 'Women Trained in Digital Skills', value: '4,200+' },
      { label: 'Micro-Enterprises Funded', value: '1,850+' },
      { label: 'Average Household Income Growth', value: '3.4x' },
    ],
    activeLocations: ['Maiduguri Tech Hub Center', 'Konduga Vocational Outpost', 'Yobe Border Hub'],
    currentFundingNeedUSD: 70000,
    currentFundingNeedNGN: 112000000,
    fundingRaisedUSD: 46000,
    targetBeneficiaries: '3,000 Female Entrepreneurs & Innovators',
    featuredActivities: [
      'Intensive workshops on digital literacy, mobile bookkeeping & digital safety',
      'Vocational incubator cohorts with toolkits and business mentorship',
      'Distribution of conditional micro-seed funding for IDP cooperative businesses',
      'Advocacy workshops commemorating International Women’s Day & 16 Days of Activism',
    ],
  },
  {
    id: 'wash-climate',
    title: 'WASH, Clean Water & Climate Resilience',
    tagline: 'Solar-powered boreholes, emergency camp sanitation & flood-resilience mitigation.',
    category: 'WASH & Environment',
    iconName: 'Droplets',
    bannerImage: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=1000&auto=format&fit=crop&q=80',
    summary:
      'We install climate-resilient solar water systems, build gender-segregated latrines in resettlement sites, and conduct hygiene promotion to prevent cholera outbreaks.',
    fullDescription:
      'Water scarcity and climate-induced flooding compound humanitarian vulnerability. MESAF constructs deep solar-powered boreholes, distributes water purification tablets (AquaTabs), manages waste containment, and conducts community water safety committees for long-term sustainability.',
    sdgs: [
      { number: 6, title: 'Clean Water and Sanitation', color: '#26BDE2', iconName: 'Droplet' },
      { number: 13, title: 'Climate Action', color: '#3F7E44', iconName: 'Globe' },
    ],
    clusters: ['WASH Cluster Nigeria'],
    keyStats: [
      { label: 'Solar Boreholes Constructed/Restored', value: '75+' },
      { label: 'People Gained Safe Water Daily', value: '68,000+' },
      { label: 'Hygiene Kits Distributed', value: '16,500+' },
    ],
    activeLocations: ['Mandarari', 'Jere LGA Outskirts', 'Bama Resettlement', 'MMC Flood Corridors'],
    currentFundingNeedUSD: 95000,
    currentFundingNeedNGN: 152000000,
    fundingRaisedUSD: 62000,
    targetBeneficiaries: '45,000 Individuals in Water-Stressed Areas',
    featuredActivities: [
      'Drilling and solar electrification of community high-yield boreholes',
      'Emergency distribution of hygiene kits (soap, jerrycans, water purification)',
      'Establishment and training of local Water User Maintenance Committees (WASHComs)',
      'Community drain clearing and flood mitigation barrier construction',
    ],
  },
  {
    id: 'food-security',
    title: 'Food Security & Agriculture Livelihoods',
    tagline: 'Climate-smart seeds, dry-season farming kits & emergency household food assistance.',
    category: 'Emergency Response',
    iconName: 'Wheat',
    bannerImage: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=1000&auto=format&fit=crop&q=80',
    summary:
      'We support vulnerable smallholder farmers and displaced households with drought-resistant seeds, drip irrigation, livestock restocking, and emergency grain rations.',
    fullDescription:
      'Food insecurity in the Lake Chad Basin requires both rapid emergency food relief and long-term agrarian recovery. MESAF empowers returnee families with climate-adapted crop inputs, poultry and goat rearing kits, and agro-processing equipment to restore food self-sufficiency.',
    sdgs: [
      { number: 1, title: 'No Poverty', color: '#E5243B', iconName: 'Shield' },
      { number: 2, title: 'Zero Hunger', color: '#DDA63A', iconName: 'Utensils' },
    ],
    clusters: ['Food Security & Livelihoods (FSL) Cluster'],
    keyStats: [
      { label: 'Smallholder Farmers Supported', value: '6,400+' },
      { label: 'Emergency Food Rations Distributed', value: '18,900+' },
      { label: 'Hectares of Land Cultivated', value: '1,200+' },
    ],
    activeLocations: ['Konduga LGA', 'Mafa Corridor', 'Southern Borno Farm Cooperatives'],
    currentFundingNeedUSD: 60000,
    currentFundingNeedNGN: 96000000,
    fundingRaisedUSD: 39000,
    targetBeneficiaries: '12,000 Agrarian Households',
    featuredActivities: [
      'Distribution of drought-tolerant sorghum, cowpea, and vegetable seed packs',
      'Provision of solar water pumps for women-led cooperative dry season farming',
      'Small ruminant (goat and sheep) pass-on breeding programs for widows',
      'Post-harvest storage loss prevention training and hermetic bag distribution',
    ],
  },
];

export const ACTIVE_EMERGENCY_APPEAL: EmergencyAppeal = {
  id: 'appeal-northeast-flood-nutrition-2026',
  title: 'Northeast Nigeria Flood Recovery & Emergency Child Nutrition Appeal',
  urgency: 'CRITICAL',
  targetAmountUSD: 150000,
  raisedAmountUSD: 98400,
  targetAmountNGN: 240000000,
  raisedAmountNGN: 157440000,
  beneficiaryTarget: '18,500 Displaced Mothers, Infants & Vulnerable Persons',
  location: 'Maiduguri, Jere, and Konduga LGAs, Borno State',
  headline: 'Urgent Life-Saving Nutrition & Shelter Kits for Flood-Displaced Families',
  description:
    'Devastating flash floods and displacement have worsened severe acute malnutrition (SAM) among infants and cut off access to clean drinking water. MESAF has mobilized rapid response teams to deliver Ready-to-Use Therapeutic Food (RUTF), water purification packets, and emergency shelter kits.',
  daysRemaining: 18,
  itemsNeeded: [
    {
      item: 'Emergency Infant Nutrition Kit (1 Month RUTF Carton)',
      unitCostUSD: 55,
      unitCostNGN: 88000,
      unitCostGBP: 42,
      unitCostEUR: 50,
      impactDescription: 'Saves 1 severely malnourished infant from wasting and organ failure.',
    },
    {
      item: 'Household Water Purification & Hygiene Bucket Kit',
      unitCostUSD: 30,
      unitCostNGN: 48000,
      unitCostGBP: 24,
      unitCostEUR: 28,
      impactDescription: 'Provides safe drinking water and cholera defense for a family of 6 for 3 months.',
    },
    {
      item: 'Maternal Emergency Dignity & Mosquito Net Kit',
      unitCostUSD: 45,
      unitCostNGN: 72000,
      unitCostGBP: 35,
      unitCostEUR: 41,
      impactDescription: 'Protects a pregnant mother and newborn from malaria and waterborne infection.',
    },
    {
      item: 'Community Mobile Clinic Fuel & Medicine Outpost (1 Week)',
      unitCostUSD: 250,
      unitCostNGN: 400000,
      unitCostGBP: 195,
      unitCostEUR: 230,
      impactDescription: 'Funds medical outreach treating up to 200 sick children in cut-off communities.',
    },
  ],
};

export const BENEFICIARY_STORIES: BeneficiaryStory[] = [
  {
    id: 'story-aisha-konduga',
    title: 'From Near-Fatal Malaria to Healthy Motherhood in Mandarari',
    beneficiaryName: 'Aisha Mohammed',
    community: 'Mandarari Community',
    lga: 'Konduga LGA, Borno State',
    programCategory: 'Health & Nutrition',
    quote:
      'When the severe fever started in my 7th month of pregnancy, there was no transport to the city. The MESAF community health team arrived at our settlement, tested me on the spot, and provided free antimalarials and nutritious food. Today, my baby boy Usman is strong and healthy.',
    narrative:
      'In Mandarari, access to primary healthcare was severely constrained. Through MESAF’s Konduga Maternal Health and Malaria Mitigation project, over 4,500 pregnant women received free screening, insecticide-treated nets, and therapeutic nutrition.',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&auto=format&fit=crop&q=80',
    impactAchieved: 'Full maternal recovery & healthy infant birth with 0 malaria complications.',
  },
  {
    id: 'story-fatima-digital',
    title: 'Displaced at 19, Now a Certified Digital Entrepreneur & Trainer',
    beneficiaryName: 'Fatima Bukar',
    community: 'Custom House IDP Camp',
    lga: 'Maiduguri, Borno State',
    programCategory: 'Women Empowerment',
    quote:
      'I thought my future was over after fleeing my village. Joining the MESAF Digital Skills for Women Academy opened a new world. I learned digital bookkeeping and online safety, and with the seed grant, I established a mobile solar charging and tailoring enterprise that feeds my 5 siblings.',
    narrative:
      'Fatima is one of 8,650 northern Nigerian young women who have graduated from MESAF’s vocational and digital innovation bootcamps, creating independent livelihoods beyond humanitarian dependency.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=80',
    impactAchieved: 'Established thriving micro-enterprise; trained 25 other camp adolescent girls in digital literacy.',
  },
  {
    id: 'story-mustapha-school',
    title: 'Returning to School After Three Years of Crisis Disruption',
    beneficiaryName: 'Mustapha & Halima',
    community: 'Gwoza Resettlement Host Community',
    lga: 'Gwoza LGA, Borno State',
    programCategory: 'Education',
    quote:
      'We had no books, no pencils, and our old classroom was destroyed. When MESAF built the temporary learning shelter and gave us our bright blue backpacks with books, we ran home crying tears of joy.',
    narrative:
      'MESAF’s Education in Emergencies initiative provides safe, child-friendly learning spaces, mental health psychosocial support (MHPSS), and complete educational materials to ensure no child’s future is lost to conflict.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80',
    impactAchieved: 'Enrolled in continuous basic education; scoring top 10% in literacy assessments.',
  },
];

export const POLICY_DOCUMENTS: PolicyDocument[] = [
  {
    id: 'psea-policy-2025',
    title: 'Protection against Sexual Exploitation, Abuse & Harassment (PSEA) Policy',
    category: 'Safeguarding & PSEA',
    fileSize: '1.4 MB PDF',
    lastUpdated: 'January 2025 (Annual Review)',
    description:
      'Zero-tolerance institutional mandate outlining mandatory reporting, confidential survivor support, whistleblower protections, and investigator protocols adhering to UN IASC guidelines.',
    version: 'v3.2',
  },
  {
    id: 'child-safeguarding-2025',
    title: 'Comprehensive Child Safeguarding & Vulnerable Adult Charter',
    category: 'Safeguarding & PSEA',
    fileSize: '1.1 MB PDF',
    lastUpdated: 'February 2025',
    description:
      'Mandatory behavioral code of conduct for all MESAF staff, volunteers, contractors, and partners working directly with children in IDP camps and learning centers.',
    version: 'v2.8',
  },
  {
    id: 'anti-fraud-whistleblowing',
    title: 'Anti-Bribery, Anti-Fraud & Whistleblower Protection Framework',
    category: 'Governance & Anti-Fraud',
    fileSize: '890 KB PDF',
    lastUpdated: 'November 2024',
    description:
      'Rigorous financial transparency policy with independent hotline, anti-money laundering (AML) controls, and strict conflict of interest declarations.',
    version: 'v2.4',
  },
  {
    id: 'audited-financials-2024',
    title: '2024 Audited Financial Statements & Independent Auditor’s Opinion',
    category: 'Financial & Audit',
    fileSize: '2.8 MB PDF',
    lastUpdated: 'March 2025',
    description:
      'Full external independent audit conducted in accordance with International Standards on Auditing (ISA) and IFRS for Non-Profit Entities.',
    version: 'Final Audited',
  },
  {
    id: 'procurement-code',
    title: 'Procurement, Logistics & Supply Chain Transparency Standard',
    category: 'Operations & Procurement',
    fileSize: '1.2 MB PDF',
    lastUpdated: 'January 2025',
    description:
      'Competitive bidding requirements, vendor vetting procedures, local vendor empowerment quotas, and zero-kickback compliance.',
    version: 'v2.1',
  },
  {
    id: 'data-protection-privacy',
    title: 'Beneficiary Data Protection & Information Privacy Charter (NDPR / GDPR)',
    category: 'Governance & Anti-Fraud',
    fileSize: '950 KB PDF',
    lastUpdated: 'October 2024',
    description:
      'Strict protocols governing the collection, biometric security, and storage of vulnerable beneficiary information in humanitarian deployments.',
    version: 'v1.9',
  },
];

export const LEADERSHIP_MEMBERS: LeadershipMember[] = [
  {
    id: 'sarah-mercy',
    name: 'Sarah Mercy',
    role: 'Executive Director & Founder',
    category: 'Executive Management',
    bio: 'Renowned humanitarian leader and women empowerment champion with over 14 years of ground experience leading grassroots interventions in Northeast Nigeria and the Lake Chad basin.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
    expertise: ['Humanitarian Strategy', 'Women’s Rights Advocacy', 'PSEA Cluster Leadership'],
  },
  {
    id: 'dr-amina-ibrahim',
    name: 'Dr. Amina Ibrahim (MBBS, MPH)',
    role: 'Director of Public Health & Emergency Nutrition',
    category: 'Executive Management',
    bio: 'Public health epidemiologist with a track record in maternal child healthcare, malnutrition CMAM programming, and infectious disease containment in conflict environments.',
    image: 'https://images.unsplash.com/photo-1594824813689-c454e99994c6?w=600&auto=format&fit=crop&q=80',
    expertise: ['CMAM Protocols', 'Maternal Epidemiology', 'Emergency Health Logistics'],
  },
  {
    id: 'olumide-adeyemi',
    name: 'Olumide Adeyemi (FCA, MBA)',
    role: 'Head of Finance, Grants & Compliance',
    category: 'Executive Management',
    bio: 'Senior chartered accountant with 12 years of experience managing multilateral grants from UN agencies, USAID, and global philanthropic foundations with pristine audit records.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    expertise: ['Grants Compliance', 'IFRS for Non-Profits', 'Anti-Fraud Forensics'],
  },
  {
    id: 'hafsat-bello',
    name: 'Hafsat Bello (Esq.)',
    role: 'Trustee & Legal Governance Advisor',
    category: 'Board of Trustees',
    bio: 'Human rights attorney and member of the Nigerian Bar Association (NBA) specializing in child protection law, gender justice, and NGO governance compliance.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80',
    expertise: ['Child Rights Law', 'Statutory Compliance', 'Legal Protection'],
  },
];

export const DONATION_GIFT_TIERS: DonationItem[] = [
  {
    id: 'gift-25',
    title: 'School-in-a-Box Kit for 2 Children',
    amountUSD: 25,
    amountNGN: 40000,
    amountGBP: 20,
    amountEUR: 23,
    tangibleImpact: 'Provides 2 displaced children with complete textbooks, notebooks, schoolbags, and stationery for a full school term.',
    category: 'Education',
  },
  {
    id: 'gift-50',
    title: '1 Month RUTF Malnutrition Treatment',
    amountUSD: 50,
    amountNGN: 80000,
    amountGBP: 39,
    amountEUR: 46,
    tangibleImpact: 'Funds a full 4-week supply of Ready-to-Use Therapeutic Food (RUTF) to bring 2 severely malnourished infants back to healthy weight.',
    category: 'Health & Nutrition',
  },
  {
    id: 'gift-100',
    title: 'Safe Motherhood & Malaria Care for 3 Mothers',
    amountUSD: 100,
    amountNGN: 160000,
    amountGBP: 78,
    amountEUR: 92,
    tangibleImpact: 'Equips 3 pregnant women in Mandarari/Konduga with prenatal diagnostic screening, antimalarial doses, and sterile birth kits.',
    category: 'Health & Protection',
  },
  {
    id: 'gift-250',
    title: 'Women’s Micro-Business Seed Grant',
    amountUSD: 250,
    amountNGN: 400000,
    amountGBP: 195,
    amountEUR: 230,
    tangibleImpact: 'Sponsors 1 female IDP survivor through 6 weeks of digital enterprise training and provides seed capital to launch her business.',
    category: 'Women Empowerment',
  },
  {
    id: 'gift-1000',
    title: 'Community Clean Water Solar Borehole Rehab',
    amountUSD: 1000,
    amountNGN: 1600000,
    amountGBP: 780,
    amountEUR: 920,
    tangibleImpact: 'Restores and solarizes a community clean water borehole, providing safe, disease-free drinking water to 500+ IDP camp residents.',
    category: 'WASH',
  },
];

export const MESAF_BANK_ACCOUNTS = {
  accountName: 'MERCY SARAH FOUNDATION',
  nairaAccounts: [
    {
      bankName: 'Zenith Bank PLC',
      accountNumber: '1229482019',
      currency: 'NGN (Nigerian Naira)',
      branch: 'Borno Regional Branch, Maiduguri',
    },
    {
      bankName: 'Guaranty Trust Bank (GTBank)',
      accountNumber: '0812938471',
      currency: 'NGN (Nigerian Naira)',
      branch: 'Maiduguri Main Branch',
    },
  ],
  domiciliaryAccounts: [
    {
      bankName: 'Zenith Bank PLC (USD Domiciliary)',
      accountNumber: '5071982341',
      currency: 'USD (United States Dollar)',
      swiftCode: 'ZEIBNGLA',
      routingNumber: '057150013',
    },
    {
      bankName: 'Access Bank PLC (EUR / GBP Domiciliary)',
      accountNumber: '0098471203',
      currency: 'EUR & GBP Multi-Currency',
      swiftCode: 'ACCONGLA',
    },
  ],
};
