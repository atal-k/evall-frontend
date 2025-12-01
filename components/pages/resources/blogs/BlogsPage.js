// ============================================
// components/pages/resources/blogs/BlogPage.js
// ============================================

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useBlogBySlug, useBlogsByCategory } from '@/hooks/useBlogs';
import BlogRenderer from '@/components/common/blogs/BlogRenderer';
import BlogCard from '@/components/common/blogs/BlogCard';
import styles from './BlogPage.module.css';

// NOTE: Renamed component function to BlogPageComponent for consistency.
// NOTE: Changed React Router's Link to Next.js Link component.
// NOTE: Changed <img> to Next.js <Image> component for optimization.
const BlogPageComponent = ({ slug }) => {
  const { data: blog, loading, error } = useBlogBySlug(slug);
  const { data: relatedData } = useBlogsByCategory(blog?.category);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const getCategoryClass = (category) => {
    const categoryMap = {
      'news': styles.badgeNews,
      'electronic-vehicles': styles.badgeEv,
      'tech-advancement': styles.badgeTech,
      'events': styles.badgeEvents,
      'reviews': styles.badgeReviews,
      'services': styles.badgeServices,
    };
    return categoryMap[category] || styles.badgeDefault;
  };
  if (loading) {
    return (
      <div className={styles['blog-page']}>
        <div className='container'>
          <div className={styles['blog-page__loading']}>
            <div className={styles['blog-page__spinner']}></div>
            <p>Loading blog post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className={styles['blog-page']}>
        <div className='container'>
          <div className={styles['blog-page__error']}>
            <h2>Blog post not found</h2>
            <p>{error || 'The requested blog post could not be found.'}</p>
            <Link href="/resources/blogs" className={styles['blog-page__back-link']}>
              Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedBlogs = relatedData?.results?.filter((b) => b.slug !== slug).slice(0, 3) || [];

  return (
    <div className={styles['blog-page']}>
      {/* Breadcrumb */}
      <div className={styles['blog-page__breadcrumb-wrapper']}>
        <div className='container'>
          <nav className={styles['blog-page__breadcrumb']}>
            <Link href="/resources/blogs" className={styles['blog-page__breadcrumb-link']}>
              Blogs
            </Link>
            <span className={styles['blog-page__breadcrumb-separator']}>{'>'}</span>
            <Link href={`/resources/blogs?category=${blog.category}`} className={styles['blog-page__breadcrumb-link']}>
              {blog.category_name}
            </Link>
            <span className={styles['blog-page__breadcrumb-separator']}>{'>'}</span>
            <span className={styles['blog-page__breadcrumb-current']}>{blog.title}</span>
          </nav>
        </div>
      </div>

      {/* Featured Image */}
      <div className={styles['blog-page__featured-image-wrapper']}>
        <Image
          src={blog.featured_image_url}
          alt={blog.featured_image_alt || blog.title}
          className={styles['blog-page__featured-image']}
          width={1290}
          height={500}
          priority
        />
        {blog.featured_image_caption && (
          <p className={styles['blog-page__image-caption']}>{blog.featured_image_caption}</p>
        )}
      </div>

      {/* Blog Content */}
      <div className='container'>
        <article className={styles['blog-page__article']}>
          {/* Title */}
          <h1 className={styles['blog-page__title']}>{blog.title}</h1>

          {/* Meta Information */}
          <div className={styles['blog-page__meta']}>
            <div className={styles['blog-page__meta-left']}>
              <span className={styles['blog-page__author']}>{blog.author}</span>
              <span className={styles['blog-page__meta-separator']}>•</span>
              <time className={styles['blog-page__date']}>{formatDate(blog.published_at)}</time>
              <span className={styles['blog-page__meta-separator']}>•</span>
              <span className={styles['blog-page__reading-time']}>{blog.reading_time} min read</span>
            </div>
            <span className={`${styles['blog-page__category-badge']} ${styles[getCategoryClass(blog.category)]}`}>
              {blog.category_name}
            </span>
          </div>

          {/* Content */}
          <BlogRenderer content={blog.content} />

          {/* Tags */}
          {blog.tag_list && blog.tag_list.length > 0 && (
            <div className={styles['blog-page__tags']}>
              <h3 className={styles['blog-page__tags-title']}>Tags:</h3>
              <div className={styles['blog-page__tags-list']}>
                {blog.tag_list.map((tag, index) => (
                  <span key={index} className={styles['blog-page__tag']}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <section className={styles['blog-page__related']}>
            <h2 className={styles['blog-page__related-title']}>Related Blogs</h2>
            <div className={styles['blog-page__related-grid']}>
              {relatedBlogs.map((relatedBlog) => (
                <BlogCard key={relatedBlog.id} blog={relatedBlog} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogPageComponent;