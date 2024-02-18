import React from 'react';
import './Home.css'
import PageButton from './PageButton';
import House1 from './assets/house1.png';
import House3 from './assets/house3.png';

function Home() {
  return (
    <div className="home-container">
      <div className="grid">
        <div className="about">
                <PageButton className="page-button" text="About" imageSrc={House1} linkTo={"/about"}/>
        </div>
        <div className="experience"> 
                <PageButton className="page-button" text="Experience"imageSrc={House3}linkTo={"/about"}/>
        </div>
      <PageButton className="page-button" text="Resume"imageSrc={House3}linkTo={"/about"}/>
      <PageButton className="page-button" text="Portfolio"imageSrc={House1}linkTo={"/about"}/>
      </div>
    </div>
  );
}

export default Home;