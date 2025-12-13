import { useState, useEffect } from "react";
import Bidon7l from "../assets/bidon7l.png";
import Bidon20l from "../assets/bidon20l.png";
import Caja20l from "../assets/caja20l.png";
import "../style/Slider.css";

export default function Slide() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: Bidon7l, alt: "Bidón 7 Litros" },
        { image: Bidon20l, alt: "Bidón 20 Litros" },
        { image: Caja20l, alt: "Caja 20 Litros" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return(
        <div className="slider-container">
            <div className="slider-wrapper">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            backgroundImage: `url(${slide.image})`
                        }}
                    />
                ))}
            </div>

            <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            <div className="slider-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}