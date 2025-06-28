import React from 'react';
import { Home, Map, MessageSquare, Camera, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CityHealthMeter from '@/components/CityHealthMeter';
import QuickIndicators from '@/components/QuickIndicators';
import TodaysAlerts from '@/components/TodaysAlerts';
import BottomNavigation from '@/components/BottomNavigation';

const Index = () => {
  const navigate = useNavigate();

  const handleViewAreaDetails = () => {
    navigate('/map');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SmartPulse
            </h1>
            <p className="text-slate-300 text-sm">Smart City Dashboard</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
              Live
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-24 space-y-6">
        {/* City Health Score */}
        <CityHealthMeter />
        
        {/* Quick Indicators */}
        <QuickIndicators />
        
        {/* Today's Alerts */}
        <TodaysAlerts />
        
        {/* View My Area Button */}
        <button 
          onClick={handleViewAreaDetails}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
        >
          <div className="flex items-center justify-center space-x-2">
            <Map className="w-5 h-5" />
            <span>View My Area Details</span>
          </div>
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="home" />
    </div>
  );
};

export default Index;
