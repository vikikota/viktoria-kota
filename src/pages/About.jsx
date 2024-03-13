import AboutMe from '../components/AboutMe';
import ScrollDownButton from '../components/ScrollDownButton';
import Works from '../components/Works';

function About() {
  return (
    <div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="works" className="">
        <Works />
      </div>
      <ScrollDownButton />
    </div>
  );
}

export default About;
