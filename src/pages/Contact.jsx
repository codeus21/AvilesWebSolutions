import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SEOHead from '../components/SEOHead';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // EmailJS configuration with fallbacks for production
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_on6sy2q';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_avilesweb';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'UqnYxg8Q_no7i-ynh';
      
      // Check if all required environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }
      
      // Initialize EmailJS with your public key
      emailjs.init(publicKey);
      
      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        business: formData.business,
        message: formData.message,
        to_email: 'contact@avileswebsolutions.com'
      }, publicKey);

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page" id="contact">
      <SEOHead 
        title="Contact Aviles Web Solutions - Get Your Free Website Quote"
        description="Ready to get your professional website? Contact Aviles Web Solutions for a free consultation and quote. Specializing in websites for home service professionals. Get started today!"
        keywords="contact Aviles Web Solutions, free website quote, web design consultation, professional website services, get started, contact form"
        url="https://avileswebsolutions.com/contact"
      />
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <motion.h1 
            className="contact-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Build Something Amazing Together
          </motion.h1>
          <motion.p 
            className="contact-hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to transform your business with a professional website? Get your free consultation today.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="contact-info-title">Get In Touch</h2>
              <p className="contact-info-description">
                Fill out the form above and we'll get back to you within 24 hours to discuss your project.
              </p>
              
              <div className="contact-details">
                <a href="mailto:contact@avileswebsolutions.com" className="contact-detail-item contact-detail-link">
                  <div className="contact-detail-icon">📧</div>
                  <div className="contact-detail-content">
                    <h3>Email</h3>
                    <p>contact@avileswebsolutions.com</p>
                  </div>
                </a>
                
                <a href="tel:+14705263353" className="contact-detail-item contact-detail-link">
                  <div className="contact-detail-icon">📞</div>
                  <div className="contact-detail-content">
                    <h3>Phone</h3>
                    <p>(470) 526-3353</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="business">Business Name</label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Hello, I'm interested in the free website design."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="contact-submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-success">
                    ✅ Thank you! We'll get back to you within 24 hours.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="form-error">
                    ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="contact-cta-content">
          <h2 className="contact-cta-title">Ready to Get Started?</h2>
          <p className="contact-cta-description">
            Don't wait - your competitors are already online. Let's get your business the professional website it deserves.
          </p>
          <div className="contact-cta-buttons">
            <a href="tel:+14705263353" className="contact-cta-button primary">
              Call Now: (470) 526-3353
            </a>
            <a href="mailto:contact@avileswebsolutions.com" className="contact-cta-button secondary">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
