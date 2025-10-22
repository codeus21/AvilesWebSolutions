import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollToTop } from '../utils/scrollToTop';
import './Page.css';

const UIDesign = () => {
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
      {/* Hero Section */}
      <section className="service-hero-section fade-in-section">
        <div className="section-container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">UI/UX Design</h1>
            <p className="service-hero-subtitle">
              Create intuitive, user-friendly experiences that convert visitors into customers. Our UI/UX design focuses on making your website not just beautiful, but highly functional for your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="service-overview-section fade-in-section">
        <div className="section-container">
          <div className="service-overview-content">
            <div className="service-overview-text">
              <h2 className="service-overview-title">Design That Drives Results</h2>
              <p className="service-overview-description">
                Great design isn't just about looking good - it's about creating experiences that guide your customers toward taking action. Our UI/UX design process focuses on understanding your customers' needs and creating intuitive interfaces that make it easy for them to find what they're looking for and contact you for your services.
              </p>
              <p className="service-overview-description">
                We specialize in designing for home service professionals, understanding the unique challenges and opportunities in your industry. From landscaping contractors to HVAC specialists, we create designs that resonate with your target audience and build trust in your expertise.
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
                <div className="service-feature-icon">🎯</div>
                <h3 className="service-feature-title">User-Centered</h3>
                <p className="service-feature-description">Designed with your customers' needs and behaviors in mind</p>
              </motion.div>
              <motion.div 
                className="service-feature-card fade-in-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="service-feature-icon">💡</div>
                <h3 className="service-feature-title">Conversion Focused</h3>
                <p className="service-feature-description">Every element designed to guide visitors toward contacting you</p>
              </motion.div>
              <motion.div 
                className="service-feature-card fade-in-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="service-feature-icon">🏠</div>
                <h3 className="service-feature-title">Industry Specific</h3>
                <p className="service-feature-description">Tailored designs for home service professionals</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Include Section */}
      <section className="service-includes-section fade-in-section">
        <div className="section-container">
          <h2 className="service-includes-title">Our UI/UX Design Process</h2>
          <div className="service-includes-grid">
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">🔍</div>
              <h3 className="service-include-title">User Research</h3>
              <p className="service-include-description">We analyze your target audience to understand their needs, preferences, and online behavior patterns</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">📐</div>
              <h3 className="service-include-title">Wireframing</h3>
              <p className="service-include-description">Create detailed wireframes that map out the structure and flow of your website</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">🎨</div>
              <h3 className="service-include-title">Visual Design</h3>
              <p className="service-include-description">Create beautiful, on-brand visual designs that reflect your professional expertise</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">📱</div>
              <h3 className="service-include-title">Responsive Design</h3>
              <p className="service-include-description">Ensure your website looks and works perfectly on all devices and screen sizes</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">🧪</div>
              <h3 className="service-include-title">Usability Testing</h3>
              <p className="service-include-description">Test and refine designs to ensure optimal user experience and conversion rates</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">📊</div>
              <h3 className="service-include-title">Performance Optimization</h3>
              <p className="service-include-description">Optimize designs for fast loading times and smooth user interactions</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="service-principles-section fade-in-section">
        <div className="section-container">
          <h2 className="service-principles-title">Our Design Principles</h2>
          <div className="service-principles-grid">
            <motion.div 
              className="service-principle-item fade-in-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-principle-icon">👥</div>
              <h3 className="service-principle-title">User-First Approach</h3>
              <p className="service-principle-description">
                Every design decision is made with your customers in mind. We prioritize usability and accessibility to ensure your website serves your visitors effectively.
              </p>
            </motion.div>
            <motion.div 
              className="service-principle-item fade-in-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-principle-icon">🎯</div>
              <h3 className="service-principle-title">Goal-Oriented Design</h3>
              <p className="service-principle-description">
                Every element on your website serves a purpose. We design with your business goals in mind, creating clear paths for visitors to become customers.
              </p>
            </motion.div>
            <motion.div 
              className="service-principle-item fade-in-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="service-principle-icon">⚡</div>
              <h3 className="service-principle-title">Performance Focused</h3>
              <p className="service-principle-description">
                Beautiful design means nothing if it doesn't perform well. We balance aesthetics with functionality and speed to create optimal user experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section fade-in-section">
        <div className="section-container">
          <div className="service-cta-content">
            <h2 className="service-cta-title">Ready to Transform Your Online Presence?</h2>
            <p className="service-cta-description">
              Let's create a user experience that converts visitors into customers. Our UI/UX design will help you stand out from the competition and grow your business.
            </p>
            <div className="service-cta-buttons">
              <Link to="/contact" className="service-cta-button primary" onClick={scrollToTop}>
                Start Your Design Project
              </Link>
              <Link to="/our-work" className="service-cta-button secondary" onClick={scrollToTop}>
                See Our Design Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UIDesign;
