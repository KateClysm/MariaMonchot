// src/pages/Projects/Projects.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useSection } from "../../hooks/useSection";
import Project from "../../components/Project/Project";
import "./projects.scss";
import PageProps from "../../interfaces/IPage";

const Projects: React.FC<PageProps> = ({ id }) => {
  // Usamos el hook para traer toda la sección de proyectos ya procesada
  const projectsSection = useSection("projectsData");

  // Filtramos los proyectos destacados
  const featuredProjects = projectsSection.projects
    .filter((p: any) => p.featured)
    .slice(0, 6);

  return (
    <section className="projects-section" id={id}>
      {/* Título de la sección */}
      <h2 className="margin-mark">{projectsSection.sectionTitle}</h2>

      {/* Grid de proyectos */}
      <div className="projects-grid margin-mark">
        {featuredProjects.map((project: any, idx: number) => (
          <Project
            key={idx}
            project={project}
            icons={projectsSection.icons} // acá lo pasás como prop aparte
          />
        ))}
      </div>

      {/* Link a todos los proyectos */}
      <Link to="/MariaMonchot/allprojects" className="more-projects-btn margin-mark">
        MORE PROJECTS
      </Link>
    </section>
  );
};

export default Projects;
