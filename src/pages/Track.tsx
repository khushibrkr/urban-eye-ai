
import React, { useState } from 'react';
import { Clock, CheckCircle, AlertCircle, Star, TrendingUp } from 'lucide-react';
import BottomNavigation from '@/components/BottomNavigation';

const Track = () => {
  const [activeTab, setActiveTab] = useState('complaints');

  const complaints = [
    {
      id: 1,
      type: 'Pothole',
      location: 'Sector 12, Main Road',
      date: '2024-01-15',
      status: 'resolved',
      rating: 4,
      responseTime: '3 days'
    },
    {
      id: 2,
      type: 'Street Light',
      location: 'Park Avenue',
      date: '2024-01-20',
      status: 'in-progress',
      responseTime: '2 days'
    },
    {
      id: 3,
      type: 'Garbage',
      location: 'Market Area',
      date: '2024-01-22',
      status: 'pending',
      responseTime: '1 day'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'text-green-400 bg-green-500/20';
      case 'in-progress': return 'text-yellow-400 bg-yellow-500/20';
      case 'pending': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved': return <CheckCircle className="w-4 h-4" />;
      case 'in-progress': return <Clock className="w-4 h-4" />;
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Track Status
            </h1>
            <p className="text-slate-300 text-sm">Monitor your reports & city health</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-400">Trust Score</p>
            <p className="text-xl font-bold text-green-400">85%</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 mb-6">
        <div className="flex space-x-1 bg-white/10 backdrop-blur-lg rounded-lg p-1">
          <button
            onClick={() => setActiveTab('complaints')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              activeTab === 'complaints'
                ? 'bg-blue-500 text-white'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            My Reports
          </button>
          <button
            onClick={() => setActiveTab('city')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              activeTab === 'city'
                ? 'bg-blue-500 text-white'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            City Health
          </button>
        </div>
      </div>

      <div className="px-6 pb-24">
        {activeTab === 'complaints' ? (
          <div className="space-y-4">
            {complaints.map((complaint) => (
              <div key={complaint.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium">{complaint.type}</h3>
                    <p className="text-sm text-slate-300">{complaint.location}</p>
                    <p className="text-xs text-slate-400">{complaint.date}</p>
                  </div>
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${getStatusColor(complaint.status)}`}>
                    {getStatusIcon(complaint.status)}
                    <span className="capitalize">{complaint.status.replace('-', ' ')}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span>Response: {complaint.responseTime}</span>
                  </div>
                  
                  {complaint.rating && (
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < complaint.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {/* City Response Scoreboard */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
              <h3 className="font-medium mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>Department Response Rates</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Water Department</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm text-green-400">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Roads & Infrastructure</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                    <span className="text-sm text-yellow-400">72%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sanitation</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 rounded-full" style={{ width: '91%' }}></div>
                    </div>
                    <span className="text-sm text-blue-400">91%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Area Trust Score */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
              <h3 className="font-medium mb-4">Your Area Health</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
                <p className="text-slate-300">Trust Score</p>
                <p className="text-sm text-slate-400 mt-2">Based on civic reporting and authority response</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <BottomNavigation activeTab="track" />
    </div>
  );
};

export default Track;
