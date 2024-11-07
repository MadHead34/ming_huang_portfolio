import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #1a1a1a;
  color: #f9f9f9;
  text-align: center;
`;

export default function Contact() {
  return (
    <Section id="contact">
      <h2>Contact Me</h2>
      <p>
        I'd love to hear from you! Feel free to reach out via email or connect
        with me on LinkedIn.
      </p>
    </Section>
  );
}