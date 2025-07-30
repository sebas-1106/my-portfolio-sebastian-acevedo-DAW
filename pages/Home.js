import "./Home.css";
import { cleanPage } from "../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hey, I'm</p>
    <h1>Sebastian Acevedo</h1>
    <p>¡Hola! Soy un estudiante apasionado de Desarrollo de Aplicaciones Web, con un profundo interés por la tecnología y la creación de experiencias digitales innovadoras. Mi objetivo es seguir fortaleciendo mis conocimientos en el diseño, desarrollo y optimización de páginas web, explorando las últimas tendencias y herramientas del sector. Busco aplicar mis habilidades técnicas y creativas en proyectos laborales que me permitan crecer profesionalmente y contribuir al éxito de equipos dinámicos. Estoy comprometido con el aprendizaje continuo y la mejora constante para convertirme en un desarrollador web altamente competente.</p>
    <a href="acevedosebastian455@gmail.com">Say hi →</a>
    </section>`;
};