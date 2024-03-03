import React from 'react';
import './PageButton.css'

const PageButton = ({ text, imageSrc, link }) => {
  return (
        <a href={link}>  
           <button className="page-button">
            <div>
                {text}
            </div>
            <img src={imageSrc} alt="background" className="page-button-image" />
            </button>
        </a>
   );
};

export default PageButton;