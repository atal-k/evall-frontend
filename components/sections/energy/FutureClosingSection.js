// ============================================================================
// FILE: src/components/sections/FutureClosingSection.js
// This combines: Future Development + Closing CTA
// ============================================================================
import React, { useState, useEffect, useRef } from 'react';

import styles from './FutureClosingSection.module.css'
import { energyBatteryData } from '../../../data/energyBatteryData';
import { getIcon } from '../../../data/iconsData';

const FutureClosingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <>
      {/* Future Development Section */}
      <section className={styles['future-development-section']} ref={sectionRef}>
        <div className={styles['future-container']}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>{energyBatteryData.futureRoadmap.title}</h2>
            <p className={styles['section-subtitle']}>{energyBatteryData.futureRoadmap.description}</p>
          </div>

          <div className={styles['roadmap-visual']}>
            <div className={styles['roadmap-path']}>
              {energyBatteryData.futureRoadmap.focusAreas.map((area, idx) => (
                <div 
                  key={idx}
                  className={`${styles['roadmap-node']} ${isVisible ? styles.visible : ''}`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className={styles['node-icon']}>{getIcon(area.icon, 50)}</div>
                  <div className={styles['node-title']}>{area.title}</div>
                  {idx < energyBatteryData.futureRoadmap.focusAreas.length - 1 && (
                    <div className={styles['node-connector']}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className={styles['closing-cta-section']}>
        <div className={styles['closing-content']}>
          <div className={styles['cta-statements']}>
            {energyBatteryData.closingCTA.statements.map((statement, idx) => (
              <h2 key={idx} className={styles['cta-statement']}>{statement}</h2>
            ))}
          </div>
          <p className={styles['cta-description']}>{energyBatteryData.closingCTA.description}</p>
          <button 
            className={styles['cta-btn-large']}
            onClick={() => {
              const element = document.querySelector(energyBatteryData.closingCTA.ctaLink);
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {energyBatteryData.closingCTA.ctaText}
          </button>
        </div>
      </section>
    </>
  );
};

export default FutureClosingSection;