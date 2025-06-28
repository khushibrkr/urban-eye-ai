
import React from 'react';
import { AlertTriangle, Bell } from 'lucide-react';

const TodaysAlerts = () => {
  const alerts = [
    {
      id: 1,
      title: 'High Traffic in Sector 12',
      description: 'Consider alternate routes via Ring Road',
      time: '2 hours ago',
      severity: 'medium',
      icon: AlertTriangle
    },
    {
      id: 2,
      title: 'Water Maintenance Scheduled',
      description: 'Sector 8 - Tomorrow 10 AM to 2 PM',
      time: '4 hours ago',
      severity: 'low',
      icon: Bell
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-red-500 bg-red-500/10';
      case 'medium': return 'border-yellow-500 bg-yellow-500/10';
      case 'low': return 'border-blue-500 bg-blue-500/10';
      default: return 'border-gray-500 bg-gray-500/10';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-200">Today's Alerts</h3>
        <span className="bg-red-500/20 text-red-300 text-xs px-2 py-1 rounded-full">
          {alerts.length} Active
        </span>
      </div>
      
      <div className="space-y-3">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          return (
            <div
              key={alert.id}
              className={`p-4 rounded-xl border ${getSeverityColor(alert.severity)} backdrop-blur-lg`}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  alert.severity === 'medium' ? 'bg-yellow-500/20' : 'bg-blue-500/20'
                }`}>
                  <Icon className={`w-4 h-4 ${
                    alert.severity === 'medium' ? 'text-yellow-400' : 'text-blue-400'
                  }`} />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-white text-sm mb-1">
                    {alert.title}
                  </h4>
                  <p className="text-slate-300 text-xs mb-2">
                    {alert.description}
                  </p>
                  <span className="text-slate-500 text-xs">
                    {alert.time}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodaysAlerts;
