import React, { useEffect, useState } from 'react';

const Typewriter = () => {
  const textLines = [
    'Computer Science graduate with First Class Honours, aspiring towards a career in software engineering and software development.'
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

    const typingInterval = setInterval(typeWriter, 45); // Adjust typing speed as needed

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
