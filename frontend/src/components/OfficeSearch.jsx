import React, { useState } from "react";
import { SearchIcon } from "lucide-react";

const OfficeSearch = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Find Government Offices Near You
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <label htmlFor="location" className="sr-only">
            Enter your district or location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              id="location"
              placeholder="Enter your district or location (e.g., New York, NY)"
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Find Offices
        </button>
      </form>
      <div className="mt-4 text-sm text-gray-600">
        <p>
          Popular searches: New York City, Los Angeles, Chicago, Houston,
          Phoenix
        </p>
      </div>
    </div>
  );
};

export default OfficeSearch;
