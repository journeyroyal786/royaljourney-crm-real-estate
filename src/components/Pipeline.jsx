import React, { useState } from 'react';
import { pipelineStages } from '../data/mockData';
import { Plus, Filter, MoreVertical, Phone, Mail, MapPin } from 'lucide-react';

export default function Pipeline({ leads, updateLeadStage }) {
  const [selectedStage, setSelectedStage] = useState('All');

  const filteredLeads = selectedStage === 'All' 
    ? leads 
    : leads.filter(l => l.pipelineStage === selectedStage);

  return (
    <div className="space-y-6">
      
      {/* Header & Stage Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-royal-card border border-royal-border p-6 rounded-2xl shadow-md">
        <div>
          <h2 className="text-2xl font-bold text-white">CRM Deal Pipeline</h2>
          <p className="text-sm text-gray-400 mt-1">Manage leads through Dubai real estate workflow stages</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedStage('All')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              selectedStage === 'All' ? 'bg-royal-gold text-royal-dark font-bold' : 'bg-royal-dark text-gray-300 border border-royal-border'
            }`}
          >
            All Stages
          </button>
          {pipelineStages.map(stage => (
            <button
              key={stage}
              onClick={() => setSelectedStage(stage)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                selectedStage === stage ? 'bg-royal-gold text-royal-dark font-bold' : 'bg-royal-dark text-gray-300 border border-royal-border'
              }`}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>

      {/* Kanban Board View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pipelineStages.map(stage => {
          const stageLeads = leads.filter(l => l.pipelineStage === stage);
          return (
            <div key={stage} className="bg-royal-card border border-royal-border rounded-xl p-4 flex flex-col h-[650px] shadow-md">
              
              {/* Column Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-royal-border">
                <h3 className="font-bold text-white text-sm flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-royal-gold mr-2"></span>
                  {stage}
                </h3>
                <span className="bg-royal-dark text-royal-gold font-bold text-xs px-2.5 py-0.5 rounded-full border border-royal-border">
                  {stageLeads.length}
                </span>
              </div>

              {/* Cards Container */}
              <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                {stageLeads.length === 0 ? (
                  <div className="h-32 flex items-center justify-center text-xs text-gray-500 border border-dashed border-royal-border rounded-lg">
                    No leads in this stage
                  </div>
                ) : (
                  stageLeads.map(lead => (
                    <div key={lead.id} className="bg-royal-dark border border-royal-border rounded-xl p-4 hover:border-royal-gold/50 transition shadow">
                      <div className="flex items-start justify-between">
                        <span className="text-xs font-mono text-royal-gold bg-royal-card px-2 py-0.5 rounded border border-royal-border">
                          {lead.id}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          lead.rating === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        }`}>
                          {lead.rating}
                        </span>
                      </div>

                      <h4 className="font-bold text-white text-sm mt-2">{lead.name}</h4>
                      <p className="text-xs text-gray-400 mt-0.5 flex items-center">
                        <MapPin className="w-3 h-3 text-royal-gold mr-1" />
                        {lead.preferredArea}
                      </p>

                      <div className="mt-3 pt-3 border-t border-royal-border flex items-center justify-between text-xs">
                        <span className="text-royal-gold font-semibold">{lead.budget}</span>
                        <span className="text-gray-400">{lead.source}</span>
                      </div>

                      <div className="mt-3 flex items-center justify-between pt-2">
                        <span className="text-[10px] text-gray-400">Agent: {lead.assignedAgent.split(' ')[0]}</span>
                        <select
                          value={lead.pipelineStage}
                          onChange={(e) => updateLeadStage(lead.id, e.target.value)}
                          className="bg-royal-card text-[10px] text-gray-200 border border-royal-border rounded px-2 py-1 outline-none focus:border-royal-gold"
                        >
                          {pipelineStages.map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}