import "../style/Navbar.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={Logo} alt="Logo" className="logo-img" />
                </div>
                
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">Inicio</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/pedidos" className="navbar-link">Pedidos</Link>
                    </li>
                    {/* <li className="navbar-item">
                        <Link to="/carrito" className="navbar-link">Carrito</Link>
                    </li> */}
                    <li className="navbar-item">
                        <Link to="/sobre-nosotros" className="navbar-link">Nosotros</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contacto" className="navbar-link">Contacto</Link>
                    </li>
                </ul>

                <button className="navbar-cta">
                    Pedir Ahora
                </button>

                <button className="navbar-toggle" aria-label="Toggle menu">
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                </button>
            </div>
        </nav>
    );
}