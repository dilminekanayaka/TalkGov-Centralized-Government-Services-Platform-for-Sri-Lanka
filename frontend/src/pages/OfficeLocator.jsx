import React, { useState } from "react";
import OfficeSearch from "../components/OfficeSearch";
import OfficeMap from "../components/OfficeMap";
import OfficeDetails from "../components/OfficeDetails";
import { MapPinIcon } from "lucide-react";

const sampleOffices = [
  {
    id: "1",
    name: "Central Government Office",
    type: "Administrative",
    address: "123 Main Street, Downtown, City Center",
    phone: "(555) 123-4567",
    hours: "Monday-Friday: 9:00 AM - 5:00 PM",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: "2",
    name: "Tax Services Department",
    type: "Finance",
    address: "456 Financial Avenue, Midtown",
    phone: "(555) 234-5678",
    hours: "Monday-Friday: 8:30 AM - 4:30 PM",
    lat: 40.7218,
    lng: -73.9978,
  },
  {
    id: "3",
    name: "District Social Services",
    type: "Social Services",
    address: "789 Community Road, Westside",
    phone: "(555) 345-6789",
    hours: "Monday-Friday: 9:00 AM - 6:00 PM, Saturday: 10:00 AM - 2:00 PM",
    lat: 40.7058,
    lng: -74.0138,
  },
  {
    id: "4",
    name: "Vehicle Registration Center",
    type: "Transportation",
    address: "321 Transit Way, Eastside",
    phone: "(555) 456-7890",
    hours: "Monday-Friday: 8:00 AM - 4:00 PM",
    lat: 40.7198,
    lng: -73.9908,
  },
  {
    id: "5",
    name: "Business License Bureau",
    type: "Business Services",
    address: "555 Commerce Street, Financial District",
    phone: "(555) 567-8901",
    hours: "Monday-Friday: 9:00 AM - 5:00 PM",
    lat: 40.7048,
    lng: -74.0134,
  },
];

const OfficeLocator = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [offices] = useState(sampleOffices);
  const [selectedOffice, setSelectedOffice] = useState(null);

  const handleSearch = (location) => {
    setSearchLocation(location);
    // In a real app, this would fetch offices based on the location
    // For now we're using the sample data
  };

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Government Office Locator
            </h1>
            <p className="text-lg text-gray-600">
              Find government offices near you and get all the information you
              need to visit them.
            </p>
          </div>

          <div className="mb-8">
            <OfficeSearch onSearch={handleSearch} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <OfficeMap
                  offices={offices}
                  selectedOffice={selectedOffice}
                  setSelectedOffice={setSelectedOffice}
                />
              </div>
            </div>

            <div>
              {selectedOffice ? (
                <OfficeDetails office={selectedOffice} />
              ) : (
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPinIcon className="text-blue-700" size={24} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Select an Office
                  </h3>
                  <p className="text-gray-600">
                    Click on a marker on the map to view office details and get
                    directions.
                  </p>
                </div>
              )}

              {offices.length > 0 && (
                <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Nearby Offices
                  </h3>
                  <div className="space-y-3">
                    {offices.map((office) => (
                      <div
                        key={office.id}
                        className={`p-3 rounded-md cursor-pointer transition-colors ${
                          selectedOffice?.id === office.id
                            ? "bg-blue-50 border border-blue-200"
                            : "hover:bg-gray-50"
                        }`}
                        onClick={() => setSelectedOffice(office)}
                      >
                        <h4 className="font-medium text-gray-800">
                          {office.name}
                        </h4>
                        <p className="text-sm text-gray-600 truncate">
                          {office.address}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocator;
