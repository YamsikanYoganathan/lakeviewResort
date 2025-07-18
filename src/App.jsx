import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Cottages from "./pages/Cottages";
import Contact from "./pages/Contact";
import CottagePage from "./pages/CottagePage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/cottages" element={<Cottages/>} />
          <Route path="/cottagesPage" element={<CottagePage/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
