import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";

import AcercaDe from "./AcercaDe";
import Objetivo from "./Objetivo";
import MisionVision from "./MisionVision";
import Valores from "./Valores";
import femexprodData from "../../assets/data/femexprod.json";

// Imágenes
import logo from "../../assets/img/logo.png";
import imgFill from "../../assets/img/2.png";
import Contactanos from "./Contactanos";
import Congreso from "../Congreso/Congreso";
import InvitacionCongreso from "../Congreso/InvitacionCongreso";
import HotelCongreso from "../Congreso/HotelCongreso";
import CongresoPrecios from "../Congreso/Costo";
import RegistroCongreso from "../Congreso/Redes";
import PreRegistroCongreso from "../Congreso/PreRegistroCongreso";
import FooterCongreso from "./footer";
import CredencialPromo from "../Congreso/CredencialPromo";

const FemexprodPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(femexprodData.femexprod);
    }, []);

    if (!data) return <div>Cargando información...</div>;

    // Función para hacer scroll a la sección
    const scrollToCongreso = () => {
        const section = document.getElementById("congreso");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <Helmet>
                <title>FEMEXPROD - Federación Mexicana de Protesistas Dentales</title>
                <meta
                    name="description"
                    content="Página oficial de FEMEXPROD: información sobre la federación, misión, visión y valores para la salud bucal en México."
                />
            </Helmet>

            {/* HERO */}
            <div className="hero-section">
                <div className="hero-left">
                    <img src={logo} alt="FEMEXPROD" className="logo" />
                    <div className="hero-slogan">Impulsando la prótesis dental en México</div>
                    <a href="https://www.femexprod.com.mx" className="hero-link">
                        www.femexprod.com.mx <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div
                    className="hero-right"
                    style={{
                        backgroundImage: `url(${imgFill})`,
                    }}
                ></div>
            </div>

            {/* Secciones dinámicas con animación */}
            <Fade triggerOnce direction="up" duration={800}>
                <div id="acerca" className="section">
                    <AcercaDe info={data.acerca_de} />
                </div>
            </Fade>

            <Fade triggerOnce direction="up" duration={800} delay={200}>
                <div id="objetivo" className="section">
                    <Objetivo info={data.objetivo} />
                </div>
            </Fade>

            <Fade triggerOnce direction="up" duration={800} delay={400}>
                <div id="mision" className="section">
                    <MisionVision info={data.mision_y_vision} />
                </div>
            </Fade>

            <Fade triggerOnce direction="up" duration={800} delay={600}>
                <div id="valores" className="section">
                    <Valores info={data.valores} />
                </div>
            </Fade>

            <Fade triggerOnce direction="up" duration={800} delay={800}>
                <div id="contacto" className="section">
                    <Contactanos />
                </div>
            </Fade>

            <Fade triggerOnce direction="up" duration={800} delay={1000}>
                <div id="congreso" className="section"><Congreso /></div>
            </Fade>

            <Fade triggerOnce direction="up" duration={800} delay={1200}>
                <div id="invitacion" className="section"><InvitacionCongreso /></div>
            </Fade>

            <Fade triggerOnce direction="up" duration={800} delay={1400}>
                <div id="hotel" className="section"><HotelCongreso /></div>
            </Fade>

            <Fade triggerOnce direction="up" duration={800} delay={1600}>
                <div id="precios" className="section"><CongresoPrecios /></div>
            </Fade>

            <Fade triggerOnce direction="up" duration={800} delay={1800}>
                <div id="redes" className="section"><RegistroCongreso /></div>
            </Fade>

            <Fade triggerOnce direction="up" duration={800} delay={2000}>
                <div id="preregistro" className="section"><PreRegistroCongreso /></div>
            </Fade>

            <Fade triggerOnce direction="up" duration={800} delay={2000}>
                <div id="promo" className="section"><CredencialPromo /></div>
            </Fade>

            <FooterCongreso />

            {/* Botón flotante */}
            {/* Botón flotante mejorado */}
            <button className="btn-congreso" onClick={scrollToCongreso}>
                <i className="fas fa-calendar-alt"></i> Congreso Nacional 2026
            </button>

        </div>
    );
};

export default FemexprodPage;
