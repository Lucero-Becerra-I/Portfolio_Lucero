import "./Trayectoria.css";

const trayectoriaData = [
  {
    id: 1,
    year: "AÑO",
    title: "Inicio en programación",
    description:
      "Comencé a estudiar programación y desarrollo web, incorporando los primeros conceptos y herramientas.",
  },
  {
    id: 2,
    year: "AÑO",
    title: "Desarrollo frontend",
    description:
      "Empecé a trabajar con HTML, CSS y JavaScript, desarrollando mis primeros proyectos.",
  },
  {
    id: 3,
    year: "Actualidad",
    title: "Proyectos personales",
    description:
      "Continúo aprendiendo y creando proyectos para poner en práctica mis conocimientos.",
  },
];

function Trayectoria() {
  return (
    <section className="trayectoria" id="trayectoria">
      <div className="trayectoria-container">

        <span className="trayectoria-marca"></span>

        <h2>Trayectoria</h2>

        <div className="timeline">
          {trayectoriaData.map((item) => (
            <article className="timeline-item" key={item.id}>

              <div className="timeline-year">
                {item.year}
              </div>

              <div className="timeline-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Trayectoria;