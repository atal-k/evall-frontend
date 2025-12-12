// @components/layout/AlternateLayout.js
import React from 'react';
import styles from './AlternateLayout.module.css';
import Image from 'next/image';

const AlternateLayout = ({ data }) => {
  return (
    <section className={styles['alternate-layout']}>
      <div className='container'>
        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={item.id} 
              className={`${styles['alternate-layout__item']} ${isEven ? styles['alternate-layout__item--even'] : styles['alternate-layout__item--odd']}`}
            >
              <div className={styles['alternate-layout__image-wrapper']}>
              <Image
                src={item.image}
                alt={item.title}
                className={styles['alternate-layout__image']}
                width={634}      
                height={450}     
              />
              </div>
              
              <div className={styles['alternate-layout__content']}>
                <h2 className={styles['alternate-layout__title']}>{item.title}</h2>
                <p className={styles['alternate-layout__description']}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AlternateLayout;