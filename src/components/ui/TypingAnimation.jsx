import React, { useState, useEffect } from "react";

const TypingAnimation = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1000,
  textStyle,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text.length < currentWord.length) {
      // Typing effect
      timeout = setTimeout(() => {
        setText((prev) => prev + currentWord[prev.length]);
      }, typingSpeed);
    } else if (!isDeleting && text.length === currentWord.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text.length > 0) {
      // Deleting effect
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else if (isDeleting && text.length === 0) {
      // Move to the next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return (
    <span className={`${textStyle}`}>
      {text}
      <span className="ms-1">|</span>
    </span>
  );
};

export default TypingAnimation;
