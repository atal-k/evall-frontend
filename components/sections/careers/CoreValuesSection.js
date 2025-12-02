// ============================================================================
// FILE: src/components/sections/careers/CoreValuesSection.js (with ValueBlock)
// ============================================================================

import React, { useState, useEffect, useRef } from "react";
import { careersData } from "@/data/careersData";
import styles from './CoreValuesSection.module.css'
import Logo from "@/components/common/Logo";
import Image from "next/image";

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
      <div className={`${styles['value-block']} ${isEven ? styles['value-block--even'] : styles['value-block--odd']}${isVisible ? ` ${styles['fade-in-side']}` : ''}`}>
        <div className={styles['value-icon-container']}>
          <div 
            className={styles['value-icon']}
            style={{ 
              color: value.color,
              borderColor: value.color 
            }}
          >
            <span className={styles['icon-emoji']}>{icons[value.id]}</span>
          </div>
        </div>
        <div className={styles['value-content']}>
          <div 
            className={styles['value-accent']}
            style={{ backgroundColor: value.color }}
          ></div>
          <h3 
            className={styles['value-title']}
            style={{ color: value.color }}
          >
            {value.title}
          </h3>
          <p className={styles['value-description']}>{value.description}</p>
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
      <section id="core-values" className={styles['core-values-section']} ref={sectionRef}>
        <div className={styles['core-values-container']}>
          <div className={styles['values-header']}>
            <h2 className={styles['section-title']}>Our Core Values: Driving People Around EVall</h2>
          </div>
  
          <div className={styles['values-list']}>
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
  
          <div className={styles['culture-footer']}>
            <div className={styles['culture-footer-content']}>
            <Logo size="XLarge" className='logo--light' color="white" />
            <h3 className={styles['culture-title']}>{careersData.culture.title}</h3>
            <p className={styles['culture-description']}>{careersData.culture.description}</p>
            <p className={styles['culture-mission']}>{careersData.culture.mission}</p>
            </div>
            <div className={styles['culture-footer-img-wrapper']}>
              <Image src="/images/careers/business-people-footer.webp" alt="Business people discussing" width={1968} height={1476}/>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default CoreValuesSection;