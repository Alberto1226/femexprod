import React from "react";
import { Helmet } from "react-helmet-async";

// Imágenes
import logoFEMEXPROD from "../../assets/congreso/femexprod-logo.png";
import logoColegio from "../../assets/congreso/colegio-logo.png";
import imgSanJuan from "../../assets/congreso/sanjuan.png";
import congreso from "../../assets/congreso/1.png";

const Congreso = () => {
    return (
        <section className="congreso-container">
            <Helmet>
                <title>Congreso Nacional FEMEXPROD 2026</title>
                <meta
                    name="description"
                    content="Prepárate para el Congreso Nacional FEMEXPROD 2026 en San Juan del Río, Querétaro."
                />
            </Helmet>

            {/* Título superior */}
            <div className="congreso-header">
                <h3 className="congreso-frase">
                    De lo convencional a lo <span>Digital</span>
                </h3>
                <h2 className="congreso-subfrase">
                    ¡Prepárate para el Futuro de la Prótesis Dental!
                </h2>
            </div>

            {/* Sección principal */}
            <div className="congreso-main">
                {/* Información izquierda */}
                <div className="congreso-info">
                    <div className="logos">
                        <img src={congreso} alt="congreso" className="logo-congreso" />

                    </div>

                    {/* Logos */}
                    <div className="logos logosmas">
                        <img src={logoFEMEXPROD} alt="FEMEXPROD" className="logo-femexprod" />
                        <img src={logoColegio} alt="Colegio" className="logo-colegio" />
                    </div>

                    {/* Botón web */}
                    <div className="btn-wrapper">
                <a href="https://www.femexprod.com.mx" className="btn-sitio">
                    www.femexprod.com.mx →
                </a>
            </div>
                </div>


                {/* Imagen derecha */}
                <div className="congreso-imagen">
                    <img src={imgSanJuan} alt="San Juan del Río" />
                </div>

            </div>
            


        </section>
    );
};

export default Congreso;
