import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import image12 from "../assets/night.jpg"
import Footer from '../Components/Footer'
import Trip from '../Components/Trip'
function Service() {
  return (
    <>

      <Navbar />
      <Hero
        cName="hero-mid"
        title="About"

        image={image12}
        btnClass="hide"

      />
      <Trip/>




      <Footer />

    </>
  )
}

export default Service