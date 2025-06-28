
import React, { useState } from 'react';
import { Camera, Upload, MapPin, Send, Award } from 'lucide-react';
import BottomNavigation from '@/components/BottomNavigation';

const Report = () => {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [description, setDescription] = useState('');

  const issueTypes = [
    { id: 'garbage', label: 'Overflowing Trash', icon: '🗑️' },
    { id: 'pothole', label: 'Pothole', icon: '🕳️' },
    { id: 'streetlight', label: 'Broken Streetlight', icon: '💡' },
    { id: 'water', label: 'Water Leak', icon: '💧' },
    { id: 'traffic', label: 'Traffic Signal Issue', icon: '🚦' },
    { id: 'other', label: 'Other', icon: '❗' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Report Issue
            </h1>
            <p className="text-slate-300 text-sm">Help improve your city</p>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">1,240 pts</span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-24 space-y-6">
        {/* Camera Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
          <h3 className="font-medium mb-4">Capture Issue</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center space-y-2 p-4 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg border border-blue-400/30 transition-all">
              <Camera className="w-8 h-8 text-blue-400" />
              <span className="text-sm">AR Camera</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-4 bg-green-500/20 hover:bg-green-500/30 rounded-lg border border-green-400/30 transition-all">
              <Upload className="w-8 h-8 text-green-400" />
              <span className="text-sm">Upload Photo</span>
            </button>
          </div>
        </div>

        {/* Issue Type Selection */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
          <h3 className="font-medium mb-4">Issue Type</h3>
          <div className="grid grid-cols-2 gap-3">
            {issueTypes.map((issue) => (
              <button
                key={issue.id}
                onClick={() => setSelectedIssue(issue.id)}
                className={`flex items-center space-x-3 p-3 rounded-lg border transition-all ${
                  selectedIssue === issue.id
                    ? 'bg-blue-500/20 border-blue-400 text-blue-400'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <span className="text-lg">{issue.icon}</span>
                <span className="text-sm">{issue.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
          <h3 className="font-medium mb-4">Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue in detail..."
            className="w-full h-24 bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-slate-400 resize-none focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* Location */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 p-4">
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-green-400" />
            <div>
              <p className="font-medium">Current Location</p>
              <p className="text-sm text-slate-300">Sector 12, New Delhi</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
          <div className="flex items-center justify-center space-x-2">
            <Send className="w-5 h-5" />
            <span>Submit Report</span>
          </div>
        </button>
      </div>

      <BottomNavigation activeTab="report" />
    </div>
  );
};

export default Report;
