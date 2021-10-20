import React from 'react'
import About from './About'
import Banner from './Banner'
import Feedback from './Feedback'
import Services from './Services'

const Home = ({ handleAddServices, services }) => {
  return (
    <div>
      <Banner></Banner>
      <Services
        handleAddServices={handleAddServices}
        services={services}
      ></Services>
      <About />
      <Feedback></Feedback>
    </div>
  )
}

export default Home
