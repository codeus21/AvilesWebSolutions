import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollToTop } from '../utils/scrollToTop';
import './Page.css';

const WebDevelopment = () => {
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
            <h1 className="service-hero-title">Web Development</h1>
            <p className="service-hero-subtitle">
              Professional, responsive websites built specifically for home service professionals. Get a custom website that converts visitors into customers and grows your business.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="service-overview-section fade-in-section">
        <div className="section-container">
          <div className="service-overview-content">
            <div className="service-overview-text">
              <h2 className="service-overview-title">Custom Websites That Work</h2>
              <p className="service-overview-description">
                We don't just build websites - we create digital experiences that drive results for your business. Our web development process focuses on creating fast, secure, and conversion-optimized websites that help you stand out from the competition.
              </p>
              <p className="service-overview-description">
                Every website we build is tailored to your specific industry, target audience, and business goals. From initial concept to final launch, we ensure your website represents your brand professionally while generating real leads for your business.
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
                <div className="service-feature-icon">⚡</div>
                <h3 className="service-feature-title">Lightning Fast</h3>
                <p className="service-feature-description">Optimized for speed and performance to keep visitors engaged</p>
              </motion.div>
              <motion.div 
                className="service-feature-card fade-in-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="service-feature-icon">📱</div>
                <h3 className="service-feature-title">Mobile First</h3>
                <p className="service-feature-description">Responsive design that works perfectly on all devices</p>
              </motion.div>
              <motion.div 
                className="service-feature-card fade-in-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="service-feature-icon">🔒</div>
                <h3 className="service-feature-title">Secure & Reliable</h3>
                <p className="service-feature-description">Built with security best practices and reliable hosting</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Include Section */}
      <section className="service-includes-section fade-in-section">
        <div className="section-container">
          <h2 className="service-includes-title">What's Included in Our Web Development</h2>
          <div className="service-includes-grid">
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">🎨</div>
              <h3 className="service-include-title">Custom Design</h3>
              <p className="service-include-description">Unique design tailored to your brand and industry that stands out from competitors</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">📞</div>
              <h3 className="service-include-title">Contact Forms</h3>
              <p className="service-include-description">Professional contact forms that capture leads and send them directly to your email</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">🖼️</div>
              <h3 className="service-include-title">Photo Galleries</h3>
              <p className="service-include-description">Showcase your work with beautiful, organized photo galleries that impress visitors</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">📱</div>
              <h3 className="service-include-title">Mobile Optimization</h3>
              <p className="service-include-description">Perfect display and functionality on smartphones, tablets, and all devices</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">🔍</div>
              <h3 className="service-include-title">SEO Foundation</h3>
              <p className="service-include-description">Built-in SEO optimization to help your website rank higher in search results</p>
            </motion.div>
            <motion.div 
              className="service-include-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="service-include-icon">⚙️</div>
              <h3 className="service-include-title">Easy Management</h3>
              <p className="service-include-description">Simple content management system so you can update your site easily</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process-section fade-in-section">
        <div className="section-container">
          <h2 className="service-process-title">Our Web Development Process</h2>
          <div className="service-process-steps">
            <motion.div 
              className="service-process-step fade-in-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-process-number">1</div>
              <h3 className="service-process-step-title">Discovery & Planning</h3>
              <p className="service-process-step-description">
                We start by understanding your business, target audience, and goals to create a strategic plan for your website.
              </p>
            </motion.div>
            <motion.div 
              className="service-process-step fade-in-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-process-number">2</div>
              <h3 className="service-process-step-title">Design & Wireframing</h3>
              <p className="service-process-step-description">
                We create custom designs and wireframes that reflect your brand and optimize for user experience and conversions.
              </p>
            </motion.div>
            <motion.div 
              className="service-process-step fade-in-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="service-process-number">3</div>
              <h3 className="service-process-step-title">Development & Testing</h3>
              <p className="service-process-step-description">
                We build your website using modern technologies and thoroughly test it across all devices and browsers.
              </p>
            </motion.div>
            <motion.div 
              className="service-process-step fade-in-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="service-process-number">4</div>
              <h3 className="service-process-step-title">Launch & Training</h3>
              <p className="service-process-step-description">
                We launch your website and provide training on how to manage and update your content going forward.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="service-technologies-section fade-in-section">
        <div className="section-container">
          <h2 className="service-technologies-title">Technologies We Use</h2>
          <p className="service-technologies-subtitle">
            We use modern, proven technologies to build fast, secure, and scalable websites
          </p>
          <div className="service-technologies-grid">
            <motion.div 
              className="service-technology-item fade-in-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-technology-icon">⚛️</div>
              <h3 className="service-technology-name">React</h3>
              <p className="service-technology-description">Modern JavaScript framework for interactive user interfaces</p>
            </motion.div>
            <motion.div 
              className="service-technology-item fade-in-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-technology-icon">💎</div>
              <h3 className="service-technology-name">HTML5 & CSS3</h3>
              <p className="service-technology-description">Latest web standards for semantic markup and beautiful styling</p>
            </motion.div>
            <motion.div 
              className="service-technology-item fade-in-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="service-technology-icon">🚀</div>
              <h3 className="service-technology-name">JavaScript</h3>
              <p className="service-technology-description">Dynamic functionality and enhanced user interactions</p>
            </motion.div>
            <motion.div 
              className="service-technology-item fade-in-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="service-technology-icon">☁️</div>
              <h3 className="service-technology-name">Cloud Hosting</h3>
              <p className="service-technology-description">Reliable, fast hosting with 99.9% uptime guarantee</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta-section fade-in-section">
        <div className="section-container">
          <div className="service-cta-content">
            <h2 className="service-cta-title">Ready to Build Your Professional Website?</h2>
            <p className="service-cta-description">
              Let's create a website that showcases your expertise and generates real leads for your business. Get started with a free consultation today.
            </p>
            <div className="service-cta-buttons">
              <Link to="/contact" className="service-cta-button primary" onClick={scrollToTop}>
                Get Started Today
              </Link>
              <Link to="/our-work" className="service-cta-button secondary" onClick={scrollToTop}>
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopment;
