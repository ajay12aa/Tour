import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import image12 from "../assets/12.jpg"
import Destination from '../Components/Destination'
import Trip from '../Components/Trip'
import Footer from '../Components/Footer'
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        title="Your journy Your story"
        text="Choose your favorite destination"
        image={image12}
        btnText="Travel Plan"
        url="/"
        btnClass="show" />

      <Destination />
      <Trip />

      <Footer />
    </>
  )
}

export default Home