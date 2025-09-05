import "./about.scss";
import WidCard from "../../components/wid-card/WID-card";
import portfolioData from "../../assets/data/portfolio.json";
import MPCard from "../../components/mp-card/MP-card";

const About: React.FC = () => {

  return (
    <section className="home">
      <div className="home-container ">
        <div className="presentation-container ">
          <div className="presentation margin-mark">
            <h1>MARIA MONCHOT</h1>
            <h3 className="fixed-border">
              ALL ABOUT <span>DATA</span>
            </h3>
            <p>
              I am a Data Science student, constantly engaged in technical
              training and actively involved in programs related to data and
              artificial intelligence. I stand out for my problem-solving
              mindset, self-learning ability, and strong organization.
            </p>
          </div>

          <div className="home-svg">
            <img src="src/assets/svgs/oooscillate.svg" alt="oscillate" />
          </div>
        </div>
      </div>

      <div className="about ">

        <div className="presentation margin-mark">
          <h2>ABOUT</h2>
          <p>
            Currently enrolled in the University of Buenos Aires in the area of
            Data Science (Bachelor’s Degree), with a prior academic background
            in Systems and experience in programming and full stack web
            development. I complement my studies with certifications such as
            Google Data Analytics, Oracle Data Science, and Data Analysis at
            Fundación Pescar + Artech. I am passionate about learning, teamwork,
            and developing data-driven solutions that generate real value for IT
            projects and organizations.
          </p>
        </div>

        <div className="what-i-do margin-mark m-top-5">

          <h3 className="fixed-border ">WHAT I DO</h3>

          <div className="wid-cards m-top-5">
            {portfolioData.whatIDo.map((card, index) => (
              <WidCard
                key={index}
                icon={card.icon}
                alt={card.alt}
                label={card.label}
              />
            ))}
                  

          </div>

        </div>


        <div className="my-priorities  m-top-5">

          <h3 className="fixed-border margin-mark">MY PRIORITIES</h3>

          <div className="background-mp-cards">
            <div className="mp-cards m-top-5 margin-mark">
            {portfolioData.myPriorities.map((card, index) => (
              <MPCard
                key={index}
                icon={card.icon}
                alt={card.alt}
                label={card.label}
              />
            ))}

          </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
