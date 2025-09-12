import React from "react";
import IProject from "../../interfaces/IProject";
import { IconData } from "../../interfaces/IIcon";
import "./Project.scss";

interface ProjectProps {
  project: IProject;
  icons: IconData[];
}

const Project: React.FC<ProjectProps> = ({ project, icons }) => {
  return (
    <div className={`project-card ${project.projectType}`}>

      {project.projectType === "image" && project.image && (
        <div className="container-project-image">
          <img src={project.image} alt={project.name} className="project-image" />
        </div>
      )}

      <h3 className="fixed-border">{project.name}</h3>
      <p>{project.description}</p>

      <div className="link-etiquetes">
        <div className="links">
          {project.githubLink && icons[0] && (
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <img src={icons[0].icon} alt={icons[0].alt} />
            </a>
          )}
          {project.deployLink && icons[1] && (
            <a href={project.deployLink} target="_blank" rel="noreferrer">
              <img src={icons[1].icon} alt={icons[1].alt} />
            </a>
          )}
        </div>

        {/* Etiquetas a la derecha */}
        <div className="etiquetes">
          {project.highlightedTech && (
            <p className="highlightedTech">{project.highlightedTech}</p>
          )}
          {project.source && <p className="source">{project.source}</p>}
        </div>
      </div>
    </div>
  );
};

export default Project;
