import ProjectCard from './projectcard';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #e9e9e9;
`;

export default function Projects() {
  return (
    <Section id="projects">
      <h2>Projects</h2>
      <ProjectCard
        title="Sample Project"
        description="A full stack project that I built with React and Node.js."
        stack="React, Node.js, MongoDB"
        link="https://github.com/yourusername/sample-project"
      />
      {/* Add more ProjectCards here */}
    </Section>
  );
}