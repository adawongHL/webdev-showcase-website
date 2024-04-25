import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery';
import PersonPage from './PersonPage';
import './App.css'; // Import the CSS file
import AliciaComponent from './People/Alicia'
import RileyComponent from './People/Riley';
import SaadatComponent from './People/Saadat';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/alicia" element={<AliciaComponent />} />
          <Route path="/riley" element={<RileyComponent />} />
          <Route path="/saadat" element={<SaadatComponent />} />
          {/* <Route path="/person/:id" element={<PersonPage />} /> */}
          {/* <Route path="/:namePerson" element={<PersonPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
