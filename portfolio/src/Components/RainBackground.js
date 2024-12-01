import React, { useEffect } from 'react';
import './RainBackground.css';

const RainBackground = () => {
    // Start with just 50 drops for testing
    const drops = Array.from({ length: 50 }, (_, i) => (
        <div 
            key={i} 
            className="rain-drop"
            style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
            }}
        />
    ));

    // Add a useEffect to verify the component is mounting
    useEffect(() => {
        console.log('RainBackground mounted');
    }, []);

    return (
        <div className="rain-container">
            {drops}
        </div>
    );
};

export default RainBackground;