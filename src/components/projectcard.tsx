import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #1a202c;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: flex-start;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 150px;  // Adjusted width for smaller images
  height: 150px; // Adjusted height for smaller images
  overflow: hidden;
  margin-left: 1rem; // Space between text and image container
  flex-shrink: 0;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const LeftButton = styled(NavigationButton)`
  left: 10px;
`;

const RightButton = styled(NavigationButton)`
  right: 10px;
`;

const CardContent = styled.div`
  flex: 1;
`;

const CardDetails = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ccc;
  color: #a0a0a0;
`;

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string;
  link: string;
  dateComplete: string;
  images: string[];
  id?: string;
}

export default function ProjectCard({
  title,
  description,
  stack,
  dateComplete,
  link,
  images,
  id,
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Card id={id}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3>{title}</h3>
          <span style={{ marginLeft: '0.5rem', color: '#4caf50' }}>
            Completed
          </span>
        </div>
        <p style={{ color: '#ccd6f6' }}>{description}</p>
        <CardDetails>
          <p><strong>Tech Stack:</strong> {stack}</p>
          <p><strong>Date:</strong> {dateComplete}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </CardDetails>
      </CardContent>

      <ImageContainer>
        <CarouselImage
          src={images[currentImageIndex]}
          alt={`${title} screenshot`}
        />
        <LeftButton onClick={handlePrevImage}>❮</LeftButton>
        <RightButton onClick={handleNextImage}>❯</RightButton>
      </ImageContainer>
    </Card>
  );
}