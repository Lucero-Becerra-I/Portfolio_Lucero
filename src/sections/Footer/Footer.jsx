import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

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

            <a
              href="mailto:tuemail@gmail.com"
              className="footer-social-link"
              aria-label="Gmail"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M3 5h18v14H3V5zm0 0 9 7 9-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Gmail</span>
            </a>

            <a
              href="https://linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6 9v9M6 6v.01M10 18v-5a3 3 0 0 1 6 0v5M10 9v9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.44v-1.54c-2.52.55-3.05-1.2-3.05-1.2-.41-1.05-1-1.33-1-1.33-.82-.56.06-.55.06-.55.9.06 1.38.92 1.38.92.81 1.38 2.13.98 2.65.75.08-.58.32-.98.58-1.2-2.01-.23-4.13-1.01-4.13-4.49 0-.99.35-1.8.92-2.44-.09-.23-.4-1.16.09-2.41 0 0 .75-.24 2.47.93A8.6 8.6 0 0 1 12 7.3c.76 0 1.53.1 2.25.3 1.72-1.17 2.47-.93 2.47-.93.49 1.25.18 2.18.09 2.41.57.64.92 1.45.92 2.44 0 3.49-2.12 4.26-4.14 4.48.33.28.62.82.62 1.65v2.45c0 .24.16.52.63.43A9 9 0 0 0 12 3z"
                  fill="currentColor"
                />
              </svg>

              <span>GitHub</span>
            </a>

            <a
              href="https://instagram.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <circle
                  cx="17"
                  cy="7"
                  r="1"
                  fill="currentColor"
                />
              </svg>

              <span>Instagram</span>
            </a>

          </div>

        </div>

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
