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

  const handleSectionClick = (e, section) => {
    e.preventDefault();

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

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar-inner">

        <a
          href="/"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();

            if (location.pathname === "/") {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            } else {
              navigate("/");
            }
          }}
        >
          Lucero Becerra
        </a>

        <ul className="navbar-links">

          {navLinks.map((link) => (
            <li key={link.section}>
              <a
                href="/"
                onClick={(e) =>
                  handleSectionClick(e, link.section)
                }
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <Link to="/contacto">
              Contacto
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;