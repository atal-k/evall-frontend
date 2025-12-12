// @components/layout/GreenSolutionBanner.js
import React from 'react';
import styles from './GreenSolutionBanner.module.css';
import Image from 'next/image';

const GreenSolutionBanner = () => {
    const greenBannerData = {
        title: "Advancing Green Solutions Every Day",
        description:
          "We are dedicated to creating low-impact mobility through responsible sourcing, adopting renewable energy, and empowering communities with affordable EV technology, making a measurable difference every mile we cover.",
        img: {
          src: "/images/charging-point.webp",
          alt: "EV charging Point",
        },
      };
      
  return (
    <section className={styles['green-solution-banner']}>
        <div className={styles['green-solution-banner__wrapper']}>
          <div className={styles['green-solution-banner__image-container']}>
            <Image 
              src={greenBannerData.img.src} 
              alt={greenBannerData.img.alt}
              className={styles['green-solution-banner__image']}
              width={468}
              height={521}
            />
          </div>

          <div className={styles['green-solution-banner__content']}>
            <h2 className={styles['green-solution-banner__title']}>{greenBannerData.title}</h2>
            <p className={styles['green-solution-banner__description']}>{greenBannerData.description}</p>
          </div>
        </div>
    </section>
  );
};

export default GreenSolutionBanner;