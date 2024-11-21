import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar'; // Import NavBar component


function App() {
    return (
        <Router>
          <div className="App">
          {/* add in router for different sections */}
            {/* <NavBar /> */}
            <Routes>
              <Route path="/" element={<Home />} /> {/* Home page at / */}
              <Route path="/website/" element={<Home />} />
            </Routes>
          </div>
        </Router>
  );
}

export default App;