// ============================================================================
// FILE: src/components/common/TestDriveModal.js
// ============================================================================

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './TestDriveModal.module.css';
import TestDriveBookingForm from '../sections/forms/TestDriveBookingForm';

const TestDriveModal = ({ isOpen, onClose }) => {
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
    alert('Test drive booking successful! We will contact you shortly.');
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles['test-drive-modal']} onClick={handleBackdropClick}>
      <div className={styles['test-drive-modal__backdrop']}></div>
      <div className={styles['test-drive-modal__container']}>
        {/* Modal Header */}
        <div className={styles['test-drive-modal__header']}>
          <div>
            <h2 className={styles['test-drive-modal__title']}>Book a Test Drive</h2>
            <p className={styles['test-drive-modal__subtitle']}>
              Fill in your details and schedule a test drive.
            </p>
          </div>
          <button
            className={styles['test-drive-modal__close']}
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Body */}
        <div className={styles['test-drive-modal__body']}>
          <TestDriveBookingForm
            onSuccess={handleFormSuccess}
            isModal={true}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default TestDriveModal;