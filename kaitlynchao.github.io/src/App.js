import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./style.css";
import myImage from "./Image/IMG_0408.jpg";
import Contact from "./Components/Contact/Contact.js";
import AboutMe from "./Components/AboutMe/AboutMe.js";

function App() {
  return (
    <Router>
      <div>
        <h1>Kaitlyn Chao</h1>
        <div className="links">
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/AboutMe">About Me</Link> |
            <Link to="/Contact">Contact</Link> |
            <a href="https://github.com/KaitlynChao/KaitlynChao.github.io">GitHub</a> |
            <a href="https://www.linkedin.com/in/kaitlyn-chao/">LinkedIn</a>
          </nav>
        </div>
        <br/><br/><br/>
        <Routes>
          <Route path="/" element={
            <>
              <div className="welcome">
                <img
                  id="myImage"
                  src={myImage}
                  alt="My Image"
                  width="100"
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
                  SATEC @ W.A. Porter Collegiate Institute | September 2017 - June 2021
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