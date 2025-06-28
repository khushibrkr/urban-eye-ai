
import React from 'react';
import { AlertTriangle, BarChart, Droplets, Zap } from 'lucide-react';

interface QuickIndicatorsProps {
  metrics?: {
    airQuality: number;
    waterSupply: number;
    energyUsage: number;
    trafficLevel: number;
  };
}

const QuickIndicators: React.FC<QuickIndicatorsProps> = ({ metrics }) => {
  const getValueLabel = (value: number, type: string) => {
    if (type === 'air') {
      if (value >= 80) return 'Good';
      if (value >= 60) return 'Moderate';
      return 'Poor';
    }
    if (type === 'water') {
      if (value >= 80) return 'Normal';
      if (value >= 60) return 'Low';
      return 'Critical';
    }
    if (type === 'energy') {
      if (value >= 80) return 'High';
      if (value >= 60) return 'Moderate';
      return 'Low';
    }
    if (type === 'traffic') {
      if (value >= 80) return 'Heavy';
      if (value >= 60) return 'Moderate';
      return 'Light';
    }
    return 'Normal';
  };

  const indicators = [
    {
      name: 'Air Quality',
      value: getValueLabel(metrics?.airQuality || 78, 'air'),
      score: metrics?.airQuality || 78,
      color: 'bg-green-500',
      icon: BarChart,
      unit: 'AQI'
    },
    {
      name: 'Water Supply',
      value: getValueLabel(metrics?.waterSupply || 85, 'water'),
      score: metrics?.waterSupply || 85,
      color: 'bg-blue-500',
      icon: Droplets,
      unit: ''
    },
    {
      name: 'Energy Usage',
      value: getValueLabel(metrics?.energyUsage || 65, 'energy'),
      score: metrics?.energyUsage || 65,
      color: 'bg-yellow-500',
      icon: Zap,
      unit: 'kWh'
    },
    {
      name: 'Traffic',
      value: getValueLabel(metrics?.trafficLevel || 70, 'traffic'),
      score: metrics?.trafficLevel || 70,
      color: 'bg-orange-500',
      icon: AlertTriangle,
      unit: ''
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-200">Quick Indicators</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {indicators.map((indicator, index) => {
          const Icon = indicator.icon;
          return (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg ${indicator.color}/20`}>
                  <Icon className={`w-4 h-4 text-white`} />
                </div>
                <span className="text-xs text-slate-400">{indicator.unit}</span>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-white text-sm">{indicator.name}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">{indicator.value}</span>
                  <span className="text-xs text-slate-400">{Math.round(indicator.score)}%</span>
                </div>
                
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full ${indicator.color} transition-all duration-700`}
                    style={{ width: `${indicator.score}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickIndicators;
