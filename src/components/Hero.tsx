import React, { useState } from 'react'

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="bg-gradient-to-br from-talkgov-light-blue to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to TalkGov.
              </h1>
              <p className="text-xl text-gray-700">
                Get fast, clear answers about government services.
              </p>
            </div>

            {/* Search Bar */}
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a service (e.g: Passport, NIC)"
                  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-talkgov-blue focus:border-talkgov-blue"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-talkgov-blue hover:text-talkgov-blue/80">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              <button className="btn-primary w-full lg:w-auto">
                Ask the Assistant
              </button>
            </div>
          </div>

          {/* Right Content - Office Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-talkgov-blue rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="text-talkgov-blue font-medium">Office Collaboration</p>
                    <p className="text-gray-600 text-sm">Government officials working together to serve citizens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 