import React from 'react';
import './RainBackground.css';

const RainBackground = () => {
    const drops = Array.from({ length: 30 }).map((_, index) => {
        const duration = 2 + (Math.random() * 0.5);
        const startingPoint = -(Math.random() * 100);
        
        return (
            <div key={index} className="drop-container">
                <div
                    className="drop"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${startingPoint}vh`,
                        opacity: 0.3 + Math.random() * 0.2,
                        transform: 'rotate(3deg)',
                        animation: `continuousFall ${duration}s linear infinite`,
                        width: '0.5px',
                        height: '15px'
                    }}
                />
                <div
                    className="splash"
                    style={{
                        left: `${Math.random() * 100}%`,
                        opacity: 0.5,
                        animation: `splash ${duration}s linear infinite`
                    }}
                />
            </div>
        );
    });

    return (
        <div className="rain-wrapper">
            <div className="rain-container">
                {drops}
            </div>
        </div>
    );
};

export default RainBackground;