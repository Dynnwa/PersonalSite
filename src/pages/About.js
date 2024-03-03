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
        <ContentCard title={"Personal"} info={"Hello there! \n\nI'm a Vancouver native, proudly navigating my fifth year at the University of British Columbia, where I'm immersed in the fascinating realms of computer science and statistics. I have an insatiable appetite for learning and thrive on the thrill of diving headfirst into new challenges.\n\n Beyond the world of academia, you'll find me pushing my limits as a competitive powerlifter, relishing the mental stimulation of solving puzzles, and experimenting in the kitchen to concoct delicious culinary creations. Life, to me, is an ever-evolving journey of discovery, and I embrace each opportunity to explore the depths of knowledge and experience."}/>
        <ContentCard title={"Profesional"} info={"In my professional journey, I've accrued a wealth of experience through two years of intensive internships across three diverse companies, spanning the spectrum from dynamic startups to industry giants in the tech world.\n\n My roles have encompassed end-to-end development, from architecting solutions to seamless deployment, with a versatile skill set that spans software engineering to DevOps responsibilities.\n\n Delving into the intricacies of full-stack development, I've honed my abilities to take ownership of projects, a mindset that involves not just meeting but exceeding expectations.\n\n Feedback is a crucial tool in my professional growth, and I actively seek and embrace it to continually enhance my skills and ensure that each subsequent project is executed with even greater precision and excellence."}/>
      </div>
    </div>
  );
};

export default About;
