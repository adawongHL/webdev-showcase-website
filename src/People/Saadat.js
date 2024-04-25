import React from 'react';
import './Saadat.css'
import catGif from './beat-to-koto-nai-oh-beat-to-koto-nai.gif'

const SaadatComponent = () => {
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1V9sSHvPnqeElqlNYct2IbAfrHvqMKUwE/view?usp=sharing");
  };

  return (
    <div className="saadat-container">
      <header className="saadat-header">
        <h1>Welcome to My Website...</h1>
      </header>
      
      <main className="saadat-main">
        <section id="Gif" className="saadat-section">
          <h2>Check this out</h2>
          <div className="saadat-gif-container">
          <img src={catGif} />
          </div>
        </section>
        <section id="Question1" className="saadat-section">
          <p>Heh...what do you think?</p>
        </section>
        <section id="Image" className="saadat-section">
          <h2>Check this out too</h2>
          <div className="saadat-image-container">
            <img src="https://media.tenor.com/yskj0PnyEpoAAAAM/borpynino.gif" alt="pic1" width="200" height="auto" />
            <img src="https://us-tuna-sounds-images.voicemod.net/b5c25009-4ce0-4f1e-b0f6-ee052bcd9854-1672426874486.jpg" alt="pic2" width="200" height="auto" />
            <img src="https://steamuserimages-a.akamaihd.net/ugc/2071135896060325080/825F188A141EEF65352B31D8CDBFAF860F5A1E7C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="pic3" width="200" height="auto" />
          </div>
          <p>Wow.. that was super cool</p>
          <p>Check out my resume</p>
          <div className="saadat-button-helper">
            <button type="button" onClick={handleResumeClick}>RIGHT HERE!!!</button>
          </div>
          <h3>See Ya!</h3>
        </section>
      </main>
      
      <footer className="saadat-footer">
        <p>Copyright © Saadat 2024</p>
      </footer>
    </div>
  );
};

export default SaadatComponent;
