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
          <h4 className="footer-heading">Industries</h4>
          <ul className="footer-links">
            <li><span className="footer-text">Landscaping</span></li>
            <li><span className="footer-text">Auto Services</span></li>
            <li><span className="footer-text">Cleaning</span></li>
            <li><span className="footer-text">Concrete</span></li>
            <li><span className="footer-text">Construction & Remodeling</span></li>
            <li><span className="footer-text">Electrical</span></li>
            <li><span className="footer-text">And More...</span></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><Link to="/web-development" className="footer-link" onClick={scrollToTop}>Web Development</Link></li>
            <li><Link to="/ui-design" className="footer-link" onClick={scrollToTop}>UI/UX Design</Link></li>
            <li><Link to="/seo-optimization" className="footer-link" onClick={scrollToTop}>SEO Optimization</Link></li>
            <li><Link to="/lead-generation" className="footer-link" onClick={scrollToTop}>Lead Generation</Link></li>
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
