import "./ContactoPage.css";
import Links from "../components/Links/Links";
import Reveal from "../components/Reveal/Reveal";
import Footer from "../sections/Footer/Footer";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const links = [
  {
    id: 1,
    href: "https://mail.google.com/mail/?view=cm&to=lucero.becerraibarcena@gmail.com",
    label: "Gmail",
    description: "lucero.becerraibarcena@gmail.com",
    icon: FaEnvelope,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/lucero-becerra-ibarcena-92057b332",
    label: "LinkedIn",
    description: "Lucero Becerra Ibarcena",
    icon: FaLinkedin,
  },
  {
    id: 3,
    href: "https://github.com/Lucero-Becerra-I",
    label: "GitHub",
    description: "Lucero-Becerra-I",
    icon: FaGithub,
  },
  {
    id: 4,
    href: "https://www.instagram.com/lucero_b.i._/",
    label: "Instagram",
    description: "@lucero_b.i._",
    icon: FaInstagram,
  },
];

function ContactoPage() {
  return (
    <div className="contacto-layout">

      <main className="contacto-page">

        <div className="contacto-page-container">

          <Reveal>
            <section className="contacto-page-intro">

              <span className="contacto-page-marca"></span>

              <p className="contacto-page-label">
                CONTACTO
              </p>

              <h1 className="contacto-page-titulo">
                ¿Hablamos?
              </h1>

              <p className="contacto-page-texto">
                Si querés conocer más sobre lo que hago, tenés una idea en
                mente o simplemente te gustaría ponerte en contacto conmigo,
                me encantaría escucharte.
              </p>

              <p className="contacto-page-texto">
                Estoy aprendiendo, creciendo y sumando experiencia con cada
                proyecto. Me gusta involucrarme de verdad en lo que hago,
                buscar soluciones y dar lo mejor de mí en cada desafío, sin
                importar su tamaño. Podés encontrarme en cualquiera de estos
                medios.
              </p>

            </section>
          </Reveal>

          <section className="contacto-page-links">

            {links.map((link, index) => {
              const Icon = link.icon;

              return (
                <Reveal
                  key={link.id}
                  delay={Math.min(index * 80, 320)}
                >
                  <div className="contacto-link-wrapper">

                    <div className="contacto-link-icon">
                      <Icon
                        size={24}
                        aria-hidden="true"
                      />
                    </div>

                    <Links
                      href={link.href}
                      label={link.label}
                      description={link.description}
                    />

                  </div>
                </Reveal>
              );
            })}

          </section>

        </div>

      </main>

      <Footer minimal />

    </div>
  );
}

export default ContactoPage;