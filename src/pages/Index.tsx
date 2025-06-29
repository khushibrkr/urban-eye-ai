
import React from 'react';
import { Map, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CityHealthMeter from '@/components/CityHealthMeter';
import QuickIndicators from '@/components/QuickIndicators';
import TodaysAlerts from '@/components/TodaysAlerts';
import BottomNavigation from '@/components/BottomNavigation';
import LiveIndicator from '@/components/LiveIndicator';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';
import AppIcon from '@/components/AppIcon';
import { useRealTimeData } from '@/hooks/useRealTimeData';

const Index = () => {
  const navigate = useNavigate();
  const { metrics, isLive, toggleLiveMode } = useRealTimeData();

  const handleViewAreaDetails = () => {
    navigate('/map');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* PWA Install Prompt */}
      <PWAInstallPrompt />
      
      {/* Header */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <AppIcon size={48} />
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SmartPulse
              </h1>
              <p className="text-slate-300 text-sm">Smart City Dashboard</p>
            </div>
          </div>
          
          <LiveIndicator 
            isLive={isLive} 
            onToggle={toggleLiveMode}
            lastUpdated={metrics.lastUpdated}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-24 space-y-6">
        {/* City Health Score */}
        <CityHealthMeter healthScore={metrics.healthScore} />
        
        {/* Quick Indicators */}
        <QuickIndicators metrics={metrics} />
        
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
