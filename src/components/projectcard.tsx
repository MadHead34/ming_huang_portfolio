import styled from 'styled-components';

const Card = styled.div`
  background-color: #1a202c;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const StatusLabel = styled.span`
  background-color: #4caf50; /* Green for completed */
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  font-size: 0.85rem;
  margin-left: 0.5rem;
`;

const CardDetails = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ccc;
  color: #a0a0a0;
`;

const Description = styled.p`
  color: #ccd6f6; /* Change to your desired color */
`;

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string;
  link: string;
  dateComplete: string;
  id?: string;
}

export default function ProjectCard({ title, description, stack, dateComplete, link, id }: ProjectCardProps) {
  return (
    <Card id={id}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h3>{title}</h3>
        <StatusLabel>Completed</StatusLabel>
      </div>
      <Description>{description}</Description>
      <CardDetails>
        <p><strong>Tech Stack:</strong> {stack}</p>
        <p><strong>Date:</strong> {dateComplete}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
      </CardDetails>
    </Card>
  );
}