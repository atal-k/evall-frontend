// FILE: /components/common/Logo.js
// ============================================================================

import React from 'react';
import styles from './Logo.module.css';
import Image from 'next/image'; 

const Logo = ({ size = 'medium', color = 'black', className = '' }) => {
  const iconSrc = color === 'white' ? 'EVall-icon' : 'EVall-icon-black';
  
  // Map size to actual pixel dimensions
  const sizeMap = {
    small: 24,
    medium: 32,
    large: 38,
    XLarge: 48
  };
  
  const iconSize = sizeMap[size] || 32;
  
  return (
    <div className={`${styles['logo']} ${styles[`logo--${size}`]} ${styles[`logo--${color}`]} ${className}`}>
      <div className={styles['logo__icon']}>
        <Image 
          src={`/icons/${iconSrc}.svg`} 
          alt="EVall" 
          width={iconSize}
          height={iconSize}
          priority
        />
      </div>
      <span className={styles['logo__text']}>EVall</span>
    </div>
  );
};

export default Logo;