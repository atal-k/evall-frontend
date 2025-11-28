// ============================================================================
// FILE: /src/components/common/blogs/BlogBanner.js
// ============================================================================

import React from 'react';
import './BlogBanner.css';
import Logo from '../Logo';

const BlogBanner = () => {
  return (
    <section className="blog-banner">
      <div className="blog-banner__overlay"></div>
      <div className="blog-banner__content">
        <div className="blog-banner__text">
          <h1 className="blog-banner__title">
            All New <span className="highlight">EV</span>
          </h1>
          <p className="blog-banner__subtitle">EV UDAY</p>
          <div className="blog-banner__cta">
            <span className="blog-banner__cta-text bold">DRIVE BOLD</span>
            <span className="blog-banner__cta-text">DRIVE BEYOND</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;