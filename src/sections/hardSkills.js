export function hardSkillsSection() {
  const section = document.createElement("section");
  section.className = "skills hard-skills";

  section.innerHTML = `
    <h2>Hard Skills</h2>

    <div class="skills-grid">
      <div class="skill-card">
        <h3>Frontend</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div class="skill-card">
        <h3>Backend</h3>
        <ul>
          <li>Java</li>
          <li>PHP</li>
          <li>MySQL</li>
        </ul>
      </div>

      <div class="skill-card">
        <h3>Herramientas</h3>
        <ul>
          <li>Git / GitHub</li>
          <li>Vite</li>
          <li>VS Code</li>
        </ul>
      </div>
    </div>
  `;

  return section;
}
