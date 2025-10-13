import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSection } from "../../hooks/useSection";
import Project from "../../components/Project/Project";
import PageProps from "../../interfaces/IPage";
import IProject from "../../interfaces/IProject";
import "./AllProjects.scss";
import { useRevealUp } from "../../animations/RevealUp";

const AllProjects: React.FC<PageProps> = () => {
  const [ready, setReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [animateProjects, setAnimateProjects] = useState(false); // controla animación
  const navigate = useNavigate();

  useRevealUp();

  const projectsSection = useSection("projectsData");
  const [selectedCategory, setSelectedCategory] = useState<string>("notable");

  const filteredProjects = projectsSection.projects.filter((project: IProject) =>
    project.categories.includes(selectedCategory)
  );

  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState<number>(1);

  // Loader inicial
  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => setReady(true), 800);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (ready) {
      const timeout = setTimeout(() => setShowLoader(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [ready]);

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

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const totalItems = filteredProjects.length;
    const newIndex = (index + totalItems) % totalItems;
    const child = container.children[newIndex] as HTMLElement;
    if (child) {
      container.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    }
  };

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    scrollToIndex(activeIndex - 1);
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
    scrollToIndex(activeIndex + 1);
  };

  // Cambio de categoría con animación smooth
  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === selectedCategory) return;
    setAnimateProjects(true);
    setTimeout(() => {
      setSelectedCategory(categoryId);
      setAnimateProjects(false);
    }, 300);
  };



  // Mantener categoría seleccionada aunque cambie el idioma
  useEffect(() => {
    if (!projectsSection.categories || !projectsSection.categories.length) return;

    // Verificar si la categoría seleccionada sigue existiendo
    const categoryExists = projectsSection.categories.some(
      (cat: any) => cat.id === selectedCategory
    );

    // Si no existe, fallback a "notable"
    if (!categoryExists) {
      setSelectedCategory("notable");
    }
  }, [projectsSection.categories, selectedCategory]);


  return (
    <section className="projects-section revealUp no-reset">
      {showLoader ? (
        <div className={`loader margin-mark ${ready ? "hidden" : ""}`}>{projectsSection.loading}</div>
      ) : (
        <>
          <h2 className="margin-mark">{projectsSection.sectionAllProjects}</h2>

          {/* Botones de categorías */}
          <div className="categories margin-mark">
            {projectsSection.categories
              .filter((cat: any) => cat.visualize)
              .map((cat: any) => (
                <button
                  key={cat.id} 
                  className={selectedCategory === cat.id ? "active" : ""} 
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {cat.name} 
                </button>
              ))}
          </div>

          {/* Contenedor de proyectos */}
          <div
            className={`projects-container padding-mark ${
              visibleCount < 3 ? "is-carousel" : "is-grid"
            } ${animateProjects ? "animating" : ""}`}
            ref={carouselRef}
          >
            {filteredProjects.map((project: IProject, idx: number) => (
              <Project key={idx} project={project} icons={projectsSection.icons} />
            ))}
          </div>

          {/* Controles carousel */}
          {visibleCount < 3 && filteredProjects.length > 1 && (
            <div className="carousel-controls">
              <button className="prev" onClick={handlePrev}>
                &lt;
              </button>
              <button className="next" onClick={handleNext}>
                &gt;
              </button>
            </div>
          )}

          {/* Botón volver atrás */}
          <div className="margin-mark back-button-wrapper">
            <button className="back-button" onClick={() => navigate(-1)}>
              ←
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default AllProjects;
