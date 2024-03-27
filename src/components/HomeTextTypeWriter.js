import React, { useEffect, useState } from 'react';

const Typewriter = () => {
  const textLines = [
    'A Computer Science student at Brunel University London and a junior full stack developer.'
  ];
  const [currentLine, setCurrentLine] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typeWriter = () => {
      if (currentIndex < textLines.length) {
        const currentText = textLines[currentIndex];
        const nextIndex = currentLine.length === currentText.length ? currentIndex + 1 : currentIndex;

        setCurrentLine(currentText.substring(0, currentLine.length + 1));
        setCurrentIndex(nextIndex);
      }
    };

    const typingInterval = setInterval(typeWriter, 75); // Adjust typing speed as needed

    return () => {
      clearInterval(typingInterval);
    };
  },);

  return (
    <p className="homePara1">
      {currentLine}
    </p>
  );
};

export default Typewriter;
