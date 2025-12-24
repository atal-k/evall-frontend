// ============================================================================
// FILE: components/sections/About.js
// ============================================================================

import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import VideoPlayer from '@/components/common/VideoPlayer';
import { getIcon } from '@/data/iconsData';

const About = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const points = [
    "Backed by four decades of engineering excellence",
    "Committed to innovation in electric mobility and green energy",
    "Focused on building a cleaner, smarter future for India",
    "Empowering communities through technology and job creation",
    "Supporting national growth with scalable, future-ready solutions"
  ];

  const features = [
    {
      title: 'Reliable by Design',
      description: 'Engineered for maximum uptime and long service life to keep your operations running smoothly.',
      icon: 'shieldCheck'
    },
    {
      title: 'Efficient & Productive',
      description: 'Higher productivity and meaningful cost savings for businesses across every sector.',
      icon: 'barChart'
    },
    {
      title: 'Sustainable Impact',
      description: 'Purpose-built electric vehicles that cut emissions and move India closer to a greener tomorrow.',
      icon: 'leaf'
    },
    {
      title: 'Technology Driven',
      description: 'Smart features, connected architecture, and relentless innovation that evolve with your needs.',
      icon: 'cpu'
    }
  ];

  // Show features if desktop OR if mobile and showFeatures is true
  const shouldShowFeatures = isDesktop || showFeatures;

  return (
    <section className={styles['about-section']}>
      <div className='container'>
        <div className={styles['about-section__content']}>
          <div className={styles['about-section__left']}>
            <h2 className={styles['about-section__title']}>
              Driving the Future with EVall Mobility
            </h2>
            <p className={styles['about-section__intro']}>
              From 40 years of trusted automotive manufacturing to pioneering sustainable mobility solutions—EVall Mobility is more than a company. It&apos;s a movement.
            </p>

            <ul className={styles['about-section__points']}>
              {points.map((point, idx) => (
                <li key={idx} className={styles['about-section__point']}>
                  <span className={styles['about-section__point-icon']}>
                    {getIcon('bullet', 22)}
                  </span>
                  <span className={styles['about-section__point-text']}>{point}</span>
                </li>
              ))}
            </ul>

            <button 
              className={styles['about-section__toggle-btn']}
              onClick={() => setShowFeatures(!showFeatures)}
            >
              {showFeatures ? 'Read less' : 'Read more'}
            </button>

            {shouldShowFeatures && (
                   <div className={styles['about-section__features']}>
                   {features.map((feature, index) => (
                     <div key={index} className={styles['about-section__feature-card']}>
                       {/* Icon and Title Row */}
                       <div className={styles['about-section__feature-header']}>
                         <div className={styles['about-section__feature-icon-wrapper']}>
                           <span className={styles['about-section__feature-icon']}>
                             {getIcon(feature.icon, 24)}
                           </span>
                         </div>
                         <h3 className={styles['about-section__feature-title']}>
                           {feature.title}
                         </h3>
                       </div>
             
                       {/* Description */}
                       <p className={styles['about-section__feature-description']}>
                         {feature.description}
                       </p>
                     </div>
                   ))}
                 </div>
            )}
          </div>

          {/* Right Video Player */}
          <div className={styles['about-section__right']}>
            <VideoPlayer 
              src="/video/evall-about-us.mp4" 
              title="About Us"
              showControlsAlways={true}
              thumbnail="/images/evall-director-thumbnail.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;