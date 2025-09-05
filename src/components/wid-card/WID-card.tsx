import React from "react";
import "./WID-card.scss";

interface WidCardProps {
  icon: string;       // ruta al icono
  alt: string;        // texto alternativo de la imagen
  label: string;      // texto que aparece debajo
}

const WidCard: React.FC<WidCardProps> = ({ icon, alt, label }) => {
  return (
    <div className="wid-card br-5 holographic-card">
      <img src={icon} alt={alt} className="wid-card-img" />
      <p>{label}</p>
    </div>
  );
};

export default WidCard;