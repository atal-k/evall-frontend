/* eslint-disable react-hooks/purity */
// ============================================================================
// FILE: src/components/sections/EnergyHero.js
// ============================================================================
import React, { useState, useEffect } from 'react';
import styles from './EnergyHero.module.css'
import { energyBatteryData } from '@/data/energyBatteryData';
import { getIcon } from '@/data/iconsData';

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
      <section className={styles['energy-hero']}>
        
        <div className={styles['hero-background']}>
          <div className={styles['circuit-pattern']}></div>
        </div>
        <div className={styles['hero-content-wrapper']}>
          <div className={styles['hero-left']}>
            <div className={`${styles['hero-badge']} ${isVisible ? styles['fade-in'] : ''}`}>
              {energyBatteryData.hero.badge}
            </div>
            <h1 className={`${styles['hero-title']} ${isVisible ? styles['fade-in-up'] : ''}`}>
              <span className={styles['title-main']}>{energyBatteryData.hero.headline.main}</span>
              <span className={styles['title-sub']}>{energyBatteryData.hero.headline.sub}</span>
            </h1>
            <p className={`${styles['hero-subtitle']} ${isVisible ? styles['fade-in-up'] : ''} ${isVisible ? styles['delay-1'] : ''}`}>
              {energyBatteryData.hero.subheadline}
            </p>
            <p className={`${styles['hero-description']} ${isVisible ? styles['fade-in-up'] : ''} ${isVisible ? styles['delay-2'] : ''}`}>
              {energyBatteryData.hero.description}
            </p>
            <div className={`${styles['hero-cta']} ${isVisible ? styles['fade-in-up'] : ''} ${isVisible ? styles['delay-3'] : ''}`}>
              <button 
                className={styles['cta-btn-primary']}
                onClick={() => scrollToSection(energyBatteryData.hero.ctaButton.link)}
              >
                {energyBatteryData.hero.ctaButton.text}
              </button>
            </div>
          </div>
  
          <div className={styles['hero-right']}>
            <div className={styles['battery-visual']}>
              <div className={styles['energy-glow']}></div>
              <div className={styles['energy-particles']}>
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={styles.particle} style={{
                    animationDelay: `${i * 0.2}s`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}></div>
                ))}
              </div>
            </div>
            
            <div className={styles['floating-stats']}>
              {energyBatteryData.hero.floatingStats.map((stat, idx) => (
                <div 
                  key={idx}
                  className={`${styles['stat-badge']} ${isVisible ? styles['fade-in-up'] : ''}`}
                  style={{ animationDelay: `${0.5 + idx * 0.15}s` }}
                >
                  <div className={styles['stat-icon']}>
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