import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact";
import About from "./pages/About";
import OfficeLocator from "./pages/OfficeLocator";

function Logout() {
  // Clear localStorage then redirect to login
  React.useEffect(() => {
    localStorage.clear();
  }, []);
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  // Clear localStorage on mount
  React.useEffect(() => {
    localStorage.clear();
  }, []);
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/office-locator" element={<OfficeLocator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="py-10 text-white bg-blue-950">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-4">
            {/* Column 1: Logo & Description */}
            <div>
              <h2 className="mb-2 text-xl font-bold">TalkGov</h2>
              <p className="text-gray-300">
                Making government services accessible in Sinhala, Tamil, and
                English.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="mb-2 font-semibold">Quick Links</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/office-locator" className="hover:underline">
                    Office Locator
                  </a>
                </li>
                <li>
                  <a href="/document-checklist" className="hover:underline">
                    Document Checklist
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Policies */}
            <div>
              <h3 className="mb-2 font-semibold">Policies</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Language Selector */}
            <div className="flex flex-col items-center text-center md:items-center">
              <h3 className="mb-2 font-semibold">Language</h3>
              <div className="flex items-center w-full px-3 py-2 space-x-2 text-black bg-white rounded-md md:w-auto">
                <span role="img" aria-label="globe">
                  🌐
                </span>
                <select className="w-full bg-transparent outline-none md:w-auto">
                  <option>English</option>
                  <option>Sinhala</option>
                  <option>Tamil</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-4 mt-8 text-sm text-center text-gray-300 border-t border-gray-600">
            © {new Date().getFullYear()}, TalkGov. All rights reserved.
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
