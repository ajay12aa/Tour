import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import image12 from "../assets/2.jpg"
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'

function Contact() {
  return (
    <>

    <Navbar/>
        <Hero
        cName="hero-mid"
        title="About"
        
        image={image12}
        btnClass="hide"
        />

<ContactForm/>


<Footer/>
       
       </>
  )
}

export default Contact