import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';
import Header from './Header.js'
import reactLogo from './logo512.png'
import webdevEmoji from './webdevEmoji.png'
import pixelRafin from './pixrafin.png'
import pixelVaughn from './pixV.png'
import pixelRiley from './pixRiley.png'
import pixelAlicia from './pixAlicia.png'

const Gallery = () => {
  const navigate = useNavigate();

  const redirectToPersonPage = (namePerson) => {
    navigate(`/${namePerson.toLowerCase()}`);
  };

  const redirectToURL = (myURL) => {
    // Replace 'https://example.com' with the desired URL
    window.location.href = myURL;
  };

  return (
    <div className="gallery">
      {/* <Header /> */}
      
      <div id="pageTitle">Team Ada</div>

      <div id="pageSubtitle">Week 3: React Shopping Site</div>

      <div className="card" onClick={() => redirectToURL("https://simply-shopping-web.vercel.app/")}>
        <img src={pixelAlicia}  />  
        <h1>Alicia</h1>
      </div>
      <div className="card" onClick={() => redirectToURL("https://webdev.vaughnv.com/")}>
        <img src={pixelVaughn}  />
        <h1>Vaughn</h1>
      </div>
      <div className="card" onClick={() => redirectToURL("https://webdev-assistants-website.vercel.app/")}>
        <img src={pixelRafin}  />
        <h1>Saadat</h1>
      </div>
      <div className="card" onClick={() => redirectToURL("https://rilieo.github.io/shopping-site/")}>
        <img src={pixelRiley}  />
        <h1>Riley</h1>
      </div>



      <div id="pageSubtitle">Week 1: HTML CSS Portfolio</div>

      <div className="card" onClick={() => navigate(`/alicia`)}>
        <img src={pixelAlicia}  />  
        <h1>Alicia</h1>
      </div>
      <div className="card" onClick={() => redirectToURL("https://webdev.vaughnvalle.me/")}>
        <img src={pixelVaughn}  />
        <h1>Vaughn</h1>
      </div>
      <div className="card" onClick={() => navigate(`/saadat`)}>
        <img src={pixelRafin}  />
        <h1>Saadat</h1>
      </div>
      <div className="card" onClick={() => navigate(`/riley`)}>
        <img src={pixelRiley}  />
        <h1>Riley</h1>
      </div>



      

      



    </div>
  );
};

export default Gallery;
