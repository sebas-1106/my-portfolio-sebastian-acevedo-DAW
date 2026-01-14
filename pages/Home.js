import "./Home.css";
import { cleanPage } from "../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
    <section class="home">
      <span class="home-intro">Hey, I'm</span>

      <h1>Sebastian Acevedo</h1>

      <h2 class="home-subtitle">
        Estudiante de Desarrollo de Aplicaciones Web · Junior Developer
      </h2>

      <p class="home-description">
        Me estoy formando como desarrollador web, con interés en crear interfaces
        funcionales y aprender nuevas tecnologías. Busco crecer profesionalmente
        participando en proyectos reales y equipos colaborativos.
      </p>

    </section>
    <div class="home-side">
  <div class="info-item">
    <span class="icon">👨‍💻</span>
    <div>
      <h3>Perfil</h3>
      <p>Desarrollador Web Junior</p>
    </div>
  </div>

  <div class="info-item">
    <span class="icon">📚</span>
    <div>
      <h3>Formación</h3>
      <p>Grado Superior en Desarrollo de Aplicaciones Web (DAW)</p>
    </div>
  </div>

  <div class="info-item">
    <span class="icon">🚀</span>
    <div>
      <h3>Enfoque</h3>
      <p>Aprender, mejorar y crear proyectos web funcionales</p>
    </div>
  </div>

  <div class="info-item">
    <span class="icon">🤝</span>
    <div>
      <h3>Valor</h3>
      <p>Compromiso, responsabilidad y ganas de crecer</p>
    </div>
  </div>
</div>

  `;
};
