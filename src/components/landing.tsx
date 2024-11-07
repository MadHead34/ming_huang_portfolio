import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #1a1a1a;
  color: #f9f9f9;
  text-align: center;
`;

export default function Landing() {
  return (
    <Section>
      <h1>Hello, I’m [Your Name]</h1>
      <p>Full Stack Developer | React | Node.js</p>
    </Section>
  );
}