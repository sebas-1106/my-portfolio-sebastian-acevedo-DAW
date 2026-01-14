export function softSkillsSection() {
  const section = document.createElement("section");
  section.className = "skills soft-skills";

  section.innerHTML = `
    <h2>Soft Skills</h2>

    <div class="skills-grid">
      <div class="skill-card">
        <h3>Trabajo en equipo</h3>
        <p>Experiencia colaborando en proyectos académicos.</p>
      </div>

      <div class="skill-card">
        <h3>Organización</h3>
        <p>Planificación y estructuración del trabajo.</p>
      </div>

      <div class="skill-card">
        <h3>Aprendizaje continuo</h3>
        <p>Interés por mejorar y aprender nuevas tecnologías.</p>
      </div>
    </div>
  `;

  return section;
}
