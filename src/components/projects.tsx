import ProjectCard from './projectcard';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #fff; /* Dark background for consistency */
  padding: 4rem 2rem;
`;

const ProjectNav = styled.nav`
  position: sticky;
  top: 0;
  background: #1a202c;
  padding: 1rem;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #64ffda;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  font-size: 1rem;
  color: #ccd6f6;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }
`;

const Heading = styled.h2`
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 2rem;
`;

export default function Projects() {
  return (
    <Section id="projects">
      <ProjectNav>
        <NavLinks>
          <NavLink><a href="#project1">Bee Intelligence</a></NavLink>
          <NavLink><a href="#project2">Mission 3</a></NavLink>
          <NavLink><a href="#project3">Mission 5 Front</a></NavLink>
          <NavLink><a href="#project4">Mission 5 Back</a></NavLink>
          <NavLink><a href="#project5">Mission 5 Whole</a></NavLink>
          <NavLink><a href="#project6">Stellify</a></NavLink>
          <NavLink><a href="#project7">Manana Website</a></NavLink>
          <NavLink><a href="#project8">My Portfolio Website Design</a></NavLink>
        </NavLinks>
      </ProjectNav>
      <Heading>Projects</Heading>
      <ProjectCard
        id="project1"
        title="Bee Intelligence BeeApp"
        description="From AUT R&D Project for almost a year to work on an Android Mobile Reporting and Dashboard for Bee Intelligence. Again no codebase as the codes are outsourced to Bee Intelligence"
        stack="Flutter, Dart, Android"
        link="https://www.bee-intelligence.com/"
        dateComplete="February 2019 - December 2019"
      />
      <ProjectCard
        id="project2"
        title="Mission Ready Mission 3 Car Tuners Claim History Form"
        description="A Mission Ready Project I built with using C#, .Net Core and WebAPI. The Purpose of the project is to convert the claim history into a risk rating where a user enters their claim and Turner reads the claim history and converts them based on the keyword that matches on their risk list."
        stack="C#, .NET Core, GitHub ActionFlow, Postman API"
        link="https://github.com/MadHead34/Mission3Redemption-Mission-Ready-Mission-3-Turner-Cars-Claim-History"
        dateComplete="March 2023"
      />
      <ProjectCard
        id="project3"
        title="Mission Ready 5 FrontEnd Part"
        description="A frontend folder containing the design part of the Metro Property Website and the web application of the Houses."
        stack="JavaScript, HTML, CSS, Docker"
        link="https://github.com/MadHead34/metropropertyclient-FrontEnd-Folder-for-Mission-Ready-Mission-5-Week-2-Project"
        dateComplete="March 2023"
      />
      <ProjectCard
      id="project4"
        title="Mission Ready 5 BackEnd Part"
        description="A backend folder containing the code to connect with MongoDB, Must download both Frontend and Backend folder and put them as."
        stack="JavaScript, Docker, MongoDB"
        link="https://github.com/MadHead34/metropropertyclient-FrontEnd-Folder-for-Mission-Ready-Mission-5-Week-2-Project"
        dateComplete="March 2023"
      />
      <ProjectCard
      id="project5"
        title="Mission Ready 5 Combination of both folders and DockerFile"
        description="A combination of both frontend and backend part."
        stack="JavaScript, HTML, CSS, MongoDB, Docker"
        link="https://github.com/MadHead34/Mission5W2--Mission-Ready-Project-for-Mission5-Metro-Property-Search-Page"
        dateComplete="March 2023"
      />
      <ProjectCard
      id="project6"
        title="Datacom Stellify"
        description="A Web Mobile App used to help users aged between 15-35 to say their unsaid words to their lost loved ones. Cannot share codes due to company privacy but can share the official website of Stellify"
        stack="Flutter, Dart"
        link="https://bestawards.co.nz/social-good-award/student-social-good/ryan-jung-hwan-baek/stellify-1/"
        dateComplete="July 2023"
      />
      <ProjectCard
      id="project7"
        title="Manana Website Revamp"
        description="Making adjustments and improvements to the features of the existing Manana Website. Credit to Manana and URL: https://www.manana.co.nz/"
        stack="ReactJS, JavaScript, HTML, CSS"
        link="https://github.com/MadHead34/revampwebsite"
        dateComplete="November 2024"
      />
      <ProjectCard
      id="project8"
        title="Ming Huang Portfolio Website"
        description="You are looking at it right now :)."
        stack="React, NextJS, TypeScript, Tailwind CSS"
        link="https://github.com/MadHead34/revampwebsite"
        dateComplete="November 2024"
      />
    </Section>
  );
}