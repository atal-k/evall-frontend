// ============================================================================
// FILE: src/components/sections/Features.js
// ============================================================================

import React from 'react';
import styles from './Features.module.css';
import Image from 'next/image';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Sports/Economy Mode',
      description: 'Switch seamlessly between Sports mode for powerful acceleration and Economy mode for optimal energy savings — giving you complete control over performance and efficiency depending on your driving needs.',
      image: '/images/feature1.png'
    },
    {
      id: 2,
      title: 'AC Cabin',
      description: 'Enjoy a spacious, climate-controlled cabin designed for all-season comfort. The advanced air-conditioning and ventilation system maintains an ideal temperature, keeping drivers cool in the summer and warm in the winter.',
      image: '/images/feature2.png'
    },
    {
      id: 3,
      title: 'Electronic Power Steering',
      description: 'Experience effortless maneuvering and enhanced driving comfort with advanced electronic power steering. EPS System is lighter and more modular helping to reduce vehicle weight and improve packaging flexibility.',
      image: '/images/feature3.png'
    },
    {
      id: 4,
      title: 'Power Window',
      description: 'Modern convenience with power windows allowing easy and quick operation for enhanced driver comfort  and practicality in all weather conditions.',
      image: '/images/feature4.png'
    },
    {
      id: 5,
      title: 'LED DRL',
      description: 'Energy-efficient LED Daytime Running Lights increase visibility and road presence, improving safety by making the vehicle more noticeable during the day.',
      image: '/images/feature5.png'
    }
  ];

  return (
    <section className={styles['features-section']}>
      <div className="container">
        {/* Header */}
        <div className={styles['features-section__header']}>
          <div className={styles['features-section__header-left']}>
            <h2 className={styles['features-section__title']}>
              Love Every <span className={styles['features-section__title-highlight']}>Feature</span>, Power Every Journey With Innovation
            </h2>
          </div>
          <div className={styles['features-section__header-right']}>
            <p className={styles['features-section__subtitle']}>
              Experience the perfect blend of technology, comfort, and performance. Our electric vehicles are designed to deliver efficiency, reliability, and a driving experience that inspires confidence on every road.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className={styles['features-section__grid']}>
          {features.map(feature => (
            <div key={feature.id} className={styles['feature-card']}>
              <div className={styles['feature-card__content']}>
                <h3 className={styles['feature-card__title']}>{feature.title}</h3>
                <p className={styles['feature-card__description']}>{feature.description}</p>
              <div className={styles['feature-card__image-container']}>
                <Image 
                  src={feature.image} 
                  alt={feature.title}
                  className={styles['feature-card__image']}
                  width={394}
                  height={255}
                />
              </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className={`${styles['feature-card']} ${styles['feature-card--cta']}`}>  
            <h3 className={styles['feature-card__cta-title']}>
              Explore Other Feature of our Products
            </h3>
            <button 
              className={styles['feature-card__cta-button']} 
              onClick={() => window.location.href = '/products/e-SCV'}
            >
              Know More
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;