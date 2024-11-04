import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ textArray, typingSpeed = 100, eraseSpeed = 50, delay = 1000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let charIndex = 0;
    let interval;

    if (isTyping) {
      // Typing effect
      interval = setInterval(() => {
        setCurrentText((prev) => prev + textArray[currentIndex][charIndex]);
        charIndex++;

        if (charIndex === textArray[currentIndex].length) {
          clearInterval(interval);
          setTimeout(() => setIsTyping(false), delay); // Wait before erasing
        }
      }, typingSpeed);
    } else {
      // Erasing effect
      interval = setInterval(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText.length === 0) {
          clearInterval(interval);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          setIsTyping(true);
        }
      }, eraseSpeed);
    }

    return () => clearInterval(interval);
  }, [isTyping, currentIndex, currentText, textArray, typingSpeed, eraseSpeed, delay]);

  return (
    <div className="typewriter">
      {currentText}
      <span className="cursor">|</span>
    </div>
  );
};

export default Typewriter;
