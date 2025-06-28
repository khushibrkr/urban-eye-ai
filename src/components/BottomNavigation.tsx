
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Map, MessageSquare, Camera, List } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'map', icon: Map, label: 'Map', path: '/map' },
    { id: 'assistant', icon: MessageSquare, label: 'Assistant', path: '/assistant' },
    { id: 'report', icon: Camera, label: 'Report', path: '/report' },
    { id: 'track', icon: List, label: 'Track', path: '/track' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-black/20 backdrop-blur-xl border-t border-white/10">
        <div className="flex items-center justify-around px-6 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : ''}`} />
                <span className="text-xs font-medium">{item.label}</span>
                {isActive && (
                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
