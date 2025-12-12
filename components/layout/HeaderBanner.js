// @components/common/HeaderBanner.js
import React from 'react';
import styles from './HeaderBanner.module.css';
import Button from '../common/Button';

const HeaderBanner = ({
  variant = "default",
  title,
  heading, 
  subtitle,
  button,
  backgroundImage = 'images/header-banner-van.webp' 
}) => {
  return (
    <section 
      className={`${styles['header-banner']} ${
        variant !== "default" 
          ? variant.split(' ').map(v => styles[`header-banner--${v}`]).filter(Boolean).join(' ')
          : ""
      }`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles['header-banner__overlay']}>
        <div className='container'>
          <div className={styles['header-banner__content']}>
            {title && (
              <p className={styles['header-banner__title']}>{title}</p>
            )}
            <h1 className={styles['header-banner__heading']}>{heading}</h1>
            {subtitle && (
              <p className={styles['header-banner__subtitle']}>{subtitle}</p>
            )}
            {button && (
              <Button variant="primary">
                {button}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderBanner;