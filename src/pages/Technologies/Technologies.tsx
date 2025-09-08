import React from "react";
import portfolioData from "../../assets/portfolio.json";
import "./technologies.scss";
import { useRevealUp } from "../../animations/RevealUp";

const Technologies: React.FC = () => {
  const { technologies } = portfolioData;
  useRevealUp()
  return (
    <section className="technologies ">
      <img 
          src="svgs/waves.svg" 
          alt="Background SVG" 
          className="technologies-svg" 
      />

      <h2 className="margin-mark revealUp">TECHNOLOGIES</h2>
      <div className="technologies-container m-top-5 margin-mark">
        {technologies.map((block: any, index: number) => (
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