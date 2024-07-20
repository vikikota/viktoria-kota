import { useEffect, useState } from 'react';
import scrollDown from '../assets/scroll-down.png';

function ScrollDown() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const { scrollY } = window;
    const shouldBeVisible = scrollY + 10 <= 60;
    setIsVisible(shouldBeVisible);
  };

  const handleClickScroll = () => {
    const isMobile = window.innerWidth <= 768;
    const id = isMobile ? 'resume' : 'about-short';

    setTimeout(() => {
      const scrollElement = document.querySelector(`#${id}`);

      if (scrollElement) {
        scrollElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-end pt-6">
      <img
        src={scrollDown}
        alt="scroll down icon"
        className={`animate-bounce h-14 sm:h-20 sm:my-4 my-2 ${isVisible ? 'visible' : 'hidden'} cursor-pointer`}
        onClick={() => handleClickScroll('contact')}
      />
    </div>
  );
}

export default ScrollDown;
