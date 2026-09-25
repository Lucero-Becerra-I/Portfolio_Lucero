import "./Conocimientos.css";
import Reveal from "../../components/Reveal/Reveal";

function Conocimientos() {
  const conocimientos = [
    {
      id: 1,
      categoria: "Tecnologías",
      habilidades: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Python",
      ],
    },
    {
      id: 2,
      categoria: "Herramientas",
      habilidades: ["Git", "GitHub"],
    },
    {
      id: 3,
      categoria: "Conceptos",
      habilidades: ["Responsive Design"],
    },
    {
      id: 4,
      categoria: "En proceso de aprendizaje",
      habilidades: ["Node.js", "Testing", "Accesibilidad web", "APIs"],
    },
  ];

  return (
    <section className="conocimientos" id="conocimientos">
      <div className="conocimientos-container">

        <span className="conocimientos-marca"></span>

        <h2>Conocimientos</h2>

        <div className="conocimientos-grupos">
          {conocimientos.map((grupo, index) => (
            <Reveal key={grupo.id} delay={Math.min(index * 80, 320)}>
              <div className="skill-group">

                <p className="skill-category">
                  {grupo.categoria}
                </p>

                <div className="skill-list">
                  {grupo.habilidades.map((habilidad, i) => (
                    <span key={i}>
                      {habilidad}
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Conocimientos;