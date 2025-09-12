import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import portfolioData from "../../assets/portfolio.json";
import Project from "../../components/Project/Project";
import "./projects.scss";
import PageProps from '../../interfaces/IPage';

const Projects: React.FC<PageProps> = ({ id }) => {
  const { language } = useLanguage();
  const languageData = portfolioData[
    `${language.toLowerCase()}-language` as keyof typeof portfolioData
  ];

  const { projects } = languageData.projectsData;
  const featuredProjects = projects.filter((p: any) => p.featured).slice(0, 6);

  return (
    <section className="projects-section" id={id}>
      <h2 className="margin-mark">{languageData.projectsData.sectionTitle}</h2>

      <div className="projects-grid margin-mark">
        {featuredProjects.map((project: any, idx: number) => (
          <Project key={idx} project={project} />
        ))}
      </div>

      <Link to="/MariaMonchot/allprojects" className="more-projects-btn margin-mark">
        MORE PROJECTS
      </Link>
    </section>
  );
};

export default Projects;
