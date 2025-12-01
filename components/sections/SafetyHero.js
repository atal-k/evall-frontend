// ============================================================================
// FILE: components/sections/SafetyHero.js
// ============================================================================

import React, { useEffect, useState } from "react";
import { safetyComplianceData } from "../../data/safetyComplianceData";
import { getIcon } from "../../data/iconsData";
import styles from './SafetyHero.module.css';
import Image from 'next/image';
  
const SafetyHero = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
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
      <section className={styles['safety-hero']}>
        <div className={styles['safety-hero__container']}>
          <div className={styles['safety-hero__content']}>
            <div className={`${styles['safety-hero__badge']} ${isVisible ? styles['safety-hero__badge--visible'] : ''}`}>
              {safetyComplianceData.hero.badge}
            </div>
            <h1 className={`${styles['safety-hero__headline']} ${isVisible ? styles['safety-hero__headline--visible'] : ''}`}>
              {safetyComplianceData.hero.headline}
            </h1>
            <p className={`${styles['safety-hero__subheadline']} ${isVisible ? styles['safety-hero__subheadline--visible'] : ''}`}>
              {safetyComplianceData.hero.subheadline}
            </p>
            <p className={`${styles['safety-hero__description']} ${isVisible ? styles['safety-hero__description--visible'] : ''}`}>
              {safetyComplianceData.hero.description}
            </p>
            <div className={`${styles['safety-hero__cta']} ${isVisible ? styles['safety-hero__cta--visible'] : ''}`}>
              <button 
                className={styles['safety-hero__btn']}
                onClick={() => scrollToSection(safetyComplianceData.hero.ctaButton.link)}
              >
                {safetyComplianceData.hero.ctaButton.text}
              </button>
            </div>
            <div className={`${styles['safety-hero__trust']} ${isVisible ? styles['safety-hero__trust--visible'] : ''}`}>
              {safetyComplianceData.hero.trustIndicators.map((indicator, idx) => (
                <div key={idx} className={styles['safety-hero__trust-badge']}>
                  <span className={styles['safety-hero__trust-icon']}>
                    {getIcon(indicator.icon)}
                  </span>
                  <span className={styles['safety-hero__trust-label']}>{indicator.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles['safety-hero__image-wrapper']}>
            <Image 
              src={safetyComplianceData.hero.heroImage}
              alt="EVALL Safety Standards"
              className={styles['safety-hero__image']}
              fill
            />
            <div className={styles['safety-hero__image-overlay']}></div>
          </div>
        </div>
      </section>
    );
  };

export default SafetyHero;