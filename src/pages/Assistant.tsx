
import React, { useState } from 'react';
import { Mic, Send, Volume2, Settings } from 'lucide-react';
import BottomNavigation from '@/components/BottomNavigation';

const Assistant = () => {
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  const suggestions = [
    "What's the pollution level in my area?",
    "Show me nearby hospitals",
    "Traffic update for Sector 12",
    "Water supply status today"
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Smart Assistant
            </h1>
            <p className="text-slate-300 text-sm">Your AI City Helper</p>
          </div>
          <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="px-6 flex-1 pb-32">
        {/* Welcome Message */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 mb-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Volume2 className="w-4 h-4" />
            </div>
            <span className="font-medium">Assistant</span>
          </div>
          <p className="text-slate-300">
            Hello! I'm your smart city assistant. Ask me about traffic, pollution, water supply, or any city services.
          </p>
        </div>

        {/* Quick Suggestions */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-slate-400 mb-3">Quick Questions</h3>
          <div className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setMessage(suggestion)}
                className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all"
              >
                <span className="text-sm">{suggestion}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-20 left-0 right-0 px-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsListening(!isListening)}
              className={`p-3 rounded-full transition-all ${
                isListening ? 'bg-red-500 animate-pulse' : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              <Mic className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything about the city..."
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-400"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="p-3 bg-green-500 hover:bg-green-600 rounded-full transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <BottomNavigation activeTab="assistant" />
    </div>
  );
};

export default Assistant;
