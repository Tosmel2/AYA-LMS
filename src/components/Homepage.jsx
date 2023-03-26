import React from "react";
import Category from "./Homepage/Category";
import Hero from "./Homepage/Hero";
import "../App.css";
import Feature from "./Homepage/Feature";
import JustAdded from "./Homepage/JustAdded";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <JustAdded />
      <Category />
    </div>
  );
};

export default Homepage;
