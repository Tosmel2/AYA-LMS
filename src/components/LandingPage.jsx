import React from 'react'
import Category from "./Homepage/Category";
import Hero from "./Homepage/Hero";
import "../App.css";
import Feature from "./Homepage/Feature";
import JustAdded from "./Homepage/JustAdded";
import LandingNavbar from "../components/LandingNavbar";
import Footer from '../molecules/Footer';

const LandingPage = () => {
  return (
    <div>
      <LandingNavbar />
      <Hero />
      <Feature />
      <JustAdded />
      <Category />
      <Footer />
    </div>
  )
}

export default LandingPage