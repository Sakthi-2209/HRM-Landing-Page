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
        if (rect.top <= windowHeight - 50 && rect.bottom >= 0) {
          el.classList.add('is-revealed');
        } else if (rect.top > windowHeight) {
          el.classList.remove('is-revealed');
        }
      });
    };

    handleScrollReveal();
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
