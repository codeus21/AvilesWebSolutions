import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Aviles Web Solutions</h3>
          <p className="footer-description">
            Creating exceptional web experiences that drive business growth and attract more customers.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" className="footer-link" onClick={scrollToTop}>About</Link></li>
            <li><Link to="/our-work" className="footer-link" onClick={scrollToTop}>Our Work</Link></li>
            <li><Link to="/services" className="footer-link" onClick={scrollToTop}>Services</Link></li>
            <li><Link to="/contact" className="footer-link" onClick={scrollToTop}>Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><span className="footer-text">Web Development</span></li>
            <li><span className="footer-text">UI/UX Design</span></li>
            <li><span className="footer-text">E-commerce Solutions</span></li>
            <li><span className="footer-text">SEO Optimization</span></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Contact Info</h4>
          <div className="contact-info">
            <p className="footer-text">Email: contact@avileswebsolutions.com</p>
            <p className="footer-text">Phone: (470) 526-3353</p>
            <p className="footer-text">Located in: Douglasville, GA</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">
            © {new Date().getFullYear()} Aviles Web Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
