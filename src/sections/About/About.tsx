import "./about.scss";

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

        <div className="what-i-do m-top-5 margin-mark">
          <h3 className="fixed-border ">WHAT I DO</h3>

          <div className="wid-cards m-top-2">
            <div className="wid-card">
              <img src="" alt="" />
              <p>Data Cleansing</p>
            </div>

            <div className="wid-card">
              <img src="" alt="" />
              <p>Programming</p>
            </div>

            <div className="wid-card">
              <img src="" alt="" />
              <p>Analysis</p>
            </div>

            <div className="wid-card">
              <img src="" alt="" />
              <p>Visualizations</p>
            </div>

            <div className="wid-card">
              <img src="" alt="" />
              <p>Databases</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
