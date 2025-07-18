import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import CottageList from "../components/CottageList";
import CottageActivityGrid from "../components/CottageActivityGrid";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <CottageList/>
      <CottageActivityGrid/>
      <CTASection/>
      <Footer/>
    </div>
  );
};

export default Homepage;
