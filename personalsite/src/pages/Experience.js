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
        <ContentCard title={"Devops Intern @SAP"} info={"Sept 2023 - Aug 2024\n\n - Implemented a machine learning feature for deployment failure classification enabling quicker error handling\n\n - Managed and maintained Continuous Integration/Continuous Deployment (CI/CD) pipelines, employing tools such as Jenkins, Git, and Docker to facilitate seamless and swift software delivery\n\n - Proficient in scripting languages such as Python and Bash to automate tasks and improve workflow efficiency"}/>
        <img src={SAP} alt='arrow'className="company-logo"/>
        <img src={Diligent} alt='arrow'className="company-logo"/>
        <ContentCard title={"SWE Intern @Diligent"} info={"Jan 2023 - Aug 2023\n\n - Led and executed front-end development in React as a pivotal part of the product release, contributing to a successful launch\n\n - Collaborated closely with UI/UX designers to integrate design seamlessly into the existing user experience\n\n - Played a key role in the migration from an in-house server design to AWS, employing IaC tools like Terraform to automate infrastructure provisioning and configuration"}/>
        <ContentCard title={"SWE Intern @Copperleaf"} info={"Jan 2022 - Aug 2022\n\n - Enhanced database performance significantly by refactoring the Oracle database schema using best practices, leading to a 50% improvement in data retrieval fetch times\n\n - Revamped the Angular front-end by redesigning and updating legacy components, aligning them with modern design principles to improve the overall user experience\n\n - Collaborated with the development team, utilizing C# to write foundational code for seamless integration of AI into the existing product"}/>
        <img src={Copperleaf} alt='arrow'className="company-logo"/>
      </div>
    </div>
  );
};

export default Experience;