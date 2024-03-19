import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./style.css";
import myImage from "./Image/IMG_0408.jpg";
import Contact from "./Components/Contact/Contact.js";
import AboutMe from "./Components/AboutMe/AboutMe.js";

function App() {

  // Implementation to enlarge image
  const enlargeImage = () => {
    var image = document.getElementById("myImage");
    image.style.width = "200px";
  };

  // Implementation to restore image size
  const restoreImage = () => {
    var image = document.getElementById("myImage");
    image.style.width = "100px";
  };

  // Implementation for mouse over events on links
  const handleMouseOver = (element) => {
    element.style = { color: "white" };
  };

  // Implementation for mouse out events on links
  const handleMouseOut = (element) => {
    element.style = { color: "black" };
  };

  return (
    <Router>
      <div>
        <h1>Kaitlyn Chao</h1>
        <div className="links">
        <nav>
            <a href="/" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Home</a> |
            <a href="/AboutMe" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>About Me</a> |
            <a href="/Contact" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Contact</a> |
            <a href="https://github.com/KaitlynChao/KaitlynChao.github.io" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>GitHub</a> |
            <a href="https://www.linkedin.com/in/kaitlyn-chao/" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>LinkedIn</a>
         </nav>
      </div>
      <br></br>
      <br></br>
      <br></br>
        <Routes>
          <Route path= "/" element = {
            <>
            <div className="welcome">
          <img
            id="myImage"
            src={myImage}
            alt="My Image"
            width="100"
            onClick={enlargeImage}
            onMouseOut={restoreImage}
          />
       </div>
        <h2>Education</h2>
        <hr />
        <ul>
          <li>
            Toronto Metropolitan University (TMU) | September 2021 - Present
            <ul>
              <li>Business Technology Management (BComm)</li>
            </ul>
          </li>
          <li>
            SATEC @ W.A. Porter Collegiate Institute | September 2017 - June
            2021
            <ul>
              <li>Honour Roll</li>
            </ul>
          </li>
        </ul>
        </>
          } />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

