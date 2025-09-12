import React from "react";
import { useSection } from "../../hooks/useSection";
import "./footer.scss";

const Footer: React.FC = () => {
  // Consumimos la sección 'footer' desde el JSON usando el hook
  const footerSection = useSection("footer");

  return (
    <footer className="footer presentation margin-mark">
      <p className="fixed-border footer-rights">{footerSection.copyright}</p>
      <p>{footerSection.builtWith}</p>
    </footer>
  );
};

export default Footer;