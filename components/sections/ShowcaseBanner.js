/* // FILE: components/sections/ShowcaseBanner.js */

import React from 'react';
import styles from './ShowcaseBanner.module.css';
import Image from 'next/image';

const ShowcaseBanner = () => {
  return (
    <section className={styles['showcase-banner']}>
      <div className={styles['showcase-banner__container']}>
        <div className={styles['showcase-banner__content']}>
          <h1 className={styles['showcase-banner__title']}>
            Towards The New<br />Electrifying Direction
          </h1>
          <p className={styles['showcase-banner__subtitle']}>
            Drive The New Age EV- The Ultimate EV UDAY
          </p>
          <button className={styles['showcase-banner__btn']}>
            Explore EV Uday Today
          </button>
        </div>
        <div className={styles['showcase-banner__image']}>
          <Image src="/images/evall-ev-uday.png" alt="EVall EV Uday" width={695} height={464} />
        </div>
      </div>
    </section>
  );
};
export default ShowcaseBanner;