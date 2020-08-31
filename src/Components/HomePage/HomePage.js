import React, { Component } from 'react';

import HomeHeader from './../HomeHeader/HomeHeader'
import About from './../About/About'
import Services from './../Services/Services'
import Clients from './../Clients/Clients'
import Portfolio from './../Portfolio/Portfolio'
import Testmonials from './../Testimonials/Testimonials'
import Call from './../Call/Call'
import Team from './../Team/Team'
import Contact from './../Contact/Contact'


class HomePage extends Component {
  render()
  {
      return (
          <div>
            <HomeHeader />
            <About />
            <Services />
            <Clients />
            <Portfolio />
            <Testmonials />
            <Call />
            <Team />
            <Contact />
          </div>
      )
      
  }
}
export default HomePage;