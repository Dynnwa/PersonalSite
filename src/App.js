import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Landing from './Landing';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
  );
};

export default App;