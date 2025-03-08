import { useState } from "react";
import "./navbar.css"; // Import the CSS file

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
            <div>Intake</div>
            <div>Goals</div>
          </div>
        </div>

        
        {/* Community Dropdown */}
        <div className="dropdown">
          <button>Community</button>
          <div className="dropdown-menu">
            <div>Connect</div>
            <div>Boost</div>
          </div>
        </div>
        {/* Sign Up Button */}
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
