import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import huastecoWebsite from '../assets/Gallery/huastecowebsite.png';
import jnhWebsite from '../assets/Gallery/JNHWebsite.png';
import soundproofWebsite from '../assets/Gallery/SoundproofWebsite.png';
import { scrollToTop } from '../utils/scrollToTop';
import './Page.css';

const OurWork = () => {
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
      <section className="portfolio-hero-section fade-in-section">
        <div className="section-container">
          <div className="portfolio-hero-content">
            <h1 className="portfolio-hero-title">Our Work</h1>
            <p className="portfolio-hero-subtitle">
              See how we've helped home service professionals build their online presence and grow their businesses with professional websites that generate real leads.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section className="portfolio-showcase-section fade-in-section">
        <div className="section-container">
          <h2 className="portfolio-showcase-title">Featured Projects</h2>
          <p className="portfolio-showcase-subtitle">
            Each project is carefully crafted to meet the unique needs of our clients and their industries.
          </p>
          
          <div className="portfolio-showcase-grid">
            <motion.div 
              className="portfolio-showcase-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="portfolio-showcase-image">
                <img src={huastecoWebsite} alt="Huasteco Landscaping Website" />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <h3>Huasteco Landscaping</h3>
                    <p>Professional landscaping website with project gallery</p>
                    <div className="portfolio-tags">
                      <span className="portfolio-tag">Landscaping</span>
                      <span className="portfolio-tag">Gallery</span>
                      <span className="portfolio-tag">Contact Forms</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-showcase-content">
                <h3 className="portfolio-showcase-item-title">Huasteco Landscaping & Lawn Care</h3>
                <p className="portfolio-showcase-item-description">
                  A modern, professional website for a landscaping company featuring a comprehensive project gallery, service descriptions, and easy-to-use contact forms. The design emphasizes the company's expertise and showcases their beautiful work.
                </p>
                <div className="portfolio-features">
                  <div className="portfolio-feature">
                    <span className="portfolio-feature-icon">📱</span>
                    <span>Mobile Responsive Design</span>
                  </div>
                  <div className="portfolio-feature">
                    <span className="portfolio-feature-icon">🖼️</span>
                    <span>Project Gallery</span>
                  </div>
                  <div className="portfolio-feature">
                    <span className="portfolio-feature-icon">📞</span>
                    <span>Contact Forms</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="portfolio-showcase-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="portfolio-showcase-image">
                <img src={jnhWebsite} alt="JNH Construction Website" />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <h3>JNH Architectural Landscaping</h3>
                    <p>Professional construction and landscaping website</p>
                    <div className="portfolio-tags">
                      <span className="portfolio-tag">Construction</span>
                      <span className="portfolio-tag">Landscaping</span>
                      <span className="portfolio-tag">SEO Optimized</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-showcase-content">
                <h3 className="portfolio-showcase-item-title">JNH Architectural Landscaping</h3>
                <p className="portfolio-showcase-item-description">
                  A comprehensive website for an architectural landscaping company that combines construction and design services. Features include detailed service pages, project showcases, and SEO optimization to help the business rank higher in local searches.
                </p>
                <div className="portfolio-features">
                  <div className="portfolio-feature">
                    <span className="portfolio-feature-icon">🏗️</span>
                    <span>Service Pages</span>
                  </div>
                  <div className="portfolio-feature">
                    <span className="portfolio-feature-icon">🔍</span>
                    <span>SEO Optimized</span>
                  </div>
                  <div className="portfolio-feature">
                    <span className="portfolio-feature-icon">📱</span>
                    <span>Mobile Responsive</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="portfolio-showcase-item fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="portfolio-showcase-image">
                <img src={soundproofWebsite} alt="Soundproof Solutions Website" />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <h3>Soundproof Audio & Tint</h3>
                    <p>Specialized automotive services website</p>
                    <div className="portfolio-tags">
                      <span className="portfolio-tag">Automotive</span>
                      <span className="portfolio-tag">Audio</span>
                      <span className="portfolio-tag">Tinting</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-showcase-content">
                <h3 className="portfolio-showcase-item-title">Soundproof Audio & Tint</h3>
                <p className="portfolio-showcase-item-description">
                  A specialized website for automotive audio and window tinting services. The design highlights the technical expertise and premium services offered, with clear service descriptions and easy contact methods for potential customers.
                </p>
                <div className="portfolio-features">
                  <div className="portfolio-feature">
                    <span className="portfolio-feature-icon">🚗</span>
                    <span>Automotive Focus</span>
                  </div>
                  <div className="portfolio-feature">
                    <span className="portfolio-feature-icon">🎵</span>
                    <span>Audio Services</span>
                  </div>
                  <div className="portfolio-feature">
                    <span className="portfolio-feature-icon">🌞</span>
                    <span>Window Tinting</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="portfolio-process-section fade-in-section">
        <div className="section-container">
          <h2 className="portfolio-process-title">Our Process</h2>
          <p className="portfolio-process-subtitle">
            From initial consultation to final launch, we ensure every project meets your business goals.
          </p>
          
          <div className="process-steps">
            <motion.div 
              className="process-step fade-in-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="process-step-number">1</div>
              <h3 className="process-step-title">Discovery & Planning</h3>
              <p className="process-step-description">
                We start by understanding your business, target audience, and goals to create a strategic plan for your website.
              </p>
            </motion.div>

            <motion.div 
              className="process-step fade-in-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="process-step-number">2</div>
              <h3 className="process-step-title">Design & Development</h3>
              <p className="process-step-description">
                Our team creates a custom design that reflects your brand and develops a fully functional website optimized for conversions.
              </p>
            </motion.div>

            <motion.div 
              className="process-step fade-in-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="process-step-number">3</div>
              <h3 className="process-step-title">Testing & Launch</h3>
              <p className="process-step-description">
                We thoroughly test your website across all devices and browsers before launching it live for your customers to see.
              </p>
            </motion.div>

            <motion.div 
              className="process-step fade-in-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="process-step-number">4</div>
              <h3 className="process-step-title">Ongoing Support</h3>
              <p className="process-step-description">
                We provide continuous support, updates, and optimization to ensure your website continues to perform at its best.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="portfolio-cta-section fade-in-section">
        <div className="section-container">
          <div className="portfolio-cta-content">
            <h2 className="portfolio-cta-title">Ready to Start Your Project?</h2>
            <p className="portfolio-cta-description">
              Join the growing number of home service professionals who trust us with their online presence. Let's create something amazing together.
            </p>
            <div className="portfolio-cta-buttons">
              <Link to="/contact" className="portfolio-cta-button primary" onClick={scrollToTop}>
                Start Your Project
              </Link>
              <Link to="/about" className="portfolio-cta-button secondary" onClick={scrollToTop}>
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
