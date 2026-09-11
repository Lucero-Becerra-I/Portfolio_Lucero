import "./Contacto.css";
import Links from "../../components/Links/Links";

const links = [
  { 
    href: "https://mail.google.com/mail/?view=cm&to=tuemail@gmail.com",
    label: "Gmail",     
    description: "tuemail@gmail.com" 
  },
  { 
    href: "https://linkedin.com/in/tu-perfil", 
    label: "LinkedIn",  
    description: "Perfil profesional" 
  },
  { 
    href: "https://github.com/tu-usuario",     
    label: "GitHub",    
    description: "Mis proyectos" 
  },
  { 
    href: "https://instagram.com/tu-usuario",  
    label: "Instagram", 
    description: "Mi perfil" 
  },
];

function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="contacto-container">

        <span className="contacto-marca"></span>

        <h2>Contacto</h2>

        <p className="contacto-text">
          Si querés conocer más sobre mi trabajo, conversar sobre
          algún proyecto o simplemente ponerte en contacto conmigo,
          podés encontrarme en estos medios.
        </p>

        <div className="contacto-links">
          {links.map((link) => (
            <Links key={link.label} {...link} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contacto;