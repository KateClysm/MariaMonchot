import React, { useEffect, useRef } from "react";
import "../animations/RevealUp.scss";
interface AboutPresentationProps {
  text: string;
}

const HomePresentation: React.FC<AboutPresentationProps> = ({ text }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      // Pequeño delay para que la animación se note al cargar
      setTimeout(() => {
        el.classList.add("active");
      }, 50);
    }
  }, []);

  return (
    <div ref={ref} className="presentation margin-mark revealUp no-reset">
      <h1>MARIA MONCHOT</h1>
      <h3 className="fixed-border">
        ALL ABOUT <span>DATA</span>
      </h3>
      <p>{text}</p>
    </div>
  );
};

export default HomePresentation;