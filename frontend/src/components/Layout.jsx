import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  Menu, 
  X, 
  BarChart3, 
  FolderOpen, 
  MapPin, 
  Microscope, 
  Coins, 
  Shield, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { navItems } from '../mock';

const iconMap = {
  dashboard: BarChart3,
  projects: FolderOpen,
  'field-capture': MapPin,
  'dmrv-studio': Microscope,
  credits: Coins,
  admin: Shield,
  settings: Settings
};

export default function Layout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 text-slate-600" />
            </button>
            <Link to="/" className="text-xl font-bold text-slate-900 tracking-tight">
              BlueCarbon
            </Link>
          </div>

          {/* Center: Navigation (optional for desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
              About
            </Link>
            <Link to="/services" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
              Services
            </Link>
          </div>

          {/* Right: CTA and Icon Button */}
          <div className="flex items-center gap-3">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-medium shadow-sm">
              Start a Project
            </Button>
            <Button variant="outline" size="sm" className="w-9 h-9 p-0 rounded-lg border-slate-200 hover:border-slate-300">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className={`bg-white border-r border-slate-200 transition-all duration-300 ${
          sidebarCollapsed ? 'w-16' : 'w-64'
        } ${sidebarCollapsed ? 'lg:w-16' : 'lg:w-64'} flex-shrink-0`}>
          <div className="p-4">
            {/* Collapse Toggle */}
            <div className="flex justify-end mb-4">
              <button
                onClick={toggleSidebar}
                className="hidden lg:flex p-1.5 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {sidebarCollapsed ? (
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                ) : (
                  <ChevronLeft className="w-4 h-4 text-slate-600" />
                )}
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = iconMap[item.id];
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                      isActive 
                        ? 'bg-green-50 text-green-700 font-medium' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-green-600' : ''}`} />
                    {!sidebarCollapsed && (
                      <>
                        <span className="font-medium">{item.label}</span>
                        {isActive && <div className="w-2 h-2 bg-green-600 rounded-full ml-auto" />}
                      </>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          <div className="max-w-[1280px] mx-auto p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}