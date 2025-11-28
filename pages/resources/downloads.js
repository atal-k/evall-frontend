// ============================================================================
// FILE: src/pages/DownloadsPage.jsx
// ============================================================================

import React, { useState, useEffect, useRef } from 'react';
import './DownloadsPage.css';
import { getIcon } from '../data/iconsData';

const DownloadsPage = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  // Downloads data
  const downloads = [
    {
      id: 1,
      title: 'EVall Mobility Brochure 1.5T',
      description: 'Complete overview of our electric Mobility vehicle and features',
      filePath: '/assets/evall-mobility-brochure-1.5T.pdf'
    }
  ];

  // Scroll animation
  useEffect(() => {
    const observers = downloads.map((_, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.1 }
      );
    });

    cardRefs.current.forEach((ref, index) => {
      if (ref) observers[index].observe(ref);
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  // Download handler
  const handleDownload = (filePath, title) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="downloads-page">
      {/* Hero Section */}
      <section className="downloads-page__hero">
        <div className="downloads-page__hero-content">
          <h1 className="downloads-page__title">Download Brochures & Manuals</h1>
          <p className="downloads-page__subtitle">
            Access comprehensive product information, technical documentation, and resources
          </p>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="downloads-page__content">
        <div className="downloads-page__container">
          <div className="downloads-page__grid">
            {downloads.map((item, index) => (
              <div
                key={item.id}
                ref={el => cardRefs.current[index] = el}
                className={`downloads-page__card ${visibleCards.includes(index) ? 'downloads-page__card--visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="downloads-page__card-icon">
                  {getIcon('fileText', 40)}
                </div>
                <div className="downloads-page__card-content">
                  <h3 className="downloads-page__card-title">{item.title}</h3>
                  <p className="downloads-page__card-description">{item.description}</p>
                </div>
                <button
                  className="downloads-page__download-btn"
                  onClick={() => handleDownload(item.filePath, item.title)}
                >
                {getIcon('download', 20)}
                  <span>Download PDF</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadsPage;