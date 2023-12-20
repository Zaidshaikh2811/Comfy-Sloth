import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
const HomePage = () => {
  return (
    <>
      <div className="page">
        <Hero></Hero>
        <FeaturedProducts></FeaturedProducts>
        <Services></Services>
        <Contact></Contact>
      </div>
    </>
  );
};

export default HomePage;
