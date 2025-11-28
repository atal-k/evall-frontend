// ============================================================================
// FILE: src/pages/SafetyCompliancePage.js
// ============================================================================

import { useEffect, useRef, useState } from "react";
import { safetyComplianceData } from "../data/safetyComplianceData";
import SafetyHero from "../components/sections/SafetyHero";
import { getIcon } from "../data/iconsData";
import IntelligentCapabilities from "../components/sections/IntelligentCapabilities";
import './SafetyCompliancePage.css'
import { useNavigate } from 'react-router-dom';

const SafetyCompliancePage = () => {
    const [visibleSections, setVisibleSections] = useState({});
    const sectionRefs = useRef({});
    const navigate = useNavigate();

    useEffect(() => {
      const observers = {};
      
      Object.keys(sectionRefs.current).forEach((key) => {
        if (sectionRefs.current[key]) {
          observers[key] = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setVisibleSections(prev => ({ ...prev, [key]: true }));
              }
            },
            { threshold: 0.1 }
          );
          observers[key].observe(sectionRefs.current[key]);
        }
      });
  
      return () => {
        Object.values(observers).forEach(observer => observer.disconnect());
      };
    }, []);

  
    return (
      <div className="safety-compliance-page">
  
        {/* Hero Section */}
        <SafetyHero />
  
        {/* Why Safety Matters Section */}
        <section 
          className="safety-why" 
          ref={el => sectionRefs.current['why'] = el}
        >
          <div className="safety-why__container">
            <div className="safety-why__intro">
              <h2 className="safety-why__title">
                {safetyComplianceData.whySafetyMatters.title}
              </h2>
              <p className="safety-why__description">
                {safetyComplianceData.whySafetyMatters.description}
              </p>
              <div className="safety-why__impact">
                {safetyComplianceData.whySafetyMatters.businessImpact.map((impact, idx) => (
                  <div key={idx} className="safety-why__impact-card">
                    <div className="safety-why__impact-icon">
                      {getIcon(impact.icon, 32)}
                    </div>
                    <div className="safety-why__impact-metric">{impact.metric}</div>
                    <div className="safety-why__impact-label">{impact.label}</div>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="safety-why__priorities">
              {safetyComplianceData.whySafetyMatters.priorities.map((priority, idx) => (
                <div 
                  key={priority.id} 
                  className={`safety-why__priority-card ${visibleSections['why'] ? 'safety-why__priority-card--visible' : ''}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="safety-why__priority-icon">
                    {getIcon(priority.icon, 32)}
                  </div>
                  <h3 className="safety-why__priority-title">{priority.title}</h3>
                  <p className="safety-why__priority-description">{priority.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Vehicle Architecture Section - Using IntelligentCapabilities Component */}
        <div className="safety-arch">
          <IntelligentCapabilities data={safetyComplianceData.vehicleArchitecture} />
        </div>
        {/* Compliance Standards Section */}
        <section 
          className="safety-compliance" 
          ref={el => sectionRefs.current['compliance'] = el}
        >
          <div className="safety-compliance__container">
            <div className="safety-compliance__header">
              <h2 className="safety-compliance__title">Compliance & Regulatory Standards</h2>
              <p className="safety-compliance__subtitle">Meeting and exceeding industry benchmarks</p>
            </div>
            <div className="safety-compliance__grid">
              {safetyComplianceData.complianceStandards.map((standard, idx) => (
                <div 
                  key={standard.id} 
                  className={`safety-compliance__card ${visibleSections['compliance'] ? 'safety-compliance__card--visible' : ''}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="safety-compliance__card-icon">
                    {getIcon(standard.icon, 40)}
                  </div>
                  <div className="safety-compliance__card-badge">
                  {getIcon('checkCircle', 16)}
                  <span>Certified</span>
                  </div>
                  <h3 className="safety-compliance__card-category">{standard.category}</h3>
                  <h4 className="safety-compliance__card-standard">{standard.standard}</h4>
                  <p className="safety-compliance__card-description">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Testing & Validation Section */}
        <section 
          className="safety-testing" 
          ref={el => sectionRefs.current['testing'] = el}
        >
          <div className="safety-testing__container">
            <div className="safety-testing__header">
              <h2 className="safety-testing__title">Testing & Validation Approach</h2>
              <p className="safety-testing__subtitle">Rigorous testing for real-world reliability</p>
            </div>
            <div className="safety-testing__timeline">
              {safetyComplianceData.testingValidation.map((test, idx) => (
                <div 
                  key={test.id} 
                  className={`safety-testing__item ${visibleSections['testing'] ? 'safety-testing__item--visible' : ''}`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="safety-testing__icon">
                    {getIcon(test.icon, 36)}
                  </div>
                  <div className="safety-testing__content">
                    <h3 className="safety-testing__name">{test.testName}</h3>
                    <p className="safety-testing__description">{test.description}</p>
                    <ul className="safety-testing__parameters">
                      {test.parameters.map((param, pidx) => (
                        <li key={pidx} className="safety-testing__parameter">
                        {getIcon('checkCircle', 16)}
                        <span>{param}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {idx < safetyComplianceData.testingValidation.length - 1 && (
                    <div className="safety-testing__connector"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Safety Monitoring Section */}
        <section 
          className="safety-monitoring" 
          ref={el => sectionRefs.current['monitoring'] = el}
        >
          <div className="safety-monitoring__container">
            <div className="safety-monitoring__header">
              <h2 className="safety-monitoring__title">
                {safetyComplianceData.safetyMonitoring.title}
              </h2>
              <p className="safety-monitoring__subtitle">
                {safetyComplianceData.safetyMonitoring.subtitle}
              </p>
              <p className="safety-monitoring__description">
                {safetyComplianceData.safetyMonitoring.description}
              </p>
            </div>
            <div className="safety-monitoring__grid">
              {safetyComplianceData.safetyMonitoring.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className={`safety-monitoring__card ${visibleSections['monitoring'] ? 'safety-monitoring__card--visible' : ''}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="safety-monitoring__card-header">
                    <div className="safety-monitoring__card-icon">
                      {getIcon(feature.icon, 32)}
                    </div>
                    {feature.realTime && (
                      <div className="safety-monitoring__live-indicator">
                        <span className="safety-monitoring__live-dot"></span>
                        <span className="safety-monitoring__live-text">LIVE</span>
                      </div>
                    )}
                  </div>
                  <h3 className="safety-monitoring__card-title">{feature.title}</h3>
                  <p className="safety-monitoring__card-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Driver Training Section */}
        <section className="safety-training">
          <div className="safety-training__container">
            <div className="safety-training__header">
              <h2 className="safety-training__title">
                {safetyComplianceData.driverTraining.title}
              </h2>
              <p className="safety-training__description">
                {safetyComplianceData.driverTraining.description}
              </p>
            </div>
            <div className="safety-training__modules">
              {safetyComplianceData.driverTraining.modules.map((module, idx) => (
                <div key={idx} className="safety-training__module">
                  <div className="safety-training__module-icon">
                  {getIcon('book', 24)}
                  </div>
                  <h3 className="safety-training__module-name">{module.name}</h3>
                  <ul className="safety-training__topics">
                    {module.topics.map((topic, tidx) => (
                      <li key={tidx} className="safety-training__topic">
                        {getIcon('checkCircle', 16)}
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Closing CTA Section */}
        <section className="safety-closing">
          <div className="safety-closing__container">
            <h2 className="safety-closing__headline">
              {safetyComplianceData.closingStatement.headline}
            </h2>
            <p className="safety-closing__description">
              {safetyComplianceData.closingStatement.description}
            </p>
            <button 
                className="safety-closing__btn"
                onClick={() => navigate(`/${safetyComplianceData.closingStatement.ctaLink}`)}
              >{safetyComplianceData.closingStatement.ctaText}
            </button>
          </div>
        </section>
      </div>
    );
  };

export default SafetyCompliancePage;