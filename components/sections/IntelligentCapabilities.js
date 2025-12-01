// FILE: components/sections/IntelligentCapabilities.js
// ============================================================================
import React from 'react';
import styles from './IntelligentCapabilities.module.css';
import Image from 'next/image';

const IntelligentCapabilities = ({ data, className }) => {
  const { heading, items } = data;

  return (
    <section className={`${styles[className]} ${styles['intelligent-capabilities']}`}>
      <div className="container">
        <h2 className={styles['intelligent-capabilities__heading']}>{heading}</h2>
        <div className={styles['intelligent-capabilities__grid']}>
          {items.map((item, index) => (
            <article key={index} className={styles['intelligent-capabilities__card']}>
              <div className={styles['intelligent-capabilities__image-wrapper']}>
                <Image 
                  src={item.img.src} 
                  alt={item.img.altText}
                  className={styles['intelligent-capabilities__image']}
                  width={1024}
                  height={819}
                />
              </div>
              <h3 className={styles['intelligent-capabilities__title']}>{item.title}</h3>
              <p className={styles['intelligent-capabilities__description']}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligentCapabilities;