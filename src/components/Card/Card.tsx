import React from "react";
import "./Cards.scss";
import { IconPresentationCard } from "../../interfaces/IIconPresentation";

const Card: React.FC<IconPresentationCard> = ({ icon, plus, alt, label, extraClass = "", variant }) => {
  let cardType = "";
  if (variant === "A") cardType = "a-card";
  if (variant === "B") cardType = "b-card";
  if (variant === "C") cardType = "c-card";

  return (
    <div className={`card br-5 ${extraClass} ${cardType}`}>
      {variant === "C" ? (
        <p className="card-text">
          <span className="card-icon">{icon}</span>
          <span className="card-plus">{plus}</span>
        </p>
      ) : (
        <img src={icon} alt={alt || ""} className="card-img" />
      )}
      <p>{label}</p>
    </div>
  );
};

export default Card;