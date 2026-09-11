import "./Conocimientos.css";

function Conocimientos() {
  const conocimientos = [
    {
      id: 1,
      categoria: "Herramientas que uso",
      habilidades: ["HTML", "CSS", "JavaScript", "React", "Git", "Tailwind CSS"],
    },
    {
      id: 2,
      categoria: "Conceptos y tecnologías",
      habilidades: ["GitHub", "Responsive Design", "APIs"],
    },
    {
      id: 3,
      categoria: "En proceso de aprendizaje",
      habilidades: ["TypeScript", "Node.js", "Testing", "Accesibilidad web"],
    },
  ];

  return (
    <section className="conocimientos" id="conocimientos">
      <div className="conocimientos-container">

        <span className="conocimientos-marca"></span>

        <h2>Conocimientos</h2>

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
    </section>
  );
}

export default Conocimientos;