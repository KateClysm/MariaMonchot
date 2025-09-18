import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSection } from "../../hooks/useSection";
import Project from "../../components/Project/Project";
import "./projects.scss";
import PageProps from "../../interfaces/IPage";
import IProject from "../../interfaces/IProject";

const Projects: React.FC<PageProps> = ({ id }) => {
  const projectsSection = useSection("projectsData");
  
  // Solo los primeros 6 proyectos destacados
  const featuredProjects = projectsSection.projects
    .filter((p: any) => p.featured)
    .slice(0, 6);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState<number>(1);

  // Ajusta la cantidad de elementos visibles según ancho
  const updateVisibleCount = () => {
    if (window.innerWidth < 425) setVisibleCount(1);
    else if (window.innerWidth < 1200) setVisibleCount(2);
    else setVisibleCount(3);
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Scroll al índice deseado
  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const totalItems = featuredProjects.length;
    const newIndex = (index + totalItems) % totalItems;
    const child = container.children[newIndex] as HTMLElement;
    if (child) {
      container.scrollTo({
        left: child.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    scrollToIndex(activeIndex - 1);
  };
  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % featuredProjects.length);
    scrollToIndex(activeIndex + 1);
  };

  return (
    <section className="projects-section" id={id}>
      <h2 className="margin-mark">{projectsSection.sectionProjects}</h2>

      <div
        className={`projects-container padding-mark ${visibleCount < 3 ? "is-carousel" : "is-grid"}`}
        ref={carouselRef}
      >
        {featuredProjects.map((project: IProject, idx: number) => (
          <Project
            key={idx}
            project={project}
            icons={projectsSection.icons}
          />
        ))}
      </div>

      {/* Controles solo para carrousel */}
      {visibleCount < 3 && (
        <div className="carousel-controls">
          <button className="prev" onClick={handlePrev}>&lt;</button>
          <button className="next" onClick={handleNext}>&gt;</button>
        </div>
      )}

      <div className="more-projects-btn">
          <Link to="/MariaMonchot/allprojects" className=" margin-mark">
        {projectsSection.moreProjects}
        </Link>
      </div>
    </section>
  );
};

export default Projects;
