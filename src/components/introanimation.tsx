import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

const scaleUp = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const IntroContainer = styled.div<{ gradientX: number; gradientY: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({ gradientX, gradientY }) =>
    `linear-gradient(${gradientX}deg, #007cf0, #00dfd8)`};
  text-align: center;
  animation: ${scaleUp} 2s ease forwards;
  transition: background 0.1s ease;
`;

const Name = styled.h1`
  color: #64ffda;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  margin: 0.5rem 0;
  color: #64ffda;
`;

export default function IntroAnimation() {
  const [gradientAngle, setGradientAngle] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const angleX = (clientX / innerWidth) * 360; // Adjusts horizontal gradient shift
    const angleY = (clientY / innerHeight) * 360; // Adjusts vertical gradient shift
    setGradientAngle({ x: angleX, y: angleY });
  };

  return (
    <IntroContainer
      gradientX={gradientAngle.x}
      gradientY={gradientAngle.y}
      onMouseMove={handleMouseMove}
    >
      <Name>Ming Huang</Name>
      <Paragraph>Full Stack Developer</Paragraph>
      <Paragraph>Currently Pursuing a Full Time Full Stack Developer Role</Paragraph>
    </IntroContainer>
  );
}