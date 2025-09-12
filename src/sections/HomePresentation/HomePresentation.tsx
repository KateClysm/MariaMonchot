import React, { useEffect, useRef } from "react";
import "../../animations/RevealUp.scss";
import "./HomePresentation.scss";
import { useLanguage } from "../../contexts/LanguageContext";
import { HomePresentationProps } from "../../interfaces/IHomePresentation";


const HomePresentation: React.FC<HomePresentationProps> = ({ name, subtitle_1, subtitle_2, HomePresentationText, icons}) => {

  const { language } = useLanguage();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      setTimeout(() => el.classList.add("active"), 50);
    }
  }, []);

  return (
    <div ref={ref} className="presentation margin-mark revealUp no-reset">
      <h1>{name}</h1>
      <h3 className="fixed-border">
        {language === "EN" ? (
          <>
            <span>{subtitle_1}</span> {subtitle_2}
          </>
        ) : (
          <>
            {subtitle_1} <span>{subtitle_2}</span>
          </>
        )}
      </h3>
      <p>{HomePresentationText}</p>


      <div className="about-icons">
        {icons.map((icon, idx) => (
          <a
            key={idx}
            href={icon.link || "#"}
            target={icon.link ? "_blank" : undefined}
            rel={icon.link ? "noopener noreferrer" : undefined}
            title={icon.label || `icon-${idx}`}
          >
            <img src={icon.icon} alt={icon.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomePresentation;
