import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = () => {
    const phrases = [
        "Software Engineer",
        "Web Developer",
        "Data Engineer",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const typingSpeed = 100; // Speed in milliseconds per character
        const deletingSpeed = 50; // Faster deletion speed
        const pauseDuration = 1000; // Pause when word is complete

        const handleTyping = () => {
            const currentPhrase = phrases[currentIndex];
            
            if (!isDeleting) {
                if (displayText !== currentPhrase) {
                    setDisplayText(currentPhrase.substring(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                if (displayText === '') {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % phrases.length);
                } else {
                    setDisplayText(currentPhrase.substring(0, displayText.length - 1));
                }
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentIndex]);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-2xl font-bold relative">
                <span className="absolute left-0">A</span>
                <span className="ml-6">{displayText}</span>
                <span className="border-r-2 border-black animate-blink"></span>
            </div>
        </div>
    );
};

export default Typewriter;
