
import React, { useState } from 'react';
import { MapPin, Navigation, Zap, Droplets, AlertTriangle, Hospital, Car, Users } from 'lucide-react';
import CrowdHeatmap from '@/components/CrowdHeatmap';
import TrafficOverlay from '@/components/TrafficOverlay';
import ServiceMarkers from '@/components/ServiceMarkers';
import UtilityStatus from '@/components/UtilityStatus';
import SmartSuggest from '@/components/SmartSuggest';
import BottomNavigation from '@/components/BottomNavigation';

const Map = () => {
  const [activeLayer, setActiveLayer] = useState('crowd');
  const [myLocation] = useState({ lat: 28.6139, lng: 77.2090, score: 72 });

  const layers = [
    { id: 'crowd', label: 'Crowd', icon: Users, color: 'bg-red-500' },
    { id: 'traffic', label: 'Traffic', icon: Car, color: 'bg-yellow-500' },
    { id: 'services', label: 'Services', icon: Hospital, color: 'bg-green-500' },
    { id: 'water', label: 'Water', icon: Droplets, color: 'bg-blue-500' },
    { id: 'energy', label: 'Energy', icon: Zap, color: 'bg-purple-500' },
    { id: 'disaster', label: 'Alerts', icon: AlertTriangle, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Smart City Map
            </h1>
            <p className="text-slate-300 text-sm">Live City Overview</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
              Live
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Layer Controls */}
      <div className="px-6 mb-4">
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {layers.map((layer) => {
            const Icon = layer.icon;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg whitespace-nowrap transition-all ${
                  activeLayer === layer.id
                    ? `${layer.color} text-white`
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{layer.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Map Container */}
      <div className="px-6 mb-6">
        <div className="relative bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-white/10 h-96 overflow-hidden">
          {/* Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900"></div>
          
          {/* Active Layer Content */}
          {activeLayer === 'crowd' && <CrowdHeatmap />}
          {activeLayer === 'traffic' && <TrafficOverlay />}
          {activeLayer === 'services' && <ServiceMarkers />}
          {activeLayer === 'water' && <UtilityStatus type="water" />}
          {activeLayer === 'energy' && <UtilityStatus type="energy" />}
          {activeLayer === 'disaster' && <UtilityStatus type="disaster" />}
          
          {/* My Location Pulse */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-6 h-6 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute inset-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <MapPin className="w-3 h-3 text-white" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Health: {myLocation.score}%
              </div>
            </div>
          </div>

          {/* Navigation Button */}
          <button className="absolute top-4 right-4 bg-white/10 backdrop-blur-lg p-2 rounded-lg hover:bg-white/20 transition-all">
            <Navigation className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Smart Suggest */}
      <div className="px-6 pb-24">
        <SmartSuggest />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="map" />
    </div>
  );
};

export default Map;
