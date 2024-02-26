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
                <PageButton className="page-button" text="About" imageSrc={House1} link={'/about'}/>
        </div>
        <div className="experience"> 
                <PageButton className="page-button" text="Experience"imageSrc={House3} link={'/experience'}/>
        </div>
      <PageButton className="page-button" text="Resume"imageSrc={House3}/>
      <PageButton className="page-button" text="Portfolio (WIP)"imageSrc={House1} link={'/portfolio'}/>
      </div>
    </div>
  );
}

export default Home;