import React from "react";
import "./about.scss";
import HomePresentation from "../../sections/HomePresentation/HomePresentation";
import IconPresentation from "../../sections/IconPresentation/IconPresentation";
import PageProps from '../../interfaces/IPage';
import { useRevealUp } from '../../animations/RevealUp';
import { useSection } from '../../hooks/useSection';

const About: React.FC<PageProps> = ({ id }) => {
  useRevealUp();

  // Obtenemos toda la sección 'about', incluyendo los íconos ya mapeados
  const aboutSection = useSection("about");

  return (
    <section className="home" id={id}>

      <div className="home-container">
        <div className="home-content">
          <HomePresentation
            name={aboutSection.name}
            subtitle_1={aboutSection.subtitle_1}
            subtitle_2={aboutSection.subtitle_2}
            HomePresentationText={aboutSection.HomePresentation}
            icons={aboutSection.icons}
          />
        </div>

        <div className="home-svg-wrapper">
          <img
            src="svgs/wwwhirl3.svg"
            alt="Background SVG"
            className="home-svg"
          />
        </div>

      </div>

      <h2 className="presentation margin-mark revealUp">
        {aboutSection.sectionTitle}
      </h2>

      <div className="about m-top-5">
        <IconPresentation
          cards={aboutSection.whatIDo}
          title={aboutSection.whatIDoTitle}
          variant="A"
        />
        <IconPresentation
          cards={aboutSection.myPriorities}
          title={aboutSection.myPrioritiesTitle}
          variant="B"
        />
        <IconPresentation
          cards={aboutSection.myHighlights}
          title={aboutSection.myHighlightsTitle}
          variant="C"
        />
      </div>

      
    </section>
  );
};

export default About;
