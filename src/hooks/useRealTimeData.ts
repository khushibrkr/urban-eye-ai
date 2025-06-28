
import { useState, useEffect, useCallback } from 'react';

interface CityMetrics {
  healthScore: number;
  airQuality: number;
  waterSupply: number;
  energyUsage: number;
  trafficLevel: number;
  crowdDensity: number;
  lastUpdated: Date;
}

export const useRealTimeData = () => {
  const [metrics, setMetrics] = useState<CityMetrics>({
    healthScore: 87,
    airQuality: 78,
    waterSupply: 85,
    energyUsage: 65,
    trafficLevel: 70,
    crowdDensity: 45,
    lastUpdated: new Date()
  });

  const [isLive, setIsLive] = useState(true);

  const generateRandomVariation = (baseValue: number, maxVariation: number = 5) => {
    const variation = (Math.random() - 0.5) * maxVariation;
    return Math.max(0, Math.min(100, baseValue + variation));
  };

  const updateMetrics = useCallback(() => {
    setMetrics(prev => ({
      healthScore: generateRandomVariation(prev.healthScore, 3),
      airQuality: generateRandomVariation(prev.airQuality, 8),
      waterSupply: generateRandomVariation(prev.waterSupply, 4),
      energyUsage: generateRandomVariation(prev.energyUsage, 10),
      trafficLevel: generateRandomVariation(prev.trafficLevel, 15),
      crowdDensity: generateRandomVariation(prev.crowdDensity, 12),
      lastUpdated: new Date()
    }));
  }, []);

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      updateMetrics();
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [isLive, updateMetrics]);

  const toggleLiveMode = () => {
    setIsLive(!isLive);
  };

  return {
    metrics,
    isLive,
    toggleLiveMode,
    updateMetrics
  };
};
