import { useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Inicio", section: "inicio" },
  { label: "Sobre mí", section: "about" },
  { label: "Trayectoria", section: "trayectoria" },
  { label: "Conocimientos", section: "conocimientos" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleSectionClick = (e, section) => {
    e.preventDefault();

    setMenuOpen(false);

    // Si estamos en la página principal,
    // vamos directamente a la sección.
    if (location.pathname === "/") {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Si estamos en Contacto,
    // volvemos a la página principal indicando
    // qué sección queremos mostrar.
    navigate("/", {
      state: {
        section,
      },
    });
  };

  const handleLogoClick = (e) => {
    e.preventDefault();

    setMenuOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  const handleContactClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar-inner">

        <a
          href="/"
          className="navbar-logo"
          onClick={handleLogoClick}
        >
          Lucero Becerra
        </a>

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
                href={`#${link.section}`}
                onClick={(e) =>
                  handleSectionClick(
                    e,
                    link.section
                  )
                }
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <Link
              to="/contacto"
              onClick={handleContactClick}
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
