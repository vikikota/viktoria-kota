import { useState, useEffect } from 'react';
import fox from '../assets/typing-fox.png';
import bird from '../assets/postbird.png';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  const images = [fox, bird];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleType = (count) => {
    // access word count number
    console.log(count)}
  

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
            <Typewriter
              words={['AND I LOVING']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <Typewriter
              words={['CODING', 'Sleep', 'Code', '']}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onType={handleType}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-1/2">
        <img src={images[currentImageIndex]} alt="typing fox" className="" />
      </div>
    </div>
  );
  }

export default Home;
