import React from 'react';
import './Experience.css'
import Menu from '../Menu';
import Title from '../Title';
import ContentCard from '../ContentCard';
import arrow from '../assets/Guidearrow.gif'


const Experience = () => {
  return (
    <div className="experience-container">
      <Menu/>
      <Title text="Experience"/>
      <div className="content-cards">
        <ContentCard title={"Personal"} info={"sadfffffffffffdddddsafsadfasdfasdfsadddasfdsadfdfffffffffddddddafssdafasdfasdfsadfsadfasd fsdafasdfffffffff fssssssssssssssssssssssssssffffffffffffffffffffffffffff"}/>
        <img src={arrow} alt='arrow'className="company-logo"/>
        <img src={arrow} alt='arrow'className="arrow"/>
        <ContentCard title={"Profesional"} info={"sadfffffffffffdddddsafsadfasdfasdfsadddasfdsadfdfffffffffddddddafssdafasdfasdfsadfsadfasd fsdafasdfffffffff fssssssssssssssssssssssssssffffffffffffffffffffffffffff"}/>
        <ContentCard title={"Profesional"} info={"sadfffffffffffdddddsafsadfasdfasdfsadddasfdsadfdfffffffffddddddafssdafasdfasdfsadfsadfasd fsdafasdfffffffff fssssssssssssssssssssssssssffffffffffffffffffffffffffff"}/>
        <img src={arrow} alt='arrow'className="arrow"/>
      </div>
    </div>
  );
};

export default Experience;