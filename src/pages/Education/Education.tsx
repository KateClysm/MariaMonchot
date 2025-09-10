import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import portfolioData from "../../assets/portfolio.json";
import "./Education.scss";
import { useRevealUp } from "../../animations/RevealUp";
import PageProps from '../../interfaces/IPage';

const Education: React.FC<PageProps> = ({ id }) => {
  useRevealUp();

  const { language } = useLanguage();
  const languageKey = (language.toLowerCase() + "-language") as "en-language" | "es-language";
  const data = portfolioData[languageKey];
  const { education } = data;

  return (
    <section className="education margin-mark" id={id}>
      <h2 className="section-title revealUp">{education.sectionTitle}</h2>

      <div className="education-categories m-top-5">
        {education.blocks.map((block, index) => (
          <div
            key={index}
            className={`education-block ${block.linkAllCertifications ? "full" : "half"} revealUp`}
          >
            <h3 className="education-subtitle fixed-border">
              {block.section}
              {block.linkAllCertifications && (
                <a
                  href={block.linkAllCertifications}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="see-more"
                >
                  👁 {language === "EN" ? "See more" : "Ver más"}
                </a>
              )}
            </h3>

            <ul>
              {(block.items[0] as any).title === undefined
                ? (block.items as string[]).map((course, i) => <li key={i}><strong>{course}</strong></li>)
                : (block.items as { title: string; period: string; details?: string }[]).map((item, i) => (
                    <li key={i}>
                      <strong>{item.title}</strong> – {item.period}
                      {item.details && <p className="details">{item.details}</p>}
                    </li>
                  ))
              }
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;