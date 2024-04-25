import React from 'react';
import './Alicia.css'
import portfolioPic from './portfolioPic.JPG';

const AliciaComponent = () => {
  return (
    <div className="alicia-container">
      <div className="header-container">
        <h1>Alicia Li Portfolio</h1>
        <p>Brooklyn, NY</p>
        <a href="https://docs.google.com/document/d/1DM39TkGoridf46zuT4e5pbcgi0PW5IahiXqvGeHP0zg/edit?usp=sharing" target="_blank">Resume</a>
      </div>

      <img src={portfolioPic} alt="Alicia Pic" />

      <h2>About Me</h2>
      <ul>
        <li>Class of '26</li>
        <li>CS Major and Business Minor</li>
        <li>University: New York University</li>
      </ul>
    </div>
  );
};

export default AliciaComponent;
