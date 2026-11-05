import React, { useState } from 'react';
import { Plus, Search, Filter, Phone, Mail, MapPin, ShieldCheck, UserPlus } from 'lucide-react';
import { pipelineStages } from '../data/mockData';

export default function LeadManagement({ leads, addLead }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSource, setFilterSource] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    source: 'Property Finder',
    type: 'Buyer',
    budget: '',
    preferredArea: '',
    rating: 'Hot',
    assignedAgent: 'Ahmad Al Mansoori',
    notes: '',
    dldCompliance: 'Form A Signed'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    addLead({
      id: `LEAD-10${leads.length + 1}`,
      ...formData,
      pipelineStage: 'New Lead',
      status: 'New Lead',
      lastContact: new Date().toISOString().split('T')[0]
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      source: 'Property Finder',
      type: 'Buyer',
      budget: '',
      preferredArea: '',
      rating: 'Hot',
      assignedAgent: 'Ahmad Al Mansoori',
      notes: '',
      dldCompliance: 'Form A Signed'
    });
    setIsModalOpen(false);
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.preferredArea.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lead.phone.includes(searchTerm);
    const matchesSource = filterSource === 'All' || lead.source === filterSource;
    return matchesSearch && matchesSource;
  });

  return (
    <div className="space-y-6">
      
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-royal-card border border-royal-border p-6 rounded-2xl shadow-md">
        <div>
          <h2 className="text-2xl font-bold text-white">Lead Management & Capture</h2>
          <p className="text-sm text-gray-400 mt-1">Capture leads from Property Finder, Bayut, Dubizzle, website & referrals</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center space-x-2 bg-royal-gold text-royal-dark font-bold px-5 py-2.5 rounded-xl hover:bg-amber-400 transition shadow-lg shadow-amber-500/10"
        >
          <UserPlus className="w-5 h-5" />
          <span>Add New Lead</span>
        </button>
      </div>

      {/* Search & Filters */}
      <div className="bg-royal-card border border-royal-border p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by client name, area, phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-royal-dark text-white text-sm pl-10 pr-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
          />
        </div>
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <span className="text-xs text-gray-400 font-medium">Source:</span>
          <select
            value={filterSource}
            onChange={(e) => setFilterSource(e.target.value)}
            className="bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
          >
            <option value="All">All Sources</option>
            <option value="Property Finder">Property Finder</option>
            <option value="Bayut">Bayut</option>
            <option value="Dubizzle">Dubizzle</option>
            <option value="Website">Website</option>
            <option value="Referral">Referral</option>
            <option value="Instagram Ad">Instagram Ad</option>
          </select>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-royal-card border border-royal-border rounded-xl overflow-hidden shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-royal-dark text-gray-400 uppercase text-xs">
              <tr>
                <th className="py-4 px-6">Lead ID & Name</th>
                <th className="py-4 px-6">Contact Info</th>
                <th className="py-4 px-6">Source / Type</th>
                <th className="py-4 px-6">Budget & Area</th>
                <th className="py-4 px-6">Assigned Agent</th>
                <th className="py-4 px-6">DLD Compliance</th>
                <th className="py-4 px-6">Stage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-royal-border">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-royal-border/30 transition">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs text-royal-gold bg-royal-dark px-2 py-0.5 rounded border border-royal-border">
                        {lead.id}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        lead.rating === 'Hot' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {lead.rating}
                      </span>
                    </div>
                    <div className="font-bold text-white mt-1">{lead.name}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center text-xs text-gray-300">
                      <Phone className="w-3.5 h-3.5 text-royal-gold mr-1.5" />
                      {lead.phone}
                    </div>
                    <div className="flex items-center text-xs text-gray-400 mt-1">
                      <Mail className="w-3.5 h-3.5 text-royal-gold mr-1.5" />
                      {lead.email}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium text-white">{lead.source}</div>
                    <div className="text-xs text-royal-gold">{lead.type}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-bold text-royal-gold">{lead.budget}</div>
                    <div className="text-xs text-gray-400 flex items-center mt-0.5">
                      <MapPin className="w-3 h-3 mr-1 text-royal-gold" />
                      {lead.preferredArea}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300 font-medium">{lead.assignedAgent}</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-royal-dark border border-royal-border text-emerald-400">
                      <ShieldCheck className="w-3 h-3 mr-1" />
                      {lead.dldCompliance}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-royal-dark border border-royal-border text-gray-200">
                      {lead.pipelineStage}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Lead Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-royal-card border border-royal-border rounded-2xl w-full max-w-xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Add New Real Estate Lead</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Client Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Sheikh Mohammed"
                    className="w-full bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Phone Number (UAE) *</label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+971 50 XXX XXXX"
                    className="w-full bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="client@domain.ae"
                    className="w-full bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Lead Source</label>
                  <select
                    value={formData.source}
                    onChange={(e) => setFormData({...formData, source: e.target.value})}
                    className="w-full bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                  >
                    <option value="Property Finder">Property Finder</option>
                    <option value="Bayut">Bayut</option>
                    <option value="Dubizzle">Dubizzle</option>
                    <option value="Website">Website</option>
                    <option value="Referral">Referral</option>
                    <option value="Social Media">Social Media</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Client Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                  >
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                    <option value="Tenant">Tenant</option>
                    <option value="Landlord">Landlord</option>
                    <option value="Investor">Investor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Budget / Price</label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    placeholder="AED 5,000,000"
                    className="w-full bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Preferred Area</label>
                  <input
                    type="text"
                    value={formData.preferredArea}
                    onChange={(e) => setFormData({...formData, preferredArea: e.target.value})}
                    placeholder="Palm Jumeirah"
                    className="w-full bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Assigned Agent</label>
                  <select
                    value={formData.assignedAgent}
                    onChange={(e) => setFormData({...formData, assignedAgent: e.target.value})}
                    className="w-full bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                  >
                    <option value="Ahmad Al Mansoori">Ahmad Al Mansoori</option>
                    <option value="Elena Rostova">Elena Rostova</option>
                    <option value="Tariq Bin Laden">Tariq Bin Laden</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Lead Rating</label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({...formData, rating: e.target.value})}
                    className="w-full bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                  >
                    <option value="Hot">Hot</option>
                    <option value="Warm">Warm</option>
                    <option value="Cold">Cold</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Notes & Requirements</label>
                <textarea
                  rows="3"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Enter client specifications, timeline, and preferences..."
                  className="w-full bg-royal-dark text-white text-sm p-3 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                ></textarea>
              </div>

              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-royal-border">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-300 bg-royal-dark border border-royal-border hover:bg-royal-border transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-sm font-bold text-royal-dark bg-royal-gold hover:bg-amber-400 transition"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}