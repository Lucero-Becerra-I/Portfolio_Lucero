import "./Hero.css";
import Button from "../../components/Button/Button";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <p className="hero-greeting">Hola, un gusto conocerte. Soy</p>

        <h1>Lucero</h1>

        <p className="hero-role">Desarrolladora en formación — Ingeniería Informática</p>

        <p className="hero-subtitle">
          Me gusta crear, experimentar y aprender con código. Mi meta es 
          poder construir un proyecto de punta a punta, del diseño a la
          lógica que lo hace funcionar.
        </p>

        <Button href="#about">Sobre mí</Button>
      </div>

      <div className="hero-photo">
        <img src="/placeholder-foto.jpg" alt="Foto" />
      </div>
    </section>
  );
}

export default Hero;