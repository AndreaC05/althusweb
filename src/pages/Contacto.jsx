import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import "../style/Contacto.css";

export default function Contacto() {
  const toast = useRef(null);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación simple
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast.current.show({
        severity: 'warn',
        summary: 'Campos requeridos',
        detail: 'Por favor completa todos los campos obligatorios',
        life: 3000
      });
      return;
    }

    // Generar mensaje para WhatsApp
    const WHATSAPP_NUMBER = "51999999999"; // Cambiar por tu número
    
    let mensaje = `📝 *FORMULARIO DE CONTACTO - ALTHUS*\n\n`;
    mensaje += `👤 *Nombre:* ${formData.nombre}\n`;
    mensaje += `📧 *Email:* ${formData.email}\n`;
    if (formData.telefono) {
      mensaje += `📱 *Teléfono:* ${formData.telefono}\n`;
    }
    if (formData.asunto) {
      mensaje += `📋 *Asunto:* ${formData.asunto}\n`;
    }
    mensaje += `\n💬 *Mensaje:*\n${formData.mensaje}`;

    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    toast.current.show({
      severity: 'success',
      summary: 'Redirigiendo a WhatsApp',
      detail: 'Tu mensaje está listo para enviar',
      life: 3000
    });

    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: ""
    });
  };

  return (
    <>
      <Navbar />
      <Toast ref={toast} />
      
      <div className="contacto-page">
        {/* Hero Section */}
        <div className="contacto-hero">
          <div className="hero-content">
            <h1>Contáctanos</h1>
            <p>Estamos aquí para atenderte. Escríbenos y te responderemos a la brevedad</p>
          </div>
          <div className="hero-wave">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C150,120 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="white"></path>
            </svg>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="contacto-container">
          {/* Tarjetas de Información */}
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">
                <i className="pi pi-map-marker"></i>
              </div>
              <h3>Ubicación</h3>
              <p>Lima, Perú</p>
              <p className="info-detail">Av. Principal 123</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="pi pi-phone"></i>
              </div>
              <h3>Teléfono</h3>
              <p>+51 999 999 999</p>
              <p className="info-detail">Lun - Dom: 8AM - 8PM</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="pi pi-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>contacto@althus.com</p>
              <p className="info-detail">Respuesta en 24hrs</p>
            </div>

            <div className="info-card">
              <div className="info-icon whatsapp">
                <i className="pi pi-whatsapp"></i>
              </div>
              <h3>WhatsApp</h3>
              <p>+51 999 999 999</p>
              <p className="info-detail">Atención inmediata</p>
            </div>
          </div>

          {/* Formulario y Mapa */}
          <div className="contacto-content">
            {/* Formulario */}
            <div className="contacto-form-section">
              <div className="form-header">
                <h2>Envíanos un Mensaje</h2>
                <p>Completa el formulario y nos comunicaremos contigo</p>
              </div>

              <form className="contacto-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="nombre">Nombre completo *</label>
                    <InputText
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Correo electrónico *</label>
                    <InputText
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="telefono">Teléfono</label>
                    <InputText
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="999 999 999"
                      className="w-full"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="asunto">Asunto</label>
                    <InputText
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="mensaje">Mensaje *</label>
                  <InputTextarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  label="Enviar Mensaje"
                  icon="pi pi-send"
                  className="btn-enviar"
                />
              </form>
            </div>

            {/* Mapa */}
            <div className="contacto-map-section">
              <div className="map-header">
                <h2>Encuéntranos</h2>
                <p>Visítanos en nuestra ubicación</p>
              </div>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62426.59969361272!2d-77.06302899999999!3d-12.046374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1sen!2spe!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación ALTHUS"
                ></iframe>
              </div>

              <div className="map-info">
                <div className="map-info-item">
                  <i className="pi pi-map-marker"></i>
                  <div>
                    <strong>Dirección:</strong>
                    <p>Av. Principal 123, Lima, Perú</p>
                  </div>
                </div>
                <div className="map-info-item">
                  <i className="pi pi-clock"></i>
                  <div>
                    <strong>Horario:</strong>
                    <p>Lunes a Domingo: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección CTA */}
          <div className="contacto-cta">
            <div className="cta-content">
              <h2>¿Prefieres llamarnos o escribirnos por WhatsApp?</h2>
              <p>Estamos disponibles para atenderte de inmediato</p>
              <div className="cta-buttons">
                <Button
                  label="Llamar Ahora"
                  icon="pi pi-phone"
                  className="btn-llamar"
                  onClick={() => window.location.href = 'tel:+51999999999'}
                />
                <Button
                  label="WhatsApp"
                  icon="pi pi-whatsapp"
                  className="btn-whatsapp-cta"
                  onClick={() => window.open('https://wa.me/51999999999', '_blank')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}