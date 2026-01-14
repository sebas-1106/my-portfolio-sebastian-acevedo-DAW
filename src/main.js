import "./style.css";
import "./sections/softSkills.css";
import "./sections/hardSkills.css";
import { changeTheme } from "../components/Navbar/Navbar";
import { linkPage } from "../utils/linkPage";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Divider } from "../components/Divider/Divider";
import { hardSkillsSection } from "./sections/hardSkills";
import { softSkillsSection } from "./sections/softSkills";



const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);

Home();

changeTheme();
// Example of using the sections (not linked to any page in this snippet)
const main = document.querySelector("main");
main.appendChild(hardSkillsSection());
main.appendChild(softSkillsSection());
footer.insertAdjacentHTML("beforebegin", Divider());
