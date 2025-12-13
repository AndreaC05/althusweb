import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "../style/Home.css";

export default function Home() {
  const handleNavigate = () => {
    window.location.href = "/sobre-nosotros";
  };

  return (
    <>
      <Navbar />
      <Slide />
      <div className="container_principal">
        {/* Resumen Sobre Nosotros */}
        <section className="about-summary">
          <div className="summary-container">
            <div className="summary-header">
              <h2>Conoce Althus</h2>
              <p className="summary-subtitle">
                Agua Mineral de Manantial de la más alta calidad
              </p>
            </div>

            <div className="summary-grid">
              <Card className="summary-card">
                <div className="summary-icon">
                  <i className="pi pi-globe"></i>
                </div>
                <h3>¿Quiénes Somos?</h3>
                <p>
                  Empresa dedicada exclusivamente a la comercialización de agua
                  mineral de manantial embotellada en su lugar de origen, con
                  los más altos estándares de calidad.
                </p>
              </Card>

              <Card className="summary-card">
                <div className="summary-icon">
                  <i className="pi pi-heart-fill"></i>
                </div>
                <h3>Nuestra Misión</h3>
                <p>
                  Ofrecer agua mineral de manantial de la más alta calidad,
                  garantizando pureza y frescura en cada botella para la
                  satisfacción de nuestros consumidores.
                </p>
              </Card>

              <Card className="summary-card">
                <div className="summary-icon">
                  <i className="pi pi-star-fill"></i>
                </div>
                <h3>Nuestra Visión</h3>
                <p>
                  Ser la elección preferida de familias y consumidores
                  conscientes de la salud, brindando frescura y vitalidad en
                  cada gota.
                </p>
              </Card>
            </div>

            <div className="summary-cta">
              <Button
                label="Conoce más sobre nosotros"
                icon="pi pi-arrow-right"
                iconPos="right"
                className="btn-conocer-mas"
                onClick={handleNavigate}
              />
            </div>
          </div>
        </section>

        {/* Sección de Valores o Beneficios */}
        <section className="values-section">
          <div className="values-container">
            <h2>¿Por qué elegir Althus?</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <i className="pi pi-check-circle"></i>
                </div>
                <h4>100% Natural</h4>
                <p>Agua de manantial pura y cristalina</p>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <i className="pi pi-shield"></i>
                </div>
                <h4>Calidad Garantizada</h4>
                <p>Estándares más exigentes del mercado</p>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <i className="pi pi-sun"></i>
                </div>
                <h4>Embotellado en Origen</h4>
                <p>Directamente desde el manantial</p>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <i className="pi pi-verified"></i>
                </div>
                <h4>Certificada</h4>
                <p>Cumple todas las normas de calidad</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}