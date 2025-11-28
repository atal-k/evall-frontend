// ============================================
// components/pages/resources/CustomerStories.js
// ============================================

import React, { useEffect } from 'react';
import Testimonials from '@/components/sections/Testimonials';
import Callout from '@/components/sections/Callout';
import './CustomerStories.css';

// NOTE: Renamed component function to CustomerStoriesPageComponent for consistency.
const CustomerStoriesPageComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToStories = () => {
    const storiesSection = document.getElementById('customer-stories-section');
    if (storiesSection) {
      storiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Customer Stories Data for Testimonials Component
  const customerStoriesData = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Logistics Entrepreneur',
      company: 'Pune Transport Services',
      avatar: '/images/peoples/person3.png',
      rating: 5,
      text: 'EVall toh meri transport business ka asli partner hai—hamesha reliable, hamesha ready! For me, the Uday is more than a vehicle—it is a trusted business partner that has reduced operational costs while improving efficiency. The 250 km range and quick-charge capability means my fleet spends more time on the road and less time at charging stations, making it indispensable to my business operations.'
    },
    {
      id: 2,
      name: 'Imran Sheikh',
      role: 'Small Business Owner',
      company: 'Punjab Goods Supply',
      avatar: '/images/peoples/person2.png',
      rating: 5,
      text: 'Chhote business ko bada banane mein EVall ne sach mein madad ki, ab har delivery smooth ho gayi! The EVall Uday completely changed the growth trajectory of my business. With its robust payload capacity and low maintenance costs, I expanded my delivery area and increased customer influence without worrying about excessive overhead. The reliability and innovation of Uday were vital in building my business reputation for on-time delivery and sustainability.'
    },
    {
      id: 3,
      name: 'Shalini Mehta',
      role: 'Business Owner',
      company: 'Mehta Pickle Works, Bengaluru',
      avatar: '/images/peoples/person1.png',
      rating: 5,
      text: 'Family transport ke liye eco-friendly ride chahiye thi, EVall Uday ne sabko khush aur safe rakha. Making the switch to EVall Uday was a turning point for my pickle business. Beyond lower fuel costs and better performance, I love the quieter, environmentally-friendly ride that aligns with my sustainability ethos. The Uday is durable, technologically advanced, and has become a reliable component of my day-to-day work and future business endeavors.'
    }
  ];

  return (
    <div className="customer-stories-page">
      {/* Hero Section */}
      <section className="customer-stories-hero">
        <div className="customer-stories-hero-overlay"></div>
        <div className="customer-stories-hero-content">
          <h1 className="customer-stories-hero-title">Customer Stories by EVall</h1>
          <p className="customer-stories-hero-subtitle">
            Covering Miles with Customers: Celebrating the Journeys that Drive EVall Forward
          </p>
          <button
            className="customer-stories-hero-btn"
            onClick={handleScrollToStories}
          >
            View More
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="customer-stories-intro">
        <div className="customer-stories-container">
          <h2 className="customer-stories-intro-title">Welcome to the World of EVall Stories</h2>
          <p className="customer-stories-intro-text">
            Tune into a collection of customer journeys that illustrates how our Commercial Vehicle Solutions
            has changed the way our customers are driving the miles forward. For them, it&apos;s more than a vehicle,
            but it&apos;s a partner driving progress, innovation, and success on every mile.
          </p>
          <p className="customer-stories-intro-cta">See their journeys.</p>

          <div className="customer-stories-intro-highlight">
            <h3 className="customer-stories-intro-highlight-title">
              Covering Businesses Miles with a Greener Smile.
            </h3>
          </div>
        </div>
      </section>

      {/* Customer Stories Section - Using Testimonials Component */}
      <section id="customer-stories-section" className="customer-stories-testimonials">
        <Testimonials data={customerStoriesData} />
      </section>
      <Callout />
    </div>
  );
};

export default CustomerStoriesPageComponent;