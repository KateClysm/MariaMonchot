import React from "react";
import "./Cards.scss";

interface BCardProps {
  icon: string;       // ruta al icono
  alt: string;        // texto alternativo de la imagen
  label: string;      // texto que aparece debajo
}

const BCard: React.FC<BCardProps> = ({ icon, alt, label }) => {
  return (
    <div className="card br-5">
      <img src={icon} alt={alt} className="card-img" />
      <p>{label}</p>
    </div>
  );
};

export default BCard;