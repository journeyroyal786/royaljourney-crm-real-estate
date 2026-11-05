import React from 'react';
import { LayoutDashboard, Users, Kanban, Building2, Workflow, BookOpen, Bell, Search, ShieldCheck } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard & KPIs', icon: LayoutDashboard },
    { id: 'pipeline', label: 'CRM Pipeline', icon: Kanban },
    { id: 'leads', label: 'Lead Management', icon: Users },
    { id: 'properties', label: 'Properties', icon: Building2 },
    { id: 'workflow', label: 'Workflow Guide', icon: Workflow },
    { id: 'dld', label: 'DLD / RERA Compliance', icon: ShieldCheck },
  ];

  return (
    <header className="bg-royal-card border-b border-royal-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-royal-dark px-3 py-2 rounded-xl border border-royal-border shadow-inner">
              <img src="/logo.svg" alt="Royal Journey Logo" className="h-10 w-auto object-contain" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-royal-gold font-bold">Dubai Real Estate CRM</span>
              <h1 className="text-lg font-bold text-white tracking-wide">Enterprise Operations</h1>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-royal-gold text-royal-dark font-semibold shadow-lg shadow-amber-500/10'
                      : 'text-gray-300 hover:bg-royal-border/50 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-royal-dark' : 'text-royal-gold'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden lg:flex items-center bg-royal-dark border border-royal-border rounded-lg px-3 py-1.5 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              RERA Compliant | Dubai, UAE
            </div>
            <div className="relative">
              <button className="p-2 text-gray-300 hover:text-royal-gold bg-royal-dark border border-royal-border rounded-lg transition">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-royal-gold rounded-full"></span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="md:hidden flex overflow-x-auto space-x-2 px-4 py-2 bg-royal-dark border-t border-royal-border">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
                isActive ? 'bg-royal-gold text-royal-dark font-bold' : 'text-gray-300 bg-royal-card'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}