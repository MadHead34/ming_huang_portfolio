import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string;
  link: string;
}

export default function ProjectCard({ title, description, stack, link }: ProjectCardProps) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Tech Stack: {stack}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </Card>
  );
}