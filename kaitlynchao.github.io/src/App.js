import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./style.css";
import myImage from "./Image/IMG_0408.jpg";
import Contact from "./Components/Contact/Contact.js";
import AboutMe from "./Components/AboutMe/AboutMe.js";

function App() {
  const [userName, setUserName] = useState("");

  const welcome = () => {
    var name = prompt("Enter your name in the box:", "Kaitlyn");

    var welcometext = document.getElementById("user");
    if (name === null || name === "") {
      welcometext.innerHTML = "Welcome to my website!";
    } else {
      welcometext.innerHTML = "Welcome to my website, " + name + "!";
    }
  };

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
          <p id="user">{userName}</p>
          <button className="welcomebutton" onClick={welcome}>
            Enter Your Name
          </button>
          <br />
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
        <h2>Program</h2>
        <hr />
        <p>
          I am currently enrolled in the Business Technology Management (BTM)
          program, which covers the essential principles of business,
          technology, and management. This program equips students with relevant
          skills needed for thriving in career paths like Business Intelligence
          and Information Technology.
        </p>
        <h2>Courses</h2>
        <hr />
        <h4>These are my Top 2 courses currently:</h4>
        <div className="Courses">
          <ol>
            <li>
              ITM500
              <p>
                This was an introduction course to SQL, but it was very
                interesting and valuable for its practical applications, and
                career prospects. It is a crucial skill for anyone working with
                databases and data-driven decision-making.
              </p>
            </li>
            <li>
              ITM301
              <p>
                This class provided an introduction to computer hardware,
                software, and communication networks. I particularly enjoyed the
                section on computer hardware as building a solid foundation of
                knowledge and skills on this topic is applicable in various
                ways.
              </p>
            </li>
          </ol>
        </div>
        <table>
          <tbody>
            <tr>
              <th>
                <a href="https://www.torontomu.ca/calendar/2023-2024/courses/information-technology-management/ITM/500/">
                  ITM500
                </a>
              </th>
              <td>Course Description for ITM500</td>
            </tr>
            <tr>
              <th>
                <a href="https://www.torontomu.ca/calendar/2023-2024/courses/information-technology-management/ITM/301/">
                  ITM301
                </a>
              </th>
              <td>Course Description for ITM301</td>
            </tr>
          </tbody>
        </table>
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

