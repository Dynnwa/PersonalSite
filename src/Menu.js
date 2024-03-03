import React from 'react';
import './Menu.css'
import Controller from './Controller';

const Menu = () => {
  return (
      <div className="menu">    
      <a href="/">  
        <button className="back-button">
          <div>
              Back
          </div>
          </button>
        </a>
      </div>
  );
};

export default Menu;