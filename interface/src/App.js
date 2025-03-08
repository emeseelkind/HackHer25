import { useState } from "react";

import Navbar from "./components/navbar"; // Capitalize first letter
import "./App.css"; // Import the CSS file
import Connect from "./components/Connect"; // Import the Connect component

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // Capitalize first letter
import "./App.css"; // Import the CSS file
import SignUp from "./components/SignUp"; // Capitalize first letter


function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path = "/signup" element = {<SignUp />} />
      </Routes>
    </Router>

  );

}

export default App;