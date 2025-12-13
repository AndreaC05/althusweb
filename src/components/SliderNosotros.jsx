import { useState, useEffect } from "react";
import Planta1 from "../assets/planta1.jpeg";
import Planta2 from "../assets/planta2.jpg";
import "../style/SliderNosotros.css";

export default function SliderNosotros() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Array de imágenes con las importadas
  const slides = [
    {
      image: Planta1,
      alt: "Planta de Embotellado Althus 1",
      title: "Planta Moderna de Embotellado",
      description: "Tecnología de última generación para garantizar la pureza del agua"
    },
    {
      image: Planta2,
      alt: "Planta de Embotellado Althus 2",
      title: "Proceso Controlado",
      description: "Garantía de calidad en cada etapa del embotellado"
    },
    {
      image: Planta1,
      alt: "Calidad Garantizada",
      title: "Calidad Certificada",
      description: "Cumplimos con los más altos estándares internacionales"
    },
    {
      image: Planta2,
      alt: "Compromiso Althus",
      title: "Nuestro Compromiso",
      description: "Excelencia y frescura en cada gota de agua"
    }
  ];

  // Auto-play del slider
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="nosotros-slider-wrapper">
      <div className="nosotros-slider">
        {/* Slides */}
        <div className="nosotros-slides-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`nosotros-slide ${index === currentIndex ? 'slide-active' : ''} ${
                index === currentIndex - 1 || (currentIndex === 0 && index === slides.length - 1)
                  ? 'slide-prev'
                  : ''
              } ${
                index === currentIndex + 1 || (currentIndex === slides.length - 1 && index === 0)
                  ? 'slide-next'
                  : ''
              }`}
            >
              <img className="nosotros-slide-img" src={slide.image} alt={slide.alt} />
              <div className="nosotros-slide-overlay"></div>
              <div className="nosotros-slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <button 
          className="nosotros-nav-btn nosotros-prev-btn" 
          onClick={prevSlide}
          aria-label="Anterior"
        >
          <i className="pi pi-chevron-left"></i>
        </button>
        <button 
          className="nosotros-nav-btn nosotros-next-btn" 
          onClick={nextSlide}
          aria-label="Siguiente"
        >
          <i className="pi pi-chevron-right"></i>
        </button>

        {/* Indicadores */}
        <div className="nosotros-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`nosotros-indicator ${index === currentIndex ? 'indicator-active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}