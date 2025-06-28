
import React from 'react';
import { Hospital, MapPin, Home } from 'lucide-react';

const ServiceMarkers = () => {
  const services = [
    { x: 30, y: 35, type: 'hospital', label: 'City Hospital', status: 'open' },
    { x: 70, y: 50, type: 'shelter', label: 'Emergency Shelter', status: 'available' },
    { x: 45, y: 65, type: 'hospital', label: 'Clinic', status: 'open' },
    { x: 80, y: 30, type: 'toilet', label: 'Public Restroom', status: 'clean' },
    { x: 20, y: 70, type: 'shelter', label: 'Relief Center', status: 'available' }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'hospital': return Hospital;
      case 'shelter': return Home;
      case 'toilet': return MapPin;
      default: return MapPin;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'hospital': return 'bg-red-500 border-red-400';
      case 'shelter': return 'bg-blue-500 border-blue-400';
      case 'toilet': return 'bg-green-500 border-green-400';
      default: return 'bg-gray-500 border-gray-400';
    }
  };

  return (
    <div className="absolute inset-0">
      {services.map((service, index) => {
        const Icon = getIcon(service.type);
        return (
          <div
            key={index}
            className={`absolute w-10 h-10 rounded-full border-2 ${getColor(service.type)} flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}
            style={{ left: `${service.x}%`, top: `${service.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <Icon className="w-4 h-4 text-white" />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              <div>{service.label}</div>
              <div className="text-green-300">{service.status}</div>
            </div>
          </div>
        );
      })}

      {/* Service Legend */}
      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-lg rounded-lg p-3">
        <h4 className="text-white font-medium text-sm mb-2">Nearby Services</h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Hospital className="w-3 h-3 text-red-500" />
            <span className="text-white text-xs">Hospitals</span>
          </div>
          <div className="flex items-center space-x-2">
            <Home className="w-3 h-3 text-blue-500" />
            <span className="text-white text-xs">Shelters</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-3 h-3 text-green-500" />
            <span className="text-white text-xs">Public Facilities</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMarkers;
