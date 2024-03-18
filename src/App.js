import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import About from './pages/About';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Landing from './Landing';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
      <Router>
        <ScrollToTop />
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