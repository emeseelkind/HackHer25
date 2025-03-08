import { useState } from "react";
import "./navbar.css"; // Import the CSS file
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="circle">NB</div>
        <h1 className="navbar-title">NutriByte</h1>
      </div>

      <div className="nav-links">
        {/* Personal Dropdown */}
        <div className="dropdown">
          <button>Personal</button>
          <div className="dropdown-menu">
            <button>Intake</button>
            <button>Goals</button>
          </div>
        </div>

        
        {/* Community Dropdown */}
        <div className="dropdown">
          <button>Community</button>
          <div className="dropdown-menu">
            <button>Connect</button>
            <button>Boost</button>
          </div>
        </div>
        {/* Sign Up Button (Now Uses Link) */}
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
