import React from "react";
import { Helmet } from "react-helmet-async";

// Imágenes de QR
import qrFacebook from "../../assets/img/qr-facebook.jpeg";
import qrInstagram from "../../assets/img/qr-instagram.jpeg";
import qrWhatsApp from "../../assets/img/qr-whatsapp.jpeg";

const Contactanos = () => {
  return (
    <section className="contactanos-container">
      <Helmet>
        <title>Contáctanos - FEMEXPROD</title>
        <meta
          name="description"
          content="Síguenos en nuestras redes sociales y contáctanos por correo o WhatsApp."
        />
      </Helmet>

      {/* Fondo con onda */}
      <div className="contactanos-header">
        <h2>Síguenos y Contáctanos</h2>
      </div>

      {/* Redes sociales */}
      <div className="redes-container">
        {/* Facebook */}
        <div className="red-box">
          <i className="fab fa-facebook fa-3x facebook"></i>
          <img src={qrFacebook} alt="QR Facebook" className="qr-img" />
        </div>

        {/* Instagram */}
        <div className="red-box">
          <i className="fab fa-instagram fa-3x instagram"></i>
          <img src={qrInstagram} alt="QR Instagram" className="qr-img" />
        </div>

        {/* WhatsApp */}
        <div className="red-box">
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

export default Contactanos;
