
import React from 'react';
import { Radio } from 'lucide-react';

interface LiveIndicatorProps {
  isLive: boolean;
  onToggle: () => void;
  lastUpdated: Date;
}

const LiveIndicator: React.FC<LiveIndicatorProps> = ({ isLive, onToggle, lastUpdated }) => {
  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={onToggle}
        className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium transition-all ${
          isLive 
            ? 'bg-green-500/20 text-green-300 hover:bg-green-500/30' 
            : 'bg-gray-500/20 text-gray-300 hover:bg-gray-500/30'
        }`}
      >
        <Radio className={`w-3 h-3 ${isLive ? 'animate-pulse' : ''}`} />
        <span>{isLive ? 'Live' : 'Paused'}</span>
      </button>
      <div className="text-xs text-slate-400">
        Updated: {lastUpdated.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default LiveIndicator;
