// ============================================================================
// FILE: src/components/sections/TechnologyFeaturesSection.js
// ============================================================================
import React, { useState, useEffect, useRef } from 'react';
import { energyBatteryData } from '../../../data/energyBatteryData';
import './TechnologyFeaturesSection.css';
import { getIcon } from '../../../data/iconsData';

const TechnologyFeaturesSection = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
  
    useEffect(() => {
      const observers = energyBatteryData.technologyFeatures.map((_, index) => {
        return new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleCards(prev => [...new Set([...prev, index])]);
            }
          },
          { threshold: 0.2 }
        );
      });
  
      cardRefs.current.forEach((ref, index) => {
        if (ref) observers[index].observe(ref);
      });
  
      return () => observers.forEach(observer => observer.disconnect());
    }, []);
  
  
    return (
      <section className="tech-features-section" ref={sectionRef}>
      <div className="tech-features-container">
        <div className="tech-section-header">
          <h2 className="tech-section-title">Core Technology Features</h2>
          <p className="tech-section-subtitle">Engineering Excellence in Every Component</p>
        </div>

        <div className="tech-features-grid">
          {energyBatteryData.technologyFeatures.map((feature, idx) => (
            <div
              key={feature.id}
              ref={el => cardRefs.current[idx] = el}
              className={`tech-feature-card ${visibleCards.includes(idx) ? 'tech-visible' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="tech-feature-category">{feature.category}</div>
              <div 
                className="tech-feature-icon"
                style={{ background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}30)` }}
              >
                <div style={{ color: feature.color }}>
                  {getIcon(feature.icon)}
                </div>
              </div>
              <h3 className="tech-feature-title">{feature.title}</h3>
              <p className="tech-feature-description">{feature.description}</p>
              <div className="tech-feature-hover-glow" style={{ background: feature.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
  };

export default TechnologyFeaturesSection