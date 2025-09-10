import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import navData from "../../assets/portfolio.json";
import { useLanguage } from "../../contexts/LanguageContext";
import "./Nav.scss";

const BASE_PATH = "/MariaMonchot/";

const Nav: React.FC = () => {
  const navigate = useNavigate();

  // Contexto de lenguaje
  const { language, toggleLanguage } = useLanguage();

  // Obtenemos los links y botones según el idioma
  const { links, buttons } = navData[
    language === "EN" ? "en-language" : "es-language"
  ];

  // Mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Para esconder/mostrar el header según scroll
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);

  // Manejo del overflow al abrir/cerrar menú
  React.useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  // Detectar dirección del scroll y si estamos en top
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous + 10) setHidden(true);
    else if (latest < previous - 10) setHidden(false);

    setIsTop(latest < 20);
  });

  // Scroll a sección
  const scrollToSection = (area: string) => {
    const id = area.startsWith("#") ? area.substring(1) : area;
    if (!id) return;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (window.location.pathname !== BASE_PATH) {
      navigate(BASE_PATH);
      setTimeout(tryScroll, 320);
    } else {
      tryScroll();
    }
  };

  return (
    <motion.nav
      className={`nav ${isTop ? "transparent" : "solid"} ${hidden ? "hidden" : ""}`}
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
          {/* ----------------- Aquí va el toggle de idioma ----------------- */}
          <div className="language-toggle" onClick={toggleLanguage}>
            <div
              className="language-slider"
              style={{
                transform: language === "EN" ? "translateX(100%)" : "translateX(0)",
              }}
            />
            <span className={`lang ${language === "ES" ? "active" : ""}`}>ES</span>
            <span className={`lang ${language === "EN" ? "active" : ""}`}>EN</span>
          </div>
          {/* ---------------------------------------------------------------- */}
          
          {/* <button>{buttons.theme.default}</button> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
