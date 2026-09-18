import "./Footer.css";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";


const redesSociales = [
  {
    id: "gmail",
    nombre: "Gmail",
    href: "mailto:email@gmail.com",
    ariaLabel: "Gmail",
    target: undefined,
    icono: FaEnvelope,
  },
  {
    id: "linkedin",
    nombre: "LinkedIn",
    href: "https://linkedin.com/in/perfil",
    ariaLabel: "LinkedIn",
    target: "_blank",
    icono: FaLinkedin,
  },
  {
    id: "github",
    nombre: "GitHub",
    href: "https://github.com/usuario",
    ariaLabel: "GitHub",
    target: "_blank",
    icono: FaGithub,
  },
  {
    id: "instagram",
    nombre: "Instagram",
    href: "https://instagram.com/usuario",
    ariaLabel: "Instagram",
    target: "_blank",
    icono: FaInstagram,
  },
];


function Footer({ minimal = false }) {
  return (
    <footer className={`footer ${minimal ? "footer-minimal" : ""}`}>

      <div className="footer-container">

        {!minimal && (
          <div className="footer-main">

            <span className="footer-marca"></span>

            <h2 className="footer-titulo">
              ¿Hablamos?
            </h2>

            <p className="footer-descripcion">
              Disponible para nuevos proyectos, colaboraciones
              y oportunidades.
            </p>

            <div className="footer-social">

              {redesSociales.map((red) => {
                const Icon = red.icono;

                return (
                  <a
                    key={red.id}
                    href={red.href}
                    className="footer-social-link"
                    aria-label={red.ariaLabel}
                    target={red.target}
                    rel={
                      red.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <Icon
                      size={20}
                      aria-hidden="true"
                    />

                    <span>
                      {red.nombre}
                    </span>
                  </a>
                );
              })}

            </div>

          </div>
        )}

        <div className="footer-bottom">

          <p className="footer-copy">
            2026 — Portfolio
          </p>

          <p className="footer-text">
            Diseñado y desarrollado por mí.
          </p>

        </div>

      </div>

    </footer>
  );
}


export default Footer;
