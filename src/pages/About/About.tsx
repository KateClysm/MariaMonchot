import "./about.scss";
import portfolioData from "../../assets/portfolio.json";
import HomePresentation from "../../sections/HomePresentation";
import AboutPresentation from "../../sections/AboutPresentation";
import IconPresentation from "../../sections/IconPresentation/IconPresentation";

const About: React.FC = () => {
  return (
    <section className="home">

      
      <div className="home-content ">
        <HomePresentation text={portfolioData.HomePresentation} />
      </div>

      <div className="home-svg-wrapper ">
        <img
          src="svgs/wwwhirl3.svg"
          alt="Background SVG"
          className="home-svg"
        />
      </div>

      <div className="about ">
        <AboutPresentation text={portfolioData.AboutPresentation} />
        <IconPresentation
          cards={portfolioData.whatIDo}
          title="WHAT I DO"
          variant="A"
          extraClass="holographic-card "
        />
        <IconPresentation
          cards={portfolioData.myPriorities}
          title="MY PRIORITIES"
          variant="B"
        />
        <IconPresentation
          cards={portfolioData.myHighlights}
          title="MY HIGHLIGHTS"
          variant="C"
        />
      </div>
    </section>
  );
};

export default About;
