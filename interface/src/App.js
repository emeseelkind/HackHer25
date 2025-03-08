import { useState } from "react";
import Navbar from "./components/navbar"; // Capitalize first letter
import "./App.css"; // Import the CSS file
import Connect from "./components/Connect"; // Import the Connect component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp"; // Capitalize first letter
import Goals from "./components/Goals";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/connect" element={<Connect />} /> 
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </Router>
  );
}

export default App;
