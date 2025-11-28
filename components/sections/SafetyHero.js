// ============================================================================
// FILE: src/components/sections/SafetyHero.js
// ============================================================================

import React, { useEffect, useState } from "react";
import { safetyComplianceData } from "../../data/safetyComplianceData";
import { getIcon } from "../../data/iconsData";
import './SafetyHero.css'

const SafetyHero = () => {
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
      <section className="safety-hero">
        <div className="safety-hero__container">
          <div className="safety-hero__content">
            <div className={`safety-hero__badge ${isVisible ? 'safety-hero__badge--visible' : ''}`}>
              {safetyComplianceData.hero.badge}
            </div>
            <h1 className={`safety-hero__headline ${isVisible ? 'safety-hero__headline--visible' : ''}`}>
              {safetyComplianceData.hero.headline}
            </h1>
            <p className={`safety-hero__subheadline ${isVisible ? 'safety-hero__subheadline--visible' : ''}`}>
              {safetyComplianceData.hero.subheadline}
            </p>
            <p className={`safety-hero__description ${isVisible ? 'safety-hero__description--visible' : ''}`}>
              {safetyComplianceData.hero.description}
            </p>
            <div className={`safety-hero__cta ${isVisible ? 'safety-hero__cta--visible' : ''}`}>
              <button 
                className="safety-hero__btn"
                onClick={() => scrollToSection(safetyComplianceData.hero.ctaButton.link)}
              >
                {safetyComplianceData.hero.ctaButton.text}
              </button>
            </div>
            <div className={`safety-hero__trust ${isVisible ? 'safety-hero__trust--visible' : ''}`}>
              {safetyComplianceData.hero.trustIndicators.map((indicator, idx) => (
                <div key={idx} className="safety-hero__trust-badge">
                  <span className="safety-hero__trust-icon">
                    {getIcon(indicator.icon)}
                  </span>
                  <span className="safety-hero__trust-label">{indicator.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="safety-hero__image-wrapper">
            <img 
              src={safetyComplianceData.hero.heroImage}
              alt="EVALL Safety Standards"
              className="safety-hero__image"
            />
            <div className="safety-hero__image-overlay"></div>
          </div>
        </div>
      </section>
    );
  };

export default SafetyHero;