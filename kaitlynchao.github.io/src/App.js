import React, { useState, useEffect } from "react"; 
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./style.css";
import myImage from "./Image/IMG_0408.jpg";
import Contact from "./Components/Contact/Contact.js";
import AboutMe from "./Components/AboutMe/AboutMe.js";

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => { 
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  const [fontSizeIndex, setFontSizeIndex] = useState(1); 
  const fontSizes = ['extra-small', 'small', 'medium', 'large', 'extra-large'];
  const increaseFontSize = () => {
    setFontSizeIndex(current => Math.min(fontSizes.length - 1, current + 1));
  };
  
  const decreaseFontSize = () => {
    setFontSizeIndex(current => Math.max(0, current - 1));
  };

  useEffect(() => {
    document.body.className = theme;
    document.body.style.fontSize = getFontSize(fontSizes[fontSizeIndex]);
  }, [theme, fontSizeIndex]);  

  const getFontSize = (sizeKey) => {
    switch(sizeKey) {
      case 'extra-small':
        return '12px'; 
      case 'small':
        return '16px'; 
      case 'medium':
        return '20px'; 
      case 'large':
        return '24px'; 
      case 'extra-large':
        return '28px'; 
      default:
        return '16px';
    }
  };

  const getImageSize = (sizeKey) => {
    switch(sizeKey) {
      case 'extraSmall':
        return 60; 
      case 'small':
        return 80;
      case 'medium':
        return 100;
      case 'large':
        return 120;
      case 'extraLarge':
        return 140;
      default:
        return 80; 
    }
  };

  useEffect(() => {
    const fontSizeClass = `font-size-${fontSizes[fontSizeIndex]}`;
    document.body.className = `${theme} ${fontSizeClass}`;
  }, [theme, fontSizeIndex]);

  return (
    <Router>
  <div className={`App`}>
    <header className="App-header">
      <nav className="navbar">
        <Link to="/">Home</Link> |
        <Link to="/about">About Me</Link> |
        <Link to="/contact">Contact</Link> |
        <a href="https://github.com/KaitlynChao/KaitlynChao.github.io">GitHub</a> |
        <a href="https://www.linkedin.com/in/kaitlyn-chao/">LinkedIn</a> |
        <button onClick={toggleTheme} className="theme-toggle-button">
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button> |
        <button onClick={decreaseFontSize}>-</button> 
        <button onClick={increaseFontSize}>+</button>
      </nav>
    </header>
        <br></br><br></br>
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={
            <div>
              <div className="welcome" data-theme={theme}>
              <img 
                  id="myImage" 
                  src={myImage} 
                  alt="This is a Profile of Kaitlyn Chao with her Snowboard" 
                  style={{ 
                    width: `${getImageSize(fontSizes[fontSizeIndex])}px`, 
                    height: 'auto' 
                  }} 
                />
              </div>
              <div className="education-section">
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
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;