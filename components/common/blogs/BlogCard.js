// ============================================================================
// FILE: /@components/common/blogs/BlogCard.js
// ============================================================================

import React from 'react';
import Link from 'next/link';
import styles from './BlogCard.module.css';
import Image from 'next/image';
const BlogCard = ({ blog }) => {
  const {
    slug,
    title,
    excerpt,
    author,
    category_name,
    featured_image_url,
    featured_image_alt,
    reading_time,
    published_at,
  } = blog;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const getCategoryClass = (category) => {
    const categoryMap = {
      'News': 'category-news',
      'Electric Vehicles': 'category-ev',
      'Technological Advancements': 'category-tech',
      'Events': 'category-events',
      'Reviews': 'category-reviews',
      'Services': 'category-services',
    };
    return categoryMap[category] || 'category-default';
  };

  return (
    <Link href={`/resources/blogs/${slug}`} className={styles['blog-card']}>
      <div className={styles['blog-card__image-wrapper']}>
        <Image
          src={featured_image_url}
          alt={featured_image_alt || title}
          className={styles['blog-card__image']}
          loading="lazy"
          width={393}
          height={240}
        />
        <div className={styles['blog-card__overlay']}></div>
      </div>
      <div className={styles['blog-card__content']}>
        <span className={`${styles['blog-card__category']} ${getCategoryClass(category_name)}`}>
          {category_name}
        </span>
        <h3 className={styles['blog-card__title']}>{title}</h3>
        <p className={styles['blog-card__excerpt']}>{excerpt}</p>
        <div className={styles['blog-card__meta']}>
          <span className={styles['blog-card__author']}>{author}</span>
          <span className={styles['blog-card__separator']}>•</span>
          <span className={styles['blog-card__date']}>{formatDate(published_at)}</span>
          <span className={styles['blog-card__separator']}>•</span>
          <span className={styles['blog-card__reading-time']}>{reading_time} min read</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;