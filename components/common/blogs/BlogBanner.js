// ============================================================================
// FILE: /@components/common/blogs/BlogBanner.js
// ============================================================================

import React from 'react';
import styles from './BlogBanner.module.css';

const BlogBanner = () => {
  return (
    <section className={styles['blog-banner']}>
      <div className={styles['blog-banner__overlay']}></div>
      <div className={styles['blog-banner__content']}>
        <div className={styles['blog-banner__text']}>
          <h1 className={styles['blog-banner__title']}>
            All New <span className={styles['highlight']}>EV</span>
          </h1>
          <p className={styles['blog-banner__subtitle']}>EV UDAY</p>
          <div className={styles['blog-banner__cta']}>
            <span className={styles['blog-banner__cta-text']} bold={true.toString()}>DRIVE BOLD</span>
            <span className={styles['blog-banner__cta-text']}>DRIVE BEYOND</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;