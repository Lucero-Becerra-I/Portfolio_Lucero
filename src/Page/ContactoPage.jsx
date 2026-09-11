import "./ContactoPage.css";
import Links from "../components/Links/Links";

const links = [
  {
    id: 1,
    href: "https://mail.google.com/mail/?view=cm&to=email@gmail.com",
    label: "Gmail",
    description: "email@gmail.com",

    icon: (
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
    ),
  },

  {
    id: 2,
    href: "https://linkedin.com/in/perfil",
    label: "LinkedIn",
    description: "Perfil profesional",

    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6 9v9M6 6v.01M10 18v-5a3 3 0 0 1 6 0v5M10 9v9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    id: 3,
    href: "https://github.com/usuario",
    label: "GitHub",
    description: "Mis proyectos",

    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.44v-1.54c-2.52.55-3.05-1.2-3.05-1.2-.41-1.05-1-1.33-1-1.33-.82-.56.06-.55.06-.55.9.06 1.38.92 1.38.92.81 1.38 2.13.98 2.65.75.08-.58.32-.98.58-1.2-2.01-.23-4.13-1.01-4.13-4.49 0-.99.35-1.8.92-2.44-.09-.23-.4-1.16.09-2.41 0 0 .75-.24 2.47.93A8.6 8.6 0 0 1 12 7.3c.76 0 1.53.1 2.25.3 1.72-1.17 2.47-.93 2.47-.93.49 1.25.18 2.18.09 2.41.57.64.92 1.45.92 2.44 0 3.49-2.12 4.26-4.14 4.48.33.28.62.82.62 1.65v2.45c0 .24.16.52.63.43A9 9 0 0 0 12 3z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    id: 4,
    href: "https://instagram.com/usuario",
    label: "Instagram",
    description: "@usuario",

    icon: (
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
    ),
  },
];

function ContactoPage() {
  return (
    <main className="contacto-page">

      <div className="contacto-page-container">

        <section className="contacto-page-intro">

          <span className="contacto-page-marca"></span>

          <p className="contacto-page-label">
            CONTACTO
          </p>

          <h1 className="contacto-page-titulo">
            ¿Hablamos?
          </h1>

          <p className="contacto-page-texto">
            Si querés conocer más sobre lo que hago, conversar
            sobre algún proyecto o simplemente ponerte en
            contacto conmigo, me encantaría escucharte. Podés
            encontrarme en cualquiera de estos medios.
          </p>

        </section>

        <section className="contacto-page-links">

          {links.map((link) => (
            <div
              className="contacto-link-wrapper"
              key={link.id}
            >

              <div className="contacto-link-icon">
                {link.icon}
              </div>

              <Links
                href={link.href}
                label={link.label}
                description={link.description}
              />

            </div>
          ))}

        </section>

      </div>

    </main>
  );
}

export default ContactoPage;
