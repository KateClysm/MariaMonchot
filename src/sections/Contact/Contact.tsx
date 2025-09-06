import './contact.scss';
import React from 'react';
import portfolioData from "../../assets/data/portfolio.json";

const Contact: React.FC = () => {
    return (
      <section className="contact">
        <img src="src/assets/svgs/waves.svg" alt="Background SVG" className="contact-bg" />
        <div className="contact-content margin-mark">
          <h2>CONTACT</h2>
          <p>{portfolioData.contact.text}</p>
          <div className="contact-icons">
            {portfolioData.contact.icons.map((iconObj, index) => (
              <img
                key={index}
                src={iconObj.icon}
                alt={iconObj.alt}
                className="contact-icon"
              />
            ))}
          </div>
        </div>
      </section>
    );
    
};

export default Contact;