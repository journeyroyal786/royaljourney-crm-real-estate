import React from 'react';
import { ShieldCheck, FileText, Award, CheckCircle2 } from 'lucide-react';

export default function DLDCompliance() {
  const forms = [
    { code: 'Form A', title: 'Listing Agreement (Exclusive / Non-Exclusive)', desc: 'Signed between Seller/Landlord and Royal Journey Brokerage before advertising any property in Dubai.' },
    { code: 'Form B', title: 'Buyer / Tenant Representation Agreement', desc: 'Signed between Client and Royal Journey to formalize exclusive property search representation.' },
    { code: 'Form F', title: 'Memorandum of Understanding (MOU)', desc: 'Standard DLD contract signed between Buyer and Seller to finalize commercial terms before NOC and transfer.' }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-royal-card border border-royal-border p-6 sm:p-8 rounded-2xl shadow-md">
        <div className="flex items-center space-x-3 mb-3">
          <ShieldCheck className="w-8 h-8 text-royal-gold" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">DLD & RERA Compliance Hub</h2>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
          Royal Journey Real Estate operates in full alignment with the Dubai Land Department (DLD) and Real Estate Regulatory Agency (RERA). All transactions and brokerages follow mandatory legal frameworks.
        </p>
      </div>

      {/* Forms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {forms.map((form, i) => (
          <div key={i} className="bg-royal-card border border-royal-border rounded-xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-lg bg-royal-gold/20 text-royal-gold font-bold text-sm border border-royal-gold/30">
                  {form.code}
                </span>
                <FileText className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="font-bold text-white text-base">{form.title}</h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">{form.desc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-royal-border flex items-center justify-between text-xs text-emerald-400 font-medium">
              <span className="flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                Mandatory for DLD Transfer
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}