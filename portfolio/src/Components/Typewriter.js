import React, { useState, useEffect } from 'react';

const Typewriter = () => {
    const phrases = [
        "Software Engineer",
        "Web Developer",
        "Data Scientist",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationDuration, setAnimationDuration] = useState(0);

    useEffect(() => {
        const phraseLength = phrases[currentIndex].length;
        const duration = phraseLength * 0.1 + 1; // 0.1s per character + 1s pause
        setAnimationDuration(duration);
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 1000); // Match duration of the typewriter animation (5s)
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center h-16">
            <div
                className={`text-2xl font-bold overflow-hidden whitespace-nowrap border-r-2 border-black`}
                style={{
                    animation: `typewriter ${animationDuration}s steps(${phrases[currentIndex].length}) 1s normal both, blink 0.7s step-end infinite`,
                }}
            >
                {phrases[currentIndex]}
            </div>
        </div>
    );
};

export default Typewriter;
