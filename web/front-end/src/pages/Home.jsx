import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Sponsors from '../components/Sponsors'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Earth from '../components/Earth'

const Home = () => {
  return (
    <div>
          <Hero />
          {/* <Sponsors /> */}
          <AboutUs />
          <Services />
          <Earth  />
    </div>
  )
}

export default Home