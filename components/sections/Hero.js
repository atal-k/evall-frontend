// ============================================================================
// FILE: components/sections/Hero.js
// ============================================================================

import { useState } from 'react';
import Button from "../common/Button";
import styles from './Hero.module.css';
import TestDriveModal from '../common/TestDriveModal';
import Image from 'next/image';

const Hero = () => {
  const [showTestDrive, setShowTestDrive] = useState(false);
  
  return (
    <section className={styles['hero']}>
      <video 
        className={styles['hero__video']} 
        autoPlay 
        loop 
        muted 
        playsInline
        poster=""
      >
        <source src="/video/promo.mp4" type="video/mp4" />
      </video>
      <div className={styles['hero__overlay']}></div>
      
      <div className={styles['hero__content']}>
        <h1 className={styles['hero__title']}>
          <span className={styles['hero__title-presenting']}>Presenting</span>
          {' '}
          <span className={styles['hero__title-highlight']}>EV Uday</span>
          <span className={styles['hero__title-slogan']}>Har Load Ka Saathi,</span>
          <span className={styles['hero__title-slogan']}>Har Mile Ka Vaada</span>
        </h1>
        <p className={styles['hero__subtitle']}>
          India&apos;s Most Trusted Electric Commercial Vehicle
        </p>
        
        <div className={styles['hero__cta']}>
          <Button variant="primary" className='cta' onClick={() => setShowTestDrive(true)}>
            <span className={styles['cta_icon']} aria-hidden="true">
              <Image src="/icons/handle.svg" alt="handle icon" width={20} height={20} />
            </span>
            <span className={styles['cta-label']}>Drive EV Uday Now</span>
          </Button>
        </div>
        
        <TestDriveModal 
          isOpen={showTestDrive} 
          onClose={() => setShowTestDrive(false)} 
        />
        
      </div>
        <div className={styles['hero__specs']}>
          <div className={styles['hero__spec']}>
            <div className={styles['hero__spec-value']}>
              230<sup>*</sup><span className={styles['hero__spec-unit']}>km</span>
            </div>
            <div className={styles['hero__spec-label']}>Range</div>
          </div>
          <div className={styles['hero__spec']}>
            <div className={styles['hero__spec-value']}>
              60<span className={styles['hero__spec-unit']}>min</span>
            </div>
            <div className={styles['hero__spec-label']}>Fast Charging</div>
          </div>
          <div className={styles['hero__spec']}>
            <div className={styles['hero__spec-value']}>
              42<span className={styles['hero__spec-unit']}>kw</span>
            </div>
            <div className={styles['hero__spec-label']}>Battery</div>
          </div>
        </div>
      
      {/* Price Tag Section */}
      <div className={styles['hero__price-tag']}>
        <div className={styles['hero__price-label']}>Starting From</div>
        <div className={styles['hero__price-value']}>
          <span className='currency-sign'>₹</span>15.5<span className={styles['hero__price-asterisk']}>*</span> <span className={styles['hero__price-unit']}>lacs</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;