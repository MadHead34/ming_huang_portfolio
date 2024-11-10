import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const Section = styled.div<{ isVisible: boolean }>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) => (props.isVisible ? 'none' : 'translateY(20px)')};
  transition: opacity 0.6s ease, transform 0.6s ease;
`;

export default function FadeInSection({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  return <Section ref={ref} isVisible={isVisible}>{children}</Section>;
}