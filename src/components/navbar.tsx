import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Section = styled.section`
  display: flex;
  justify-content: center;
  background-color: #1a202c;
  padding: 1rem 0;
  border-bottom: 3px solid;
  border-image: linear-gradient(90deg, #4fd1c5, #63b3ed) 1;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

interface StyledLinkProps {
  isActive: boolean;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  color: ${({ isActive }) => (isActive ? '#63b3ed' : '#4fd1c5')};
  font-size: 1.2rem;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  text-decoration: none;
  position: relative;
  padding: 0.5rem;
  border-radius: 5px;
  transition: color 0.3s ease, transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #63b3ed;
    transform: translateY(-3px);
    background-color: rgba(72, 187, 255, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    background: #63b3ed;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export default function Navbar() {
  const router = useRouter();

  const getIsActive = (href: string) => {
    return router.asPath === href;
  };

  return (
    <Section id="navbar">
      <Nav>
        <StyledLink href="/" isActive={getIsActive('/')}>Home</StyledLink>
        <StyledLink href="#about" isActive={getIsActive('#about')}>About</StyledLink>
        <StyledLink href="#projects" isActive={getIsActive('#projects')}>Projects</StyledLink>
        <StyledLink href="#contact" isActive={getIsActive('#contact')}>Contact</StyledLink>
        <StyledLink href="#work" isActive={getIsActive('#work')}>Work Experience</StyledLink>
      </Nav>
    </Section>
  );
}