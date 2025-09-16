import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar" data-aos="fade-down">
      <div className="nav-brand">
        <Link to="/">Inverra Holding LLC</Link>
      </div>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/data-engineering" ? "active" : ""}>
          <Link to="/data-engineering">Data Engineering</Link>
        </li>
        <li className={location.pathname === "/data-science" ? "active" : ""}>
          <Link to="/data-science">Data Science</Link>
        </li>
        <li className={location.pathname === "/sports-analytics" ? "active" : ""}>
          <Link to="/sports-analytics">Sports Analytics</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;