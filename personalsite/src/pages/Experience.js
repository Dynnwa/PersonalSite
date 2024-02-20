import React from 'react';
import './Experience.css'
import Menu from '../Menu';
import Title from '../Title';
import ContentCard from '../ContentCard';
import Copperleaf from '../assets/Copperleaf.png'
import Diligent from '../assets/Diligent.png'
import SAP from '../assets/SAP.png'

const Experience = () => {
  return (
    <div className="experience-container">
      <Menu/>
      <Title text="Experience"/>
      <div className="content-cards">
        <ContentCard title={"SWE Intern @Copperleaf"} info={"sadfffffffffffdddddsafsadfasdfasdfsadddasfdsadfdfffffffffddddddafssdafasdfasdfsadfsadfasd fsdafasdfffffffff fssssssssssssssssssssssssssffffffffffffffffffffffffffff"}/>
        <img src={Copperleaf} alt='arrow'className="company-logo"/>
        <img src={Diligent} alt='arrow'className="company-logo"/>
        <ContentCard title={"SWE Intern @Diligent"} info={"sadfffffffffffdddddsafsadfasdfasdfsadddasfdsadfdfffffffffddddddafssdafasdfasdfsadfsadfasd fsdafasdfffffffff fssssssssssssssssssssssssssffffffffffffffffffffffffffff"}/>
        <ContentCard title={"Devops Intern @SAP"} info={"sadfffffffffffdddddsafsadfasdfasdfsadddasfdsadfdfffffffffddddddafssdafasdfasdfsadfsadfasd fsdafasdfffffffff fssssssssssssssssssssssssssffffffffffffffffffffffffffff"}/>
        <img src={SAP} alt='arrow'className="company-logo"/>
      </div>
    </div>
  );
};

export default Experience;