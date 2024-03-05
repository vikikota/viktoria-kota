import fox from '../assets/typing-fox.png';
import Typewriter from '../components/Typewriter';

function Home() {
  const displayText = 'AND I LOVE CODING';

  return (
    <div className="container flex flex-col md:flex-row">
      <div className="flex flex-col">
        <div className="font-elite text-xl md:text-2xl lg:text-3xl text-orange-800 font-bold uppercase">Oh hi!</div>
        <div className="font-elite text-xl md:text-2xl lg:text-3xl text-orange-800 font-bold uppercase">
          I am a junior web developer!
        </div>
        <div className="font-elite text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold uppercase">
          <Typewriter text={displayText} />
        </div>{' '}
      </div>
      <div className="">
        <img src={fox} alt="typing fox" className="w-4/5 me-0 md:me-20 mt-5" />
      </div>
    </div>
  );
}

export default Home;
