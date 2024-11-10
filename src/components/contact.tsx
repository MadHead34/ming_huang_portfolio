import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import FadeInSection from './fadeinsection';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #1a1a1a;
  color: #f9f9f9;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const IconLink = styled.a`
  color: #f9f9f9;
  font-size: 2rem;
  transition: color 0.3s;

  &:hover {
    color: #66fcf1; /* You can adjust this color to suit your theme */
  }
`;

export default function Contact() {
  return (
    <Section id="contact">
      <FadeInSection>
      <h2>Contact Me</h2>
      <p>
        I'd love to hear from you! Feel free to reach out via email or connect
        with me on LinkedIn and check out my GitHub.
      </p>
      <IconContainer>
        <IconLink href="https://www.linkedin.com/in/ming-huang-35b770168/" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://github.com/MadHead34" target="_blank" aria-label="GitHub">
          <FaGithub />
        </IconLink>
        <IconLink href="mailto:mingh2865@gmail.com" aria-label="Email">
          <FaEnvelope />
        </IconLink>
      </IconContainer>
      </FadeInSection>
    </Section>
  );
}