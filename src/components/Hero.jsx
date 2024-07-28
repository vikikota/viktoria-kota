import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import fox from '../assets/typing-fox.png';
import cat from '../assets/eating-cat.png';
import badger from '../assets/beer-badger.png';
import squirrel from '../assets/gaming-squirrel.png';
import ScrollToTopButton from './ScrollDownButton';

function Hero() {
  const images = [fox, squirrel, cat, badger];
  const texts = ['I LIKE CODING', 'I LIKE BOARD GAMES', 'I LIKE GASTRONOMY', 'I LIKE TASTING BEER'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [texts.length]);

  return (
    <div>
      <div className="px-4 md:px-0 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col items-center sm:items-start w-4/5 sm:w-2/5 md:w-7/12 xl:w-1/2 2xl:w-1/2 my-4">
          <div className="py-4 md:ps-12">
            <div className="font-elite text-xl sm:text-2xl md:text-2xl lg:text-3xl text-orange-800 font-bold uppercase">
              Oh hi!
            </div>
            <div className="flex flex-col">
              <div className="font-elite text-xl sm:text-2xl md:text-2xl lg:text-3xl text-orange-800 font-bold uppercase">
                <p> I'm a graphic designer and</p>
              </div>

              <div className="font-elite text-xl sm:text-2xl md:text-2xl lg:text-3xl text-orange-800 font-bold uppercase">
                <p> frontend developer!</p>
              </div>
            </div>
            <div className="font-elite text-xl sm:text-2xl md:text-2xl lg:text-3xl text-left text-gray-800 font-bold uppercase">
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
        <div className="flex justify-center xs:w-3/4 sm:w-3/5 md:w-1/2 xl:w-5/12 md:pt-6">
          <img src={images[currentIndex]} alt="what I like" />
        </div>
      </div>
      <div>
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default Hero;
