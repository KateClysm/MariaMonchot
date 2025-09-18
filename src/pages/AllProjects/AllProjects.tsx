import React, { useRef, useState, useEffect } from "react";
import { useSection } from "../../hooks/useSection";
import Project from "../../components/Project/Project";
import PageProps from "../../interfaces/IPage";
import IProject from "../../interfaces/IProject";
import "./AllProjects.scss";

const AllProjects: React.FC<PageProps> = () => {
  const [ready, setReady] = useState(false);

  // Hook de sección SIEMPRE se ejecuta
  const projectsSection = useSection("projectsData");

  // Estado inicial: categoría "NOTABLE"
  const [selectedCategory, setSelectedCategory] = useState("NOTABLE");

  // Filtrado según categoría
  const filteredProjects = projectsSection.projects.filter((project: IProject) => {
    if (selectedCategory === "NOTABLE") return project.featured;
    return project.categories.includes(selectedCategory);
  });

  // Carousel
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState<number>(1);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    const timeout = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(timeout);
  }, []);

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
      container.scrollTo({
        left: child.offsetLeft,
        behavior: "smooth",
      });
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

  return (
    <section className="projects-section">
      {!ready ? (
        <div className="loader">Cargando...</div>
      ) : (
        <>
          <h2 className="margin-mark">{projectsSection.sectionAllProjects}</h2>

          {/* Botones de categorías */}
          <div className="categories margin-mark">
            {projectsSection.categories
              .filter((cat: any) => cat.visualize)
              .map((cat: any, idx: number) => (
                <button
                  key={idx}
                  className={selectedCategory === cat.name ? "active" : ""}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  {cat.name}
                </button>
              ))}
          </div>

          {/* Contenedor de proyectos */}
          <div
            className={`projects-container padding-mark ${visibleCount < 3 ? "is-carousel" : "is-grid"}`} ref={carouselRef} >
            {filteredProjects.map((project: IProject, idx: number) => (
              <Project key={idx} project={project} icons={projectsSection.icons} />
            ))}
          </div>

          {/* Controles solo para carousel */}
          {visibleCount < 3 && filteredProjects.length > 1 && (
            <div className="carousel-controls">
              <button className="prev" onClick={handlePrev}>&lt;</button>
              <button className="next" onClick={handleNext}>&gt;</button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default AllProjects;
