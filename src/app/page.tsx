'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    AOS.init();

    // Your existing JavaScript animations and logic here
    const initializeLoadingAnimation = () => {
      const loadingScreen = document.querySelector('.loading-screen');
      const loadingBar = document.querySelector('.loading-bar');

      if (loadingScreen && loadingBar) {
        gsap.to(loadingBar, {
          duration: 1.5,
          scaleX: 1,
          transformOrigin: 'left',
          ease: 'power4.inOut'
        });

        gsap.to(loadingScreen, {
          duration: 0.5,
          opacity: 0,
          delay: 2,
          onComplete: () => {
            document.body.classList.remove('loading');
            (loadingScreen as HTMLElement).style.display = 'none';
          }
        });
      }
    };

    initializeLoadingAnimation();
  }, []);

  return (
    <div className="container">
      <div className="loading-screen">
        <div className="loading-animation">
          <div className="loading-bar"></div>
        </div>
      </div>
      <header className="header">
        {/* Your header content */}
        <nav className="nav-container">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                <span className="nav-number">01</span>
                <span className="nav-slash">//</span>
                <span className="nav-text">home</span>
              </a>
            </li>
            {/* More nav items */}
          </ul>
        </nav>
      </header>
      
      <main>
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <h1>Hi 👋, I'm Your Name</h1>
            {/* Rest of your hero section */}
          </div>
        </section>
        
        {/* Other sections from your original HTML */}
      </main>

      <footer>
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
