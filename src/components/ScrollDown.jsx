import { useEffect, useState } from 'react';
import scrollDown from '../assets/scroll-down.svg';

function ScrollDown() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const { scrollY } = window;
    const shouldBeVisible = scrollY + 10 <= 25;
    setIsVisible(shouldBeVisible);
  };

  const handleClickScroll = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <img
        src={scrollDown}
        alt="scroll down icon"
        className={`animate-bounce h-12 w-12 my-6 ${isVisible ? 'visible' : 'hidden'} 2xl:hidden cursor-pointer`}
        onClick={handleClickScroll}
      />
    </div>
  );
}

export default ScrollDown;
