import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import fox from '../assets/typing-fox.png';
import cat from '../assets/eating-cat.png';
import badger from '../assets/beer-badger.png';
import squirrel from '../assets/gaming-squirrel.png';
import ScrollToTopButton from './ScrollDownButton';

function Hero() {
  const images = [fox, squirrel, cat, badger];
  const texts = ['I LIKE CODING', 'I LIKE BOARD GAMES', 'I LIKE GASTRONOMY', 'I LIKE BREWING'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [texts.length]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1000px]">
        <div className="flex flex-col items-center md:items-start w-full sm:w-2/5 md:w-2/5 my-4">
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
                options={{
                  strings: [texts[currentIndex]],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 70,
                  delay: 100,
                  pauseFor: 5000,
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center xs:w-3/4 sm:w-3/5 md:w-3/5 lg:w-2/5 md:pt-6">
          <img src={images[currentIndex]} alt="what I like" className="h-100" />
        </div>
      </div>
      <div>
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default Hero;
