
import React, { useState, useEffect } from 'react';
import { Home, Map, MessageSquare, Camera, List, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CityHealthMeter from '@/components/CityHealthMeter';
import QuickIndicators from '@/components/QuickIndicators';
import TodaysAlerts from '@/components/TodaysAlerts';
import BottomNavigation from '@/components/BottomNavigation';
import LiveIndicator from '@/components/LiveIndicator';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';
import AppIcon from '@/components/AppIcon';
import { useRealTimeData } from '@/hooks/useRealTimeData';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const navigate = useNavigate();
  const { metrics, isLive, toggleLiveMode } = useRealTimeData();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check authentication state
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleViewAreaDetails = () => {
    navigate('/map');
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleAuthNavigation = () => {
    navigate('/auth');
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
          
          <div className="flex items-center space-x-3">
            <LiveIndicator 
              isLive={isLive} 
              onToggle={toggleLiveMode}
              lastUpdated={metrics.lastUpdated}
            />
            
            {/* Auth Section */}
            {user ? (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg px-3 py-2">
                  <User className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-slate-300 truncate max-w-24">
                    {user.email}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSignOut}
                  className="text-slate-300 hover:text-white hover:bg-slate-800/50"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={handleAuthNavigation}
                className="bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700/50 hover:text-white"
              >
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            )}
          </div>
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
