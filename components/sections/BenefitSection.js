// components/sections/BenefitSection.js

import React from "react";
import styles from './BenefitSection.module.css';

const BenefitSection = ({ data = [] }) => {
  return (
    <section className={styles['benefits']}>
      <div className={styles['benefits__wrap']}>
        <h2 className={styles['benefits__heading']}>Benefits</h2>

        <div className={styles['benefits__grid']}>
          {data.map((item, idx) => (
            <article key={idx} className={styles['benefits__card']}>
              <h3 className={styles['benefits__title']}>{item.title}</h3>
              <p className={styles['benefits__desc']}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
