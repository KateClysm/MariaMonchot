import React from "react";
import portfolioData from "../../assets/data/portfolio.json";
import "./technologies.scss";

const Technologies: React.FC = () => {
  const { technologies } = portfolioData;

  return (
    <section className="technologies margin-mark">
      <h2>TECHNOLOGIES</h2>
      <div className="technologies-container m-top-5">
        {technologies.map((block: any, index: number) => (
          <div key={index} className="tech-block">
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