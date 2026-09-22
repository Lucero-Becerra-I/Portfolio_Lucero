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

        <Reveal>
          <div className="conocimientos-grupos">
            {conocimientos.map((grupo) => (
              <div className="skill-group" key={grupo.id}>

                <p className="skill-category">
                  {grupo.categoria}
                </p>

                <div className="skill-list">
                  {grupo.habilidades.map((habilidad, index) => (
                    <span key={index}>
                      {habilidad}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Conocimientos;