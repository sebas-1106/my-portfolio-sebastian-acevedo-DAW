import { Button } from "../Button/Button";
import "./Footer.css";
Button

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/WhatsApp.png", "WhatsApp", "https://wa.me/34613159996")}
${Button("/icons/github.png", "GitHub", "https://github.com/sebas-1106")}
${Button("/icons/linkedin.png", "LinkedIn", "https://www.linkedin.com/in/sebastian-acevedo-ben%C3%ADtez-a3752732a/")}
${Button("/icons/Instagram.png", "Instagram", "https://www.instagram.com/sebas_ace1106/")}
</div>
`;