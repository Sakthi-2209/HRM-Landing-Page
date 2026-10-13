import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

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
      <div className="subnav">
        <div className="container subnav-inner">
          <span className="subnav-title">PeopleSoft</span>
          <a className="btn btn-primary subnav-cta" href="#contact">Request demo</a>
        </div>
      </div>
      <main>
        <Hero />
        <section className="showcase-strip" aria-label="PeopleSoft highlights">
          <article className="showcase-card tile-parchment">
            <p className="tile-eyebrow">Your people, in focus</p>
            <h2>Everything important, right where you need it.</h2>
            <p>One calm workspace for employee records, attendance, leave and the next great hire.</p>
            <a className="btn btn-secondary" href="#features">Explore features <ArrowRight size={16} /></a>
          </article>
          <article className="showcase-card tile-dark">
            <p className="tile-eyebrow">Built for momentum</p>
            <h2>Less admin. More time for people.</h2>
            <p>Simple workflows make everyday HR work feel lighter, faster and more human.</p>
            <a className="btn btn-primary" href="#contact">See how it works <ArrowRight size={16} /></a>
          </article>
        </section>
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
