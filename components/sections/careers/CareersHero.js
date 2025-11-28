// ============================================================================
// FILE: src/components/sections/careers/CareersHero.js
// ============================================================================

import React, { useState, useEffect, useRef } from "react";
import {careersData} from '../../../data/careersData'
import './CareersHero.css'

const CareersHero = () => {
    const [counts, setCounts] = useState({ 0: 0, 1: 0, 2: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    useEffect(() => {
      if (!isVisible) return;
  
      const timers = careersData.hero.stats.map((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.number / steps;
        let current = 0;
  
        return setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            setCounts(prev => ({ ...prev, [index]: stat.number }));
            clearInterval(timers[index]);
          } else {
            setCounts(prev => ({ ...prev, [index]: Math.floor(current) }));
          }
        }, duration / steps);
      });
  
      return () => timers.forEach(timer => clearInterval(timer));
    }, [isVisible]);
  
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  
    return (
      <section className="careers-hero" ref={heroRef}>
        <div className="hero-background">
          <video
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline
            preload="auto"
          >
            <source src="/video/particles-animation.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div className={`hero-badge ${isVisible ? 'fade-in' : ''}`}>
              {careersData.hero.badge}
            </div>
            
            <h1 className={`hero-title ${isVisible ? 'fade-in-up' : ''}`}>
              <span className="title-main">{careersData.hero.headline.main}</span>
              <span className="title-sub">{careersData.hero.headline.sub}</span>
            </h1>
            <p className={`hero-subtitle ${isVisible ? 'fade-in-up delay-1' : ''}`}>
              {careersData.hero.subheadline}
            </p>
            <p className={`hero-description ${isVisible ? 'fade-in-up delay-2' : ''}`}>
              {careersData.hero.description}
            </p>
            <div className="hero-stats">
              {careersData.hero.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`stat-card ${isVisible ? 'fade-in-up' : ''}`}
                  style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                >
                  <div className="stat-number">
                    {counts[idx]}{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className={`hero-cta ${isVisible ? 'fade-in-up delay-3' : ''}`}>
              {careersData.hero.ctaButtons.map((btn, idx) => (
                <button
                  key={idx}
                  className={`cta-btn cta-btn-${btn.type}`}
                  onClick={() => scrollToSection(btn.scrollTo)}
                >
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image-wrapper">
              <img 
                src="/images/careers/business-people-hero.webp" 
                alt="EVall Team" 
                className="hero-image"
              />
            </div>
            
          </div>
        </div>
      </section>
    );
  };

export default CareersHero;