// ============================================================================
// FILE: src/components/sections/careers/CoreValuesSection.js (with ValueBlock)
// ============================================================================

import React, { useState, useEffect, useRef } from "react";
import { careersData } from "../../../data/careersData";
import './CoreValuesSection.css'
import Logo from "../../common/Logo";

const ValueBlock = ({ value, index, isVisible }) => {
    const isEven = index % 2 === 0;
  
    const icons = {
      innovation: '💡',
      sustainability: '🌱',
      'customer-centricity': '🎯',
      integrity: '🤝',
      collaboration: '🔗'
    };
  
    return (
      <div className={`value-block ${isEven ? 'even' : 'odd'} ${isVisible ? 'fade-in-side' : ''}`}>
        <div className="value-icon-container">
          <div 
            className="value-icon"
            style={{ 
              color: value.color,
              borderColor: value.color 
            }}
          >
            <span className="icon-emoji">{icons[value.id]}</span>
          </div>
        </div>
        <div className="value-content">
          <div 
            className="value-accent"
            style={{ backgroundColor: value.color }}
          ></div>
          <h3 
            className="value-title"
            style={{ color: value.color }}
          >
            {value.title}
          </h3>
          <p className="value-description">{value.description}</p>
        </div>
      </div>
    );
  };
  
  const CoreValuesSection = () => {
    const [visibleValues, setVisibleValues] = useState([]);
    const sectionRef = useRef(null);
    const valueRefs = useRef([]);
  
    useEffect(() => {
      const observers = careersData.coreValues.map((_, index) => {
        return new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleValues(prev => [...new Set([...prev, index])]);
            }
          },
          { threshold: 0.2 }
        );
      });
  
      valueRefs.current.forEach((ref, index) => {
        if (ref) {
          observers[index].observe(ref);
        }
      });
  
      return () => {
        observers.forEach(observer => observer.disconnect());
      };
    }, []);
  
    return (
      <section id="core-values" className="core-values-section" ref={sectionRef}>
        <div className="core-values-container">
          <div className="values-header">
            <h2 className="section-title">Our Core Values: Driving People Around EVall</h2>
          </div>
  
          <div className="values-list">
            {careersData.coreValues.map((value, index) => (
              <div
                key={value.id}
                ref={el => valueRefs.current[index] = el}
              >
                <ValueBlock 
                  value={value} 
                  index={index}
                  isVisible={visibleValues.includes(index)}
                />
              </div>
            ))}
          </div>
  
          <div className="culture-footer">
            <div className="culture-footer-content">
            <Logo size="XLarge" className="logo--light" color="white" />
            <h3 className="culture-title">{careersData.culture.title}</h3>
            <p className="culture-description">{careersData.culture.description}</p>
            <p className="culture-mission">{careersData.culture.mission}</p>
            </div>
            <div className="culture-footer-img-wrapper">
              <img src="/images/careers/business-people-footer.webp" alt="Business people discussing"></img>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default CoreValuesSection;