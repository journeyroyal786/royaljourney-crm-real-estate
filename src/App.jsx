import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Pipeline from './components/Pipeline';
import LeadManagement from './components/LeadManagement';
import Properties from './components/Properties';
import WorkflowGuide from './components/WorkflowGuide';
import DLDCompliance from './components/DLDCompliance';
import { initialLeads, agentsList } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [leads, setLeads] = useState(initialLeads);
  const [agents, setAgents] = useState(agentsList);

  const updateLeadStage = (leadId, newStage) => {
    setLeads(leads.map(lead => lead.id === leadId ? { ...lead, pipelineStage: newStage, status: newStage } : lead));
  };

  const addLead = (newLead) => {
    setLeads([newLead, ...leads]);
  };

  return (
    <div className="min-h-screen bg-royal-dark text-gray-100 flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <Dashboard leads={leads} agents={agents} />}
        {activeTab === 'pipeline' && <Pipeline leads={leads} updateLeadStage={updateLeadStage} />}
        {activeTab === 'leads' && <LeadManagement leads={leads} addLead={addLead} />}
        {activeTab === 'properties' && <Properties />}
        {activeTab === 'workflow' && <WorkflowGuide />}
        {activeTab === 'dld' && <DLDCompliance />}
      </main>

      <footer className="bg-royal-card border-t border-royal-border py-6 mt-12 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white">Royal Journey Real Estate CRM</span>
            <span>&copy; 2026. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Dubai Land Department (DLD) Compliant</span>
            <span>&bull;</span>
            <span>Hosted on Vercel & GitHub</span>
          </div>
        </div>
      </footer>
    </div>
  );
}