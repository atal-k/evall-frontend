// ============================================================================
// FILE: /src/components/common/Tooltip.jsx
// ============================================================================

import React from 'react';
import styles from './Tooltip.module.css';

const Tooltip = ({ position, index, isActive, onClick }) => {
  return (
    <button
      className={`${styles['tooltip']} ${isActive ? styles['tooltip--active'] : ''}`}
      style={{
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom
      }}
      onClick={onClick}
      aria-label={`View feature ${index}`}
    >
      <span className={styles['tooltip__spot']}></span>
      <span className={styles['tooltip__pulse']}></span>
    </button>
  );
};

export default Tooltip;