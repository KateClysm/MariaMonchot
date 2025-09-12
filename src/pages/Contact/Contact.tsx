import "./contact.scss";
import React from "react";
import PageProps from "../../interfaces/IPage";
import { useRevealUp } from "../../animations/RevealUp";
import { useSection } from "../../hooks/useSection";

const Contact: React.FC<PageProps> = ({ id }) => {
  useRevealUp();

  // Obtenemos toda la sección 'contact', incluyendo los íconos ya mapeados
  const contactSection = useSection("contact");

  return (
    <section className="contact" id={id}>
      <img src="svgs/waves.svg" alt="Background SVG" className="contact-bg" />

      <div className="contact-content margin-mark revealUp">
        <h2>{contactSection.sectionTitle}</h2>
        <p>{contactSection.text}</p>

        <div className="contact-icons animate-bounce">
          {contactSection.icons.map((iconObj, index) => (
            <a
              key={index}
              href={iconObj.link || "#"}
              target={iconObj.link ? "_blank" : undefined}
              rel={iconObj.link ? "noopener noreferrer" : undefined}
            >
              <img src={iconObj.icon} alt={iconObj.alt} className="contact-icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
