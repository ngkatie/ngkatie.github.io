import React from 'react'
import Particle from './components/Particles.jsx'
import LinearGradient from 'react-native-web-linear-gradient'
import { View } from 'react-native-web'
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

        <LinearGradient className='mt-[-100px]' colors={['#FFFFFF00', '#FAFAFC']}>
          <View style={{height:100, width:100}}></View>
        </LinearGradient>
        <About/>

        <LinearGradient colors={['#FAFAFC', '#FFFFFF00']}>
          <View style={{height:100, width:100}}></View>
        </LinearGradient>
        <Experience/>
      </div>
    </>
  );
}

export default App;
