// ============================================
// components/pages/resources/Downloads.js
// ============================================

import React, { useState, useEffect, useRef } from 'react';
import { getIcon } from '@/data/iconsData';
import styles from './Downloads.module.css';

// NOTE: Renamed component function to DownloadsPageComponent for consistency.
const DownloadsPageComponent = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const cardRefs = useRef([]);
  
    // Downloads data
    const downloads = [
      {
        id: 1,
        title: 'EVall Mobility Brochure 1.5T',
        description: 'Complete overview of our electric Mobility vehicle and features',
        filePath: '/assets/evall-mobility-brochure-1.5T.pdf'
      }
    ];
  
    // Scroll animation
    useEffect(() => {
      const observers = downloads.map((_, index) => {
        return new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleCards(prev => [...new Set([...prev, index])]);
            }
          },
          { threshold: 0.1 }
        );
      });
  
      cardRefs.current.forEach((ref, index) => {
        if (ref) observers[index].observe(ref);
      });
  
      return () => observers.forEach(observer => observer.disconnect());
    }, []);
  
    // Download handler
    const handleDownload = (filePath, title) => {
      const link = document.createElement('a');
      link.href = filePath;
      link.download = title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <div className={styles['downloads-page']}>
        {/* Hero Section */}
        <section className={styles['downloads-page__hero']}>
          <div className={styles['downloads-page__hero-content']}>
            <h1 className={styles['downloads-page__title']}>Download Brochures & Manuals</h1>
            <p className={styles['downloads-page__subtitle']}>
              Access comprehensive product information, technical documentation, and resources
            </p>
          </div>
        </section>
  
        {/* Downloads Grid */}
        <section className={styles['downloads-page__content']}>
          <div className={styles['downloads-page__container']}>
            <div className={styles['downloads-page__grid']}>
              {downloads.map((item, index) => (
                <div
                  key={item.id}
                  ref={el => cardRefs.current[index] = el}
                  className={`${styles['downloads-page__card']} ${visibleCards.includes(index) ? styles['downloads-page__card--visible'] : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles['downloads-page__card-icon']}>
                    {getIcon('fileText', 40)}
                  </div>
                  <div className={styles['downloads-page__card-content']}>
                    <h3 className={styles['downloads-page__card-title']}>{item.title}</h3>
                    <p className={styles['downloads-page__card-description']}>{item.description}</p>
                  </div>
                  <button
                    className={styles['downloads-page__download-btn']}
                    onClick={() => handleDownload(item.filePath, item.title)}
                  >
                  {getIcon('download', 20)}
                    <span>Download PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

export default DownloadsPageComponent;