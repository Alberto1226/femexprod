import React from "react";
import { Helmet } from "react-helmet-async";

// Imágenes
import imgCentroConv from "../../assets/congreso/5.png";
import imgSalon from "../../assets/congreso/6.png";

const HotelCongreso = () => {
  return (
    <section className="hotel-congreso">
      <Helmet>
        <title>Hotel y Centro de Convenciones - FEMEXPROD</title>
        <meta
          name="description"
          content="Sede oficial del Congreso FEMEXPROD 2026: Hotel Excellence Express & Suites y Centro de Convenciones."
        />
      </Helmet>

      {/* Columna izquierda con texto */}
      <div className="hotel-texto-col">
        <h2 className="hotel-titulo">Hotel Excellence Express & Suites</h2>
        <p className="hotel-link">hiex.com/sanjuandelrio.com</p>
        <p>
          San Juan del Río, Querétaro, es el escenario perfecto para este LII
          Congreso, ofreciendo no solo instalaciones de primer nivel, sino también
          un entorno cultural y turístico que complementará tu experiencia.
        </p>
        <p>
          ¡No te quedes fuera! Este es el momento de actualizarte, inspirarte y ser
          parte activa del futuro de la prótesis dental en México.
        </p>
      </div>

      {/* Columna derecha con imágenes y fondo azul */}
      <div className="hotel-imagenes-col">
        <div className="imagen-derecha">
          <img src={imgCentroConv} alt="Centro de Convenciones" />
        </div>
        <div className="imagen-izquierda">
          <img src={imgSalon} alt="Salón de conferencias" />
        </div>

        <div className="fondo-azul">
          <h3 className="frase-reserva">Reserva Todo en Uno</h3>
          <p className="hotel-direccion">
            CENTRO DE CONVENCIONES <br />
            Ave Paseo Central 23 Fracc. Industrial, Valle de Oro - San Juan del Río - 76803 - Querétaro - México <br />
            Tel - 427 271 3700
          </p>
        </div>
      </div>
    </section>
  );
};

export default HotelCongreso;
