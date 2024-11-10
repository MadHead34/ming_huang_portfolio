import Layout from '../components/layout';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import WorkExperience from '../components/workexperience';
import IntroAnimation from '../components/introanimation';

export default function Home() {
  return (
    <Layout>
      <IntroAnimation />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </Layout>
  );
}