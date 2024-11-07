import Layout from '../components/layout';
import Landing from '../components/landing';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

export default function Home() {
  return (
    <Layout>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}