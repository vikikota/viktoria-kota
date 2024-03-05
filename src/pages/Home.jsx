import fox from '../assets/typing-fox.png';
import Typewriter from '../components/Typewriter';

function Home() {
  const displayText = 'AND I LOVE CODING';

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center my-auto">
      <div className="flex flex-col items-center w-full sm:w-2/5 md:w-2/5">
        <div className="py-4">
          <div className="font-elite text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-800 font-bold uppercase">
            Oh hi!
          </div>
          <div className="flex flex-row sm:flex-col">
            <div className="font-elite text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-800 font-bold uppercase">
              <p> I am a junior&nbsp;</p>
            </div>
            <div className="font-elite text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-800 font-bold uppercase">
              <p> web developer!</p>
            </div>
          </div>
          <div className="font-elite text-lg sm:text-xl md:text-2xl lg:text-3xl text-left text-gray-800 font-bold uppercase">
            <Typewriter text={displayText} />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full sm:w-4/5 md:w-3/5 lg:w-1/2">
        <img src={fox} alt="typing fox" className="" />
      </div>
    </div>
  );
}

export default Home;
