import { useState, useEffect } from 'react';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
}

export const Typewriter = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 2000,
}: TypewriterProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        
        if (currentText.length === currentPhrase.length) {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
        }
      } else {
        // Deleting
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        
        if (currentText.length === 0) {
          // Finished deleting, move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases]);

  return (
    <span className="border-r-4 border-agri-gold pr-1 animate-pulse">
      {currentText}
    </span>
  );
};
