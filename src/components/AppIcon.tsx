
import React from 'react';
import { Zap } from 'lucide-react';

const AppIcon = ({ size = 40 }: { size?: number }) => {
  return (
    <div 
      className="bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden"
      style={{ width: size, height: size }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      
      {/* Main icon */}
      <Zap 
        className="text-white drop-shadow-sm relative z-10" 
        size={size * 0.6}
        strokeWidth={2.5}
      />
      
      {/* Small accent dots */}
      <div className="absolute top-1 right-1 w-1 h-1 bg-white/40 rounded-full"></div>
      <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-white/30 rounded-full"></div>
    </div>
  );
};

export default AppIcon;
