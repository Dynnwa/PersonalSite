import React from 'react';
import './Title.css'

const Title = ({text}) => {
  return (
    <div className="title-container">
        {text}
    </div>
  );
};

export default Title;