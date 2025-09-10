import './contact.scss';
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import portfolioData from "../../assets/portfolio.json";
import { useRevealUp } from '../../animations/RevealUp';
import PageProps from '../../interfaces/IPage';

const Contact: React.FC<PageProps> = ({ id }) => {
    useRevealUp();

    const { language } = useLanguage();

    // Seleccionamos los datos del JSON según el idioma
    const data = language === "EN" ? portfolioData["en-language"] : portfolioData["es-language"];

    return (
      <section className="contact" id={id}>
        <img 
          src="svgs/waves.svg" 
          alt="Background SVG" 
          className="contact-bg" 
        />

        <div className="contact-content margin-mark revealUp">
          <h2>{language === "EN" ? "CONTACT" : "CONTACTO"}</h2>
          <p>{data.contact.text}</p>

          <div className="contact-icons animate-bounce">
            {data.contact.icons.map((iconObj, index) => (
                <a 
                  key={index} 
                  href={iconObj.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img
                    src={iconObj.icon}
                    alt={iconObj.alt}
                    className="contact-icon"
                  />
                </a>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Contact;
