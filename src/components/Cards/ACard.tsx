import React from "react";
import "./Cards.scss";

interface ACardProps {
  icon: string;       // ruta al icono
  alt: string;        // texto alternativo de la imagen
  label: string;      // texto que aparece debajo
}

const ACard: React.FC<ACardProps> = ({ icon, alt, label }) => {
  return (
    <div className="card a-card br-5 holographic-card">
      <img src={icon} alt={alt} className="card-img" />
      <p>{label}</p>
    </div>
  );
};

export default ACard;