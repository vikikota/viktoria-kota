import { useState, useEffect } from 'react';

function Typewriter({ texts }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentCharacterIndex < texts[currentTextIndex].length) {
        setDisplayText((prevDisplayText) => prevDisplayText + texts[currentTextIndex][currentCharacterIndex]);
        setCurrentCharacterIndex((prevIndex) => prevIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentCharacterIndex(0);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setDisplayText('');
        }, 5000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [texts, currentTextIndex, currentCharacterIndex]);

  return <div>{displayText}</div>;
}

export default Typewriter;
