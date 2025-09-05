import React from "react";
import "./MP-card.scss";

interface MPCardProps {
  icon: string;       // ruta al icono
  alt: string;        // texto alternativo de la imagen
  label: string;      // texto que aparece debajo
}

const MPCard: React.FC<MPCardProps> = ({ icon, alt, label }) => {
  return (
    <div className="mp-card br-5">
      <img src={icon} alt={alt} className="mp-card-img" />
      <p>{label}</p>
    </div>
  );
};

export default MPCard;