import React from 'react'
import Navbar from '../components/Homepage/Navbar'
import Footer from './Footer'
import Category from './Homepage/Category'
import Hero from './Homepage/Hero'
import '../App.css'
import Feature from './Homepage/Feature'
import JustAdded from './Homepage/JustAdded'



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