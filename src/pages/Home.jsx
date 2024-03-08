import { useState, useEffect } from 'react';
import fox from '../assets/typing-fox.png';
import bird from '../assets/postbird.png';
import cat from '../assets/eating-cat.png';
import badger from '../assets/beer-badger.png';
import squirrel from '../assets/gaming-squirrel.png';
import Typewriter from 'typewriter-effect';

function Home() {
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
    <div className="flex flex-col sm:flex-row justify-center items-center my-auto">
      <div className="flex flex-col items-center md:items-start w-full sm:w-2/5 md:w-2/5">
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
            />{' '}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-4/5 sm:w-3/5 xl:w-1/3 xxl:w-full">
        <img src={images[currentIndex]} alt="what I like" className="" />
      </div>
    </div>
  );
}

export default Home;
