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
        <Title text={"Portfolio (WORK IN PROGRESS (: )"}/>
      <div className="portfolio-grid">
        <button className="content-button" onClick={() => handleClick("https://github.com/Dynnwa/PersonalSite")}>
            <ContentCard title={"Danny Town"} info={"React Website\n (React, HTML, CSS)\n\n - Designed and developed a vibrant React website with a playful cartoon aesthetic, creating an engaging and fun user experience \n\n - Incorporated React keyboard functionality to enhance user interaction, providing an intuitive and seamless navigation experience"}/>
        </button>
        <ContentCard/>
        <ContentCard/>
        <button className="content-button" onClick={() => handleClick("https://github.com/hesharon/BackStory")}>
            <ContentCard title={"Backstory"} info={"Full stack VSCO clone\n (React, Redux, Mongodb, Express.js)\n\n - Collaborated with team to design and create a full stack application inspired by VSCO using React and Redux for the front end, and express and MongoDB database back end \n\n - Developed RESTful APIs using Express, allowing seamless communication between the frontend and backend components \n\n - Leveraged react redux for state management, ensuring efficient data flow and improved performance "}/>
        </button>
        <button className="content-button" onClick={() => handleClick("https://github.com/Dynnwa/PHP-Oracle_Translink_Model")}>
            <ContentCard title={"Public Transit Model"} info={"PHP Web Aplication\n (PHP, SQL, Orcale)\n\n - Developed a comprehensive transit system application using PHP and Oracle SQL, showcasing proficiency in full-stack development to deliver a robust and user-friendly solution"}/>
        </button>
        <ContentCard/>
      </div>
    </div>
  );
}

export default Portfolio;