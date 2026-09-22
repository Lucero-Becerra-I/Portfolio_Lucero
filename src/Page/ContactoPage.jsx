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
    href: "https://mail.google.com/mail/?view=cm&to=email@gmail.com",
    label: "Gmail",
    description: "email@gmail.com",
    icon: FaEnvelope,
  },
  {
    id: 2,
    href: "https://linkedin.com/in/perfil",
    label: "LinkedIn",
    description: "Perfil profesional",
    icon: FaLinkedin,
  },
  {
    id: 3,
    href: "https://github.com/usuario",
    label: "GitHub",
    description: "Mis proyectos",
    icon: FaGithub,
  },
  {
    id: 4,
    href: "https://instagram.com/usuario",
    label: "Instagram",
    description: "@usuario",
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
                Si querés conocer más sobre lo que hago, conversar
                sobre algún proyecto o simplemente ponerte en
                contacto conmigo, me encantaría escucharte. Podés
                encontrarme en cualquiera de estos medios.
              </p>

            </section>
          </Reveal>

          <section className="contacto-page-links">

            {links.map((link, index) => {
              const Icon = link.icon;

              return (
                <Reveal
                  key={link.id}
                  delay={index * 80}
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