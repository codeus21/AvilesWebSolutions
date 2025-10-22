import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import aboutPageWorker from '../assets/AboutPageWorker.jpg';
import SEOHead from '../components/SEOHead';
import { scrollToTop } from '../utils/scrollToTop';
import './Page.css';

// Custom hook for counting animation
const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = React.useState(start);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return [count, setIsVisible];
};

const About = () => {

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
        title="About Aviles Web Solutions - Professional Web Design Team"
        description="Learn about Aviles Web Solutions, a professional web design company specializing in websites for home service professionals. Discover our story, mission, and commitment to helping businesses grow online."
        keywords="about Aviles Web Solutions, web design company, professional web developers, home service websites, team, mission, web design expertise"
        url="https://avileswebsolutions.com/about"
      />
      {/* Hero Section */}
      <section className="about-hero-section fade-in-section">
        <div className="section-container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About Aviles Web Solutions</h1>
            <p className="about-hero-subtitle">
              We're passionate about helping home service professionals build their online presence and grow their businesses through professional web design and digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="about-story-section fade-in-section">
        <div className="section-container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="story-title">Our Story</h2>
              <p className="story-paragraph">
                Aviles Web Solutions was founded with a simple mission: to bridge the gap between exceptional home service professionals and their potential customers through powerful, professional websites.
              </p>
              <p className="story-paragraph">
                We recognized that many skilled contractors, landscapers, and service providers were struggling to establish a strong online presence. While they excelled at their craft, they lacked the technical expertise and time needed to create effective websites that generate leads.
              </p>
              <p className="story-paragraph">
                That's why we created a comprehensive solution that handles everything from initial design to ongoing maintenance, allowing our clients to focus on what they do best - serving their customers.
              </p>
            </div>
            <div className="story-image">
              <div className="story-image-container">
                <img 
                  src={aboutPageWorker} 
                  alt="Professional worker representing our team" 
                  className="story-image-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We've Helped Section */}
      <section className="about-stats-section fade-in-section">
        <div className="section-container">
          <h2 className="stats-title">Who We've Helped</h2>
          <p className="stats-subtitle">
            We've helped businesses from many different industries and fields such as landscaping, construction, automotive services, home improvement, HVAC, plumbing, electrical work, and many more.
          </p>
          <div className="stats-grid">
            <motion.div 
              className="stat-card fade-in-image"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">📍</div>
              <div className="stat-label">Located in Douglasville, GA</div>
              <div className="stat-description">Serving the greater Atlanta area and beyond</div>
            </motion.div>
            <motion.div 
              className="stat-card fade-in-image"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">🏢</div>
              <div className="stat-label">Worked with Over 10 Different Fields</div>
              <div className="stat-description">From landscaping to HVAC, we understand your industry</div>
            </motion.div>
            <motion.div 
              className="stat-card fade-in-image"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">🤝</div>
              <div className="stat-label">Ongoing Support to Many Local Businesses</div>
              <div className="stat-description">Continuous website maintenance and optimization</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="about-mission-section fade-in-section">
        <div className="section-container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="mission-title">Our Mission</h2>
              <p className="mission-description">
                To empower home service professionals with professional websites that generate real leads and grow their businesses, while providing exceptional support and maintaining affordable pricing.
              </p>
            </div>
            <div className="values-grid">
              <motion.div 
                className="value-card fade-in-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">🎯</div>
                <h3 className="value-title">Results-Driven</h3>
                <p className="value-description">
                  Every website we build is designed to convert visitors into leads and customers.
                </p>
              </motion.div>
              <motion.div 
                className="value-card fade-in-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">🤝</div>
                <h3 className="value-title">Partnership</h3>
                <p className="value-description">
                  We work as your partner, not just a vendor, committed to your long-term success.
                </p>
              </motion.div>
              <motion.div 
                className="value-card fade-in-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">💡</div>
                <h3 className="value-title">Innovation</h3>
                <p className="value-description">
                  We stay ahead of trends to ensure your website remains competitive and effective.
                </p>
              </motion.div>
              <motion.div 
                className="value-card fade-in-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">⚡</div>
                <h3 className="value-title">Efficiency</h3>
                <p className="value-description">
                  Our streamlined process delivers professional results quickly and cost-effectively.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-team-section fade-in-section">
        <div className="section-container">
          <h2 className="team-title">Meet Our Founder</h2>
          <p className="team-subtitle">
            The passionate professional behind your success
          </p>
          <div className="team-grid">
            <motion.div 
              className="team-member fade-in-image"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="member-photo">
                <div className="member-photo-placeholder">
                  <span className="member-initial">DA</span>
                </div>
              </div>
              <h3 className="member-name">David Aviles</h3>
              <p className="member-role">Founder & Lead Developer</p>
              <p className="member-bio">
                David founded Aviles Web Solutions with a mission to help home service professionals establish their online presence. With expertise in web development and digital marketing, he specializes in creating conversion-focused websites that generate real leads for local businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-why-section fade-in-section">
        <div className="section-container">
          <h2 className="why-title">Why Home Service Professionals Choose Us</h2>
          <div className="why-features">
            <motion.div 
              className="why-feature fade-in-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="why-feature-icon">🏗️</div>
              <div className="why-feature-content">
                <h3 className="why-feature-title">Industry Expertise</h3>
                <p className="why-feature-description">
                  We understand the unique challenges faced by contractors, landscapers, and home service providers. Our solutions are tailored specifically for your industry.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="why-feature fade-in-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="why-feature-icon">📱</div>
              <div className="why-feature-content">
                <h3 className="why-feature-title">Mobile-First Design</h3>
                <p className="why-feature-description">
                  Most customers search for services on their phones. Our websites are designed mobile-first to capture leads wherever your customers are.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="why-feature fade-in-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="why-feature-icon">🔧</div>
              <div className="why-feature-content">
                <h3 className="why-feature-title">Done-For-You Service</h3>
                <p className="why-feature-description">
                  Focus on your work while we handle everything - from design to SEO to lead capture. No technical knowledge required from you.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="why-feature fade-in-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="why-feature-icon">💰</div>
              <div className="why-feature-content">
                <h3 className="why-feature-title">Affordable Pricing</h3>
                <p className="why-feature-description">
                  Get professional website services at a fraction of what agencies charge, with transparent pricing and no hidden fees.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="about-cta-section fade-in-section">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Grow Your Business?</h2>
            <p className="cta-description">
              Join the hundreds of home service professionals who trust us with their online presence. Let's build something great together.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary" onClick={scrollToTop}>
                Get Started Today
              </Link>
              <Link to="/our-work" className="cta-button secondary" onClick={scrollToTop}>
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
