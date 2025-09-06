import React from "react";
import portfolioData from "../../assets/data/portfolio.json";
import "./Education.scss";

const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section className="education margin-mark">
      <h2 className="section-title">EDUCATION</h2>

      <div className="education-categories m-top-5">
        <div className="education-block half">
          <h3 className="education-subtitle">ACADEMIC</h3>
          <ul className="">
            {education.academic.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>, {item.period}
                {item.details && <p className="details">{item.details}</p>}
              </li>
            ))}
          </ul>
        </div>

        <div className="education-block half">
          <h3 className="education-subtitle">INTERNSHIP</h3>
          <ul className="">
            {education.internship.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong> – {item.period}
                {item.details && <p className="details">{item.details}</p>}
              </li>
            ))}
          </ul>
        </div>

        <div className="education-block full">
            <h3 className="education-subtitle">
                CERTIFICATIONS
                <a href={education.certifications.linkAllCertifications}
                target="_blank" rel="noopener noreferrer" className="see-more" >👁 See more</a>
            </h3>
          <ul className="">
            {education.certifications.c.map((course: string, index: number) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Education;
