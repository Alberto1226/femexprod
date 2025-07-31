import React from "react";
import { Helmet } from "react-helmet-async";

// Imágenes
import logo from "../../assets/img/l1.png";
import img1 from "../../assets/img/6.png";
import img2 from "../../assets/img/5.png";
import img3 from "../../assets/img/7.png";
import img4 from "../../assets/img/8.png";

const Objetivo = ({ info }) => {
  return (
    <section className="objetivo-container">
      <Helmet>
        <title>Objetivo de FEMEXPROD</title>
        <meta
          name="description"
          content="El objetivo principal de FEMEXPROD es elevar el nivel profesional, técnico y ético de los protesistas dentales en México."
        />
      </Helmet>

      {/* Collage 4 imágenes */}
      <div className="objetivo-collage">
        <div className="img-box"><img src={img1} alt="Imagen 1" /></div>
        <div className="img-box"><img src={img2} alt="Imagen 2" /></div>
        <div className="img-box"><img src={img3} alt="Imagen 3" /></div>
        <div className="img-box"><img src={img4} alt="Imagen 4" /></div>
      </div>

      {/* Texto con logo */}
      <div className="objetivo-texto">
        <img src={logo} alt="Logo FEMEXPROD" className="logo-objetivo" />
        <h2>
          <span className="azul">Nuestro</span><br />
          <span className="verde">Objetivo</span>
        </h2>
        <p>{info.descripcion}</p>
      </div>
    </section>
  );
};

export default Objetivo;
