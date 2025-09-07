import './contact.scss';
import React from 'react';
import portfolioData from "../../assets/portfolio.json";

const Contact: React.FC = () => {
    return (
      <section className="contact">
        <img 
          src="svgs/waves.svg" 
          alt="Background SVG" 
          className="contact-bg" 
        />

        <div className="contact-content margin-mark">
          <h2>CONTACT</h2>
          <p>{portfolioData.contact.text}</p>

          <div className="contact-icons animate-bounce">
            {portfolioData.contact.icons.map((iconObj, index) => {
              
              let href = iconObj.link;

              return (
                <a 
                  key={index} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img
                    src={iconObj.icon}
                    alt={iconObj.alt}
                    className="contact-icon"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    );
};

export default Contact;