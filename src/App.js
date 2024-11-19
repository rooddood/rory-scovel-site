import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';


function App() {
    return (
        <Router>
          <div className="App">
          {/* add in router for different sections */}
            <Routes>
              <Route path="/" element={<Home />} /> {/* Home page at / */}
              <Route path="/website/" element={<Home />} />
            </Routes>
          </div>
        </Router>
  );
}

export default App;