import React from 'react';
import './PageButton.css'

const PageButton = ({ text, imageSrc, linkTo }) => {
  return (
    <div className="page-button-container">
        <a href="/about">  
           <button className="page-button" href={linkTo}>
            <div>
                {text}
            </div>
            <img src={imageSrc} alt="background" className="page-button-image" />
            </button>
        </a>
    </div>
  );
};

export default PageButton;