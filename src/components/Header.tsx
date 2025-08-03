import React, { useState } from "react";

const Header: React.FC = () => {
  const [language, setLanguage] = useState("English");

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-talkgov-blue">TALKGOV.</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-talkgov-blue border-b-2 border-talkgov-blue px-3 py-2 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-talkgov-blue px-3 py-2 text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-talkgov-blue px-3 py-2 text-sm font-medium"
            >
              Office Locator
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-talkgov-blue px-3 py-2 text-sm font-medium"
            >
              Document Checklist
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-talkgov-blue px-3 py-2 text-sm font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Language Selector and User Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-talkgov-blue focus:border-talkgov-blue"
              >
                <option value="English">English</option>
                <option value="Sinhala">Sinhala</option>
                <option value="Tamil">Tamil</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* User Actions */}
            <button className="btn-outline">Log In</button>
            <button className="btn-secondary">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
