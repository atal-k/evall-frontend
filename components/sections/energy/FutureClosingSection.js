// ============================================================================
// FILE: src/components/sections/FutureClosingSection.js
// This combines: Future Development + Closing CTA
// ============================================================================
import React, { useState, useEffect, useRef } from 'react';

import './FutureClosingSection.css'
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
      <section className="future-development-section" ref={sectionRef}>
        <div className="future-container">
          <div className="section-header">
            <h2 className="section-title">{energyBatteryData.futureRoadmap.title}</h2>
            <p className="section-subtitle">{energyBatteryData.futureRoadmap.description}</p>
          </div>

          <div className="roadmap-visual">
            <div className="roadmap-path">
              {energyBatteryData.futureRoadmap.focusAreas.map((area, idx) => (
                <div 
                  key={idx}
                  className={`roadmap-node ${isVisible ? 'visible' : ''}`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="node-icon">{getIcon(area.icon, 50)}</div>
                  <div className="node-title">{area.title}</div>
                  {idx < energyBatteryData.futureRoadmap.focusAreas.length - 1 && (
                    <div className="node-connector"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="closing-cta-section">
        <div className="closing-content">
          <div className="cta-statements">
            {energyBatteryData.closingCTA.statements.map((statement, idx) => (
              <h2 key={idx} className="cta-statement">{statement}</h2>
            ))}
          </div>
          <p className="cta-description">{energyBatteryData.closingCTA.description}</p>
          <button 
            className="cta-btn-large"
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