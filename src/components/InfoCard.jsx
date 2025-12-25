import React, { useState, useRef, useEffect } from "react";
import './InfoCard.css';
export default function PromoCard({ 
   title = "Wrapping up this special season.",
  subtitle = "There's still time to make their holiday one of a kind.",
  primaryButton = "Shop gifts",
  secondaryButton = null,
  image = null,
  backgroundImage = null,
  backgroundVideo = null,
  backgroundColor = "#f5f5f7",
  textColor = "#1d1d1f",
  overlay = false,
  overlayOpacity = 0.4
}) {
const [mobileOpen, setMobileOpen] = useState(false);
useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
<>
      <div 
        className="promo-card" 
        style={{ 
          backgroundColor: (!backgroundImage && !backgroundVideo) ? backgroundColor : 'transparent',
          '--overlay-opacity': overlayOpacity
        }}
      >
        {/* Background Image */}
        {backgroundImage && (
          <div className="promo-card-background">
            <img src={backgroundImage} alt="Background" />
          </div>
        )}

        {/* Background Video */}
        {backgroundVideo && (
          <div className="promo-card-background">
            <video 
              src={backgroundVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        )}

        {/* Overlay */}
        {overlay && (backgroundImage || backgroundVideo) && (
          <div className="promo-card-overlay" />
        )}

        <div className="promo-card-container">
          {/* Title */}
          <h2 className="promo-card-title" style={{ color: textColor }}>
            {title}
          </h2>

          {/* Subtitle */}
          <p className="promo-card-subtitle" style={{ color: textColor }}>
            {subtitle}
          </p>

          {/* Buttons */}
          <div className={`promo-card-buttons ${!image ? 'no-image' : ''}`}>
            {primaryButton && (
              <button className="promo-btn promo-btn-primary">
                {primaryButton}
              </button>
            )}
            
            {secondaryButton && (
              <button 
                className={`promo-btn promo-btn-secondary ${textColor === '#ffffff' || textColor === 'white' ? 'light' : ''}`}
              >
                {secondaryButton}
              </button>
            )}
          </div>

          {/* Foreground Image */}
          {image && (
            <div className="promo-card-image">
              <img src={image} alt="Product" />
            </div>
          )}
        </div>
      </div>

       {/* Mobile Menu */}
            {mobileOpen && (
                <div className="mobile-menu">
                    {Object.keys(NAV_DATA).map((item) => (
                        <div key={item} className="mobile-item">
                            {item}
                        </div>
                    ))}
                </div>
            )}
    </>
  );
}



