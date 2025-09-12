import React from "react";
import IProject from "../../interfaces/IProject";
import "./Project.scss";

interface ProjectProps {
  project: IProject;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className={`project-card ${project.projectType}`}>
      {project.projectType === "image" && project.image && (
        <img src={project.image} alt={project.name} />
      )}

      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <div className="link-etiquetes">
        {/* Links a la izquierda */}
        <div className="links">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              Github
            </a>
          )}
          {project.deployLink && (
            <a href={project.deployLink} target="_blank" rel="noreferrer">
              Web
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
