import { useEffect } from "react";
import "./revealUp.scss";

export const useRevealUp = (selector = ".revealUp") => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Mostrar animación al entrar en pantalla
        if (rect.top < windowHeight && rect.bottom > 0) {
          el.classList.add("active");
        }

       if (window.scrollY === 0 && !el.classList.contains("no-reset")) {
        el.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // chequeo inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selector]);
};