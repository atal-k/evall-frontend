// ============================================================================
// FILE: /@services/localBlogApi.js
// ============================================================================
/**
 * Local Blog API Service
 * Mimics Django REST Framework responses for development/testing
 */

import blogsData from '../data/blogsData';

class LocalBlogApi {
  constructor() {
    this.blogs = blogsData;
  }

  /**
   * Helper: Filter published blogs only
   */
  getPublishedBlogs() {
    return this.blogs.filter(blog => blog.status === 'published');
  }

  /**
   * Helper: Sort blogs by field
   */
  sortBlogs(blogs, ordering = '-published_at') {
    const isDescending = ordering.startsWith('-');
    const field = isDescending ? ordering.slice(1) : ordering;
    
    return [...blogs].sort((a, b) => {
      let aVal = a[field];
      let bVal = b[field];
      
      // Handle date strings
      if (field.includes('_at')) {
        aVal = new Date(aVal).getTime();
        bVal = new Date(bVal).getTime();
      }
      
      if (aVal < bVal) return isDescending ? 1 : -1;
      if (aVal > bVal) return isDescending ? -1 : 1;
      return 0;
    });
  }

  /**
   * Helper: Create paginated response (Django REST format)
   */
  createPaginatedResponse(data, count = null) {
    return {
      count: count !== null ? count : data.length,
      next: null,
      previous: null,
      results: data
    };
  }

  /**
   * Helper: Parse query string from URL
   */
  parseQueryParams(url) {
    const queryString = url.split('?')[1];
    if (!queryString) return {};
    
    const params = {};
    queryString.split('&').forEach(param => {
      const [key, value] = param.split('=');
      params[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return params;
  }

  /**
   * GET /api/blogs/
   * List all published blogs with filtering and pagination
   */
  getBlogs(url = '') {
    const params = this.parseQueryParams(url);
    let blogs = this.getPublishedBlogs();

    // Apply filters
    if (params.status) {
      blogs = blogs.filter(blog => blog.status === params.status);
    }
    
    if (params.category) {
      blogs = blogs.filter(blog => blog.category === params.category);
    }
    
    if (params.is_featured) {
      const isFeatured = params.is_featured === 'true';
      blogs = blogs.filter(blog => blog.is_featured === isFeatured);
    }
    
    if (params.author) {
      blogs = blogs.filter(blog => blog.author === params.author);
    }

    // Apply search
    if (params.search) {
      const searchTerm = params.search.toLowerCase();
      blogs = blogs.filter(blog => 
        blog.title?.toLowerCase().includes(searchTerm) ||
        blog.meta_description?.toLowerCase().includes(searchTerm) ||
        blog.tags?.toLowerCase().includes(searchTerm) ||
        blog.author?.toLowerCase().includes(searchTerm)
      );
    }

    // Apply ordering
    const ordering = params.ordering || '-published_at';
    blogs = this.sortBlogs(blogs, ordering);

    return this.createPaginatedResponse(blogs);
  }

  /**
   * GET /api/blogs/{slug}/
   * Get single blog by slug and increment views
   */
  getBlogBySlug(slug) {
    const blog = this.blogs.find(b => b.slug === slug);
    if (!blog) {
      throw new Error('Blog not found');
    }
    return blog;
  }

  /**
   * GET /api/blogs/featured/
   * Get all featured blog posts
   */
  getFeaturedBlogs() {
    const featuredBlogs = this.getPublishedBlogs()
      .filter(blog => blog.is_featured === true);
    
    const sortedBlogs = this.sortBlogs(featuredBlogs, '-published_at');
    
    return this.createPaginatedResponse(sortedBlogs);
  }

  /**
   * GET /api/blogs/latest/?limit=5
   * Get latest blog posts with optional limit
   */
  getLatestBlogs(url = '') {
    const params = this.parseQueryParams(url);
    let limit = parseInt(params.limit) || 5;
    
    // Validate limit
    if (limit <= 0) limit = 5;
    
    const allBlogs = this.getPublishedBlogs();
    const sortedBlogs = this.sortBlogs(allBlogs, '-published_at');
    const latestBlogs = sortedBlogs.slice(0, limit);
    
    return this.createPaginatedResponse(latestBlogs, allBlogs.length);
  }

  /**
   * GET /api/blogs/by_category/?category=news
   * Get blogs filtered by category
   */
  getBlogsByCategory(url = '') {
    const params = this.parseQueryParams(url);
    const category = params.category;
    
    if (!category) {
      throw new Error('Category parameter is required');
    }
    
    const categoryBlogs = this.getPublishedBlogs()
      .filter(blog => blog.category === category);
    
    const sortedBlogs = this.sortBlogs(categoryBlogs, '-published_at');
    
    return this.createPaginatedResponse(sortedBlogs);
  }

  /**
   * Main router - handles all API endpoints
   */
  handleRequest(endpoint) {
    try {
      // Remove base path if present
      const path = endpoint.replace('/api/blogs', '').replace(/^\//, '');
      // Route to appropriate handler
      if (path === '' || path.startsWith('?')) {
        // GET /api/blogs/
        return this.getBlogs(endpoint);
      } else if (path === 'featured/' || path.startsWith('featured/?')) {
        // GET /api/blogs/featured/
        return this.getFeaturedBlogs();
      } else if (path === 'latest/' || path.startsWith('latest/?')) {
        // GET /api/blogs/latest/
        return this.getLatestBlogs(endpoint);
      } else if (path === 'by_category/' || path.startsWith('by_category/?')) {
        // GET /api/blogs/by_category/
        return this.getBlogsByCategory(endpoint);
      } else if (path.endsWith('/')) {
        // GET /api/blogs/{slug}/
        const slug = path.replace(/\/$/, '');
        return this.getBlogBySlug(slug);
      }
      console.error('NOT FOUND')
      throw new Error(`Endpoint not found: ${endpoint}`);
    } catch (error) {
      throw error;
    }
  }
}

// Export singleton instance
const localBlogApi = new LocalBlogApi();
export default localBlogApi;


