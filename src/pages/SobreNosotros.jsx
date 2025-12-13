import Navbar from "../components/Navbar";
import SliderNosotros from "../components/SliderNosotros";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import Footer from "../components/Footer";
import "../style/SobreNosotros.css";

export default function SobreNosotros() {
  return (
    <>
      <Navbar />
      <SliderNosotros />
      
      <div className="sobre-nosotros-container">
        {/* Sobre Nosotros */}
        <section className="nosotros-section">
          <div className="nosotros-content">
            <div className="nosotros-text">
              <h2>Sobre Nosotros</h2>
              <Divider align="left">
                <span className="divider-text-nosotros">
                  Comercialización de Agua Mineral de Manantial
                </span>
              </Divider>
              <p>
                Somos una empresa dedicada única y exclusivamente a la
                comercialización de
                <strong> Agua mineral de manantial</strong> embotellada en su
                lugar de origen, integrada por personas comprometidas en fijar
                nuevos estándares de excelencia, con el objetivo de ofrecer a
                nuestros clientes un agua de insuperable calidad.
              </p>
              <p>
                Contamos con una moderna planta siguiendo el completo proceso de
                tratamiento del agua, lo que garantiza su total pureza,
                cumpliendo con los más exigentes estándares de calidad, para
                ofrecerle siempre la mejor agua pura y cristalina.
              </p>
            </div>
            <div className="nosotros-image">
              <Card className="image-card-nosotros water-spring">
                <div className="card-content-nosotros">
                  <i className="pi pi-sun" style={{ fontSize: "5rem" }}></i>
                  <p>Manantial Natural</p>
                  <span className="image-description-nosotros">
                    Fuente protegida y pura
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="mission-vision-nosotros">
          <Card className="mv-card-nosotros mission-card-nosotros">
            <div className="mv-header-nosotros">
              <div className="mv-icon-nosotros mission-icon-nosotros">
                <i className="pi pi-flag-fill"></i>
              </div>
              <h3>Misión</h3>
            </div>
            <Divider />
            <p>
              Nuestra misión es ofrecer a nuestros consumidores agua mineral de
              manantial Althus de la más alta calidad, obtenida directamente de
              fuentes naturales y protegidas. Nos comprometemos a garantizar la
              pureza y frescura de cada botella, proporcionando hidratación
              saludable y satisfacción a quienes eligen nuestro producto.
            </p>
          </Card>

          <Card className="mv-card-nosotros vision-card-nosotros">
            <div className="mv-header-nosotros">
              <div className="mv-icon-nosotros vision-icon-nosotros">
                <i className="pi pi-eye"></i>
              </div>
              <h3>Visión</h3>
            </div>
            <Divider />
            <p>
              Ser la elección preferida de familias y consumidores conscientes
              de la salud cuando busquen una fuente confiable y pura de Agua
              mineral de manantial, brindando frescura y vitalidad en cada gota.
            </p>
          </Card>
        </section>

        {/* Calidad y Compromiso */}
        <section className="quality-section-nosotros">
          <div className="quality-content-nosotros">
            <div className="quality-image-nosotros">
              <Card className="image-card-nosotros plant">
                <div className="card-content-nosotros">
                  <i
                    className="pi pi-building"
                    style={{ fontSize: "5rem" }}
                  ></i>
                  <p>Planta Moderna</p>
                  <span className="image-description-nosotros">Tecnología de punta</span>
                </div>
              </Card>
            </div>
            <div className="quality-text-nosotros">
              <h2>Calidad Garantizada</h2>
              <Divider align="left" className="mb-3"/>
              <div className="quality-features-nosotros">
                <Card className="feature-card-nosotros">
                  <div className="feature-item-nosotros">
                    <div className="feature-icon-nosotros">
                      <i className="pi pi-check-circle"></i>
                    </div>
                    <div>
                      <h4>Embotellado en Origen</h4>
                      <p>Directamente desde el manantial natural</p>
                    </div>
                  </div>
                </Card>

                <Card className="feature-card-nosotros">
                  <div className="feature-item-nosotros">
                    <div className="feature-icon-nosotros">
                      <i className="pi pi-cog"></i>
                    </div>
                    <div>
                      <h4>Proceso Controlado</h4>
                      <p>Moderna planta con tecnología de punta</p>
                    </div>
                  </div>
                </Card>

                <Card className="feature-card-nosotros">
                  <div className="feature-item-nosotros">
                    <div className="feature-icon-nosotros">
                      <i className="pi pi-shield"></i>
                    </div>
                    <div>
                      <h4>Estándares Exigentes</h4>
                      <p>Cumplimiento total de normas de calidad</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}