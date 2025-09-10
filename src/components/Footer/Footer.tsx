import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import portfolioData from "../../assets/portfolio.json"; 
import "./footer.scss";

const Footer: React.FC = () => {
  const { language } = useLanguage(); // "EN" o "ES"
  const languageData = portfolioData[
    `${language.toLowerCase()}-language` as keyof typeof portfolioData
  ];

  return (
    <footer className="footer presentation margin-mark ">
      <p className="fixed-border footer-rights">{languageData.footer.copyright}</p>
      <p>{languageData.footer.builtWith}</p>
    </footer>
  );
};

export default Footer;
