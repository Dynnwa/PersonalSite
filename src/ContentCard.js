import React from 'react';
import './ContentCard.css'

const ContentCard = ({title, info}) => {
  return (
    <div className="content-container">
        <div className="title">
            {title}
        </div>
        <div className="content">
            {info}
        </div>
    </div>
  );
};

export default ContentCard;