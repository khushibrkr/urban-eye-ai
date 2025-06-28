
import React from 'react';
import { Car, AlertTriangle, Construction } from 'lucide-react';

const TrafficOverlay = () => {
  const trafficData = [
    { x: 25, y: 40, type: 'jam', severity: 'high', label: 'Heavy Traffic' },
    { x: 65, y: 30, type: 'accident', severity: 'medium', label: 'Minor Accident' },
    { x: 40, y: 70, type: 'construction', severity: 'low', label: 'Road Work' },
    { x: 80, y: 60, type: 'jam', severity: 'medium', label: 'Moderate Traffic' }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'jam': return Car;
      case 'accident': return AlertTriangle;
      case 'construction': return Construction;
      default: return Car;
    }
  };

  const getColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500 border-red-400';
      case 'medium': return 'bg-yellow-500 border-yellow-400';
      case 'low': return 'bg-blue-500 border-blue-400';
      default: return 'bg-gray-500 border-gray-400';
    }
  };

  return (
    <div className="absolute inset-0">
      {/* Traffic Routes */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="trafficGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#eab308" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          d="M 10 50 Q 50 20 90 50 Q 70 80 50 70 Q 30 60 10 50"
          stroke="url(#trafficGradient)"
          strokeWidth="4"
          fill="none"
          strokeDasharray="10,5"
          className="animate-pulse"
        />
      </svg>

      {trafficData.map((traffic, index) => {
        const Icon = getIcon(traffic.type);
        return (
          <div
            key={index}
            className={`absolute w-12 h-12 rounded-full border-2 ${getColor(traffic.severity)} flex items-center justify-center`}
            style={{ left: `${traffic.x}%`, top: `${traffic.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <Icon className="w-5 h-5 text-white" />
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {traffic.label}
            </div>
          </div>
        );
      })}

      {/* Traffic Legend */}
      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-lg rounded-lg p-3">
        <h4 className="text-white font-medium text-sm mb-2">Traffic Status</h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Car className="w-3 h-3 text-red-500" />
            <span className="text-white text-xs">Heavy Jam</span>
          </div>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-3 h-3 text-yellow-500" />
            <span className="text-white text-xs">Accident</span>
          </div>
          <div className="flex items-center space-x-2">
            <Construction className="w-3 h-3 text-blue-500" />
            <span className="text-white text-xs">Construction</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficOverlay;
