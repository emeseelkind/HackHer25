<<<<<<< HEAD
import { useState } from "react";
import Navbar from "./components/navbar"; // Capitalize first letter
import "./App.css"; // Import the CSS file
import Connect from "./components/Connect"; // Import the Connect component
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // Capitalize first letter
import "./App.css"; // Import the CSS file
import SignUp from "./components/SignUp"; // Capitalize first letter
>>>>>>> ded57048c9e7ff2e6a0981ead3a3720ef900601b

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);

  const handleNavigation = (section, subSection) => {
    setActiveSection(section);
    setActiveSubSection(subSection);
  };

  return (
<<<<<<< HEAD
    <div className="App">
      <Navbar onNavigate={handleNavigation} />
      
      {activeSection === "community" && activeSubSection === "connect" && <Connect />}
    </div>
=======
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/signup" element = {<SignUp />} />
      </Routes>
    </Router>
>>>>>>> ded57048c9e7ff2e6a0981ead3a3720ef900601b
  );
}

export default App;