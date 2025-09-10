import "./about.scss";
import portfolioData from "../../assets/portfolio.json";
import HomePresentation from "../../sections/HomePresentation";
import IconPresentation from "../../sections/IconPresentation/IconPresentation";
import PageProps from '../../interfaces/IPage';

const About: React.FC<PageProps> = ({ id }) => {
 
  return (
    <section className="home" id={id}>

      
      <div className="home-container">
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
      </div>

    <h2 className="presentation margin-mark revealUp">ABOUT</h2>
      <div className="about m-top-5">
        <IconPresentation
          cards={portfolioData.whatIDo}
          title="WHAT I DO"
          variant="A"
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
