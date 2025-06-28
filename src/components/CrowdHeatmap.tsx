
import React from 'react';
import { Users } from 'lucide-react';

const CrowdHeatmap = () => {
  const crowdZones = [
    { x: 20, y: 30, intensity: 'high', label: 'Sector 12' },
    { x: 60, y: 60, intensity: 'medium', label: 'Market Area' },
    { x: 80, y: 25, intensity: 'low', label: 'Residential' },
    { x: 30, y: 70, intensity: 'high', label: 'Metro Station' },
    { x: 70, y: 40, intensity: 'medium', label: 'Mall Complex' }
  ];

  const getZoneColor = (intensity: string) => {
    switch (intensity) {
      case 'high': return 'bg-red-500/60 border-red-400';
      case 'medium': return 'bg-yellow-500/60 border-yellow-400';
      case 'low': return 'bg-green-500/60 border-green-400';
      default: return 'bg-gray-500/60 border-gray-400';
    }
  };

  return (
    <div className="absolute inset-0">
      {crowdZones.map((zone, index) => (
        <div
          key={index}
          className={`absolute w-16 h-16 rounded-full border-2 ${getZoneColor(zone.intensity)} animate-pulse`}
          style={{ left: `${zone.x}%`, top: `${zone.y}%`, transform: 'translate(-50%, -50%)' }}
        >
          <div className="flex items-center justify-center h-full">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {zone.label}
          </div>
        </div>
      ))}
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-lg rounded-lg p-3">
        <h4 className="text-white font-medium text-sm mb-2">Crowd Density</h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-white text-xs">High (80%+)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-white text-xs">Medium (40-80%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-white text-xs">Low (Under 40%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrowdHeatmap;
