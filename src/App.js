import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import ClipSection from './components/ClipSection';
import PenPals from './components/PenPals';
import LiveShows from './components/LiveShows';
import Paintings from './components/Paintings';
import AllSpecials from './components/AllSpecials';
import NavBar from './components/NavBar'; // Import NavBar component


function App() {
    return (
        <Router>
          <div className="App">
          {/* add in router for different sections */}
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} /> {/* Home page at / */}
              <Route path="/website/" element={<Home />} />
              <Route path="/liveshows/" element={<LiveShows />} />
              <Route path="/contact/" element={<Contact />} />
              <Route path="/clips/" element={<ClipSection />} />
              <Route path="/allspecials/" element={<AllSpecials />} />
              <Route path="/penpals/" element={<PenPals />} />
              <Route path="/paintings/" element={<Paintings />} />
            </Routes>
          </div>
        </Router>
  );
}

export default App;