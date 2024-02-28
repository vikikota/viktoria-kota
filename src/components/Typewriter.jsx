import { useState, useEffect } from 'react';

function Typewriter({ text }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, [text]);

  return <div className="font-reenie text-5xl">{displayText}</div>;
}

export default Typewriter;
