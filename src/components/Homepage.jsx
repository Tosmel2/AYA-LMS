import React from "react";
import Category from "./Homepage/Category";
import Hero from "./Homepage/Hero";
import Footer from "../molecules/Footer";
import "../App.css";
import Feature from "./Homepage/Feature";
import JustAdded from "./Homepage/JustAdded";
import Navbar from "./Homepage/Navbar";

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
  );
};

export default Homepage;
