// ============================================================================
// FILE: components/common/DownloadBrochureModal.js
// ============================================================================

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './DownloadBrochureModal.module.css';
import DownloadBrochureForm from '../sections/forms/DownloadBrochureForm';

const DownloadBrochureModal = ({ isOpen, onClose }) => {
  // Handle ESC key and body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleEsc = (e) => {
        if (e.key === 'Escape') onClose();
      };
      
      document.addEventListener('keydown', handleEsc);
      
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle successful form submission
  const handleFormSuccess = () => {
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles['download-brochure-modal']} onClick={handleBackdropClick}>
      <div className={styles['download-brochure-modal__backdrop']}></div>
      <div className={styles['download-brochure-modal__container']}>
        {/* Modal Header */}
        <div className={styles['download-brochure-modal__header']}>
          <div>
            <h2 className={styles['download-brochure-modal__title']}>Download Brochure</h2>
            <p className={styles['download-brochure-modal__subtitle']}>
              Fill in your details to download the brochure
            </p>
          </div>
          <button
            className={styles['download-brochure-modal__close']}
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Body */}
        <div className={styles['download-brochure-modal__body']}>
          <DownloadBrochureForm
            onSuccess={handleFormSuccess}
            isModal={true}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DownloadBrochureModal;