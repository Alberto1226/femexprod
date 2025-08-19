import React from "react";
import "./events.css";

import Disilicato from "../../assets/img/events/Disilicato.jpeg";
import carrusel from "../../assets/img/events/carrusel.jpeg";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const Eventos = () => {
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
      img: carrusel,
      location:
        "Rector Victoriano Anguiano 136, Col. Rector Miguel Hidalgo, Morelia, Michoacan",
      startDate: "2025-09-06",
      startTime: "09:30",
      endTime: "23:59",
      name: "CARRUSEL INTERACTIVO DENTAL",
    },
  ];

  // Ordenar por fecha ascendente
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  return (
    <>
      <section className="preregistro-congreso">
        <div className="header-curvo-preregistro">
          <h2 className="titulo-preregistro">Eventos</h2>
        </div>
        <div>
          {/* Grid de eventos */}
          <div className="events-grid">
            {sortedEvents.map((event, index) => (
              <div key={index} className="events-card-wrapper">
                <div className="events-item">
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
        </div>
      </section>
    </>
  );
};

export default Eventos;
