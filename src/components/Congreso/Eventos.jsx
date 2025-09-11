import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import "./events.css";

// 🔧 Asegúrate de RENOMBRAR tus archivos físicamente en disco:
import Disilicato from "../../assets/img/events/Disilicato.jpeg";
import Exocad from "../../assets/img/events/Exocad.jpg";
import Protesis from "../../assets/img/events/Protesis.jpg";
import Protesis2 from "../../assets/img/events/Protesis_fija.jpg";

import { AddToCalendarButton } from "add-to-calendar-button-react";

/** Lightbox de imágenes con navegación */
function ImageLightbox({ images = [], initialIndex = 0, onClose }) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  if (!images.length) return null;

  return createPortal(
    <div className="image-modal" role="dialog" aria-modal="true">
      <div className="modal-backdrop" onClick={onClose} />
      <button className="close-btn" aria-label="Cerrar" onClick={onClose}>
        ✕
      </button>

      {images.length > 1 && (
        <button className="nav-btn nav-prev" aria-label="Anterior" onClick={prev}>
          ❮
        </button>
      )}
      <img className="modal-img" src={images[index]} alt={`vista-${index + 1}`} />
      {images.length > 1 && (
        <button className="nav-btn nav-next" aria-label="Siguiente" onClick={next}>
          ❯
        </button>
      )}

      {/* Miniaturas dentro del lightbox (opcional):
      <div className="thumbs">
        {images.map((src, i) => (
          <button
            key={i}
            className={`thumb ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Ver imagen ${i + 1}`}
          >
            <img src={src} alt={`thumb-${i + 1}`} />
          </button>
        ))}
      </div>
      */}
    </div>,
    document.body
  );
}

const Eventos = () => {
  const [lightbox, setLightbox] = useState({ open: false, images: [], initial: 0 });

  // Cada evento con portada + galería (solo imágenes del MISMO evento)
  const events = [
    {
      cover: Disilicato,
      gallery: [Disilicato],
      location: "Refugio 20, Nativitas, Benito Juárez, CP. 03500, CDMX",
      startDate: "2025-10-02",
      startTime: "09:00",
      endTime: "18:00",
      name: "CURSO DESILICATO DE LITIO",
    },
    {
      cover: Exocad,
      gallery: [Exocad],
      location: "CHIHUAHUA",
      startDate: "2025-10-01",
      startTime: "09:30",
      endTime: "23:59",
      name: "EXOCAD",
    },
    {
      cover: Protesis,
      gallery: [Protesis, Protesis2], // << Prótesis tiene 2 imágenes
      location: "Refugio 20, Nativitas, Benito Juárez CP 03500 CDMX",
      startDate: "2025-09-18",
      startTime: "09:30",
      endTime: "23:59",
      name: "CURSO PROTESIS FIJA DIGITAL",
    },
  ];

  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  // Portada primero y sin duplicados
  const imagesForEvent = (event) => {
    const arr = [event.cover, ...(event.gallery || [])];
    const seen = new Set();
    const unique = [];
    for (const src of arr) {
      if (!seen.has(src)) {
        seen.add(src);
        unique.push(src);
      }
    }
    return unique;
  };

  const openLightbox = (event, startAt = 0) => {
    const imgs = imagesForEvent(event);
    setLightbox({ open: true, images: imgs, initial: startAt });
  };

  return (
    <>
      <section className="preregistro-congreso">
        <div className="header-curvo-preregistro">
          <h2 className="titulo-preregistro">Eventos</h2>
        </div>

        <div className="events-grid">
          {sortedEvents.map((event, index) => {
            const imgs = imagesForEvent(event);
            const totalImgs = imgs.length;
            return (
              <div key={index} className="events-card-wrapper">
                {/* Portada: abre galería en la portada */}
                <div
                  className="events-item"
                  onClick={() => openLightbox(event, 0)}
                  role="button"
                  aria-label={`Abrir galería de ${event.name}`}
                >
                  <img src={event.cover} alt={`event-${index}-cover`} />
                  {totalImgs > 1 && <span className="badge-multi">+{totalImgs}</span>}
                </div>

                {/* Miniaturas del MISMO evento (abre en esa imagen) */}
                {totalImgs > 1 && (
                  <div className="event-thumbs">
                    {imgs.map((src, i) => (
                      <button
                        key={i}
                        className="thumb"
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(event, i);
                        }}
                        aria-label={`Abrir imagen ${i + 1} de ${event.name}`}
                      >
                        <img src={src} alt={`thumb-${i + 1}`} />
                      </button>
                    ))}
                  </div>
                )}

                <div className="add-to-calendar-wrapper">
                  <AddToCalendarButton
                    name={event.name}
                    options={["Apple", "Google"]}
                    location={event.location}
                    startDate={event.startDate}
                    startTime={event.startTime}
                    endTime={event.endTime}
                    timeZone="America/Mexico_City"
                    buttonsList
                    hideTextLabelButton
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {lightbox.open && (
        <ImageLightbox
          images={lightbox.images}
          initialIndex={lightbox.initial}
          onClose={() => setLightbox({ open: false, images: [], initial: 0 })}
        />
      )}
    </>
  );
};

export default Eventos;
