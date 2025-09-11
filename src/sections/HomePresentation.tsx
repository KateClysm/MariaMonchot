import React, { useEffect, useRef } from "react";
import "../animations/RevealUp.scss";
import { useLanguage } from "../contexts/LanguageContext";
import portfolioData from "../assets/portfolio.json";
import "./HomePresentation.scss";

interface AboutData {
  name: string;
  subtitle: string;
  HomePresentation: string;
  icons: {
    [key: string]: {
      icon: string;
      alt: string;
      link: string;
    };
  };
}

const HomePresentation: React.FC = () => {
  const { language } = useLanguage();
  const data: any = language === "EN" ? portfolioData["en-language"] : portfolioData["es-language"];
  const about: AboutData = data.about;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      setTimeout(() => {
        el.classList.add("active");
      }, 50);
    }
  }, []);

  return (
    <div ref={ref} className="presentation margin-mark revealUp no-reset">
      <h1>{about.name}</h1>
      <h3 className="fixed-border">
        {about.subtitle.split(" ").map((word: string, idx: number) =>
          word === "DATA" ? <span key={idx}>{word} </span> : word + " "
        )}
      </h3>
      <p>{about.HomePresentation}</p>

      {/* Íconos */}
      <div className="about-icons">
        {about.icons &&
          Object.keys(about.icons).map((key) => {
            const icon = about.icons[key];
            return (
              <a
                key={key}
                href={icon.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                title={key}
              >
                <img
                  src={icon.icon}
                  alt={icon.alt}
                />
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default HomePresentation;
