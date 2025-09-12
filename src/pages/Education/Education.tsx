import React from "react";
import { useRevealUp } from "../../animations/RevealUp";
import { useSection } from "../../hooks/useSection";
import PageProps from '../../interfaces/IPage';
import "./Education.scss";

const Education: React.FC<PageProps> = ({ id }) => {
  useRevealUp();

  // Traemos la sección education ya mapeada con íconos
  const educationSection = useSection("education");

  return (
    <section className="education margin-mark" id={id}>
      <h2 className="section-title revealUp">{educationSection.sectionTitle}</h2>

      <div className="education-categories m-top-5">
        {educationSection.categories.map((category: any, index: number) => (
          <div
            key={index}
            className={`education-block ${
              category.section === "CERTIFICATIONS" ? "full" : "half"
            } revealUp`}
          >
            <h3 className="education-subtitle fixed-border">
              {category.section}
              {category.section === "CERTIFICATIONS" && educationSection.icons.length > 0 && (
                <a
                  href={educationSection.icons[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="see-more"
                >
                  <img
                    src={educationSection.icons[0].icon}
                    alt={educationSection.icons[0].alt}
                    className="icon-see-more"
                  />{" "}
                  {category.seeMore}
                </a>
              )}
            </h3>

            <ul>
              {(category.items[0] as any).title === undefined
                ? (category.items as string[]).map((item, i) => (
                    <li key={i}>
                      <strong>{item}</strong>
                    </li>
                  ))
                : (category.items as { title: string; period: string; details?: string }[]).map(
                    (item, i) => (
                      <li key={i}>
                        <strong>{item.title}</strong> – {item.period}
                        {item.details && <p className="details">{item.details}</p>}
                      </li>
                    )
                  )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
