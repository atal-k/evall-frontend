// ============================================
// components/pages/resources/blogs/BlogsHome.js
// ============================================

import React, { useState } from 'react';
import { useBlogs, useLatestBlogs, useFeaturedBlogs } from '@/hooks/useBlogs';
import BlogBanner from '@/components/common/blogs/BlogBanner';
import BlogCard from '@/components/common/blogs/BlogCard';
import styles from './BlogsHome.module.css';

// NOTE: Renamed component function to BlogsHomePageComponent for consistency.
const BlogsHomePageComponent = () => {
  const { data: allBlogsData, loading: allLoading, error: allError } = useBlogs();
  const { data: latestData, loading: latestLoading } = useLatestBlogs();
  const { data: featuredData, loading: featuredLoading } = useFeaturedBlogs();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Blogs', value: 'all' },
    { id: 'ev', name: 'Electronic Vehicles', value: 'electronic-vehicles' },
    { id: 'tech', name: 'Technological Advancements', value: 'technological-advancements' },
    { id: 'events', name: 'Events', value: 'events' },
    { id: 'news', name: 'News', value: 'news' },
    { id: 'reviews', name: 'Reviews', value: 'reviews' },
    { id: 'services', name: 'Services', value: 'services' },
  ];

  const allBlogs = allBlogsData?.results || [];
  const latestBlogs = latestData?.results || [];
  const featuredBlogs = featuredData?.results || [];

  const filteredBlogs =
    selectedCategory === 'all'
      ? allBlogs
      : allBlogs.filter((blog) => blog.category === selectedCategory);

  if (allError) {
    return (
      <div className={styles.blogsHome}>
        <BlogBanner />
        <div className="container">
          <div className={styles.blogsHome__error}>
            <p>Error loading blogs: {allError}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles['blogs-home']}>
      <BlogBanner />

      <div className="container">
        {/* Latest Blogs Section */}
        <section className={styles['blogs-home__section']}>
          <h2 className={styles['blogs-home__section-title']}>Latest Blogs</h2>
          {latestLoading ? (
            <div className={styles['blogs-home__loading']}>Loading latest blogs...</div>
          ) : (
            <div className={`${styles['blogs-home__grid']} ${styles['blogs-home__grid--featured']}`}>
              {latestBlogs.slice(0, 3).map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </section>

        {/* Featured Blogs Section */}
        {featuredBlogs.length > 0 && (
          <section className={styles['blogs-home__section']}>
            <h2 className={styles['blogs-home__section-title']}>Featured Blogs</h2>
            {featuredLoading ? (
              <div className={styles['blogs-home__loading']}>Loading featured blogs...</div>
            ) : (
              <div className={`${styles['blogs-home__grid']} ${styles['blogs-home__grid--featured']}`}>
                {featuredBlogs.slice(0, 3).map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Categories Filter */}
        <section className={styles['blogs-home__section']}>
          <h2 className={styles['blogs-home__section-title']}>Explore by Category</h2>
          <div className={styles['blogs-home__categories']}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles['blogs-home__category-btn']} ${
                  selectedCategory === cat.value ? styles.active : ''
                }`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* All Blogs Grid */}
        <section className={styles['blogs-home__section']}>
          <h2 className={styles['blogs-home__section-title']}>
            {selectedCategory === 'all' ? 'All Blogs' : categories.find(c => c.value === selectedCategory)?.name}
          </h2>
          {allLoading ? (
            <div className={styles['blogs-home__loading']}>Loading blogs...</div>
          ) : filteredBlogs.length > 0 ? (
            <div className={styles['blogs-home__grid']}>
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className={styles['blogs-home__empty']}>
              <p>No blogs found in this category.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default BlogsHomePageComponent;