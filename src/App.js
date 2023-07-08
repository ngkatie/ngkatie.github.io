import React from 'react'
import Particle from './components/Particles.jsx'
import LinearGradient from 'react-native-web-linear-gradient'
// import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'

function App() {
  return (
    <>
      <Particle/>
      <div>
        {/* <Navbar/> */}
        <Hero/>
        <LinearGradient colors={['#FFFFFF00', '#FFFFFF']}/>
        <About/>
        <Experience/>
      </div>
    </>
  );
}

export default App;
