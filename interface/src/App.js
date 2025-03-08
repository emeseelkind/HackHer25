import { useState } from "react";
import Navbar from "./components/navbar"; // Capitalize first letter
import "./App.css"; // Import the CSS file
import Connect from "./components/Connect"; // Import the Connect component

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubSection, setActiveSubSection] = useState(null);

  const handleNavigation = (section, subSection) => {
    setActiveSection(section);
    setActiveSubSection(subSection);
  };

  return (
    <div className="App">
      <Navbar onNavigate={handleNavigation} />
      
      {activeSection === "community" && activeSubSection === "connect" && <Connect />}
    </div>
  );
}

export default App;