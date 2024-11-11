import styled from 'styled-components';
import FadeInSection from './fadeinsection';

const WorkSection = styled.section`
  background-color: #1a202c;
  padding: 4rem 2rem;
`;

const ExperienceItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 2rem 0;
  background: #1a1a1a;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const InfoColumn = styled.div`
  flex: 1;
  color: #64ffda;
`;

const DetailsColumn = styled.div`
  flex: 2;
  color: #ccd6f6;
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const CompanyDate = styled.p`
  font-size: 0.9rem;
  color: #a8b2d1;
  margin: 0.2rem 0;
`;

const Description = styled.ul`
  list-style-type: disc;
  padding-left: 1rem;
`;

export default function WorkExperience() {
  return (
    <WorkSection id="work">
        <FadeInSection>
      <h2>Work Experience</h2>
      </FadeInSection>
      <FadeInSection>
      <ExperienceItem>
        <InfoColumn>
          <JobTitle>Automation Developer Intern</JobTitle>
          <CompanyDate>ANZ Bank Limited - Nov 2021 to Feb 2022</CompanyDate>
        </InfoColumn>
        <DetailsColumn>
          <Description>
            <li>Worked on an integration testing on Mortgage Loan of Third House Party.</li>
            <li>Collaborated with Developers and Testers to test the work queue coming from Mortgage Loan Statements.</li>
            <li>Using KofaxTotalAgility to automate the testing.</li>
            <li>Built a Mock Wireframe for the work queue of ANZ Loans Web Application.</li>
          </Description>
        </DetailsColumn>
      </ExperienceItem>
      </FadeInSection>
      <FadeInSection>
      <ExperienceItem>
        <InfoColumn>
          <JobTitle>Software Developer Intern</JobTitle>
          <CompanyDate>Datacom - April 2023 to June 2023</CompanyDate>
        </InfoColumn>
        <DetailsColumn>
          <Description>
            <li>Collaborated with UI/UX Designers to meet with the client&apos;s design criteria.</li>
            <li>Ensuring that the user interface is very friendly for users to be able send their message in the memorial.</li>
            <li>Built an MVP Product in 10 weeks time and has at least one core features achieved.</li>
          </Description>
        </DetailsColumn>
      </ExperienceItem>
      </FadeInSection>
      <FadeInSection>
      <ExperienceItem>
        <InfoColumn>
          <JobTitle>Checkout Operator</JobTitle>
          <CompanyDate>Woolworths NZ - March 2017 to Present</CompanyDate>
        </InfoColumn>
        <DetailsColumn>
          <Description>
            <li>Enhanced customer service skills in a fast-paced environment.</li>
            <li>Managed transactions and ensured efficient service delivery.</li>
            <li>Serving customers in a professional and friendly manner.</li>
          </Description>
        </DetailsColumn>
      </ExperienceItem>
      </FadeInSection>
    </WorkSection>
  );
}