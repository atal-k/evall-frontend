// ============================================================================
// FILE: src/components/sections/careers/CareersHero.js
// ============================================================================

import React, { useState, useEffect, useRef } from "react";
import {careersData} from '@/data/careersData'
import styles from './CareersHero.module.css'
import Image from "next/image";

const CareersHero = () => {
    const [counts, setCounts] = useState({ 0: 0, 1: 0, 2: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);
  
    useEffect(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
      <section className={styles['careers-hero']} ref={heroRef}>
        <div className={styles['hero-background']}>
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
        <div className={styles['hero-overlay']}></div>
        <div className={styles['hero-content']}>
          <div className={styles['hero-left']}>
            <div className={`${styles['hero-badge']} ${isVisible ? styles['fade-in'] : ''}`}>
              {careersData.hero.badge}
            </div>
            
            <h1 className={`${styles['hero-title']} ${isVisible ? styles['fade-in-up'] : ''}`}>
              <span className={styles['title-main']}>{careersData.hero.headline.main}</span>
              <span className={styles['title-sub']}>{careersData.hero.headline.sub}</span>
            </h1>
            <p className={`${styles['hero-subtitle']} ${isVisible ? styles['fade-in-up'] : ''} ${isVisible ? styles['delay-1'] : ''}`}>
              {careersData.hero.subheadline}
            </p>
            <p className={`${styles['hero-description']} ${isVisible ? styles['fade-in-up'] : ''} ${isVisible ? styles['delay-2'] : ''}`}>
              {careersData.hero.description}
            </p>
            <div className={styles['hero-stats']}>
              {careersData.hero.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`${styles['stat-card']} ${isVisible ? styles['fade-in-up'] : ''}`}
                  style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                >
                  <div className={styles['stat-number']}>
                    {counts[idx]}{stat.suffix}
                  </div>
                  <div className={styles['stat-label']}>{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className={`${styles['hero-cta']} ${isVisible ? styles['fade-in-up'] : ''} ${isVisible ? styles['delay-3'] : ''}`}>
              {careersData.hero.ctaButtons.map((btn, idx) => (
                <button
                  key={idx}
                  className={`${styles['cta-btn']} ${styles[`cta-btn-${btn.type}`]}`}
                  onClick={() => scrollToSection(btn.scrollTo)}
                >
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
          <div className={styles['hero-right']}>
            <div className={styles['hero-image-wrapper']}>
              <Image 
                src="/images/careers/business-people-hero.webp" 
                alt="EVall Team" 
                className={styles['hero-image']}
                width={1258}
                height={1258}
              />
            </div>
            
          </div>
        </div>
      </section>
    );
  };

export default CareersHero;