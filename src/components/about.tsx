import styled, { keyframes } from 'styled-components';
import FadeInSection from './fadeinsection';

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px #64ffda, 0 0 30px #64ffda;
  }
  50% {
    box-shadow: 0 0 25px #64ffda, 0 0 50px #64ffda;
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  background: linear-gradient(135deg, #0a192f, #0f3b57);
  color: #cbd5e0;
  padding: 2rem;
  font-family: 'YourIntroFont', sans-serif;
  border: 2px solid #64ffda;
  border-radius: 10px;
  animation: ${glow} 3s ease-in-out infinite;
  max-width: 900px;
  margin: auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #64ffda;
  animation: ${fadeInUp} 1s ease forwards;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #a0a0a0;
  margin-bottom: 1rem;
  animation: ${fadeInUp} 1s ease forwards;
  animation-delay: 0.3s;
`;

const ResumeButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  color: #64ffda;
  border: 2px solid #64ffda;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #64ffda;
    color: #0a192f;
  }
`;

export default function About() {
  return (
    <Section id="about">
      <FadeInSection>
        <Heading>About Me</Heading>
        <Paragraph>
          Hi, My Name is Ming Huang, a graduate of both AUT University and Mission Ready. I am pursuing a Full Stack
          Developer Role where I can build the best web applications and ensure usability for users to access and interact with easily.
        </Paragraph>
        <Paragraph>My current tech stacks consist of React, Next.js, TypeScript, JavaScript, Microsoft
        Azure, C#, HTML, CSS, MongoDB, Docker, and .NET Core.</Paragraph>
        <Paragraph>
          Currently, I’m focused on building responsive full-stack web applications. However, I also have experience with mobile applications 
          through Flutter/Dart, Automation and Manual Testing with Robot Framework, Selenium, Cucumber, and Integration Testing with .NET Core.
        </Paragraph>
        <ResumeButton href="/pdf/Ming__Huang_-_Software_Developer.pdf" target="_blank" rel="noopener noreferrer">
          View My Resume
        </ResumeButton>
      </FadeInSection>
    </Section>
  );
}