import "../style/Footer.css";

export default function Footer() {
    return (
        <>
            <footer className="footer-althus">
                <div className="footer-content">
                    {/* Sección Principal */}
                    <div className="footer-main">
                        <div className="footer-col footer-brand">
                            <div className="footer-logo">
                                <h2>ALTHUS</h2>
                                <p className="footer-tagline">Agua Purificada</p>
                            </div>
                            <p className="footer-description">
                                Comprometidos con brindarte agua de la más alta calidad para tu bienestar y el de tu familia.
                            </p>
                            <div className="footer-social">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="pi pi-facebook"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="pi pi-instagram"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="pi pi-twitter"></i>
                                </a>
                                <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="pi pi-whatsapp"></i>
                                </a>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h3>Enlaces Rápidos</h3>
                            <ul className="footer-links">
                                <li><a href="/">Inicio</a></li>
                                <li><a href="/sobre-nosotros">Nosotros</a></li>
                                <li><a href="/pedidos">Productos</a></li>
                                <li><a href="/contacto">Contacto</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3>Nuestros Productos</h3>
                            <ul className="footer-links">
                                <li><a href="/pedidos">Bidón 20 Litros</a></li>
                                <li><a href="/pedidos">Bidón 7 Litros</a></li>
                                <li><a href="/pedidos">Caja 20 Litros</a></li>
                                <li><a href="/pedidos">Dispensadores</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3>Contacto</h3>
                            <ul className="footer-contact">
                                <li>
                                    <i className="pi pi-map-marker"></i>
                                    <span>Lima, Perú</span>
                                </li>
                                <li>
                                    <i className="pi pi-phone"></i>
                                    <span>+51 999 999 999</span>
                                </li>
                                <li>
                                    <i className="pi pi-envelope"></i>
                                    <span>contacto@althus.com</span>
                                </li>
                                <li>
                                    <i className="pi pi-clock"></i>
                                    <span>Lun - Dom: 8:00 AM - 8:00 PM</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Separador con onda */}
                    <div className="footer-wave">
                        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
                            <path d="M0,30 Q300,0 600,30 T1200,30 L1200,0 L0,0 Z" fill="rgba(145, 215, 231, 0.1)"></path>
                        </svg>
                    </div>

                    {/* Sección Inferior */}
                    <div className="footer-bottom">
                        <div className="footer-bottom-content">
                            <p>&copy; {new Date().getFullYear()} ACeleste. Todos los derechos reservados.</p>
                            <div className="footer-legal">
                                <a href="/terminos">Términos y Condiciones</a>
                                <span className="separator">|</span>
                                <a href="/privacidad">Política de Privacidad</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Efecto de burbujas decorativas */}
                <div className="footer-bubbles">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>
            </footer>
        </>
    );
}