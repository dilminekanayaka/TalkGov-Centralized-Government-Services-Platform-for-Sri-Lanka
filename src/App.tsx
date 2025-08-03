import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PopularServices from './components/PopularServices'
import HowTalkGovHelps from './components/HowTalkGovHelps'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PopularServices />
        <HowTalkGovHelps />
      </main>
      <Footer />
    </div>
  )
}

export default App 