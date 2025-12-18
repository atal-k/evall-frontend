// ============================================================================
// FILE: components/sections/FeatureSection.js
// ============================================================================

import React, { useState, useEffect, useCallback } from 'react';
import Tooltip from '../common/Tooltip';
import FeatureModal from '../common/FeatureModal';
import styles from './FeatureSection.module.css';
import Image from 'next/image';

const FeatureSection = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');

  // Detect screen size for responsive tooltip positioning
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setScreenSize('desktop');
      } else if (width >= 600) {
        setScreenSize('tablet');
      } else if (width >= 480) {
        setScreenSize('mobile');
      } else {
        setScreenSize('small');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const handleTooltipClick = (index) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setActiveIndex(null), 300);
  }, []);

  const handleNext = useCallback(() => {
    if (activeIndex < data.features.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  }, [activeIndex, data.features.length]);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') handleCloseModal();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, activeIndex, handleCloseModal, handleNext, handlePrev]);

  // Get responsive position based on screen size
  const getResponsivePosition = (feature) => {
    const positions = feature.position;
    
    // Return position based on current screen size
    if (positions[screenSize]) {
      return positions[screenSize];
    }
    
    // Fallback to desktop position
    return positions.desktop || positions;
  };

  return (
    <section className={styles['feature-section']}>
      <div className={styles['feature-section-container']}>
        <div className={styles['feature-section-header']}>
          <h2 className={styles['feature-section-title']}>{data.title}</h2>
          <p className={styles['feature-section-subtitle']}>{data.subtitle}</p>
        </div>

        <div className={styles['feature-section-image-container']}>
          <Image 
            src={data.image}
            alt={data.imageAlt || 'Feature showcase'}
            className={styles['feature-section-image']}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1380px"
            priority
          />
          
          {data.features.map((feature, index) => (
            <Tooltip
              key={feature.id}
              position={getResponsivePosition(feature)}
              index={index + 1}
              isActive={activeIndex === index}
              onClick={() => handleTooltipClick(index)}
            />
          ))}
        </div>
      </div>

      <FeatureModal
        isOpen={isModalOpen}
        feature={activeIndex !== null ? data.features[activeIndex] : null}
        onClose={handleCloseModal}
        onNext={handleNext}
        onPrev={handlePrev}
        canGoNext={activeIndex < data.features.length - 1}
        canGoPrev={activeIndex > 0}
      />
    </section>
  );
};

export default FeatureSection;