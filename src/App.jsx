import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import Services from './pages/Services';
import WebDevelopment from './pages/WebDevelopment';
import UIDesign from './pages/UIDesign';
import SEOOptimization from './pages/SEOOptimization';
import LeadGeneration from './pages/LeadGeneration';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/services" element={<Services />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/ui-design" element={<UIDesign />} />
            <Route path="/seo-optimization" element={<SEOOptimization />} />
            <Route path="/lead-generation" element={<LeadGeneration />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
