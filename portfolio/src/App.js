// src/App.js
import React from 'react';
import Hero from './Hero';
import RainBackground from './Components/RainBackground';

function App() {
  return (
    <div>
      <RainBackground />
      <Hero />
      {/* Other sections like About, Projects, Contact, etc. */}
    </div>
  );
}

export default App;