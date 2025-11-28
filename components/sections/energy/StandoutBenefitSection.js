// ============================================================================
// FILE: src/components/sections/StandoutBenefitsSection.js
// This combines: Power Statement, Standout Features, Benefits Grid, and Use Cases
// ============================================================================
import React, { useState, useEffect, useRef } from 'react';

import './StandoutBenefitSection.css'
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
        <section className="power-statement-section">
          {/* 
          // */}
          <div className="power-bg-image" style={{
            backgroundImage: 'url(/images/energy-battery/road-testing.webp)'
          }}></div>
          <div className="power-overlay"></div>
          <div className="power-content">
            <h2 className="power-headline">{energyBatteryData.powerStatement.headline}</h2>
            <div className="power-grid">
              <div className="power-box power-text">
                <p>{energyBatteryData.powerStatement.leftContent}</p>
              </div>
              <div className="power-box power-text">
                <p>{energyBatteryData.powerStatement.rightContent}</p>
              </div>
            </div>
            <div className="power-box power-result">
              <p>{energyBatteryData.powerStatement.result}</p>
            </div>
          </div>
        </section>
  
        {/* Standout Features Section */}
        <section className="standout-features-section">
          <div className="standout-container">
            <div className="section-header">
              <h2 className="section-title">Why Our Energy Systems Stand Out</h2>
            </div>
  
            <div className="standout-list">
              {energyBatteryData.standoutFeatures.map((feature, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={feature.id}
                    ref={el => itemRefs.current[idx] = el}
                    className={`standout-item ${isEven ? 'even' : 'odd'} ${visibleItems.includes(idx) ? 'visible' : ''}`}
                  >
                    <div className="standout-visual">
                      <div 
                        className="standout-icon"
                        style={{ 
                          background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}30)`,
                          borderColor: feature.color 
                        }}
                      >
                        {getIcon(feature.icon)}
                      </div>
                      {feature.metric && (
                        <div className="standout-metric" style={{ color: feature.color }}>
                          {feature.metric}
                        </div>
                      )}
                    </div>
                    <div className="standout-content">
                      <div className="standout-accent" style={{ backgroundColor: feature.color }}></div>
                      <h3 className="standout-title">{feature.title}</h3>
                      <p className="standout-description">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
  
        {/* Benefits Grid Section */}
        <section className="benefits-section">
          <div className="benefits-container">
            <div className="section-header">
              <h2 className="section-title">Benefits of EVall's Energy Efficiency Platform</h2>
            </div>
  
            <div className="benefits-grid">
            {energyBatteryData.benefits.map((benefit, idx) => {
            return (
              <div key={benefit.id} className="benefit-card">
                <div className="benefit-icon">
                  {getIcon(benefit.icon, 32)}
                </div>
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-description">{benefit.description}</p>
                    <div className="benefit-check">
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
  
