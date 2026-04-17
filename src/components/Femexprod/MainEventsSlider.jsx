import React, { useState, useEffect, useCallback } from 'react';
import { Fade } from 'react-awesome-reveal';

// Importación de imágenes de eventos
import event1 from '../../assets/events/CONGRESO INVERSI1.jpg';
import event2 from '../../assets/events/CONGRESO INVERSI2.jpg';
import event3 from '../../assets/events/CONGRESO INVERSI3.jpg';
import event4 from '../../assets/events/CONGRESO INVERSI4.jpg';
import event5 from '../../assets/events/PROGRAMA TÉCNICO CONGRESO LII FEMEXPROD 1.jpg';
import event6 from '../../assets/events/PROGRAMA TÉCNICO CONGRESO LII FEMEXPROD 2.jpg';

const events = [
  { id: 1, img: event1, title: 'Congreso Inversión 1' },
  { id: 2, img: event2, title: 'Congreso Inversión 2' },
  { id: 3, img: event3, title: 'Congreso Inversión 3' },
  { id: 4, img: event4, title: 'Congreso Inversión 4' },
  { id: 5, img: event5, title: 'Programa Técnico 1' },
  { id: 6, img: event6, title: 'Programa Técnico 2' },
];

const MainEventsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Manejo de teclado para el Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox(e);
      if (e.key === 'ArrowLeft') prevLightbox(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="main-events-container">
      <Fade triggerOnce duration={1000}>
        <div className="slider-wrapper">
          <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {events.map((event, index) => (
              <div key={event.id} className="slide-item" onClick={() => openLightbox(index)}>
                <img src={event.img} alt={event.title} className="slide-image" />
                <div className="slide-overlay">
                  <span className="event-badge">Principal</span>
                  <div className="view-more">
                    <i className="fas fa-search-plus"></i> Ver en grande
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-control prev" onClick={(e) => { e.stopPropagation(); prevSlide(); }} aria-label="Anterior">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="slider-control next" onClick={(e) => { e.stopPropagation(); nextSlide(); }} aria-label="Siguiente">
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="slider-dots">
            {events.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
              />
            ))}
          </div>
        </div>
      </Fade>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <i className="fas fa-times"></i>
          </button>
          
          <button className="lightbox-nav prev" onClick={prevLightbox}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={events[lightboxIndex].img} alt={events[lightboxIndex].title} className="lightbox-image" />
            <div className="lightbox-info">
              {events[lightboxIndex].title} ({lightboxIndex + 1} / {events.length})
            </div>
          </div>
          
          <button className="lightbox-nav next" onClick={nextLightbox}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  );
};

export default MainEventsSlider;
