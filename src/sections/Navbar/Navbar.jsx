import { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Inicio", section: "inicio" },
  { label: "Sobre mí", section: "about" },
  { label: "Trayectoria", section: "trayectoria" },
  { label: "Conocimientos", section: "conocimientos" },
];

function Navbar() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleSectionClick = (section) => {
    setMenuOpen(false);

    // Si estamos en Contacto, primero volvemos al inicio
    // y después React se encargará de llegar a la sección.
    if (location.pathname !== "/") {
      return;
    }

    // Esperamos un momento para que el cambio de hash
    // quede registrado en la URL antes del scroll.
    setTimeout(() => {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 0);
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar-inner">

        <Link
          to="/#inicio"
          className="navbar-logo"
          onClick={handleLogoClick}
        >
          Lucero Becerra Ibarcena
        </Link>

        {/* Botón hamburguesa — solamente visible en celular */}
        <button
          className={`navbar-menu-button ${
            menuOpen ? "is-open" : ""
          }`}
          type="button"
          aria-label={
            menuOpen
              ? "Cerrar menú"
              : "Abrir menú"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          className={`navbar-links ${
            menuOpen ? "is-open" : ""
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.section}>
              <a
                href={`/#${link.section}`}
                onClick={() =>
                  handleSectionClick(link.section)
                }
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <Link
              to="/contacto"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;