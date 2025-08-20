import { useEffect, useRef } from "react";
// Importa todas las imágenes
// Areas.jsx
import img from "../../assets/img/areas.jpeg";

const Areas = () => {
  return (
    <section className="preregistro-congreso">
      <div className="header-curvo-preregistro">
        <h2 className="titulo-preregistro">Area de Patrocinadores</h2>
      </div>

      <div className="areas-sponsors">
        <div className="areas-sponsors__grid">
          <a
            href="#areasZoom"
            className="areas-sponsors__item"
            aria-label="Ampliar imagen de patrocinadores"
          >
            <img
              className="areas-sponsors__img"
              src={img}
              alt="Patrocinadores"
              loading="lazy"
            />
          </a>
        </div>

      
      </div>
    </section>
  );
};

export default Areas;
