import AboutMe from '../components/AboutMe';
import Growth from '../components/Growth';
import ScrollDownButton from '../components/ScrollDownButton';

function About() {
  return (
    <div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="growth" className="mt-12 md:mt-16">
        <Growth />
      </div>
      <ScrollDownButton />
    </div>
  );
}

export default About;
