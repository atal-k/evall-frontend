// FILE: components/common/Checkbox.js
// ============================================================================

import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ id, label, checked, onChange, count }) => {
  return (
    <div className={styles['checkbox']}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={styles['checkbox__input']}
      />
      <label htmlFor={id} className={styles['checkbox__label']}>
        <span className={styles['checkbox__box']}>
          {checked && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </span>
        <span className={styles['checkbox__text']}>{label}</span>
        {count !== undefined && (
          <span className={styles['checkbox__count']}>[{count.toString().padStart(2, '0')}]</span>
        )}
      </label>
    </div>
  );
}  

export default Checkbox;
