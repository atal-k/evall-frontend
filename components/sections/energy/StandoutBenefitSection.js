// ============================================================================
// FILE: src/components/sections/StandoutBenefitsSection.js
// This combines: Power Statement, Standout Features, Benefits Grid, and Use Cases
// ============================================================================
import React, { useState, useEffect, useRef } from 'react';

import styles from './StandoutBenefitSection.module.css'
import { energyBatteryData } from '../../../data/energyBatteryData';
import { getIcon } from '../../../data/iconsData';
// Top of file

// After imports, before component


const StandoutBenefitsSection = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const itemRefs = useRef([]);
  
    useEffect(() => {
      const observers = energyBatteryData.standoutFeatures.map((_, index) => {
        return new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => [...new Set([...prev, index])]);
            }
          },
          { threshold: 0.2 }
        );
      });
  
      itemRefs.current.forEach((ref, index) => {
        if (ref) observers[index].observe(ref);
      });
  
      return () => observers.forEach(observer => observer.disconnect());
    }, []);
  

  
    return (
      <>
        {/* Power Statement Section */}
        <section className={styles['power-statement-section']}>
          {/* 
          // */}
          <div className={styles['power-bg-image']} style={{
            backgroundImage: 'url(/images/energy-battery/road-testing.webp)'
          }}></div>
          <div className={styles['power-overlay']}></div>
          <div className={styles['power-content']}>
            <h2 className={styles['power-headline']}>{energyBatteryData.powerStatement.headline}</h2>
            <div className={styles['power-grid']}>
              <div className={`${styles['power-box']} ${styles['power-text']}`}>
                <p>{energyBatteryData.powerStatement.leftContent}</p>
              </div>
              <div className={`${styles['power-box']} ${styles['power-text']}`}>
                <p>{energyBatteryData.powerStatement.rightContent}</p>
              </div>
            </div>
            <div className={`${styles['power-box']} ${styles['power-result']}`}>
              <p>{energyBatteryData.powerStatement.result}</p>
            </div>
          </div>
        </section>
  
        {/* Standout Features Section */}
        <section className={styles['standout-features-section']}>
          <div className={styles['standout-container']}>
            <div className={styles['section-header']}>
              <h2 className={styles['section-title']}>Why Our Energy Systems Stand Out</h2>
            </div>
  
            <div className={styles['standout-list']}>
              {energyBatteryData.standoutFeatures.map((feature, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={feature.id}
                    ref={el => itemRefs.current[idx] = el}
                    className={`${styles['standout-item']} ${isEven ? styles.even : styles.odd} ${visibleItems.includes(idx) ? styles.visible : ''}`}
                  >
                    <div className={styles['standout-visual']}>
                      <div 
                        className={styles['standout-icon']}
                        style={{ 
                          background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}30)`,
                          borderColor: feature.color 
                        }}
                      >
                        {getIcon(feature.icon)}
                      </div>
                      {feature.metric && (
                        <div className={styles['standout-metric']} style={{ color: feature.color }}>
                          {feature.metric}
                        </div>
                      )}
                    </div>
                    <div className={styles['standout-content']}>
                      <div className={styles['standout-accent']} style={{ backgroundColor: feature.color }}></div>
                      <h3 className={styles['standout-title']}>{feature.title}</h3>
                      <p className={styles['standout-description']}>{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
  
        {/* Benefits Grid Section */}
        <section className={styles['benefits-section']}>
          <div className={styles['benefits-container']}>
            <div className={styles['section-header']}>
              <h2 className={styles['section-title']}>Benefits of EVall&apos;s Energy Efficiency Platform</h2>
            </div>
  
            <div className={styles['benefits-grid']}>
            {energyBatteryData.benefits.map((benefit, idx) => {
            return (
              <div key={benefit.id} className={styles['benefit-card']}>
                <div className={styles['benefit-icon']}>
                  {getIcon(benefit.icon, 32)}
                </div>
                    <h3 className={styles['benefit-title']}>{benefit.title}</h3>
                    <p className={styles['benefit-description']}>{benefit.description}</p>
                    <div className={styles['benefit-check']}>
                      {getIcon('checkCircle')}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
  
        {/* Use Cases Section */}
        {/* <section className="use-cases-section">
          <div className="use-cases-container">
            <div className="section-header">
              <h2 className="section-title">Built for India's Diverse Needs</h2>
              <p className="section-subtitle">Engineered for every terrain and industry</p>
            </div>
  
            <div className="use-cases-scroll">
              <div className="use-cases-track">
                {energyBatteryData.useCases.map((useCase) => (
                  <div key={useCase.id} className="use-case-card">
                    <div className="use-case-icon">{useCase.icon}</div>
                    <h3 className="use-case-title">{useCase.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}
      </>
    );
  };

  export default StandoutBenefitsSection;
  
