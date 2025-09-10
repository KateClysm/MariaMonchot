import React from "react";
import "./about.scss";
import HomePresentation from "../../sections/HomePresentation";
import IconPresentation from "../../sections/IconPresentation/IconPresentation";
import PageProps from '../../interfaces/IPage';
import { useRevealUp } from '../../animations/RevealUp';
import { useLanguage } from '../../contexts/LanguageContext';
import portfolioData from '../../assets/portfolio.json';

const About: React.FC<PageProps> = ({ id }) => {
  useRevealUp();

  const { language } = useLanguage();
  const languageData = portfolioData[`${language.toLowerCase()}-language` as keyof typeof portfolioData];

  return (
    <section className="home" id={id}>
      <div className="home-container">
        <div className="home-content">
          <HomePresentation/>
        </div>

          <div className="home-svg-wrapper ">
            <img
              src="svgs/wwwhirl3.svg"
              alt="Background SVG"
              className="home-svg"
            />
          </div>
        </div>

      

      <h2 className="presentation margin-mark revealUp">
        {languageData.about.sectionTitle} {/* Aquí se interpolará ABOUT o ACERCA DE */}
      </h2>

      <div className="about m-top-5">
        <IconPresentation
          cards={languageData.about.whatIDo}
          title={languageData.about.whatIDoTitle}  // "WHAT I DO" o "QUÉ HAGO"
          variant="A"
        />
        <IconPresentation
          cards={languageData.about.myPriorities}
          title={languageData.about.myPrioritiesTitle}  // "MY PRIORITIES" o "MIS PRIORIDADES"
          variant="B"
        />
        <IconPresentation
          cards={languageData.about.myHighlights}
          title={languageData.about.myHighlightsTitle} // "MY HIGHLIGHTS" o "MIS LOGROS"
          variant="C"
        />
      </div>
    </section>
  );
};

export default About;
