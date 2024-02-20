import React from 'react';
import './Portfolio.css'
import Menu from '../Menu';
import Title from '../Title';
import ContentCard from '../ContentCard';

function Portfolio() {
  return (
    <div className="portfolio-container">
        <Menu/>
        <Title text={"Portfolio"}/>
      <div className="portfolio-grid">
        <ContentCard title={"Personal"} info={"sadfffffffffffdddddsafsadfasdfasdfsadddasfdsadfdfffffffffddddddafssdafasdfasdfsadfsadfasd fsdafasdfffffffff fssssssssssssssssssssssssssffffffffffffffffffffffffffff"}/>
        <ContentCard/>
        <ContentCard/>
        <ContentCard title={"Profesional"} info={"sadfffffffffffdddddsafsadfasdfasdfsadddasfdsadfdfffffffffddddddafssdafasdfasdfsadfsadfasd fsdafasdfffffffff fssssssssssssssssssssssssssffffffffffffffffffffffffffff"}/>
        <ContentCard title={"Profesional"} info={"sadfffffffffffdddddsafsadfasdfasdfsadddasfdsadfdfffffffffddddddafssdafasdfasdfsadfsadfasd fsdafasdfffffffff fssssssssssssssssssssssssssffffffffffffffffffffffffffff"}/>
        <ContentCard/>
      </div>
    </div>
  );
}

export default Portfolio;