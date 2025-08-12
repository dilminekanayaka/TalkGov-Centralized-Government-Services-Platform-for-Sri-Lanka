import React from "react";
import { MapPinIcon, PhoneIcon, ClockIcon, NavigationIcon } from "lucide-react";

const OfficeDetails = ({ office }) => {
  const getDirectionsUrl = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${office.lat},${office.lng}`;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{office.name}</h3>
      <p className="text-sm text-blue-600 font-medium mb-4">{office.type}</p>

      <div className="space-y-4">
        <div className="flex items-start">
          <MapPinIcon
            className="text-gray-500 mr-3 mt-1 flex-shrink-0"
            size={18}
          />
          <div>
            <p className="text-gray-700">{office.address}</p>
          </div>
        </div>

        <div className="flex items-start">
          <PhoneIcon
            className="text-gray-500 mr-3 mt-1 flex-shrink-0"
            size={18}
          />
          <div>
            <p className="text-gray-700">{office.phone}</p>
          </div>
        </div>

        <div className="flex items-start">
          <ClockIcon
            className="text-gray-500 mr-3 mt-1 flex-shrink-0"
            size={18}
          />
          <div>
            <p className="text-gray-700">{office.hours}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <a
          href={getDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <NavigationIcon size={18} className="mr-2" />
          Get Directions
        </a>
      </div>

      <div className="mt-4 bg-blue-50 p-4 rounded-md">
        <h4 className="font-medium text-blue-800 mb-2">About this Office</h4>
        <p className="text-sm text-gray-700">
          This government office provides essential services to citizens in the
          area. Visit during working hours or contact them by phone for
          inquiries.
        </p>
      </div>
    </div>
  );
};

export default OfficeDetails;
