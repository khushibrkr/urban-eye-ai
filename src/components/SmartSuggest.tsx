
import React, { useState } from 'react';
import { Brain, Navigation, AlertTriangle, Clock } from 'lucide-react';

const SmartSuggest = () => {
  const [suggestions] = useState([
    {
      id: 1,
      type: 'route',
      title: 'Avoid Sector 12 - Heavy Traffic',
      description: 'Use Ring Road instead, saves 15 mins',
      priority: 'high',
      icon: Navigation
    },
    {
      id: 2,
      type: 'health',
      title: 'Air Quality Poor in Your Area',
      description: 'Wear mask, avoid outdoor activities',
      priority: 'medium',
      icon: AlertTriangle
    },
    {
      id: 3,
      type: 'time',
      title: 'Best Time to Visit Mall',
      description: 'Low crowd expected after 3 PM',
      priority: 'low',
      icon: Clock
    }
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500 bg-red-500/10';
      case 'medium': return 'border-yellow-500 bg-yellow-500/10';
      case 'low': return 'border-green-500 bg-green-500/10';
      default: return 'border-gray-500 bg-gray-500/10';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-semibold text-slate-200">Smart Suggestions</h3>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-all">
          Get More
        </button>
      </div>

      <div className="space-y-3">
        {suggestions.map((suggestion) => {
          const Icon = suggestion.icon;
          return (
            <div
              key={suggestion.id}
              className={`p-4 rounded-xl border ${getPriorityColor(suggestion.priority)} backdrop-blur-lg hover:bg-white/5 transition-all cursor-pointer`}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  suggestion.priority === 'high' ? 'bg-red-500/20' :
                  suggestion.priority === 'medium' ? 'bg-yellow-500/20' : 'bg-green-500/20'
                }`}>
                  <Icon className={`w-4 h-4 ${
                    suggestion.priority === 'high' ? 'text-red-400' :
                    suggestion.priority === 'medium' ? 'text-yellow-400' : 'text-green-400'
                  }`} />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-white text-sm mb-1">
                    {suggestion.title}
                  </h4>
                  <p className="text-slate-300 text-xs">
                    {suggestion.description}
                  </p>
                </div>

                <button className="text-blue-400 text-xs hover:text-blue-300 transition-colors">
                  Apply
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-xl transition-all">
          Route Optimizer
        </button>
        <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-xl border border-white/20 transition-all">
          Area Health Check
        </button>
      </div>
    </div>
  );
};

export default SmartSuggest;
