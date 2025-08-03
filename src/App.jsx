import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Cottages from "./pages/Cottages";
import Contact from "./pages/Contact";
import CottagePage from "./pages/CottagePage";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsNCondition from "./pages/TermsNCondition";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/cottages" element={<Cottages/>} />
          <Route path="/cottages/:id" element={<CottagePage />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="/termsNCondition" element={<TermsNCondition/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
