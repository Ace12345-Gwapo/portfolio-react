// Page shell: ambient background plus the portfolio sections in order.

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIBuild from './components/WhatIBuild'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <div className="bg-glow" aria-hidden="true">
        <span className="g1" />
        <span className="g2" />
        <span className="g3" />
        <span className="g4" />
      </div>
      <div className="grid-overlay" aria-hidden="true" />

      <Navbar />
      <main>
        <Hero />
        <WhatIBuild />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
