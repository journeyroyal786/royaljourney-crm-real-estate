import React from 'react';
import { TrendingUp, Users, Clock, CheckCircle2, DollarSign, Building, PhoneCall, Award } from 'lucide-react';

export default function Dashboard({ leads, agents }) {
  const totalLeads = leads.length;
  const closedDeals = leads.filter(l => l.pipelineStage === 'Deal Closed Won').length;
  const hotLeads = leads.filter(l => l.rating === 'Hot').length;
  const conversionRate = Math.round((closedDeals / (totalLeads || 1)) * 100) + '%';

  const kpis = [
    { label: 'New Leads (Daily)', value: '18', change: '+24% vs yesterday', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'First Response Time', value: '4.2 mins', change: 'Target < 5 mins', icon: Clock, color: 'text-royal-gold', bg: 'bg-amber-500/10' },
    { label: 'Lead Conversion', value: conversionRate, change: '+5.2% this month', icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Viewings Scheduled', value: '34', change: '12 completed today', icon: Building, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'Offers Received', value: '11', change: 'Total AED 45M value', icon: PhoneCall, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { label: 'Deals Closed Won', value: closedDeals, change: 'AED 96K Commission', icon: CheckCircle2, color: 'text-green-400', bg: 'bg-green-500/10' },
    { label: 'Total Revenue (AED)', value: 'AED 1.45M', change: 'Commission YTD', icon: DollarSign, color: 'text-royal-gold', bg: 'bg-amber-500/10' },
    { label: 'Active Agents', value: agents.length, change: '100% RERA Certified', icon: Award, color: 'text-pink-400', bg: 'bg-pink-500/10' }
  ];

  return (
    <div className="space-y-6">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-royal-card via-[#2c201c] to-royal-card border border-royal-border rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-end pr-8">
          <img src="/logo.svg" alt="" className="h-48 w-auto" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-royal-gold/10 text-royal-gold text-xs font-bold uppercase tracking-wider mb-3">
            Dubai Real Estate CRM & Brokerage Suite
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Welcome to <span className="text-royal-gold">Royal Journey</span> CRM
          </h2>
          <p className="text-gray-300 mt-2 text-sm sm:text-base leading-relaxed">
            Manage high-value leads across Property Finder, Bayut, and Dubizzle. Ensure rigorous DLD/RERA compliance, track agent response times, and accelerate your deal closing pipeline in Dubai.
          </p>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="bg-royal-card border border-royal-border rounded-xl p-5 hover:border-royal-gold/50 transition-all shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-400">{kpi.label}</span>
                <div className={`p-2.5 rounded-lg ${kpi.bg} ${kpi.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold text-white">{kpi.value}</div>
                <div className="text-xs font-medium text-gray-400 mt-1">{kpi.change}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Leads & Agent Performance Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Leads Table */}
        <div className="lg:col-span-2 bg-royal-card border border-royal-border rounded-xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Recent Real Estate Leads</h3>
            <span className="text-xs bg-royal-dark border border-royal-border px-3 py-1 rounded-lg text-royal-gold font-medium">
              Live Feed
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-royal-dark text-gray-400 uppercase text-xs">
                <tr>
                  <th className="py-3 px-4">Client Name</th>
                  <th className="py-3 px-4">Source</th>
                  <th className="py-3 px-4">Budget / Area</th>
                  <th className="py-3 px-4">Stage</th>
                  <th className="py-3 px-4">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-royal-border">
                {leads.slice(0, 5).map((lead) => (
                  <tr key={lead.id} className="hover:bg-royal-border/30 transition">
                    <td className="py-3 px-4">
                      <div className="font-semibold text-white">{lead.name}</div>
                      <div className="text-xs text-gray-400">{lead.phone}</div>
                    </td>
                    <td className="py-3 px-4 text-gray-300">{lead.source}</td>
                    <td className="py-3 px-4">
                      <div className="text-royal-gold font-medium">{lead.budget}</div>
                      <div className="text-xs text-gray-400">{lead.preferredArea}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-royal-dark border border-royal-border text-gray-200">
                        {lead.pipelineStage}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        lead.rating === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}>
                        {lead.rating}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Agents Leaderboard */}
        <div className="bg-royal-card border border-royal-border rounded-xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Agent Performance</h3>
            <div className="space-y-4">
              {agents.map((agent, i) => (
                <div key={agent.id} className="bg-royal-dark border border-royal-border p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-royal-gold/20 text-royal-gold font-bold flex items-center justify-center text-sm border border-royal-gold/30">
                      #{i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{agent.name}</h4>
                      <p className="text-xs text-gray-400">{agent.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-400">{agent.conversion} conv.</span>
                    <div className="text-xs text-royal-gold font-medium">{agent.commission}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-royal-border text-center">
            <span className="text-xs text-gray-400">Monthly RERA Compliance Audit: Passed (100%)</span>
          </div>
        </div>

      </div>

    </div>
  );
}