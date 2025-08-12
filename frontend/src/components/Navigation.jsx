import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "text-black font-semibold border-b-2 border-green-600"
      : "text-gray-700 hover:text-black";
  };

  return (
    <header className="shadow-sm bg-gray-50">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <span className="text-blue-600">TALK</span>
          <span className="text-green-600">GOV</span>
          <span className="text-black">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="items-center hidden space-x-6 md:flex">
          <Link to="#" className={isActive("#")}>
            Home
          </Link>
          <Link to="/services" className={isActive("/services")}>
            Services
          </Link>
          <Link to="/office-locator" className={isActive("/office-locator")}>
            Office Locator
          </Link>
          <Link
            to="/document-checklist"
            className={isActive("/document-checklist")}
          >
            Document Checklist
          </Link>
          <Link to="/contact" className={isActive("/contact")}>
            Contact
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About Us
          </Link>
        </nav>

        {/* Right-side Buttons */}
        <div className="items-center hidden space-x-4 md:flex">
          <button className="flex items-center px-3 py-1 text-sm bg-white rounded-md">
            🌐 English
          </button>
          <button className="px-4 py-1 text-sm bg-white rounded-md">
            Log In
          </button>
          <button className="px-4 py-1 text-sm text-white bg-blue-600 rounded-md">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700"
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="bg-white border-t md:hidden">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            <Link
              to="#"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("#")}
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/services")}
            >
              Services
            </Link>
            <Link
              to="/office-locator"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/office-locator")}
            >
              Office Locator
            </Link>
            <Link
              to="/document-checklist"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/document-checklist")}
            >
              Document Checklist
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/contact")}
            >
              Contact
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/about")}
            >
              About Us
            </Link>
            <div className="flex flex-col mt-4 space-y-2">
              <button className="px-4 py-1 text-sm border rounded-md">
                🌐 English
              </button>
              <button className="px-4 py-1 text-sm border rounded-md">
                Log In
              </button>
              <button className="px-4 py-1 text-sm text-white bg-blue-600 rounded-md">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
