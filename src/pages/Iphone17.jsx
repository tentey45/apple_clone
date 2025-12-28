import React, { useState, useEffect, useRef } from 'react';
import './Iphone17.css';
import Image from '../assests/Iphone17/hero__bdntboqignj6_xlarge_2x.jpg'
import ImageCard from '../assests/Iphone17/highlights_apple_intelligence__bs20h6298f36_large_2x.jpg'
import ImageCard2 from '../assests/Iphone17/highlights_design_endframe__flnga0hibmeu_large_2x.jpg'
import ImageCard3 from '../assests/Iphone17/highlights_chip_endframe__eisesoyz6gia_large_2x.jpg'
import ImageCard4 from '../assests/Iphone17/highlights_ios__empnwsdz698i_large_2x.jpg'
import ImageCard5 from '../assests/Iphone17/highlights_zoom_endframe__qilnpakynoyu_large_2x.jpg'
import ImageCard6 from '../assests/Iphone17/highlights_camera_endframe__3x75ynb4b6ai_large_2x.jpg'
import Color from '../assests/Iphone17/colors_orange__f2ug4x6ry8uq_large_2x.jpg'

// HeroSection Component (reusable)
const HeroSection = ({ title, subtitle, image, ctaText, ctaLink }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="hero-section">
      <div 
        className="hero-background"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="hero-overlay" />
        <img 
          src={image || "https://images.unsplash.com/photo-1592286927505-c0d7a8ff5c4b?w=1200&h=800&fit=crop"}
          alt={title}
          className="hero-image"
        />
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <button className="hero-cta">{ctaText || "Learn More"}</button>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ image, title, description, color }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`feature-card ${color} ${isVisible ? 'visible' : ''}`}
    >
      <div className="feature-image-container">
        <img src={image} alt={title} className="feature-image" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

// Color Selector Component
const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState('desert');
  
  const colors = [
    { name: 'Desert Titanium', value: 'desert', hex: '#D4845A' },
    { name: 'Natural Titanium', value: 'natural', hex: '#8E8E93' },
    { name: 'Blue Titanium', value: 'blue', hex: '#4A5F7F' },
    { name: 'White Titanium', value: 'white', hex: '#E8E8ED' }
  ];

  const features = [
    {  text: 'Aerospace-grade titanium' },
    {  text: 'Super Retina XDR' },
    {  text: 'Ceramic Shield' },
    {  text: 'Immersive display' },
    {  text: 'Camera Control' },
    { text: 'Action button' }
  ];

  return (
    <div className="color-selector-section">
      <div className="closer-look-container">
        <h2 className="closer-look-title">Take a closer look.</h2>
        
        <div className="closer-look-content">
          {/* Left Panel - Features */}
          <div className="features-panel">
            <div className="color-toggle">
              <span className="toggle-label">Select. Choose from three cool finishes.</span>
              <div className="toggle-buttons">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`color-toggle-btn ${selectedColor === color.value ? 'active' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="feature-list">
              {features.map((feature) => (
                <button key={feature.id} className="feature-item">
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-text">{feature.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel - Phone Image */}
          <div className="phone-display-panel">
            <button className="close-btn" aria-label="Close">×</button>
            <div className={`phone-display color-${selectedColor}`}>
              <img 
                src={Color}
                alt="iPhone 17 Pro"
                className="phone-display-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main iPhone 17 Page Component
const iPhone17Page = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="iphone17-page">
      {/* Navigation */}
      {/* <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Apple</div>
          <div className="nav-links">
            <a href="#" className="nav-link">iPhone</a>
            <a href="#" className="nav-link">Features</a>
            <a href="#" className="nav-link">Tech Specs</a>
            <a href="#" className="nav-link">Buy</a>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <HeroSection 
        title="iPhone 17 PRO"
        subtitle="Forged in titanium. Built for performance."
        image={Image}
        ctaText="Buy"
      />

      {/* Features Grid */}
      <div className="features-section">
        <h2 className="section-title">Get the highlights.</h2>
        
        <div className="features-scroll-container">
          <div className="features-grid">
            <FeatureCard
              image={ImageCard2}
            
              description="48MP main camera with 5x optical zoom. Capture stunning photos in any lighting."
              color="gradient-purple-blue"
            />
            <FeatureCard
              image={ImageCard3}
            
              description="Revolutionary performance and efficiency. Up to 20% faster than previous generation."
              color="gradient-blue-cyan"
            />
            <FeatureCard
              image={ImageCard4}
           
              description="Up to 29 hours video playback. Power through your entire day and beyond."
              color="gradient-green-emerald"
            />
            <FeatureCard
              image={ImageCard5}
           
              description="Aerospace-grade titanium. Incredibly strong yet remarkably light."
              color="gradient-orange-red"
            />
            <FeatureCard
              image={ImageCard6}
              title="Action Button"
              description="A customizable button for quick access to your most-used features."
              color="gradient-pink-purple"
            />
            <FeatureCard
              image={ImageCard}
              title="ProMotion Display"
              description="120Hz adaptive refresh rate. Smooth scrolling and responsive touch."
              color="gradient-indigo-blue"
            />
          </div>
        </div>
      </div>

      {/* Color Selector */}
      <ColorSelector />

      {/* Technical Specs Section */}
      <div className="specs-section">
        <div className="container-small">
          <h2 className="section-title">iPhone</h2>
          
          <div className="specs-list">
            <div className="spec-item">
              <h3 className="spec-title">Explore iPhone</h3>

            </div>
            
            <div className="spec-item">
              <h3 className="spec-title">Shop iPhone</h3>
              
            </div>
            
            <div className="spec-item">
              <h3 className="spec-title">More from iPhone</h3>
              
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2 className="cta-title">Pro. Beyond.</h2>
        <div className="cta-buttons">
          <button className="cta-button primary">Buy iPhone 17 Pro</button>
          <button className="cta-button secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default iPhone17Page;