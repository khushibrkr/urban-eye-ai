
import React from 'react';
import { AlertTriangle, BarChart, Water, Energy } from 'lucide-react';

const QuickIndicators = () => {
  const indicators = [
    {
      name: 'Air Quality',
      value: 'Good',
      score: 78,
      color: 'bg-green-500',
      icon: BarChart,
      unit: 'AQI'
    },
    {
      name: 'Water Supply',
      value: 'Normal',
      score: 85,
      color: 'bg-blue-500',
      icon: Water,
      unit: ''
    },
    {
      name: 'Energy Usage',
      value: 'High',
      score: 65,
      color: 'bg-yellow-500',
      icon: Energy,
      unit: 'kWh'
    },
    {
      name: 'Traffic',
      value: 'Moderate',
      score: 70,
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
                  <span className="text-xs text-slate-400">{indicator.score}%</span>
                </div>
                
                {/* Progress bar */}
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
