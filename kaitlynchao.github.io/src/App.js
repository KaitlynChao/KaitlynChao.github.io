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
        <div className="links">
          <ul>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <Link to="/">Home</Link> </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kaitlyn-chao/"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/KaitlynChao/KaitlynChao.github.io"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                GitHub
              </a>
            </li>
            <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <Link to="/AboutMe">About Me</Link>
            </li>
            <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path= "/" element = {
            <>
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
        <h2>Extra-curriculars at TMU</h2>
        <hr />
        <ul>
          <li>Badminton Club | September 2021 - Present</li>
          <li>Trampoline Club | May 2023 - December 2023</li>
          <li>Archery Club | September 2022 - December 2022</li>
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

