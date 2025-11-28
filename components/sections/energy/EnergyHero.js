// ============================================================================
// FILE: src/components/sections/EnergyHero.js
// ============================================================================
import React, { useState, useEffect } from 'react';
import './EnergyHero.css'
import { energyBatteryData } from '../../../data/energyBatteryData';
import { getIcon } from '../../../data/iconsData';

const EnergyHero = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    const scrollToSection = (link) => {
      if (link.startsWith('#')) {
        const element = document.querySelector(link);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
  
    return (
      <section className="energy-hero">
        
        <div className="hero-background">
          <div className="circuit-pattern"></div>
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-left">
            <div className={`hero-badge ${isVisible ? 'fade-in' : ''}`}>
              {energyBatteryData.hero.badge}
            </div>
            <h1 className={`hero-title ${isVisible ? 'fade-in-up' : ''}`}>
              <span className="title-main">{energyBatteryData.hero.headline.main}</span>
              <span className="title-sub">{energyBatteryData.hero.headline.sub}</span>
            </h1>
            <p className={`hero-subtitle ${isVisible ? 'fade-in-up delay-1' : ''}`}>
              {energyBatteryData.hero.subheadline}
            </p>
            <p className={`hero-description ${isVisible ? 'fade-in-up delay-2' : ''}`}>
              {energyBatteryData.hero.description}
            </p>
            <div className={`hero-cta ${isVisible ? 'fade-in-up delay-3' : ''}`}>
              <button 
                className="cta-btn-primary"
                onClick={() => scrollToSection(energyBatteryData.hero.ctaButton.link)}
              >
                {energyBatteryData.hero.ctaButton.text}
              </button>
            </div>
          </div>
  
          <div className="hero-right">
            <div className="battery-visual">
            {/* <video
              className="battery-video"
              autoPlay
              muted
              loop
              playsInline
              webkit-playsinline="true"
              preload="auto"
            >
              <source src="/video/battery-pack.mp4" type="video/mp4" />
            </video> */}
              <div className="energy-glow"></div>
              <div className="energy-particles">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="particle" style={{
                    animationDelay: `${i * 0.2}s`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}></div>
                ))}
              </div>
            </div>
            
            <div className="floating-stats">
              {energyBatteryData.hero.floatingStats.map((stat, idx) => (
                <div 
                  key={idx}
                  className={`stat-badge ${isVisible ? 'fade-in-up' : ''}`}
                  style={{ animationDelay: `${0.5 + idx * 0.15}s` }}
                >
                  <div className="stat-icon">
                    {getIcon(stat.icon, 20)}
                  </div>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default EnergyHero;