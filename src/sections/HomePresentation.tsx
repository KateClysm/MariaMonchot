import React, { useEffect, useRef } from "react";
import "../animations/RevealUp.scss";
import { useLanguage } from "../contexts/LanguageContext";
import portfolioData from "../assets/portfolio.json";

interface AboutData {
  name: string;
  subtitle: string;
  HomePresentation: string;
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
    </div>
  );
};

export default HomePresentation;
