import React from 'react';

import "./CardGrid.css"


function Card({ title, subtitle, primaryButton, secondaryButton, backgroundImage, backgroundVideo, textColor, overlay, overlayOpacity }) {
  return (
    <div className="card-item" style={{ '--overlay-opacity': overlayOpacity }}>
      {backgroundImage && (
        <div className="card-background">
          <img src={backgroundImage} alt="" />
        </div>
      )}
      {backgroundVideo && (
        <div className="card-background">
          <video src={backgroundVideo} autoPlay muted loop playsInline />
        </div>
      )}
      {overlay && <div className="card-overlay" />}
      <div className="card-content">
        <h3 className="card-title" style={{ color: textColor }}>{title}</h3>
        <p className="card-subtitle" style={{ color: textColor }}>{subtitle}</p>
        <div className="card-buttons">
          {primaryButton && <button className="card-btn card-btn-primary">{primaryButton}</button>}
          {secondaryButton && <button className="card-btn card-btn-secondary">{secondaryButton}</button>}
        </div>
      </div>
    </div>
  );
}

export default function CardGrid({ cards = [] }) {
  return (
    <div className="card-grid-wrapper">
      <div className="card-grid">
        {cards.map((card, index) => <Card key={index} {...card} />)}
      </div>
    </div>
  );
}