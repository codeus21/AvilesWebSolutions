import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { scrollToTop } from '../utils/scrollToTop';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/contact');
    scrollToTop();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };


  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo-link" onClick={scrollToTop}>
            <img src={logo} alt="Aviles Web Solutions Logo" className="logo" />
            <span className="company-name">Aviles Web Solutions</span>
          </Link>
        </div>
        
        <nav className={`navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
          <Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link>
          <Link to="/our-work" className="nav-link" onClick={closeMobileMenu}>Our Work</Link>
          
          <div 
            className="services-dropdown"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button 
              className="nav-link services-trigger" 
              onClick={toggleServicesDropdown}
            >
              Services
              <span className="dropdown-arrow">▼</span>
            </button>
            
            <div className={`services-dropdown-menu ${isServicesDropdownOpen ? 'open' : ''}`}>
              <Link 
                to="/services" 
                className="dropdown-link" 
                onClick={closeMobileMenu}
              >
                All Services
              </Link>
              <Link 
                to="/web-development" 
                className="dropdown-link" 
                onClick={closeMobileMenu}
              >
                Web Development
              </Link>
              <Link 
                to="/ui-design" 
                className="dropdown-link" 
                onClick={closeMobileMenu}
              >
                UI/UX Design
              </Link>
              <Link 
                to="/seo-optimization" 
                className="dropdown-link" 
                onClick={closeMobileMenu}
              >
                SEO Optimization
              </Link>
              <Link 
                to="/lead-generation" 
                className="dropdown-link" 
                onClick={closeMobileMenu}
              >
                Lead Generation
              </Link>
            </div>
          </div>
          
          <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</Link>
        </nav>
        
        <button className="cta-button" onClick={scrollToContact}>
          Message us
        </button>
        
        <button className="mobile-menu-button" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
