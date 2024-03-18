import React from 'react';
import { Link } from 'react-router-dom';
import './PageButton.css'

const PageButton = ({ text, imageSrc, link }) => {
  return (
        <Link to={link}>  
           <button className="page-button">
            <div>
                {text}
            </div>
            <img src={imageSrc} alt="background" className="page-button-image" />
            </button>
        </Link>
   );
};

export default PageButton;