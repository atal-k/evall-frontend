// ============================================================================
// FILE: /components/sections/Callout.js
// ============================================================================

import React, { useState } from 'react';
import Button from '../common/Button';
import styles from './Callout.module.css';
import TestDriveModal from '../common/TestDriveModal';
import Image from 'next/image';

const Callout = () => {
  const [showTestDrive, setShowTestDrive] = useState(false);
  return (
    <section className={styles['cta-section']}>
        <div className={styles['spacer']}></div>
      <div className="container">
        <div className={styles['cta-section__container']}>
          {/* Left Side - Image */}
          <div className={styles['cta-section__image-wrapper']}>
            <Image 
              src="/images/evall-callout-van.webp" 
              alt="EVall Commercial Vehicle" 
              className={styles['cta-section__image']}
              width={1352}
              height={821}
            />
          </div>

          {/* Right Side - Content */}
          <div className={styles['cta-section__content']}>
            <h2 className={styles['cta-section__title']}>
              India&apos;s Commercial Drive Now Electrified with Intelligence
            </h2>
            
            <p className={styles['cta-section__subtitle']}>
              Powering every mile with innovation, reliability, and sustainability.
            </p>

            <p className={styles['cta-section__tagline']}>
              Charge Ahead. Deliver More. Emit Less.
            </p>

            <div className={styles['cta-section__buttons']}>
              <Button variant="primary" className="btn-callout" onClick={() => setShowTestDrive(true)}>Book a Test Ride</Button>
              <Button variant="white" className="btn-callout">Find Dealer</Button>
            </div>
            <TestDriveModal
        isOpen={showTestDrive} 
        onClose={() => setShowTestDrive(false)} 
      />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Callout;