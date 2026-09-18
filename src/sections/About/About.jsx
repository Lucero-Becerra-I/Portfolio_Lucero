import "./About.css";
import Reveal from "../../components/Reveal/Reveal";

function About() {
  return (
    <section className="about" id="about">
      <span className="about-marca"></span>

      <h2>Un poco más sobre mí</h2>

      <Reveal>
        <div className="about-text">
          <p>
            Estudio Ingeniería Informática y, en paralelo, sigo formándome
            de manera independiente a través de cursos y proyectos propios.
            Me considero una persona curiosa y con interés por entender cómo
            funcionan las cosas más allá de lo superficial. Cuando algo me
            interesa, no suelo esperar a que me lo enseñen: investigo,
            experimento y busco llevarlo a la práctica.
          </p>

          <p>
            También considero que equivocarse es una parte importante del
            aprendizaje, especialmente al enfrentarse a algo nuevo. Por eso,
            me gusta involucrarme de lleno en los desafíos, probar distintas
            alternativas y entender qué salió mal cuando algo no funciona.
            Creo que esa forma de aprender me permite adquirir conocimientos
            de manera más profunda y, sobre todo, seguir mejorando constantemente.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default About;