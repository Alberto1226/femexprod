import React from "react";
import { Helmet } from "react-helmet-async";

// Imágenes
import qrFacebook from "../../assets/img/qr-facebook.jpeg";
import qrInstagram from "../../assets/img/qr-instagram.jpeg";
import qrWhatsApp from "../../assets/img/qr-whatsapp.jpeg";
import imgAcueducto from "../../assets/congreso/10.png"; // la imagen superior del acueducto

const RegistroCongreso = () => {
    return (
        <section className="registro-congreso">
            <Helmet>
                <title>Registro Congreso FEMEXPROD</title>
                <meta
                    name="description"
                    content="Regístrate al LII Congreso Nacional FEMEXPROD en San Juan del Río, Qro. 2026."
                />
            </Helmet>

            {/* Cabecera curva con imagen */}
            <div className="header-curvo">
                <div className="header-content">
                    <div className="texto-header">
                        <h2>REGÍSTRATE AL</h2>
                        <h2>LII CONGRESO NACIONAL</h2>
                        <h2>SAN JUAN DEL RÍO QRO. 2026</h2>
                    </div>
                    <img src={imgAcueducto} alt="Acueducto" className="imagen-acueducto" />
                </div>
            </div>


            {/* Redes con QR */}
            <div className="qr-container">
                <div className="qr-box">
                    <i className="fab fa-facebook fa-3x facebook"></i>
                    <img src={qrFacebook} alt="QR Facebook" className="qr-img" />
                </div>
                <div className="qr-box">
                    <i className="fab fa-instagram fa-3x instagram"></i>
                    <img src={qrInstagram} alt="QR Instagram" className="qr-img" />
                    <p className="handle">@FEMEXPRODAC</p>
                </div>
                <div className="qr-box">
                    <i className="fab fa-whatsapp fa-3x whatsapp"></i>
                    <img src={qrWhatsApp} alt="QR WhatsApp" className="qr-img" />
                </div>
            </div>

            {/* Correo de contacto */}
            <div className="contacto-email">
                <i className="fas fa-envelope"></i>
                <span>hola@femexprod.com.mx</span>
            </div>
        </section>
    );
};

export default RegistroCongreso;
