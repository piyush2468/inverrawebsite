import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DataEngineering from "./pages/DataEngineering";
import DataScience from "./pages/DataScience";
import SportsAnalytics from "./pages/SportsAnalytics";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-engineering" element={<DataEngineering />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/sports-analytics" element={<SportsAnalytics />} />
      </Routes>
    </Router>
  );
}

export default App;