import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { scrollToTop } from '../utils/scrollToTop';
import './Page.css';

const SEOOptimization = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with fade-in classes
    const fadeElements = document.querySelectorAll('.fade-in-section, .fade-in-image');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <SEOHead 
        title="SEO Optimization Services for Home Service Professionals | Aviles Web Solutions"
        description="Get found by customers searching for your services. Our SEO optimization helps your website rank higher in search results, driving more qualified traffic and leads to your business."
        keywords="SEO optimization, local SEO, search engine optimization, Google Business Profile, keyword optimization, local search ranking, home service SEO, landscaping SEO, HVAC SEO, contractor SEO"
        url="https://avileswebsolutions.com/seo-optimization"
      />
      {/* Hero Section */}
      <section className="service-hero-section fade-in-section">
        <div className="section-container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">SEO Optimization</h1>
            <p className="service-hero-subtitle">
              Get found by customers searching for your services. Our SEO optimization helps your website rank higher in search results, driving more qualified traffic and leads to your business.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="service-overview-section fade-in-section">
        <div className="section-container">
          <div className="service-overview-content">
            <div className="service-overview-text">
              <h2 className="service-overview-title">Get Discovered by Local Customers</h2>
              <p className="service-overview-description">
                When potential customers search for services like "landscaping near me" or "HVAC repair," you want your business to appear at the top of the results. Our SEO optimization service helps your website rank higher in search engines, making it easier for local customers to find and contact you.
              </p>
              <p className="service-overview-description">
                We focus specifically on local SEO strategies that work for home service professionals. From optimizing your Google Business Profile to creating location-specific content, we ensure your business appears when and where customers are looking for your services.
              </p>
            </div>
            <div className="service-overview-features">
              <motion.div 
                className="service-feature-card fade-in-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-feature-icon">🔍</div>
                <h3 className="service-feature-title">Local Search Focus</h3>
                <p className="service-feature-description">Optimized to rank for local searches in your service area</p>
              </motion.div>
              <motion.div 
                className="service-feature-card fade-in-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="service-feature-icon">📈</div>
                <h3 className="service-feature-title">Measurable Results</h3>
                <p className="service-feature-description">Track your progress with detailed analytics and reporting</p>
              </motion.div>
              <motion.div 
                className="service-feature-card fade-in-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="service-feature-icon">🎯</div>
                <h3 className="service-feature-title">Industry Specific</h3>
                <p className="service-feature-description">Strategies tailored for home service professionals</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Include Section */}
      <section className="service-includes-section fade-in-section">
        <div className="section-container">
          <h2 className="service-includes-title">Our SEO Optimization Services</h2>
          <div className="service-includes-grid">
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">📍</div>
              <h3 className="service-include-title">Google Business Profile</h3>
              <p className="service-include-description">Optimize your Google Business Profile to appear in local map results and attract nearby customers</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">🏷️</div>
              <h3 className="service-include-title">Keyword Optimization</h3>
              <p className="service-include-description">Research and target the keywords your customers use when searching for your services</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">📝</div>
              <h3 className="service-include-title">Content Optimization</h3>
              <p className="service-include-description">Create and optimize content that answers your customers' questions and showcases your expertise</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">🔗</div>
              <h3 className="service-include-title">Local Link Building</h3>
              <p className="service-include-description">Build quality local backlinks to improve your website's authority and search rankings</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">⭐</div>
              <h3 className="service-include-title">Review Management</h3>
              <p className="service-include-description">Help you get more positive reviews and manage your online reputation</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">📊</div>
              <h3 className="service-include-title">Analytics & Reporting</h3>
              <p className="service-include-description">Monthly reports showing your ranking improvements and traffic growth</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Benefits Section */}
      <section className="service-benefits-section fade-in-section">
        <div className="section-container">
          <h2 className="service-benefits-title">Why SEO Matters for Your Business</h2>
          <div className="service-benefits-grid">
            <motion.div 
              className="service-benefit-item fade-in-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-benefit-icon">👀</div>
              <h3 className="service-benefit-title">Increased Visibility</h3>
              <p className="service-benefit-description">
                Rank higher in search results when customers are actively looking for your services. The higher you rank, the more likely customers are to find and contact you.
              </p>
            </motion.div>
            <motion.div 
              className="service-benefit-item fade-in-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-benefit-icon">💰</div>
              <h3 className="service-benefit-title">Cost-Effective Marketing</h3>
              <p className="service-benefit-description">
                Unlike paid advertising, SEO provides long-term results. Once you rank well for relevant keywords, you'll continue getting organic traffic without ongoing ad costs.
              </p>
            </motion.div>
            <motion.div 
              className="service-benefit-item fade-in-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="service-benefit-icon">🎯</div>
              <h3 className="service-benefit-title">Qualified Leads</h3>
              <p className="service-benefit-description">
                Customers who find you through search are often more qualified and ready to hire. They're actively looking for your services, making them better prospects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section fade-in-section">
        <div className="section-container">
          <div className="service-cta-content">
            <h2 className="service-cta-title">Ready to Get Found by More Customers?</h2>
            <p className="service-cta-description">
              Stop losing customers to competitors who rank higher in search results. Our SEO optimization will help you get discovered by customers actively searching for your services.
            </p>
            <div className="service-cta-buttons">
              <Link to="/contact" className="service-cta-button primary" onClick={scrollToTop}>
                Start SEO Optimization
              </Link>
              <Link to="/about" className="service-cta-button secondary" onClick={scrollToTop}>
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOOptimization;
