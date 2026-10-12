import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleScrollReveal = () => {
      const windowHeight = window.innerHeight;
      const revealElements = document.querySelectorAll('.reveal');

      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Trigger reveal when element top reaches 60px above bottom of window
        if (rect.top <= windowHeight - 50 && rect.bottom >= 0) {
          el.classList.add('is-revealed');
        } else if (rect.top > windowHeight) {
          // Reset when scrolled back above, so it animates again on scroll down
          el.classList.remove('is-revealed');
        }
      });
    };

    // Initial check on load
    handleScrollReveal();
    // Small timeout to catch any layout shifts on mount
    const timer = setTimeout(handleScrollReveal, 100);

    window.addEventListener('scroll', handleScrollReveal, { passive: true });
    window.addEventListener('resize', handleScrollReveal, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScrollReveal);
      window.removeEventListener('resize', handleScrollReveal);
    };
  }, []);

  return (
    <div className="peoplesoft-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
