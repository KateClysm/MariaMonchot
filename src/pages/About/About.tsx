import "./about.scss";
import portfolioData from "../../assets/data/portfolio.json";
import HomePresentation from "../../sections/HomePresentation";
import AboutPresentation from "../../sections/AboutPresentation";
import IconPresentation from "../../sections/IconPresentation/IconPresentation";

const About: React.FC = () => {

  return (
    <section className="home">
      <div className="home-container ">

        <div className="presentation-container ">
          <div className="relative">
            <HomePresentation text={portfolioData.HomePresentation}/>
          </div>

          <img 
              src="src/assets/svgs/wwwhirl.svg" 
              alt="Background SVG" 
              className="presentation-svg" 
          />

        </div>
      </div>

      <div className="about ">
        <AboutPresentation text={portfolioData.AboutPresentation}/>
      
        <IconPresentation cards={portfolioData.whatIDo} title="WHAT I DO" variant="A" extraClass="holographic-card"/>

        <IconPresentation cards={portfolioData.myPriorities} title="MY PRIORITIES" variant="B"/>

        <IconPresentation cards={portfolioData.myHighlights} title="MY HIGHLIGHTS" variant="C" />

      </div>
    </section>
  );
};

export default About;
