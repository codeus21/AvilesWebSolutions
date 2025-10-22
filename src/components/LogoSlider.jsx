import React from 'react';
import { motion } from 'framer-motion';
import './LogoSlider.css';
import HuastecoLogo from '../assets/Logos/HuastecoLogo.jpg';
import JNHLogo from '../assets/Logos/JNHLogo2.jpg';
import SoundproofLogo from '../assets/Logos/soundproof-logo.png';

const LogoSlider = () => {
  // Business data with names and actual logos
  const businesses = [
    { name: 'Huasteco Landscaping', logo: HuastecoLogo },
    { name: 'JNH Architectural Landscaping', logo: JNHLogo },
    { name: 'Soundproof Audio and Tint', logo: SoundproofLogo },
    { name: 'Aviles Exterior Services', logo: '/api/placeholder/200/80' },
    { name: 'Premier Home Services', logo: '/api/placeholder/200/80' },
    { name: 'Metro Landscaping Solutions', logo: '/api/placeholder/200/80' },
    { name: 'Pro Audio Installations', logo: '/api/placeholder/200/80' },
    { name: 'Green Thumb Landscaping', logo: '/api/placeholder/200/80' },
    { name: 'Custom Audio Works', logo: '/api/placeholder/200/80' },
    { name: 'Landscape Design Pro', logo: '/api/placeholder/200/80' }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedBusinesses = [...businesses, ...businesses];

  return (
    <div className="logo-slider-container">
      <div className="logo-slider-header">
        <h3 className="slider-title">Businesses We've Helped Grow</h3>
      </div>
      
      <div className="logo-slider-wrapper">
        <motion.div
          className="logo-slider"
          animate={{
            x: [0, -50 + '%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedBusinesses.map((business, index) => (
            <div key={index} className="logo-item">
              <img 
                src={business.logo} 
                alt={business.name}
                className="business-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="business-name" style={{ display: 'none' }}>
                {business.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSlider;
