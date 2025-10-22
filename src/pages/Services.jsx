import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { scrollToTop } from '../utils/scrollToTop';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <SEOHead 
        title="Professional Web Design Services | Aviles Web Solutions"
        description="Comprehensive web solutions for home service professionals. Custom web development, UI/UX design, SEO optimization, and lead generation services to grow your business online."
        keywords="web design services, web development services, UI UX design, SEO optimization, lead generation, professional websites, home service websites, business websites"
        url="https://avileswebsolutions.com/services"
      />
      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="services-hero-content">
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-subtitle">
            Comprehensive web solutions designed to elevate your business and drive real results
          </p>
          <p className="services-hero-description">
            From custom web development to lead generation strategies, we provide everything you need 
            to establish a powerful online presence and grow your business.
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview-section">
        <div className="services-overview-content">
          <h2 className="services-overview-title">What We Offer</h2>
          <p className="services-overview-subtitle">
            Our full-service approach covers every aspect of your digital presence
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3 className="service-card-title">Web Development</h3>
              <p className="service-card-description">
                Custom websites built with modern technologies, optimized for performance and user experience.
              </p>
              <Link to="/web-development" className="service-card-link" onClick={scrollToTop}>
                Learn More →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3 className="service-card-title">UI/UX Design</h3>
              <p className="service-card-description">
                Beautiful, intuitive designs that engage your audience and drive conversions.
              </p>
              <Link to="/ui-design" className="service-card-link" onClick={scrollToTop}>
                Learn More →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3 className="service-card-title">SEO Optimization</h3>
              <p className="service-card-description">
                Improve your search engine rankings and attract more qualified traffic to your site.
              </p>
              <Link to="/seo-optimization" className="service-card-link" onClick={scrollToTop}>
                Learn More →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">📞</div>
              <h3 className="service-card-title">Lead Generation</h3>
              <p className="service-card-description">
                Never miss a potential client with our comprehensive lead capture and management solutions.
              </p>
              <Link to="/lead-generation" className="service-card-link" onClick={scrollToTop}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="services-benefits-section">
        <div className="services-benefits-content">
          <h2 className="services-benefits-title">Why Choose Aviles Web Solutions?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🚀</div>
              <h3 className="benefit-title">Fast Turnaround</h3>
              <p className="benefit-description">Quick delivery without compromising quality</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💡</div>
              <h3 className="benefit-title">Modern Solutions</h3>
              <p className="benefit-description">Latest technologies and best practices</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🤝</div>
              <h3 className="benefit-title">Personal Touch</h3>
              <p className="benefit-description">Direct communication with the founder</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📈</div>
              <h3 className="benefit-title">Results Driven</h3>
              <p className="benefit-description">Focus on what drives your business forward</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="services-cta-section">
        <div className="services-cta-content">
          <h2 className="services-cta-title">Ready to Get Started?</h2>
          <p className="services-cta-description">
            Let's discuss how we can help transform your business with our comprehensive web solutions.
          </p>
          <div className="services-cta-buttons">
            <Link to="/contact" className="services-cta-button primary" onClick={scrollToTop}>
              Get Free Quote
            </Link>
            <Link to="/our-work" className="services-cta-button secondary" onClick={scrollToTop}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
