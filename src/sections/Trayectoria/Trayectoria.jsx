import "./Trayectoria.css";
import Reveal from "../../components/Reveal/Reveal";

const trayectoriaData = [
  {
    id: 1,
    year: "2022 / 2023",
    title: "Primeros pasos",
    description:
      "Tuve mi primer acercamiento a la programación mediante PSeInt, aprendiendo lógica, algoritmos y estructuras de programación a través de pseudocódigo.",
  },
  {
    id: 2,
    year: "2024",
    title: "Programación con código",
    description:
      "Comencé a trabajar directamente con lenguajes de programación, desarrollando aplicaciones y familiarizándome con distintas herramientas de desarrollo.",
  },
  {
    id: 3,
    year: "Actualidad (2026)",
    title: "Desarrollo web",
    description:
      "Me enfoqué en el desarrollo front-end, aprendiendo a crear interfaces web y trabajando con tecnologías como HTML, CSS y JavaScript.",
  },
  {
    id: 4,
    year: "Actualidad (2026)",
    title: "Proyectos personales",
    description:
      "Continúo aprendiendo y desarrollando proyectos personales para poner en práctica mis conocimientos y seguir incorporando nuevas tecnologías.",
  },
];

function Trayectoria() {
  return (
    <section className="trayectoria" id="trayectoria">
      <div className="trayectoria-container">

        <span className="trayectoria-marca"></span>

        <h2>Trayectoria</h2>

        <div className="timeline">
          {trayectoriaData.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index * 80, 320)}>
              <article className="timeline-item">

                <div className="timeline-year">
                  {item.year}
                </div>

                <div className="timeline-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Trayectoria;