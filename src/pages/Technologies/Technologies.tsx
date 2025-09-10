import React from "react";
import "./technologies.scss";
import { useLanguage } from "../../contexts/LanguageContext";
import portfolioData from "../../assets/portfolio.json";
import PageProps from '../../interfaces/IPage';
import { useRevealUp } from "../../animations/RevealUp";

const Technologies: React.FC<PageProps> = ({ id }) => {
  const { language } = useLanguage(); // "EN" o "ES"
  const languageKey = (language.toLowerCase() + "-language") as "en-language" | "es-language";
  const languageData = portfolioData[languageKey].technologies;

  useRevealUp();

  return (
    <section className="technologies" id={id}>
      <img 
        src="svgs/waves.svg" 
        alt="Background SVG" 
        className="technologies-svg" 
      />

      <h2 className="margin-mark revealUp">{languageData.sectionTitle}</h2>

      <div className="technologies-container m-top-5 margin-mark">
        {languageData.blocks.map((block: any, index: number) => (
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
