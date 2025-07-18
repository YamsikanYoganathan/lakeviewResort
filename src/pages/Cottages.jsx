import React from "react";
import CottageList from "../components/CottageList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

function Cottages() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CottageList />
      <CTASection/>
      <Footer />
    </div>
  );
}

export default Cottages;
