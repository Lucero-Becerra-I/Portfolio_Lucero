import "./Conocimientos.css";

function Conocimientos() {
  return (
    <section className="conocimientos" id="conocimientos">
      <div className="conocimientos-container">

        <span className="conocimientos-marca"></span>

        <h2>Conocimientos</h2>

        <div className="skill-group">
          <p className="skill-category">
            Herramientas que uso
          </p>

          <div className="skill-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Git</span>
          </div>
        </div>

        <div className="skill-group">
          <p className="skill-category">
            Conceptos y tecnologías
          </p>

          <div className="skill-list">
            <span>Responsive Design</span>
            <span>APIs</span>
            <span>GitHub</span>
          </div>
        </div>

        <div className="skill-group">
          <p className="skill-category">
            En proceso de aprendizaje
          </p>

          <div className="skill-list">
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Testing</span>
            <span>Accesibilidad web</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conocimientos;