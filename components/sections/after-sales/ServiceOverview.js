// ============================================================================
// FILE: src/components/sections/ServiceOverview.js
// ============================================================================
import React from 'react';
import styles from './ServiceOverview.module.css';
import Image from 'next/image';

const ServiceOverview = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4" />
        </svg>
      ),
      title: 'Expert Technicians'
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68zM4.26 5.67A9.8 9.8 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4.06 13zm5.04 5.37l-1.43 1.37A9.994 9.994 0 0 0 11 22v-2a8.002 8.002 0 0 1-3.9-1.63" />
        </svg>
      ),
      title: 'Rapid Turnaround'
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
        </svg>
      ),
      title: 'Doorstep Service'
    }
  ];

  return (
    <section className={styles['service-overview']}>
      <div className={styles['service-overview__container']}>
        <div className={styles['service-overview__content']}>
          <div className={styles['service-overview__text']}>
            <h2 className={styles['service-overview__title']}>EVall Prime Service</h2>
            <p className={styles['service-overview__tagline']}>Service On The Spot. Kamaai On Top.</p>
            <p className={styles['service-overview__description']}>
              EVall Prime brings the service center to your doorstep. With expert EV technicians 
              and rapid turnaround, you lose zero time and zero trips. Experience hassle-free 
              maintenance and support designed for your convenience.
            </p>
            <div className={styles['service-overview__features']}>
              {features.map((feature) => (
                <div key={feature.id} className={styles['service-overview__feature']}>
                  <div className={styles['service-overview__feature-icon']}>
                    {feature.icon}
                  </div>
                  <span className={styles['service-overview__feature-title']}>{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles['service-overview__image']}>
            <Image 
              src="/images/after-sales-service.webp" 
              alt="EVall Prime Service - Expert technicians and service vehicles"
              className={styles['service-overview__img']}
              width={960}
              height={960}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;