import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Typewriter({ text }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex += 1;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, [text]);

  return <div>{displayText}</div>;
}

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Typewriter;
