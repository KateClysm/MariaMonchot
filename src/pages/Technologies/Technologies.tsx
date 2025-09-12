import React from "react";
import "./technologies.scss";
import PageProps from '../../interfaces/IPage';
import { useRevealUp } from "../../animations/RevealUp";
import { useSection } from '../../hooks/useSection';

const Technologies: React.FC<PageProps> = ({ id }) => {
  useRevealUp();

  // Consumimos la sección 'technologies' usando nuestro hook
  const technologies = useSection("technologies");

  return (
    <section className="technologies" id={id}>
      <img 
        src="svgs/waves.svg" 
        alt="Background SVG" 
        className="technologies-svg" 
      />

      <h2 className="margin-mark revealUp">{technologies.sectionTitle}</h2>

      <div className="technologies-container m-top-5 margin-mark">
        {technologies.blocks.map((block: any, index: number) => (
          <div key={index} className="tech-block revealUp">
            <h3 className="tech-title fixed-border">{block.section}</h3>
            <div className="tech-items">
              {block.items.map((tech: any, i: number) => (
                <div key={i} className="tech-item">
                  <img src={tech.icon} alt={tech.alt} />
                  <span>{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
