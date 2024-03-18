import React from 'react';
import { Link } from 'react-router-dom';
import resume from './assets/Danny Wei Resume.pdf'
import './PageButton.css'

const PageButton = ({ text, imageSrc, link }) => {
    if (!link) {
        // If link is empty, render alternative content
        return (
            <a href={resume} target="_blank" rel="noreferrer">
            <button className="page-button">
             <div>
                 {text}
             </div>
             <img src={imageSrc} alt="background" className="page-button-image" />
             </button>
         </a>
        );
      }

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