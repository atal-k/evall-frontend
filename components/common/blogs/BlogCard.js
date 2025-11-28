// ============================================================================
// FILE: /src/components/common/blogs/BlogCard.js
// ============================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

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
    <Link to={`/resources/blogs/${slug}`} className="blog-card">
      <div className="blog-card__image-wrapper">
        <img
          src={featured_image_url}
          alt={featured_image_alt || title}
          className="blog-card__image"
          loading="lazy"
        />
        <div className="blog-card__overlay"></div>
      </div>
      <div className="blog-card__content">
        <span className={`blog-card__category ${getCategoryClass(category_name)}`}>
          {category_name}
        </span>
        <h3 className="blog-card__title">{title}</h3>
        <p className="blog-card__excerpt">{excerpt}</p>
        <div className="blog-card__meta">
          <span className="blog-card__author">{author}</span>
          <span className="blog-card__separator">•</span>
          <span className="blog-card__date">{formatDate(published_at)}</span>
          <span className="blog-card__separator">•</span>
          <span className="blog-card__reading-time">{reading_time} min read</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;