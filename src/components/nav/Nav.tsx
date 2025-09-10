import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import navData from "../../assets/portfolio.json";
import "./Nav.scss";

const BASE_PATH = "/MariaMonchot/";

const Nav: React.FC = () => {
  const navigate = useNavigate();
  const { links, buttons } = navData;

  // Mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Para esconder/mostrar el header según scroll
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isTop, setIsTop] = useState(true); // para fondo transparente/solido

  // tema y lenguaje:
  const [lang, setLang] = useState(buttons?.language?.default || "EN");
  const [themeMode, setThemeMode] = useState(
    buttons?.theme?.default || "LIGHT"
  );

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  // Detectar dirección del scroll y si está en top
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // si baja -> ocultar; si sube -> mostrar
    if (latest > previous + 10) setHidden(true);
    else if (latest < previous - 10) setHidden(false);

    // si estamos muy cerca del top -> fondo transparente <3
    setIsTop(latest < 20);
  });

  // Manejo del click en links: si estamos en la misma ruta hace scroll, sino navega y hace scroll después
  const scrollToSection = (area: string) => {
    const id = area.startsWith("#") ? area.substring(1) : area;
    if (!id) return;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (window.location.pathname !== BASE_PATH) {
      // navegamos y esperamos brevemente
      navigate(BASE_PATH);
      // pequeño timeout para permitir render
      setTimeout(tryScroll, 320);
    } else {
      tryScroll();
    }
  };

  return (
    <motion.nav
      className={`nav ${isTop ? "transparent" : "solid"} ${
        hidden ? "hidden" : ""
      }`}
    >
      <div className="nav-container">
        {/* Botón hamburguesa */}
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <IoClose /> : <HiBars3 />}
        </button>

        {/* Links */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {links?.map((link, index) => (
            <li
              key={index}
              style={{ transitionDelay: `${index * 80}ms` }}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection(link.area);
              }}
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Botones de idioma/tema */}
        <div className="nav-buttons">
          <button onClick={() => setLang(lang === "EN" ? "ES" : "EN")}>
            {lang}
          </button>
          <button
            onClick={() =>
              setThemeMode(themeMode === "LIGHT" ? "DARK" : "LIGHT")
            }
          >
            {themeMode}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;