import React, { useState } from 'react';
import './About.css';
import VideoPlayer from '../common/VideoPlayer';
import { getIcon } from '../../data/iconsData';

const About = () => {
  const [showFeatures, setShowFeatures] = useState(false);

  const points = [
    "Backed by four decades of engineering excellence",
    "Committed to innovation in electric mobility and green energy",
    "Focused on building a cleaner, smarter future for India",
    "Empowering communities through technology and job creation",
    "Supporting national growth with scalable, future-ready solutions"
  ];

  const features = [
    {
      title: 'Reliable by Design',
      description: 'Engineered for maximum uptime and long service life to keep your operations running smoothly.'
    },
    {
      title: 'Efficient & Productive',
      description: 'Higher productivity and meaningful cost savings for businesses across every sector.'
    },
    {
      title: 'Sustainable Impact',
      description: 'Purpose-built electric vehicles that cut emissions and move India closer to a greener tomorrow.'
    },
    {
      title: 'Technology-Driven',
      description: 'Smart features, connected architecture, and relentless innovation that evolve with your needs.'
    }
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-section__content">
          <div className="about-section__left">
            <h2 className="about-section__title">
              Driving the Future with EVall Mobility
            </h2>
            <p className="about-section__intro">
              From 40 years of trusted automotive manufacturing to pioneering sustainable mobility solutions—EVall Mobility is more than a company. It's a movement.
            </p>

            <ul className="about-section__points">
              {points.map((point, idx) => (
                <li key={idx} className="about-section__point">
                  <span className="about-section__point-icon">
                    {getIcon('arrow', 22)}
                  </span>
                  <span className="about-section__point-text">{point}</span>
                </li>
              ))}
            </ul>

            <button 
              className="about-section__toggle-btn"
              onClick={() => setShowFeatures(!showFeatures)}
            >
              {showFeatures ? 'Read less' : 'Read more'}
            </button>

            {showFeatures && (
              <div className="about-section__features">
                {features.map((feature, index) => (
                  <div key={index} className="about-section__feature">
                    <div className="about-section__feature-header">
                      <span className="about-section__feature-icon">
                        {getIcon('arrow', 22)}
                      </span>
                      <h3 className="about-section__feature-title">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="about-section__feature-description">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Video Player */}
          <div className="about-section__right">
            <VideoPlayer 
              src="/video/about-us.mp4" 
              title="About Us"
              showControlsAlways={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;