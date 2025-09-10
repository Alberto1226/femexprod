import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./events.css";

import Disilicato from "../../assets/img/events/Disilicato.jpeg";
import carrusel from "../../assets/img/events/carrusel.jpeg";
import exocad from "../../assets/img/events/exocad.jpeg";
import { AddToCalendarButton } from "add-to-calendar-button-react";

/** Modal de imagen usando Portal a document.body */
function ImageLightbox({ src, onClose }) {
  // Bloquear scroll del body mientras está abierto
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  // Render en document.body (evita límites de la sección)
  return createPortal(
    <div className="image-modal" role="dialog" aria-modal="true">
      <button className="close-btn" aria-label="Cerrar imagen" onClick={onClose}>✕</button>
      <img className="modal-img" src={src} alt="vista ampliada" />
      <div className="modal-backdrop" onClick={onClose} />
    </div>,
    document.body
  );
}

const Eventos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const events = [
    {
      img: Disilicato,
      location: "Refugio 20, Nativitas, Benito Juárez, CP. 03500, CDMX",
      startDate: "2025-10-02",
      startTime: "09:00",
      endTime: "18:00",
      name: "CURSO DESILICATO DE LITIO",
    },
    {
      img: exocad,
      location:
        "CHIHUAHUA",
      startDate: "2025-10-01",
      startTime: "09:30",
      endTime: "23:59",
      name: "EXOCAD",
    },
    // {
    //   img: carrusel,
    //   location:
    //     "Rector Victoriano Anguiano 136, Col. Rector Miguel Hidalgo, Morelia, Michoacan",
    //   startDate: "2025-09-06",
    //   startTime: "09:30",
    //   endTime: "23:59",
    //   name: "CARRUSEL INTERACTIVO DENTAL",
    // },
  ];

  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  return (
    <>
      <section className="preregistro-congreso">
        <div className="header-curvo-preregistro">
          <h2 className="titulo-preregistro">Eventos</h2>
        </div>

        <div className="events-grid">
          {sortedEvents.map((event, index) => (
            <div key={index} className="events-card-wrapper">
              <div className="events-item" onClick={() => setSelectedImage(event.img)}>
                <img src={event.img} alt={`event-${index}`} />
              </div>
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
          ))}
        </div>
      </section>

      {selectedImage && (
        <ImageLightbox
          src={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default Eventos;
