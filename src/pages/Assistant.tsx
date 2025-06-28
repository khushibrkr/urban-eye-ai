
import React, { useState } from 'react';
import { Mic, Send, Volume2, Settings } from 'lucide-react';
import BottomNavigation from '@/components/BottomNavigation';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const Assistant = () => {
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your smart city assistant. Ask me about traffic, pollution, water supply, or any city services.",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);

  const suggestions = [
    "What's the pollution level in my area?",
    "Show me nearby hospitals",
    "Traffic update for Sector 12",
    "Water supply status today"
  ];

  const sendToOpenAI = async (userMessage: string) => {
    if (!apiKey) {
      alert('Please enter your OpenAI API key first');
      return;
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4.1-2025-04-14',
          messages: [
            {
              role: 'system',
              content: 'You are a smart city assistant. Help users with information about traffic, pollution, water supply, energy, public services, and city infrastructure. Be helpful and concise.'
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from OpenAI');
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API error:', error);
      return 'Sorry, I encountered an error while processing your request. Please try again.';
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    const aiResponse = await sendToOpenAI(message);

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: aiResponse,
      sender: 'assistant',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
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
          <button 
            onClick={() => setShowApiKeyInput(!showApiKeyInput)}
            className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* API Key Input */}
      {showApiKeyInput && (
        <div className="px-6 mb-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
            <label className="block text-sm font-medium mb-2">OpenAI API Key</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your OpenAI API key..."
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400"
            />
            <p className="text-xs text-slate-400 mt-2">
              Your API key is stored locally and never shared.
            </p>
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="px-6 flex-1 pb-32 max-h-96 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 backdrop-blur-lg text-slate-300'
                }`}
              >
                {msg.sender === 'assistant' && (
                  <div className="flex items-center space-x-2 mb-2">
                    <Volume2 className="w-4 h-4" />
                    <span className="text-xs font-medium">Assistant</span>
                  </div>
                )}
                <p className="text-sm">{msg.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {msg.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Suggestions */}
        {messages.length <= 1 && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-slate-400 mb-3">Quick Questions</h3>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all"
                >
                  <span className="text-sm">{suggestion}</span>
                </button>
              ))}
            </div>
          </div>
        )}
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
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !message.trim()}
              className="p-3 bg-green-500 hover:bg-green-600 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
