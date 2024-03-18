import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Landing from './Landing';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/experience">
            <Experience />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </Router>
  );
};

export default App;