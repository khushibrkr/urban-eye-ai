
import React from 'react';
import { Droplets, Zap, AlertTriangle } from 'lucide-react';

interface UtilityStatusProps {
  type: 'water' | 'energy' | 'disaster';
}

const UtilityStatus: React.FC<UtilityStatusProps> = ({ type }) => {
  const getUtilityData = () => {
    switch (type) {
      case 'water':
        return {
          zones: [
            { x: 25, y: 40, status: 'active', label: 'Water Supply Active' },
            { x: 60, y: 30, status: 'cut-off', label: 'Supply Cut-off' },
            { x: 80, y: 70, status: 'active', label: 'Normal Supply' },
            { x: 40, y: 65, status: 'low', label: 'Low Pressure' }
          ],
          icon: Droplets,
          colors: {
            active: 'bg-blue-500 border-blue-400',
            'cut-off': 'bg-red-500 border-red-400',
            low: 'bg-yellow-500 border-yellow-400'
          }
        };
      case 'energy':
        return {
          zones: [
            { x: 35, y: 25, status: 'active', label: 'Power Normal' },
            { x: 70, y: 50, status: 'blackout', label: 'Power Outage' },
            { x: 20, y: 75, status: 'active', label: 'Backup Power' },
            { x: 85, y: 35, status: 'low', label: 'Low Voltage' }
          ],
          icon: Zap,
          colors: {
            active: 'bg-green-500 border-green-400',
            blackout: 'bg-red-500 border-red-400',
            low: 'bg-yellow-500 border-yellow-400'
          }
        };
      case 'disaster':
        return {
          zones: [
            { x: 30, y: 45, status: 'warning', label: 'Flood Warning' },
            { x: 65, y: 35, status: 'safe', label: 'Safe Zone' },
            { x: 45, y: 70, status: 'alert', label: 'High Risk Area' },
            { x: 75, y: 60, status: 'safe', label: 'Evacuation Point' }
          ],
          icon: AlertTriangle,
          colors: {
            warning: 'bg-orange-500 border-orange-400',
            alert: 'bg-red-500 border-red-400',
            safe: 'bg-green-500 border-green-400'
          }
        };
      default:
        return { zones: [], icon: Droplets, colors: {} };
    }
  };

  const { zones, icon: Icon, colors } = getUtilityData();

  return (
    <div className="absolute inset-0">
      {zones.map((zone, index) => (
        <div
          key={index}
          className={`absolute w-12 h-12 rounded-full border-2 ${colors[zone.status as keyof typeof colors]} flex items-center justify-center animate-pulse`}
          style={{ left: `${zone.x}%`, top: `${zone.y}%`, transform: 'translate(-50%, -50%)' }}
        >
          <Icon className="w-5 h-5 text-white" />
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {zone.label}
          </div>
        </div>
      ))}

      {/* Status Legend */}
      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-lg rounded-lg p-3">
        <h4 className="text-white font-medium text-sm mb-2 capitalize">{type} Status</h4>
        <div className="space-y-1">
          {Object.entries(colors).map(([status, colorClass]) => (
            <div key={status} className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${colorClass.split(' ')[0]}`}></div>
              <span className="text-white text-xs capitalize">{status.replace('-', ' ')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UtilityStatus;
