import "./Boost.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import boost1 from "../components/boost1.png";
import boost2 from "../components/boost2.png";
import boost3 from "../components/boost3.png";
import boost4 from "../components/boost4.png";

function Boost() {
  return (
    <div className="boost-container">
      <h2>Boost your Friends - Click a Sticker to send it to your friends</h2>
      <div className="boost-grid">
        <img src={boost1} alt="Smiley Sticker" className="boost-item" />
        <img src={boost2} alt="Blue Smiley Sticker" className="boost-item" />
        <img src={boost3} alt="Good Work Sticker" className="boost-item" />
        <img src={boost4} alt="Keep it up Sticker" className="boost-item" />
      </div>
    </div>
  );
}

export default Boost;
