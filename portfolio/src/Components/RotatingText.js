import React, { useState, useEffect } from 'react';
import './RotatingText.css';


const RotatingText = () => {
    const phrases = [
        "Software Engineer",
        "Web Developer",
        "Data Scientist",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="rotating-text">
            <span>{phrases[currentIndex]} </span> 
            </div>
            <div className="location-text">
             based in Seattle, Washington
            </div>
          </div>
    );
};

export default RotatingText;
