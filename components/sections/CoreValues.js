// ============================================================================
// FILE: components/sections/CoreValues.js
// ============================================================================

import React, { useState, useEffect } from 'react';
import styles from './CoreValues.module.css';
import Image from 'next/image';

const CoreValues = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle card interaction (click for mobile, hover for desktop)
  const handleCardClick = (id) => {
    if (isMobile) {
      setActiveCard(activeCard === id ? null : id);
    }
  };

  const handleMouseEnter = (id) => {
    if (!isMobile) {
      setHoveredCard(id);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredCard(null);
    }
  };

  // Determine if card should be active
  const isCardActive = (id) => {
    return isMobile ? activeCard === id : hoveredCard === id;
  };

  const values = [
    {
      id: 'innovation',
      title: 'Innovation',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6" />
        </svg>
      ),
      description: 'Pioneering the future of commercial transport, where cutting-edge technology meets reliability. We innovate to redefine electric mobility, driving every mile with smarter solutions.'
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M2 22v-2s5-2 10-2s10 2 10 2v2zm9.3-12.9c-1.2-3.9-7.3-3-7.3-3s.2 7.8 5.9 6.6C9.5 9.8 8 9 8 9c2.8 0 3 3.4 3 3.4V17h2v-4.2s0-3.9 3-4.9c0 0-2 3-2 5c7 .7 7-8.9 7-8.9s-8.9-1-9.7 5.1" />
        </svg>
      ),
      description: 'Commitment to a greener tomorrow, reducing emissions while boosting efficiency. Sustainable solutions power our commercial fleet, making every journey cleaner and smarter.'
    },
    {
      id: 'performance',
      title: 'Performance',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 16a3 3 0 0 1-3-3c0-1.12.61-2.1 1.5-2.61l9.71-5.62l-5.53 9.58c-.5.98-1.51 1.65-2.68 1.65m0-13c1.81 0 3.5.5 4.97 1.32l-2.1 1.21C14 5.19 13 5 12 5a8 8 0 0 0-8 8c0 2.21.89 4.21 2.34 5.65h.01c.39.39.39 1.02 0 1.41s-1.03.39-1.42.01A9.97 9.97 0 0 1 2 13A10 10 0 0 1 12 3m10 10c0 2.76-1.12 5.26-2.93 7.07c-.39.38-1.02.38-1.41-.01a.996.996 0 0 1 0-1.41A7.95 7.95 0 0 0 20 13c0-1-.19-2-.54-2.9L20.67 8C21.5 9.5 22 11.18 22 13" />
        </svg>
      ),
      description: 'Commitment to a greener tomorrow, reducing emissions while boosting efficiency. Sustainable solutions power our commercial fleet, making every journey cleaner and smarter.'
    }
  ];

  return (
    <section className={styles['core-values-section']}>
      <div className={styles['core-values-container']}>
        <div className={styles['core-values-wrapper']}>
          {/* Image Section */}
          <div className={styles['core-values-image-wrapper']}>
            <Image 
              src="/images/charging-van.webp" 
              alt="EV Charging Station" 
              className={styles['core-values-image']}
              width={2352}
              height={1323}
              priority
            />
          </div>
    
          {/* Content Section - Text + Cards */}
          <div className={styles['core-values-content']}>
            {/* Left Column - Text Content */}
            <div className={styles['core-values-text']}>
              <h2 className={styles['core-values-title']}>
                <span className={styles['core-values-title-highlight']}>EV&apos;s</span> Core Brand Values
              </h2>
              <p className={styles['core-values-description']}>
                Our electric vehicles embody innovation, with cutting-edge technology and smart connectivity. They deliver sustainability, reducing emissions and supporting a cleaner planet. And they ensure performance and reliability, offering instant torque, smooth rides, and low running costs.
              </p>
            </div>
    
            {/* Right Column - Value Cards */}
            <div className={styles['core-values-cards-wrapper']}>
              <div className={styles['core-values-cards']}>
                {values.map((value, index) => (
                  <div
                    key={value.id}
                    className={`${styles['value-card']} ${
                      isCardActive(value.id) ? styles['value-card--active'] : ''
                    } ${
                      (isMobile ? activeCard : hoveredCard) && !isCardActive(value.id) 
                        ? styles['value-card--inactive'] 
                        : ''
                    }`}
                    onClick={() => handleCardClick(value.id)}
                    onMouseEnter={() => handleMouseEnter(value.id)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      zIndex: isCardActive(value.id) ? 10 : 3 - index
                    }}
                  >
                    <div className={styles['value-card-header']}>  
                      <div className={styles['value-card-icon']}>
                        {value.icon}
                      </div>
                      <h3 className={styles['value-card-title']}>{value.title}</h3>
                    </div>
                    <div className={styles['value-card-content']}>
                      <p className={styles['value-card-description']}>{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;