import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import "./SlideShow.css"
export default function EntertainmentCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef(null);

  const largeCards = [
    {
      id: 1,
      image: "https://is1-ssl.mzstatic.com/image/thumb/1A5UrdlUF6-zEu5cfQvZag/1960x1044sr.jpg",
      logo: "",
      category: "Drama",
      title: "Stream now",
      subtitle: "Action • Now streaming on Apple TV.",
      isLarge: true
    },
    {
      id: 2,
      image: "https://is1-ssl.mzstatic.com/image/thumb/4HIYvhgUWaSu9jDlrIvL8w/1960x1044sr.jpg",
      logo: "",
      category: "New Music Daily",
      title: "Listen now",
      isLarge: true
    },
    {
      id: 3,
      image: "https://is1-ssl.mzstatic.com/image/thumb/8rF8s5lmPuF1fmRHAMrzKQ/1960x1044sr.jpg",
      logo: "",
      category: "NBA 2K25 Arcade Edition",
      title: "Play now",
      isLarge: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
      logo: "",
      category: "Meditation with JoAnna",
      title: "Watch now",
      isLarge: false
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&h=400&fit=crop",
      logo: "",
      category: "New Series",
      title: "Stream now",
      isLarge: false
    }
  ];
  // Small cards data (217x434px equivalent)
  const smallCards = [
    {
      id: 1,
      image: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/0b/13/b9/0b13b98d-50e9-3bf2-f842-f3ff14506497/04a6acbc-e818-47fa-a83f-fe1c43c596be.png/392x392SC.DN01.jpg?l=en-US",
      logo: "",
      category: "New Music Daily",
      title: "Listen now",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=800&fit=crop",
      logo: "🎮",
      category: "NBA 2K25 Arcade Edition",
      title: "Play now",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=800&fit=crop",
      logo: "💪",
      category: "Meditation with JoAnna",
      title: "Watch now",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&h=800&fit=crop",
      logo: "🏋️",
      category: "Fitness+",
      title: "Start now",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=800&fit=crop",
      logo: "🎸",
      category: "Apple Music",
      title: "Listen now",
    }
  ];

    const totalSlides = 4;

   const startAutoPlay = () => {
    setIsPlaying(true);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
  };

  const stopAutoPlay = () => {
    setIsPlaying(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const goToSlide = (index) => {
    stopAutoPlay();
    setCurrentSlide(index);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
 return (
    <><div className="entertainment-section">
        <h2 className="entertainment-title">Endless entertainment.</h2>

        <div className="carousel-wrapper">
          {/* Large Cards (930x523px) */}
          <div className="large-cards-container">
            <div 
              className="large-cards-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {largeCards.map((card) => (
                <div key={card.id} className="large-card">
                  <div className="large-card-inner">
                    <div className="card-background">
                      <img src={card.image} alt={card.category} />
                    </div>
                    <div className="card-overlay" />
                    <div className="card-content">
                      <div className="card-logo">{card.logo}</div>
                    </div>
                    <div className="card-bottom">
                      <button className="card-button">{card.title}</button>
                      <p className="card-subtitle">{card.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Small Cards (217x434px) */}
          <div className="small-cards-container">
            <div 
              className="small-cards-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {[0, 1, 2, 3].map((slideIndex) => (
                <div key={slideIndex} className="small-cards-slide">
                  {smallCards.slice(slideIndex, slideIndex + 4).map((card) => (
                    <div key={card.id} className="small-card">
                      <div className="card-background">
                        <img src={card.image} alt={card.category} />
                      </div>
                      <div className="card-overlay" />
                      <div className="card-content">
                        <div className="card-logo">{card.logo}</div>
                        <div className="card-category">{card.category}</div>
                      </div>
                      <div className="card-bottom">
                        <button className="card-button">{card.title}</button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="carousel-controls">
          <button 
            className={`play-button ${isPlaying ? 'active' : ''}`}
            onClick={isPlaying ? stopAutoPlay : startAutoPlay}
          >
            {isPlaying ? <Pause size={18} fill="white" /> : <Play size={18} fill="#1d1d1f" />}
          </button>

          <div className="dot-indicators">
            {[...Array(totalSlides)].map((_, index) => (
              <div
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Demo() {
  return <EntertainmentCarousel />;
}

export { Demo };