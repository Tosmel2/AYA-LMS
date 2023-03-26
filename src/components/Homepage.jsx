import React from 'react'
import Navbar from '../components/Homepage/Navbar'
import Category from './Homepage/Category'
import Hero from './Homepage/Hero'
import '../App.css'
import Feature from './Homepage/Feature'
import JustAdded from './Homepage/JustAdded'
import Footer from '../molecules/Footer'



const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <JustAdded />
      <Category />
      <Footer />
    </div>
  )
}

export default Homepage