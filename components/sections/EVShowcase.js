// @components/sections/EVShowcase.js
/**
 * EVShowcase - Electric Vehicle 360° Product Showcase
 * 
 * Full-screen immersive product viewer with integrated 360° spin functionality.
 * Features: Navigation controls, CTA buttons, and responsive design.
 */

import React, { useRef } from "react";
import SpinViewer from "../../lib/spin-viewer";
import Button from "../common/Button";
import styles from './EVShowcase.module.css';

// Navigation Icons
const LeftIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const RightIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const EVShowcase = ({
  // Viewer props
  quantity = 19,
  imagePath = "/images/vans",
  fileName = "output_{index}.png",
  
  // Content props
  title = "EV UDAY",
  tagline = "Drive bold. Drive beyond.",
  backgroundImage = "/images/canvas-background.png",
  
  // CTA handlers
  onRequestQuote,
  onBookTestDrive,
  
  // Optional customization
  autoplay = false,
  fps = 30,
  preload = 4,
  sensitivity = 1
}) => {
  const viewerRef = useRef(null);

  const handlePrev = () => {
    if (viewerRef.current) {
      viewerRef.current.prev();
    }
  };

  const handleNext = () => {
    if (viewerRef.current) {
      viewerRef.current.next();
    }
  };

  const handleRequestQuote = () => {
    if (onRequestQuote) {
      onRequestQuote();
    } else {
      console.log("Request Quote clicked");
    }
  };

  const handleBookTestDrive = () => {
    if (onBookTestDrive) {
      onBookTestDrive();
    } else {
      console.log("Book Test Drive clicked");
    }
  };

  return (
    <div className={styles['ev-showcase']}>
      {/* Background Layer */}
      <div 
        className={styles['ev-showcase__background']}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />

      {/* Header */}
      <header className={styles['ev-showcase__header']}>
        <h1 className={styles['ev-showcase__title']}>{title}</h1>
        <p className={styles['ev-showcase__tagline']}>{tagline}</p>
      </header>

      {/* Navigation Controls */}
      <button
        className={`${styles['ev-showcase__nav']} ${styles['ev-showcase__nav--left']}`}
        onClick={handlePrev}
        aria-label="View previous angle"
        title="Previous"
      >
        <LeftIcon />
      </button>

      <button
        className={`${styles['ev-showcase__nav']} ${styles['ev-showcase__nav--right']}`}
        onClick={handleNext}
        aria-label="View next angle"
        title="Next"
      >
        <RightIcon />
      </button>

      {/* 360 Viewer Container */}
      <div className={styles['ev-showcase__viewer-container']}>
        <SpinViewer
          ref={viewerRef}
          quantity={quantity}
          imagePath={imagePath}
          fileName={fileName}
          startIndex={16}
          autoplay={autoplay}
          fps={fps}
          preload={preload}
          sensitivity={sensitivity}
          width="100%"
        />
        
        
      </div>

      {/* CTA Footer */}
      <footer className={styles['ev-showcase__footer']}>
        <div className={styles['ev-showcase__cta-group']}>
          <Button 
            variant="white" 
            onClick={handleRequestQuote}
            className="ev-showcase__cta-button"
          >
            Request Quote
          </Button>
          <Button 
            variant="black" 
            onClick={handleBookTestDrive}
            className="ev-showcase__cta-button"
          >
            Book Test Drive
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default EVShowcase;