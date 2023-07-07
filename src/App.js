import React from 'react'
import Particle from './components/Particles.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

function App() {
  return (
    <>
      <Particle />
      <div>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
