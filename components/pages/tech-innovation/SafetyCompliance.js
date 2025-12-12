// ============================================
// components/pages/tech/SafetyCompliance.js
// ============================================

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { safetyComplianceData } from '@/data/safetyComplianceData';
import SafetyHero from '@/components/sections/SafetyHero';
import { getIcon } from '@/data/iconsData';
import IntelligentCapabilities from '@/components/sections/IntelligentCapabilities';
import styles from './SafetyCompliance.module.css';

// NOTE: Renamed component function to SafetyCompliancePageComponent for consistency.
const SafetyCompliancePageComponent = () => {
    const [visibleSections, setVisibleSections] = useState({});
    const sectionRefs = useRef({});
    const router = useRouter();

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
      <div className={styles['safety-compliance-page']}>
  
        {/* Hero Section */}
        <SafetyHero />
  
        {/* Why Safety Matters Section */}
        <section 
          className={styles['safety-why']} 
          ref={el => sectionRefs.current['why'] = el}
        >
          <div className={styles['safety-why__container']}>
            <div className={styles['safety-why__intro']}>
              <h2 className={styles['safety-why__title']}>
                {safetyComplianceData.whySafetyMatters.title}
              </h2>
              <p className={styles['safety-why__description']}>
                {safetyComplianceData.whySafetyMatters.description}
              </p>
              <div className={styles['safety-why__impact']}>
                {safetyComplianceData.whySafetyMatters.businessImpact.map((impact, idx) => (
                  <div key={idx} className={styles['safety-why__impact-card']}>
                    <div className={styles['safety-why__impact-icon']}>
                      {getIcon(impact.icon, 32)}
                    </div>
                    <div className={styles['safety-why__impact-metric']}>{impact.metric}</div>
                    <div className={styles['safety-why__impact-label']}>{impact.label}</div>
                  </div>
                ))}
              </div>
            </div>
  
            <div className={styles['safety-why__priorities']}>
              {safetyComplianceData.whySafetyMatters.priorities.map((priority, idx) => (
                <div 
                  key={priority.id} 
                  className={`${styles['safety-why__priority-card']} ${visibleSections['why'] ? styles['safety-why__priority-card--visible'] : ''}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={styles['safety-why__priority-icon']}>
                    {getIcon(priority.icon, 32)}
                  </div>
                  <h3 className={styles['safety-why__priority-title']}>{priority.title}</h3>
                  <p className={styles['safety-why__priority-description']}>{priority.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Vehicle Architecture Section - Using IntelligentCapabilities Component */}
        <div className={styles['safety-arch']}>
          <IntelligentCapabilities className="safety-arch-grid" data={safetyComplianceData.vehicleArchitecture} />
        </div>
        {/* Compliance Standards Section */}
        <section 
          className={styles['safety-compliance']} 
          ref={el => sectionRefs.current['compliance'] = el}
        >
          <div className={styles['safety-compliance__container']}>
            <div className={styles['safety-compliance__header']}>
              <h2 className={styles['safety-compliance__title']}>Compliance & Regulatory Standards</h2>
              <p className={styles['safety-compliance__subtitle']}>Meeting and exceeding industry benchmarks</p>
            </div>
            <div className={styles['safety-compliance__grid']}>
              {safetyComplianceData.complianceStandards.map((standard, idx) => (
                <div 
                  key={standard.id} 
                  className={`${styles['safety-compliance__card']} ${visibleSections['compliance'] ? styles['safety-compliance__card--visible'] : ''}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={styles['safety-compliance__card-icon']}>
                    {getIcon(standard.icon, 40)}
                  </div>
                  <div className={styles['safety-compliance__card-badge']}>
                  {getIcon('checkCircle', 16)}
                  <span>Certified</span>
                  </div>
                  <h3 className={styles['safety-compliance__card-category']}>{standard.category}</h3>
                  <h4 className={styles['safety-compliance__card-standard']}>{standard.standard}</h4>
                  <p className={styles['safety-compliance__card-description']}>{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Testing & Validation Section */}
        <section 
          className={styles['safety-testing']} 
          ref={el => sectionRefs.current['testing'] = el}
        >
          <div className={styles['safety-testing__container']}>
            <div className={styles['safety-testing__header']}>
              <h2 className={styles['safety-testing__title']}>Testing & Validation Approach</h2>
              <p className={styles['safety-testing__subtitle']}>Rigorous testing for real-world reliability</p>
            </div>
            <div className={styles['safety-testing__timeline']}>
              {safetyComplianceData.testingValidation.map((test, idx) => (
                <div 
                  key={test.id} 
                  className={`${styles['safety-testing__item']} ${visibleSections['testing'] ? styles['safety-testing__item--visible'] : ''}`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className={styles['safety-testing__icon']}>
                    {getIcon(test.icon, 36)}
                  </div>
                  <div className={styles['safety-testing__content']}>
                    <h3 className={styles['safety-testing__name']}>{test.testName}</h3>
                    <p className={styles['safety-testing__description']}>{test.description}</p>
                    <ul className={styles['safety-testing__parameters']}>
                      {test.parameters.map((param, pidx) => (
                        <li key={pidx} className={styles['safety-testing__parameter']}>
                        {getIcon('checkCircle', 16)}
                        <span>{param}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {idx < safetyComplianceData.testingValidation.length - 1 && (
                    <div className={styles['safety-testing__connector']}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>  
        {/* Driver Training Section */}
        <section className={styles['safety-training']}>
          <div className={styles['safety-training__container']}>
            <div className={styles['safety-training__header']}>
              <h2 className={styles['safety-training__title']}>
                {safetyComplianceData.driverTraining.title}
              </h2>
              <p className={styles['safety-training__description']}>
                {safetyComplianceData.driverTraining.description}
              </p>
            </div>
            <div className={styles['safety-training__modules']}>
              {safetyComplianceData.driverTraining.modules.map((module, idx) => (
                <div key={idx} className={styles['safety-training__module']}>
                  <div className={styles['safety-training__module-icon']}>
                  {getIcon('book', 24)}
                  </div>
                  <h3 className={styles['safety-training__module-name']}>{module.name}</h3>
                  <ul className={styles['safety-training__topics']}>
                    {module.topics.map((topic, tidx) => (
                      <li key={tidx} className={styles['safety-training__topic']}>
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
        <section className={styles['safety-closing']}>
          <div className={styles['safety-closing__container']}>
            <h2 className={styles['safety-closing__headline']}>
              {safetyComplianceData.closingStatement.headline}
            </h2>
            <p className={styles['safety-closing__description']}>
              {safetyComplianceData.closingStatement.description}
            </p>
            <button 
                className={styles['safety-closing__btn']}
                onClick={() => router.push(`/${safetyComplianceData.closingStatement.ctaLink}`)}
              >{safetyComplianceData.closingStatement.ctaText}
            </button>
          </div>
        </section>
      </div>
    );
  };

export default SafetyCompliancePageComponent;