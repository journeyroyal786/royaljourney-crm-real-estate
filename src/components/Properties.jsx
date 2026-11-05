import React, { useState } from 'react';
import { initialProperties } from '../data/mockData';
import { Building2, MapPin, ShieldCheck, Tag, Plus } from 'lucide-react';

export default function Properties() {
  const [properties, setProperties] = useState(initialProperties);
  const [newProp, setNewProp] = useState({ title: '', area: '', type: 'Apartment', price: '', status: 'Available', reraPermit: '' });
  const [showModal, setShowModal] = useState(false);

  const handleAddProp = (e) => {
    e.preventDefault();
    if (!newProp.title || !newProp.price) return;
    setProperties([...properties, { id: `PROP-${properties.length + 1}`, ...newProp }]);
    setNewProp({ title: '', area: '', type: 'Apartment', price: '', status: 'Available', reraPermit: '' });
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-royal-card border border-royal-border p-6 rounded-2xl shadow-md">
        <div>
          <h2 className="text-2xl font-bold text-white">Dubai Property Portfolio</h2>
          <p className="text-sm text-gray-400 mt-1">Match client requirements with exclusive listings and RERA permits</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center space-x-2 bg-royal-gold text-royal-dark font-bold px-5 py-2.5 rounded-xl hover:bg-amber-400 transition shadow-lg shadow-amber-500/10"
        >
          <Plus className="w-5 h-5" />
          <span>Add Property Listing</span>
        </button>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(prop => (
          <div key={prop.id} className="bg-royal-card border border-royal-border rounded-xl p-6 flex flex-col justify-between hover:border-royal-gold/50 transition shadow-md">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono bg-royal-dark text-royal-gold px-2.5 py-1 rounded border border-royal-border">
                  {prop.id}
                </span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  prop.status === 'Available' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                }`}>
                  {prop.status}
                </span>
              </div>

              <h3 className="font-bold text-white text-base mt-2">{prop.title}</h3>
              
              <div className="flex items-center text-xs text-gray-400 mt-2">
                <MapPin className="w-3.5 h-3.5 text-royal-gold mr-1.5" />
                {prop.area} ({prop.type})
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-extrabold text-royal-gold">{prop.price}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-royal-border flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 text-royal-gold mr-1" />
                {prop.reraPermit}
              </span>
              <button className="text-royal-gold hover:underline font-semibold">View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Property Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-royal-card border border-royal-border rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Add New Property Listing</h3>
            <form onSubmit={handleAddProp} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Property Title *</label>
                <input
                  type="text"
                  required
                  value={newProp.title}
                  onChange={(e) => setNewProp({...newProp, title: e.target.value})}
                  placeholder="e.g. Marina Gate Luxury 2BR"
                  className="w-full bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Dubai Area *</label>
                  <input
                    type="text"
                    required
                    value={newProp.area}
                    onChange={(e) => setNewProp({...newProp, area: e.target.value})}
                    placeholder="Dubai Marina"
                    className="w-full bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Property Type</label>
                  <select
                    value={newProp.type}
                    onChange={(e) => setNewProp({...newProp, type: e.target.value})}
                    className="w-full bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                  >
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Penthouse">Penthouse</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Price / Rent *</label>
                  <input
                    type="text"
                    required
                    value={newProp.price}
                    onChange={(e) => setNewProp({...newProp, price: e.target.value})}
                    placeholder="AED 2,500,000"
                    className="w-full bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">RERA Permit Number</label>
                  <input
                    type="text"
                    value={newProp.reraPermit}
                    onChange={(e) => setNewProp({...newProp, reraPermit: e.target.value})}
                    placeholder="DLD-PERMIT-XXXXX"
                    className="w-full bg-royal-dark text-white text-sm px-4 py-2.5 rounded-lg border border-royal-border focus:outline-none focus:border-royal-gold"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-royal-border">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-300 bg-royal-dark border border-royal-border hover:bg-royal-border transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-sm font-bold text-royal-dark bg-royal-gold hover:bg-amber-400 transition"
                >
                  Save Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}