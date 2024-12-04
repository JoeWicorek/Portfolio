import React from 'react';
import './RainBackground.css';

const RainBackground = () => {
    const drops = Array.from({ length: 50 }).map((_, index) => (
        <div key={index} className="drop-container">
            <div
                className="drop"
                style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${1.8 + Math.random()}s`,
                    opacity: 0.4 + Math.random() * 0.3,
                }}
            />
            <div
                className="splash"
                style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    opacity: 0.7,
                }}
            />
        </div>
    ));

    return (
        <div className="rain-wrapper">
            <div className="rain-container">
                {drops}
            </div>
        </div>
    );
};

export default RainBackground;