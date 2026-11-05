import React from 'react';
import { workflowStages, workflowSteps } from '../data/mockData';
import { CheckCircle, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

export default function WorkflowGuide() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-royal-card border border-royal-border p-6 sm:p-8 rounded-2xl shadow-md">
        <span className="inline-block px-3 py-1 rounded-full bg-royal-gold/10 text-royal-gold text-xs font-bold uppercase tracking-wider mb-2">
          Official Company Documentation
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Dubai Real Estate CRM Workflow</h2>
        <p className="text-sm text-gray-300 mt-2 max-w-3xl leading-relaxed">
          Based on Royal Journey's standard operating procedures for lead generation, qualification, property matching, viewings, negotiation, DLD documentation, closing, and post-sale follow-up.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workflowSteps.map((item) => (
          <div key={item.step} className="bg-royal-card border border-royal-border rounded-xl p-6 flex items-start space-x-4 shadow-md hover:border-royal-gold/50 transition">
            <div className="w-10 h-10 rounded-xl bg-royal-gold/20 text-royal-gold font-bold flex items-center justify-center shrink-0 border border-royal-gold/30">
              {item.step}
            </div>
            <div>
              <h3 className="font-bold text-white text-base">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1.5 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DLD / RERA Compliance Footer Note */}
      <div className="bg-royal-dark border border-royal-border rounded-xl p-6 flex items-start space-x-4">
        <ShieldCheck className="w-8 h-8 text-royal-gold shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-white text-base">Dubai Land Department (DLD) Compliance Notice</h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
            All agents and advertising materials must strictly adhere to DLD and RERA regulations. Use applicable brokerage agreements (Form A, B, and F) and obtain required advertising permits prior to publishing listings on Property Finder, Bayut, or Dubizzle.
          </p>
        </div>
      </div>

    </div>
  );
}