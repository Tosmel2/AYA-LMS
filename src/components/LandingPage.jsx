import React from 'react'
import Category from "./Homepage/Category";
import Hero from "./Homepage/Hero";
import "../App.css";
import Feature from "./Homepage/Feature";
import JustAdded from "./Homepage/JustAdded";
import LandingNavbar from "../components/LandingNavbar";

const LandingPage = () => {
  return (
    <div>
      <LandingNavbar />
      <Hero />
      <Feature />
      <JustAdded />
      <Category />
    </div>
  )
}

export default LandingPage