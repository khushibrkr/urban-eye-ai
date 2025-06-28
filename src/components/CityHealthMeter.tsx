import React, { useEffect, useState } from 'react';

interface CityHealthMeterProps {
  healthScore?: number;
}

const CityHealthMeter: React.FC<CityHealthMeterProps> = ({ healthScore = 87 }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScore(healthScore);
    }, 500);
    return () => clearTimeout(timer);
  }, [healthScore]);

  const getHealthColor = (score: number) => {
    if (score >= 80) return 'from-green-400 to-emerald-500';
    if (score >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-red-600';
  };

  const getHealthStatus = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    return 'Needs Attention';
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-6 text-slate-200">City Health Score</h2>
        
        {/* Circular Progress */}
        <div className="relative w-48 h-48 mx-auto mb-4">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
            {/* Background circle */}
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="url(#healthGradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 80}`}
              strokeDashoffset={`${2 * Math.PI * 80 * (1 - score / 100)}`}
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="stop-color-green-400" />
                <stop offset="100%" className="stop-color-emerald-500" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Score display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">{Math.round(score)}</div>
              <div className="text-sm text-slate-300">/ 100</div>
            </div>
          </div>
        </div>
        
        <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${getHealthColor(score)} text-white font-medium`}>
          {getHealthStatus(score)}
        </div>
        
        <p className="text-slate-400 text-sm mt-2">
          Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default CityHealthMeter;
