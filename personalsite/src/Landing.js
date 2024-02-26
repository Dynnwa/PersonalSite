import React, { useState, useEffect } from 'react';
import './Landing.css';
import './index.css'; 
import arrow from './assets/Guidearrow.gif'
import Home from './Home';
import Controller from './Controller';
import Tree from './assets/tree.png'


const SingleTree = () => {
  return <img src={Tree} alt="Tree" style={{ width: '40px', height: '40px', color: '#D3D3D3' }} />;
};

function Landing() {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    // Generate an array of tree components with random positions
    const newTrees = Array.from({ length: 100 }, (_, index) => (
      <div
        key={index}
        style={{
          position: 'absolute',
          top: `${Math.random() * 190}vh`, // Adjust as needed
          left: `${Math.random() * 95}vw`, // Adjust as needed
          zIndex: 2,
        }}
      >
        <SingleTree />
      </div>
    ));

    setTrees(newTrees);
  }, []); // Run this effect only once when the component mounts

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <p className="Title">
            Welcome to Danny Town
          </p>
          <p className="Sub-header">
            Lets take a Walk
          </p>
          <p className="intructions">
            (Use WASD)
          </p>
          <img src={arrow} alt='arrow'className="arrow"/>
          <div className="controller">
            <Controller/>
          </div>
        </header>
        <Home />
      </div>

      {/* Render trees on top */}
      {trees.map((tree, index) => (
        <React.Fragment key={index}>{tree}</React.Fragment>
      ))}
    </div>
  );
}

export default Landing;
