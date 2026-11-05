export const initialLeads = [
  {
    id: 'LEAD-101',
    name: 'Sheikh Hamdan Al Maktoum',
    phone: '+971 50 123 4567',
    email: 'hamdan@dubaiholdings.ae',
    source: 'Property Finder',
    type: 'Buyer',
    budget: 'AED 12,000,000',
    preferredArea: 'Palm Jumeirah',
    status: 'Property Matched',
    pipelineStage: 'Property Matched',
    assignedAgent: 'Ahmad Al Mansoori',
    rating: 'Hot',
    lastContact: '2026-11-05',
    notes: 'Looking for luxury 4BR beachfront penthouse with private pool. Ready cash buyer.',
    dldCompliance: 'Form A Signed'
  },
  {
    id: 'LEAD-102',
    name: 'Sarah Jenkins',
    phone: '+971 55 987 6543',
    email: 'sarah.j@techcorp.io',
    source: 'Bayut',
    type: 'Tenant',
    budget: 'AED 180,000 / year',
    preferredArea: 'Dubai Marina',
    status: 'Viewing Scheduled',
    pipelineStage: 'Viewing Scheduled',
    assignedAgent: 'Elena Rostova',
    rating: 'Hot',
    lastContact: '2026-11-06',
    notes: 'Viewing scheduled for Marina Gate 2BR on Saturday 2 PM.',
    dldCompliance: 'Ejari Verified'
  },
  {
    id: 'LEAD-103',
    name: 'Vikram Malhotra',
    phone: '+971 52 456 7890',
    email: 'vikram@malhotragroup.com',
    source: 'Website',
    type: 'Investor',
    budget: 'AED 5,500,000',
    preferredArea: 'Downtown Dubai',
    status: 'Offer / Negotiation',
    pipelineStage: 'Offer / Negotiation',
    assignedAgent: 'Ahmad Al Mansoori',
    rating: 'Hot',
    lastContact: '2026-11-05',
    notes: 'Submitted offer 5% below asking price for Burj Crown 2BR. Awaiting seller counter.',
    dldCompliance: 'Form F Pending'
  },
  {
    id: 'LEAD-104',
    name: 'Elena Rostova',
    phone: '+971 56 333 2211',
    email: 'elena@investdxb.com',
    source: 'Referral',
    type: 'Buyer',
    budget: 'AED 3,200,000',
    preferredArea: 'Dubai Hills Estate',
    status: 'Qualified',
    pipelineStage: 'Qualified',
    assignedAgent: 'Tariq Bin Laden',
    rating: 'Warm',
    lastContact: '2026-11-04',
    notes: 'Interested in Golf Grove villas. Pre-approval mortgage confirmed with FAB.',
    dldCompliance: 'Under Review'
  },
  {
    id: 'LEAD-105',
    name: 'Marcus Vance',
    phone: '+971 54 888 9900',
    email: 'marcus@vancemedia.co',
    source: 'Dubizzle',
    type: 'Landlord',
    budget: 'N/A (Listing)',
    preferredArea: 'Business Bay',
    status: 'New Lead',
    pipelineStage: 'New Lead',
    assignedAgent: 'Tariq Bin Laden',
    rating: 'Warm',
    lastContact: '2026-11-06',
    notes: 'Wants to list 1BR in Executive Towers for rent or sale. Needs valuation.',
    dldCompliance: 'Form A Required'
  },
  {
    id: 'LEAD-106',
    name: 'Fatima Al Zahra',
    phone: '+971 50 777 1122',
    email: 'fatima.az@gmail.com',
    source: 'Instagram Ad',
    type: 'Buyer',
    budget: 'AED 4,800,000',
    preferredArea: 'Jumeirah Village Circle (JVC)',
    status: 'Deal Closed Won',
    pipelineStage: 'Deal Closed Won',
    assignedAgent: 'Ahmad Al Mansoori',
    rating: 'Hot',
    lastContact: '2026-11-01',
    notes: 'Successfully transferred title deed at DLD office. Commission collected: AED 96,000.',
    dldCompliance: 'Form F & Title Deed Complete'
  }
];

export const pipelineStages = [
  'New Lead',
  'Contacted',
  'Qualified',
  'Property Matched',
  'Viewing Scheduled',
  'Offer / Negotiation',
  'Documentation',
  'Deal Closed Won',
  'Post-Sale Follow-up'
];

export const initialProperties = [
  { id: 'PROP-1', title: 'Palm Beach Penthouse 4BR', area: 'Palm Jumeirah', type: 'Apartment', price: 'AED 12,500,000', status: 'Available', reraPermit: 'DLD-PERMIT-88392' },
  { id: 'PROP-2', title: 'Marina Gate Luxury 2BR', area: 'Dubai Marina', type: 'Apartment', price: 'AED 180,000 /yr', status: 'Rented', reraPermit: 'DLD-PERMIT-44910' },
  { id: 'PROP-3', title: 'Burj Crown Modern 2BR', area: 'Downtown Dubai', type: 'Apartment', price: 'AED 5,400,000', status: 'Under Offer', reraPermit: 'DLD-PERMIT-11209' },
  { id: 'PROP-4', title: 'Golf Grove Luxury Villa 4BR', area: 'Dubai Hills Estate', type: 'Villa', price: 'AED 6,100,000', status: 'Available', reraPermit: 'DLD-PERMIT-77654' },
  { id: 'PROP-5', title: 'Executive Towers 1BR', area: 'Business Bay', type: 'Apartment', price: 'AED 1,450,000', status: 'Available', reraPermit: 'DLD-PERMIT-33291' }
];

export const agentsList = [
  { id: 'AG-1', name: 'Ahmad Al Mansoori', role: 'Senior Luxury Consultant', activeDeals: 14, conversion: '32%', commission: 'AED 340,000' },
  { id: 'AG-2', name: 'Elena Rostova', role: ' Leasing Specialist', activeDeals: 19, conversion: '41%', commission: 'AED 210,000' },
  { id: 'AG-3', name: 'Tariq Bin Laden', role: 'Investment Advisor', activeDeals: 9, conversion: '24%', commission: 'AED 185,000' }
];

export const workflowSteps = [
  { step: 1, title: 'Lead Generation', desc: 'Capture leads from Property Finder, Bayut, Dubizzle, website, social media & referrals. Enter into CRM immediately with source, budget, preferred area, and property type.' },
  { step: 2, title: 'Lead Qualification', desc: 'Contact new leads within 5–10 minutes. Confirm buyer/seller/tenant/landlord, budget, location, purpose, timeline. Assign status: Hot, Warm, Cold.' },
  { step: 3, title: 'Lead Assignment', desc: 'Assign leads to specialized agents based on area and property type. Set follow-up deadlines and track response times.' },
  { step: 4, title: 'Property Matching', desc: 'Filter portfolio based on client requirements. Share photos, videos, pricing, and record client feedback.' },
  { step: 5, title: 'Viewing Management', desc: 'Schedule property viewings, send reminders, update status (Scheduled/Completed/Cancelled), and log client feedback.' },
  { step: 6, title: 'Negotiation', desc: 'Record offers & counteroffers, coordinate between buyer & seller, track progress to obtain commercial terms.' },
  { step: 7, title: 'Deal Closing', desc: 'Verify required documents, coordinate Form A, B & F (RERA compliance), track deposit, NOC, mortgage, and transfer.' },
  { step: 8, title: 'Post-Sale Follow-up', desc: 'Send thank-you, update CRM to Closed Won, schedule follow-ups at 30, 90, 180 days, and request reviews/referrals.' },
  { step: 9, title: 'Lost Lead Management', desc: 'Record reason for lost deal, set future follow-up dates, and add prospect to automated campaigns.' },
  { step: 10, title: 'Dashboard & KPIs', desc: 'Track Daily New Leads, First Response Time, Conversion %, Viewings, Offers, Deals Closed, Revenue (AED), and Agent Performance.' }
];