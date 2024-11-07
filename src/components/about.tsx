import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
  color: #333;
`;

export default function About() {
  return (
    <Section id="about">
      <h2>About Me</h2>
      <p>
        I'm a full stack developer specializing in building and designing digital
        experiences. Currently, I’m focused on building responsive full stack web applications.
      </p>
    </Section>
  );
}