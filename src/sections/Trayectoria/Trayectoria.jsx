import "./Trayectoria.css";

function Trayectoria() {
  return (
    <section className="trayectoria" id="trayectoria">
      <div className="trayectoria-container">

        <span className="trayectoria-marca"></span>

        <h2>Trayectoria</h2>

        <div className="timeline">

          <article className="timeline-item">
            <div className="timeline-year">
              AÑO
            </div>

            <div className="timeline-content">
              <h3>Inicio en programación</h3>
              <p>
                Comencé a estudiar programación y desarrollo web,
                incorporando los primeros conceptos y herramientas.
              </p>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-year">
              AÑO
            </div>

            <div className="timeline-content">
              <h3>Desarrollo frontend</h3>
              <p>
                Empecé a trabajar con HTML, CSS y JavaScript,
                desarrollando mis primeros proyectos.
              </p>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-year">
              Actualidad
            </div>

            <div className="timeline-content">
              <h3>Proyectos personales</h3>
              <p>
                Continúo aprendiendo y creando proyectos para
                poner en práctica mis conocimientos.
              </p>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}

export default Trayectoria;