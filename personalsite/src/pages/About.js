import React from 'react';
import './About.css'
import Menu from '../Menu';
import Title from '../Title';
import ContentCard from '../ContentCard';

const About = () => {
  return (
    <div className="about-container">
      <Menu/>
      <Title text="About"/>
      <div className="content-cards">
        <ContentCard title={"Personal"} info={"sadfffffffffffdddddsafsadfasdfasdfsadddasfdsadfdfffffffffddddddafssdafasdfasdfsadfsadfasd fsdafasdfffffffff fssssssssssssssssssssssssssffffffffffffffffffffffffffff"}/>
        <ContentCard title={"Profesional"} info={"sadfffffffffffdddddsafsadfasdfasdfsadddasfdsadfdfffffffffddddddafssdafasdfasdfsadfsadfasd fsdafasdfffffffff fssssssssssssssssssssssssssffffffffffffffffffffffffffff"}/>
      </div>
    </div>
  );
};

export default About;