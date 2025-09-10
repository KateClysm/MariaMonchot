// import React, { useEffect, useState } from "react";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// import { HiBars3 } from "react-icons/hi2";
// import { IoClose } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
// import "./Nav.scss";

// const Nav: React.FC = () => {
//   const navigate = useNavigate();

//   // Arreglo de objetos que contiene los nombres y áreas de navegación
//   const navLinks = [
//     { name: "ABOUT", area: "#about" },
//     { name: "PROJECTS", area: "#projects" },
//     { name: "EDUCATION", area: "#education" },
//     { name: "TECHNOLOGIES", area: "#technologies" },
//     { name: "CONTACT", area: "#contact" },
//   ];

//   // Maneja el scroll o redireccionamiento a la sección indicada
//   const handleScrollOrRedirection = (area: string) => {
//     const currentPath = window.location.pathname;

//     if (area === "/MariaMonchot/" && currentPath === "/MariaMonchot/") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else if (area === "/MariaMonchot/" && currentPath !== "/MariaMonchot/") {
//       navigate("/MariaMonchot/");
//     } else if (area.startsWith("/") && currentPath === "/MariaMonchot/") {
//       const element = document.getElementById(area.substring(1));
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       navigate("/MariaMonchot/");
//       setTimeout(() => {
//         const element = document.getElementById(area.substring(1));
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 500); // Espera 500ms para asegurarse de que la redirección se complete antes del desplazamiento
//     }
//   };

//   // Maneja el click en los enlaces de navegación
//   const handleNavLinkClick = (area: string, existingOnClick?: () => void) => {
//     if (existingOnClick) {
//       existingOnClick(); // Llama a la función onClick existente si hay alguna
//     }
//     handleScrollOrRedirection(area); // Llama a la función para redirección o desplazamiento
//   };

//   // Obtiene el scrollY y detecta cuando hay cambios
//   const { scrollY } = useScroll();
//   const [hidden, setHidden] = useState(false); // Controla el ocultamiento del nav al hacer scroll

//   // Modifica el estado de 'hidden' en base al scroll
//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = scrollY.getPrevious();
//     if (latest > previous) {
//       setHidden(true);
//     } else {
//       setHidden(false);
//     }
//   });

//   // Controla si el menú está abierto o cerrado
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // Maneja el cierre del menú
//   const handleCloseMenu = () => {
//     setIsMenuOpen(false);
//   };

//   // Evita el desbordamiento cuando se abre el menú en dispositivos móviles
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "visible";
//     }

//     // Limpia el efecto cuando el componente se desmonta
//     return () => {
//       document.body.style.overflow = "visible";
//     };
//   }, [isMenuOpen]);

//   return (
//     <motion.header
//       variants={{
//         visible: { y: 0 },
//         hidden: { y: "-200%" },
//       }}
//       animate={hidden ? "hidden" : "visible"}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//     >

//       <input
//         type="checkbox"
//         id="check"
//         checked={isMenuOpen}
//         onChange={() => setIsMenuOpen(!isMenuOpen)}
//       />
//       <label htmlFor="check" className="icons">
//         <HiBars3 className="bars" id="menu-icon" />
//         <IoClose className="close" id="close-icon" />
//       </label>

//       <div className="nav-container">
//         <nav>
//           {navLinks.map((link, index) => (
//             <a
//               key={index}
//               href={link.area}
//               style={{ "--i": index } as React.CSSProperties}
//               onClick={(event) => {
//                 event.preventDefault();
//                 handleCloseMenu();
//                 handleNavLinkClick(link.area);
//               }}
//             >
//               {link.name}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </motion.header>
//   );
// };

// export default Nav;


// --------------------------
// File: src/components/Nav/Nav.tsx
// --------------------------
import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import navData from "../../assets/portfolio.json"; // -> ver archivo nav.json abajo
import "./Nav.scss";

const BASE_PATH = "/MariaMonchot/";

const Nav: React.FC = () => {
  const navigate = useNavigate();

  // Consumimos el array desde el JSON
  const { links, buttons } = navData;

  // Mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Para esconder/mostrar el header según scroll
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isTop, setIsTop] = useState(true); // para fondo transparente/solido

  // tema y lenguaje: callbacks simples (puedes conectar tu contexto/global state)
  const [lang, setLang] = useState(buttons?.language?.default || "EN");
  const [themeMode, setThemeMode] = useState(
    buttons?.theme?.default || "light"
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

    // si estamos muy cerca del top -> fondo transparente
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
      // navegamos y esperamos breve (está bien un pequeño delay cuando cambiamos de ruta)
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
              setThemeMode(themeMode === "light" ? "dark" : "light")
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