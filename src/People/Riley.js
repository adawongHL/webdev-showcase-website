import React, { useEffect } from 'react';
import rileyPic from './me.JPG'; // Importing the image
import './Riley.css'

const RileyComponent = () => {
  useEffect(() => {
    const button = document.querySelector('#resume-button');

    const handleClick = () => {
      window.open("https://drive.google.com/file/d/1Wk_6Moi_HPDyGAFDFQgZDVYi3KIioY6e/view?usp=sharing");
    };

    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="riley-container">
      <div className="riley-card">
        <h1>Hi, I'm Riley</h1>
        <img id="photo" src={rileyPic} alt="Riley's Photo" /> {/* Using the imported image */}
        <h3>CS Major at NYU Tandon</h3>
        <div id="resume-button">Resume</div>
      </div>
    </div>
  );
};

export default RileyComponent;
