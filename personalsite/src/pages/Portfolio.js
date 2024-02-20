import React from 'react';
import './Portfolio.css'
import Menu from '../Menu';
import Title from '../Title';
import ContentCard from '../ContentCard';

const handleClick = (url) => {
    window.open(url, '_blank');
  };

function Portfolio() {
  return (
    <div className="portfolio-container">
        <Menu/>
        <Title text={"Portfolio"}/>
      <div className="portfolio-grid">
        <button className="content-button" onClick={() => handleClick("https://github.com/Dynnwa/PersonalSite")}>
            <ContentCard title={"Personal"} info={"sadfffffffffffdddddsafsadfasdfasdfsadddasfdsadfdfffffffffddddddafssdafasdfasdfsadfsadfasd fsdafasdfffffffff fssssssssssssssssssssssssssffffffffffffffffffffffffffff"}/>
        </button>
        <ContentCard/>
        <ContentCard/>
        <button className="content-button" onClick={() => handleClick("https://github.com/hesharon/BackStory")}>
            <ContentCard title={"Personal"} info={"sadfffffffffffdddddsafsadfasdfasdfsadddasfdsadfdfffffffffddddddafssdafasdfasdfsadfsadfasd fsdafasdfffffffff fssssssssssssssssssssssssssffffffffffffffffffffffffffff"}/>
        </button>
        <button className="content-button" onClick={() => handleClick("https://github.com/Dynnwa/PHP-Oracle_Translink_Model")}>
            <ContentCard title={"Personal"} info={"sadfffffffffffdddddsafsadfasdfasdfsadddasfdsadfdfffffffffddddddafssdafasdfasdfsadfsadfasd fsdafasdfffffffff fssssssssssssssssssssssssssffffffffffffffffffffffffffff"}/>
        </button>
        <ContentCard/>
      </div>
    </div>
  );
}

export default Portfolio;