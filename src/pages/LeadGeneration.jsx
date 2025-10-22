import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollToTop } from '../utils/scrollToTop';
import './Page.css';

const LeadGeneration = () => {
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
            <h1 className="service-hero-title">Lead Generation</h1>
            <p className="service-hero-subtitle">
              Never miss a client due to a missed phone call. Our lead generation systems capture every inquiry and ensure you never lose a potential customer again.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="service-overview-section fade-in-section">
        <div className="section-container">
          <div className="service-overview-content">
            <div className="service-overview-text">
              <h2 className="service-overview-title">Capture Every Lead, Never Miss a Customer</h2>
              <p className="service-overview-description">
                How many potential customers have you lost because you missed their call, or they couldn't easily reach you? Our lead generation systems ensure that every visitor to your website has multiple ways to contact you, and every inquiry is captured and delivered to you immediately.
              </p>
              <p className="service-overview-description">
                We implement smart lead capture systems that work 24/7, even when you're busy with other customers. From contact forms to click-to-call buttons, we make it incredibly easy for potential customers to reach you, and we ensure you never miss an opportunity to grow your business.
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
                <div className="service-feature-icon">📞</div>
                <h3 className="service-feature-title">24/7 Lead Capture</h3>
                <p className="service-feature-description">Capture leads even when you're not available to answer the phone</p>
              </motion.div>
              <motion.div 
                className="service-feature-card fade-in-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="service-feature-icon">⚡</div>
                <h3 className="service-feature-title">Instant Notifications</h3>
                <p className="service-feature-description">Get notified immediately when someone wants to contact you</p>
              </motion.div>
              <motion.div 
                className="service-feature-card fade-in-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="service-feature-icon">📱</div>
                <h3 className="service-feature-title">Multiple Contact Methods</h3>
                <p className="service-feature-description">Give customers various ways to reach you based on their preference</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Include Section */}
      <section className="service-includes-section fade-in-section">
        <div className="section-container">
          <h2 className="service-includes-title">Our Lead Generation Solutions</h2>
          <div className="service-includes-grid">
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">📝</div>
              <h3 className="service-include-title">Smart Contact Forms</h3>
              <p className="service-include-description">Optimized contact forms that capture all necessary information and qualify leads before they reach you</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">📞</div>
              <h3 className="service-include-title">Click-to-Call Buttons</h3>
              <p className="service-include-description">Make it easy for mobile users to call you directly with one tap from your website</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">💬</div>
              <h3 className="service-include-title">Live Chat Integration</h3>
              <p className="service-include-description">Engage visitors in real-time and capture leads through instant messaging</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">📧</div>
              <h3 className="service-include-title">Email Integration</h3>
              <p className="service-include-description">Automatic email notifications and lead management system to organize your inquiries</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">🎯</div>
              <h3 className="service-include-title">Lead Qualification</h3>
              <p className="service-include-description">Ask the right questions to qualify leads and prioritize the most valuable prospects</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">📊</div>
              <h3 className="service-include-title">Lead Tracking</h3>
              <p className="service-include-description">Track and analyze your lead sources to optimize your marketing efforts</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="service-problem-section fade-in-section">
        <div className="section-container">
          <h2 className="service-problem-title">Stop Losing Customers to Missed Calls</h2>
          <div className="service-problem-grid">
            <motion.div 
              className="service-problem-item fade-in-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-problem-icon">❌</div>
              <h3 className="service-problem-title">The Problem</h3>
              <ul className="service-problem-list">
                <li>Missing important calls while working on jobs</li>
                <li>Customers can't easily find your contact information</li>
                <li>No backup system when you're unavailable</li>
                <li>Lost leads to competitors who answer faster</li>
                <li>Difficulty tracking which marketing efforts bring in leads</li>
              </ul>
            </motion.div>
            <motion.div 
              className="service-problem-item fade-in-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-problem-icon">✅</div>
              <h3 className="service-problem-title">Our Solution</h3>
              <ul className="service-problem-list">
                <li>Multiple ways for customers to reach you 24/7</li>
                <li>Instant notifications when someone wants to contact you</li>
                <li>Backup contact methods when phone isn't available</li>
                <li>Faster response times to beat the competition</li>
                <li>Complete lead tracking and management system</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section fade-in-section">
        <div className="section-container">
          <div className="service-cta-content">
            <h2 className="service-cta-title">Ready to Never Miss Another Lead?</h2>
            <p className="service-cta-description">
              Don't let another potential customer slip away. Our lead generation systems will ensure you capture every inquiry and never miss an opportunity to grow your business.
            </p>
            <div className="service-cta-buttons">
              <Link to="/contact" className="service-cta-button primary" onClick={scrollToTop}>
                Set Up Lead Generation
              </Link>
              <Link to="/services" className="service-cta-button secondary" onClick={scrollToTop}>
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadGeneration;
