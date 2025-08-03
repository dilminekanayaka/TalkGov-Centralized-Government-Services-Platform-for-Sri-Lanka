import React, { useState } from "react";

const Footer: React.FC = () => {
  const [language, setLanguage] = useState("English");

  return (
    <footer className="bg-talkgov-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* TalkGov Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">TalkGov</h3>
            <p className="text-blue-100 leading-relaxed">
              Making government services accessible to all citizens in Sinhala,
              Tamil and English.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Office Locator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Document Checklist
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Language */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>

            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Language</h4>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-white text-talkgov-blue px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="English">English</option>
                <option value="Sinhala">Sinhala</option>
                <option value="Tamil">Tamil</option>
              </select>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-600 mt-8 pt-8 text-center">
          <p className="text-blue-100">© 2025, TalkGov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
