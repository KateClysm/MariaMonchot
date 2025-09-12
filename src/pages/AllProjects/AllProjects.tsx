import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import portfolioData from "../../assets/portfolio.json";
import IProject from "../../interfaces/IProject";
import "./AllProjects.scss";

const AllProjects: React.FC = () => {
  const { language } = useLanguage();
  const languageKey = (language.toLowerCase() + "-language") as
    | "en-language"
    | "es-language";
  const { projectsData } = portfolioData[languageKey];

  // Estado inicial: categoría "NOTABLE"
  const [selectedCategory, setSelectedCategory] = useState("NOTABLE");

  // Filtrado de proyectos
  const filteredProjects = (projectsData.projects as IProject[]).filter(
    (project: IProject) => {
      if (selectedCategory === "NOTABLE") {
        return project.featured === true;
      }
      return project.categories.includes(selectedCategory);
    }
  );

  return (
    <section className="projects-section">
      <h2 className="section-title">{projectsData.sectionTitle}</h2>

      {/* Botones de categorías */}
      <div className="categories">
        {projectsData.categories
          .filter((cat) => cat.visualize) // solo categorías visibles
          .map((cat) => (
            <button
              key={cat.name}
              className={selectedCategory === cat.name ? "active" : ""}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.name}
            </button>
          ))}
      </div>

      {/* Grilla de proyectos */}
      <div className="projects-grid">
        {filteredProjects.map((project: IProject, index) => (
          <div key={index} className="project-card">
            {project.image && <img src={project.image} alt={project.name} />}
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {project.deployLink && (
              <a
                href={project.deployLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
