import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from '../assets/AvilesHeroSection.jpg';
import homeContactImage from '../assets/HomeContact.jpg';
import huastecoWebsite from '../assets/Gallery/huastecowebsite.png';
import jnhWebsite from '../assets/Gallery/JNHWebsite.png';
import soundproofWebsite from '../assets/Gallery/SoundproofWebsite.png';
import LogoSlider from '../components/LogoSlider';
import { scrollToTop } from '../utils/scrollToTop';
import './Page.css';

// Custom hook for counting animation
const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

const Home = () => {
  const [starterCount, setStarterVisible] = useCountUp(49);
  const [professionalCount, setProfessionalVisible] = useCountUp(99);
  const [enterpriseCount, setEnterpriseVisible] = useCountUp(149);
  const [scrollY, setScrollY] = useState(0);

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

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div 
      className="hero-section" 
      style={{ 
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: `center ${scrollY * 0.3}px`,
        backgroundColor: '#00193f'
      }}
    >
      <div className="hero-overlay">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Grow your business further with a professional website made for lead generation.
            </h1>
            <p className="hero-description">
              Get a fully customized website that generates <br/><strong>Real Customers. Real Jobs.</strong>
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="hero-button primary" onClick={scrollToTop}>
                Get Started Today
              </Link>
              <Link to="/our-work" className="hero-button secondary" onClick={scrollToTop}>
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <span></span>
        </div>
        <p className="scroll-text">Scroll to explore</p>
      </div>
    </div>

    {/* Special Deal Section */}
    <section className="deal-section fade-in-section">
      <div className="section-container">
        <div className="deal-content">
          <h2 className="deal-title">
            Stop overpaying for a website and try us out for free your first month today!
          </h2>
          <h3 className="deal-subtitle">
            Get your free website design and your free first month of support!
          </h3>
          <Link to="/contact" className="deal-button" onClick={scrollToTop}>
            Get Free Website!
          </Link>
        </div>
      </div>
    </section>
    
      <section className="what-we-do-section fade-in-section">
        <div className="section-container">
          <h2 className="section-title">What we do</h2>
          <div className="services-grid">
            <div className="service-card fade-in-image">
              <h3 className="service-title">Done For You Website</h3>
              <p className="service-description">
                Look professional online with a custom-built website that brings in more work, without lifting a finger.
              </p>
            </div>
            
            <div className="service-card fade-in-image">
              <h3 className="service-title">Get Discovered Locally</h3>
              <p className="service-description">
                Show up higher on search engines and discover new job opportunities with built-in SEO tools.
              </p>
            </div>
            
            <div className="service-card fade-in-image">
              <h3 className="service-title">Never Miss a Lead</h3>
              <p className="service-description">
                Built-in contact forms capture customer inquiries so you won't worry about missing calls and losing clients.
              </p>
            </div>
            
            <div className="service-card fade-in-image">
              <h3 className="service-title">Convert Visitors into Leads</h3>
              <p className="service-description">
                Strategic design and compelling content turn website visitors into qualified leads ready to hire your services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Past Work Section */}
      <section className="past-work-section fade-in-section">
        <div className="section-container">
          <h2 className="section-title">See how we've helped similar businesses in the past.</h2>
          <p className="section-subtitle">
            Discover the real results we've delivered for businesses just like yours - from increased leads to higher search rankings and more customers.
          </p>
          <div className="portfolio-grid">
            <div className="portfolio-item fade-in-image">
              <div className="portfolio-image">
                <img src={huastecoWebsite} alt="Huasteco Restaurant Website" />
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">Huasteco Landscaping and Lawn Care</h3>
                <p className="portfolio-description">Modern landscaping company website with project gallery and contact form</p>
              </div>
            </div>
            <div className="portfolio-item fade-in-image">
              <div className="portfolio-image">
                <img src={jnhWebsite} alt="JNH Construction Website" />
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">JNH Architectural Landscaping</h3>
                <p className="portfolio-description">Professional landscaping company website with project gallery and contact form</p>
              </div>
            </div>
            <div className="portfolio-item fade-in-image">
              <div className="portfolio-image">
                <img src={soundproofWebsite} alt="Soundproof Solutions Website" />
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">Soundproof Audio and Tint</h3>
                <p className="portfolio-description">Specialized car audio and tinting solutions website with project gallery and contact form</p>
              </div>
            </div>
          </div>
          <div className="portfolio-button-container">
            <Link to="/our-work" className="portfolio-button" onClick={scrollToTop}>
              View All Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Logo Slider Section */}
      <LogoSlider />

      {/* Why Choose Us Section */}
      <section className="why-choose-section fade-in-section">
        <div className="section-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <div className="features-grid">
            <motion.div 
              className="feature-card fade-in-image"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="feature-icon"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                🏠
              </motion.div>
              <h3 className="feature-title">Home Service Experts</h3>
              <p className="feature-description">
                We specialize in websites for home service professionals who understand their craft but need help with their online presence.
              </p>
            </motion.div>
            <motion.div 
              className="feature-card fade-in-image"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="feature-icon"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                ⚡
              </motion.div>
              <h3 className="feature-title">Done-For-You Service</h3>
              <p className="feature-description">
                Focus on your work while we handle everything - from design to SEO to lead capture. No technical knowledge required.
              </p>
            </motion.div>
            <motion.div 
              className="feature-card fade-in-image"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="feature-icon"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                📈
              </motion.div>
              <h3 className="feature-title">Proven Results</h3>
              <p className="feature-description">
                Our websites are built to convert visitors into leads and customers, helping you grow your business month after month.
              </p>
            </motion.div>
            <motion.div 
              className="feature-card fade-in-image"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="feature-icon"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                💰
              </motion.div>
              <h3 className="feature-title">Unbeatable Prices</h3>
              <p className="feature-description">
                Get professional website services at a fraction of what agencies charge, without compromising on quality or results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Packages Section */}
      <section className="packages-section fade-in-section">
        <div className="section-container">
          <h2 className="section-title">Our Packages</h2>
          <p className="section-subtitle">
            Choose the package that fits your business needs and start generating more leads today.
          </p>
          <div className="packages-grid">
            <motion.div 
              className="package-card fade-in-image"
              onViewportEnter={() => setStarterVisible(true)}
            >
              <h3 className="package-title">Starter</h3>
              <div className="package-price">
                <motion.span 
                  className="price-number"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  ${starterCount}
                </motion.span>
                <span className="price-period">/month</span>
              </div>
              <ul className="package-features">
                <li>Template Based Website Design</li>
                <li>Basic SEO Setup</li>
                <li>Contact Forms</li>
                <li>Mobile Responsive</li>
                <li>Up to 5 Service Pages</li>
              </ul>
              <Link to="/contact" className="package-button" onClick={scrollToTop}>Get Started</Link>
            </motion.div>
            <motion.div 
              className="package-card featured fade-in-image"
              onViewportEnter={() => setProfessionalVisible(true)}
            >
              <h3 className="package-title">Professional</h3>
              <p className="package-subtitle">Most Popular</p>
              <div className="package-price">
                <motion.span 
                  className="price-number"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  ${professionalCount}
                </motion.span>
                <span className="price-period">/month</span>
              </div>
              <ul className="package-features">
                <li>Everything in Starter</li>
                <li>Custom Website Design</li>
                <li>Advanced SEO Optimization</li>
                <li>Reviews System Integration</li>
                <li>Up to 10 Service Pages</li>
              </ul>
              <Link to="/contact" className="package-button" onClick={scrollToTop}>Get Started</Link>
            </motion.div>
            <motion.div 
              className="package-card fade-in-image"
              onViewportEnter={() => setEnterpriseVisible(true)}
            >
              <h3 className="package-title">Enterprise</h3>
              <div className="package-price">
                <motion.span 
                  className="price-number"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  ${enterpriseCount}
                </motion.span>
                <span className="price-period">/month</span>
              </div>
              <ul className="package-features">
                <li>Everything in Professional</li>
                <li>Fully Custom Web Design</li>
                <li>Elite SEO Optimization</li>
                <li>Advanced Animations</li>
                <li>Unlimited Pages</li>
              </ul>
              <Link to="/contact" className="package-button" onClick={scrollToTop}>Get Started</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ready to See Your New Website Section */}
      <section className="home-contact-section fade-in-section" style={{ backgroundImage: `url(${homeContactImage})` }}>
        <div className="home-contact-overlay">
          <div className="section-container">
            <div className="home-contact-text">
              <h2 className="home-contact-title">
                Ready to see your new website?
              </h2>
              <p className="home-contact-subtitle">
                We'll build it for free - no credit card required.
              </p>
              <Link to="/contact" className="home-contact-button" onClick={scrollToTop}>
                Get Free Website!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
